"use strict";
/* ============================================================
   Hora de Ouro — motor do jogo
   Dados: window.ATLS = [{n,t,boss,intro,text,recall,cards,battle}]
   Arte:  window.ART  = {chave: dataURI}
   ============================================================ */

/* ---------- Capítulos (sumário oficial do ATLS 11) ---------- */
const OFFICIAL = {
  1:'Avaliação inicial: exame primário', 2:'Função da equipe de reanimação e comunicação', 3:'x: controle da hemorragia exsanguinante',
  4:'Avaliação e manejo da via aérea', 5:'Avaliação e manejo da respiração e ventilação', 6:'Avaliação da circulação e ressuscitação volêmica',
  7:'Disability: avaliação e manejo neurológico', 8:'Exposição e ameaças ambientais no exame primário', 9:'Lesões térmicas',
  10:'Trauma musculoesquelético', 11:'Trauma no paciente pediátrico', 12:'Trauma no adulto mais velho', 13:'Trauma na paciente gestante',
  14:'Avaliação inicial: exame secundário', 15:'Transferência para o tratamento definitivo', 16:'Sistemas de trauma',
  17:'Triagem e manejo de desastres', 18:'Prevenção de lesões', 19:'Cuidado informado pelo trauma e determinantes sociais da saúde',
  20:'Comunicação de notícias graves no trauma agudo', 21:'Trauma torácico, abdominopélvico e geniturinário', 22:'Trauma penetrante',
  23:'Trauma ocular', 24:'Lesões em zonas de combate e ambientes austeros'
};
const CH = (window.ATLS||[]).slice().sort((a,b)=>a.n-b.n);
CH.forEach(c=>{ if(OFFICIAL[c.n]) c.t=OFFICIAL[c.n]; });

const SECTIONS = [
  {t:'Seção I', color:'var(--red)', s:'Avaliação, manejo e ressuscitação do paciente traumatizado (xABCDE)', ch:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]},
  {t:'Seção II', color:'#b7860b', s:'Sistemas de trauma e cuidado centrado no paciente', ch:[16,17,18,19,20]},
  {t:'Seção III', color:'var(--blue)', s:'Lesões específicas e padrões de lesão: considerações especiais', ch:[21,22,23,24]},
];
const sectionOf = n => SECTIONS.find(s=>s.ch.includes(n));
const FINAL = {n:99, t:'Revisão geral · A Hora de Ouro', boss:{name:'Golden Hour',title:'o Titã da Hora de Ouro',color:'#ffd166'},
  intro:'Cada minuto conta. Vinte e quatro capítulos, uma só hora. Vamos ver se você aguenta.'};

const $ = s => document.querySelector(s);
const el = (tag, attrs={}, html) => { const e=document.createElement(tag); for(const k in attrs) e.setAttribute(k==='class'?'class':k,attrs[k]); if(html!=null) e.innerHTML=html; return e; };
const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; };
const clamp = (v,a,b)=>Math.max(a,Math.min(b,v));
const ease = t => t<0?0:t>1?1:t*t*(3-2*t);
const LETTERS = ['A','B','C','D'];

/* ---------- Arte ---------- */
const IMG = {};
function loadArt(){ const A=window.ART||{}; return Promise.all(Object.keys(A).map(k=>new Promise(res=>{ const im=new Image(); im.onload=im.onerror=()=>res(); im.src=A[k]; IMG[k]=im; }))); }
function bossKey(n){ return 'boss'+(n===99?'99':String(n).padStart(2,'0')); }
const TINTS = {};
function tintOf(k, color){ const id=k+color; if(TINTS[id]) return TINTS[id]; const im=IMG[k]; if(!im||!im.width) return null;
  const c=document.createElement('canvas'); c.width=im.width; c.height=im.height; const x=c.getContext('2d'); x.drawImage(im,0,0);
  x.globalCompositeOperation='source-atop'; x.fillStyle=color; x.fillRect(0,0,c.width,c.height); return TINTS[id]=c; }
/* desenha imagem ancorada pelo centro-base */
function drawAt(ctx, im, cx, by, h, opt={}){ if(!im||!im.width) return; const s=h/im.height; const w=im.width*s*(opt.sx||1), hh=h*(opt.sy||1);
  ctx.save(); ctx.globalAlpha=opt.a==null?1:clamp(opt.a,0,1); ctx.translate(cx,by); if(opt.rot) ctx.rotate(opt.rot);
  ctx.drawImage(im, -w/2, -hh, w, hh); ctx.restore(); }

/* ---------- Salvamento ---------- */
const KEY='horadeouro_v3';
const DEF={hero:null, seenIntro:false, ch:{}, set:{music:false,sfx:true,vol:.5,speed:2,lock:false,fx:true,bossTime:60}, best:{sim:0}, last:1,
  inv:{item:'kit', skin:{elida:'padrao',humberto:'padrao'}}, seen:{}, stats:{maxCombo:0, flawless:false}};
let S = load();
function load(){ try{ const r=JSON.parse(localStorage.getItem(KEY)||'null'); if(r){ const d=JSON.parse(JSON.stringify(DEF)); return Object.assign(d,r,{set:Object.assign(d.set,r.set||{}),inv:Object.assign(d.inv,r.inv||{}),stats:Object.assign(d.stats,r.stats||{})}); } }catch(e){} return JSON.parse(JSON.stringify(DEF)); }
function save(){ try{ localStorage.setItem(KEY,JSON.stringify(S)); }catch(e){} }
function P(n){ if(!S.ch[n]) S.ch[n]={rc:{}, fc:{}, boss:false, bossBest:0}; return S.ch[n]; }
function chap(n){ return n===99?FINAL:CH.find(c=>c.n===n); }
function recallPct(c){ if(hasGuidedStudy(c.n)) return studyScore(c.n); const p=P(c.n); const k=Object.values(p.rc).filter(v=>v===1).length; return c.recall.length?k/c.recall.length:0; }
function cardsDone(c){ const p=P(c.n); return c.cards.filter((_,i)=>(p.fc[i]||0)>=3).length; }
function stars(c){ let s=0; if(recallPct(c)>=.75) s++; if(cardsDone(c)===c.cards.length) s++; if(P(c.n).boss) s++; return s; }
function unlocked(n){ if(!S.set.lock) return true; if(n===99) return CH.every(c=>P(c.n).boss); const i=CH.findIndex(c=>c.n===n); return i<=0 || P(CH[i-1].n).boss; }
const bossesWon = () => CH.filter(c=>P(c.n).boss).length;
const decksDone = () => CH.filter(c=>cardsDone(c)===c.cards.length).length;
const totalStars = () => CH.reduce((a,c)=>a+stars(c),0);
const sectionDone = i => SECTIONS[i].ch.every(n=>P(n).boss);
function rankName(){ const b=bossesWon(); if(P(99).boss&&b===CH.length) return 'Chefe do Trauma'; return b>=20?'Preceptor':b>=15?'R3':b>=10?'R2':b>=5?'R1':'Interno'; }

/* ---------- Recompensas ---------- */
const bossName = n => (chap(n)&&chap(n).boss.name)||'';
const ITEMS = [
  {id:'kit', name:'Kit de Trauma', img:'item_kit', fx:'xabcde', fxName:'Sequência xABCDE', perk:'Sem vantagem extra: o clássico de todo plantão.', req:()=> 'Equipamento inicial', ok:()=>true},
  {id:'tq', name:'Torniquete Tático', img:'item_tq', fx:'tq', fxName:'Torniquete Implacável', perk:'O primeiro erro de cada luta não custa vida: o sangramento fica controlado.', req:()=>`Vença ${bossName(3)} (Cap. 3)`, ok:()=>P(3).boss},
  {id:'def', name:'Desfibrilador', img:'item_def', fx:'shock', fxName:'Choque de 200 J', perk:'Uma vez por luta, interrompe o fatality do chefão e você volta com 1 vida.', req:()=>'Vença 5 chefões', ok:()=>bossesWon()>=5},
  {id:'scalpel', name:'Bisturi de Plasma', img:'item_scalpel', fx:'slash', fxName:'Incisão de Plasma', perk:'+4 de dano em cada acerto.', req:()=>'Vença 10 chefões', ok:()=>bossesWon()>=10},
  {id:'heli', name:'Helicóptero de Resgate', img:'item_heli', fx:'heli', fxName:'Transferência Definitiva', perk:'Golpe crítico já a partir do combo ×2.', req:()=>`Vença ${bossName(15)} (Cap. 15)`, ok:()=>P(15).boss},
  {id:'steth', name:'Estetoscópio de Ouro', img:'item_steth', legend:true, fx:'gold', fxName:'Ausculta Dourada', perk:'+1 vida em todas as lutas.', req:()=>'Derrote a Hora de Ouro (chefão final)', ok:()=>P(99).boss},
];
const SKINS = [
  {id:'padrao', name:'Uniforme de plantão', desc:'O visual de sempre.', req:()=>'Inicial', ok:()=>true},
  {id:'scrubs', name:'Pijama Cirúrgico', desc:'Gorro, máscara e pijama de centro cirúrgico.', req:()=>'Domine 5 baralhos de flashcards', ok:()=>decksDone()>=5},
  {id:'rescue', name:'Uniforme de Resgate', desc:'Macacão de atendimento pré-hospitalar com faixas refletivas.', req:()=>'Faça 80% ou mais no simulado', ok:()=>(S.best.sim||0)>=80},
  {id:'gold', name:'Jaleco de Ouro', legend:true, desc:'Lendário. Brilha mais que o foco cirúrgico.', req:()=>'Junte 48 estrelas', ok:()=>totalStars()>=48},
];
const MEDALS = [
  {id:'first', icon:'🩺', name:'Primeiro plantão', desc:'Vença seu primeiro chefão', ok:()=>bossesWon()>=1},
  {id:'hemo', icon:'🩸', name:'Hemostasia', desc:'Vença o chefão do Cap. 3', ok:()=>P(3).boss},
  {id:'five', icon:'⚡', name:'Cinco plantões', desc:'Vença 5 chefões', ok:()=>bossesWon()>=5},
  {id:'ten', icon:'🥼', name:'Residente', desc:'Vença 10 chefões', ok:()=>bossesWon()>=10},
  {id:'transfer', icon:'🚁', name:'Transferência segura', desc:'Vença o chefão do Cap. 15', ok:()=>P(15).boss},
  {id:'flawless', icon:'🛡️', name:'Plantão impecável', desc:'Vença um chefão sem perder vida', ok:()=>S.stats.flawless},
  {id:'combo8', icon:'🔥', name:'Combo cirúrgico', desc:'Faça um combo ×8', ok:()=>S.stats.maxCombo>=8},
  {id:'recall', icon:'🧠', name:'Prontuário perfeito', desc:'Acerte 100% do Active Recall de um capítulo', ok:()=>CH.some(c=>recallPct(c)===1)},
  {id:'decks5', icon:'🗂️', name:'Memória de elefante', desc:'Domine 5 baralhos de flashcards', ok:()=>decksDone()>=5},
  {id:'sim80', icon:'📋', name:'Aprovado', desc:'Faça 80% ou mais no simulado', ok:()=>(S.best.sim||0)>=80},
  {id:'sec1', icon:'🔴', name:'Seção I completa', desc:'Vença os 15 chefões da Seção I', ok:()=>sectionDone(0)},
  {id:'sec2', icon:'🟡', name:'Seção II completa', desc:'Vença os 5 chefões da Seção II', ok:()=>sectionDone(1)},
  {id:'sec3', icon:'🔵', name:'Seção III completa', desc:'Vença os 4 chefões da Seção III', ok:()=>sectionDone(2)},
  {id:'stars48', icon:'⭐', name:'Constelação', desc:'Junte 48 estrelas', ok:()=>totalStars()>=48},
  {id:'golden', icon:'🏆', name:'Hora de Ouro', desc:'Derrote o chefão final', ok:()=>P(99).boss},
  {id:'skills', icon:'🩻', name:'Mãos de cirurgião', desc:'Conclua os quizzes de todos os itens da Sala de Habilidades', ok:()=>(window.ATLS_SKILLS||[]).length>0&&(window.ATLS_SKILLS||[]).every(it=>it.quiz.every((_,i)=>S.skills&&S.skills[it.id]&&S.skills[it.id].answers[i]!=null))},
];
const equippedItem = () => ITEMS.find(i=>i.id===S.inv.item&&i.ok()) || ITEMS[0];
const skinOf = id => { const s=SKINS.find(k=>k.id===(S.inv.skin[id]||'padrao')); return s&&s.ok()?s.id:'padrao'; };

/* fila de prêmios recém-desbloqueados */
let rewardQueue=[];
function markDefaultsSeen(){ S.seen['item:kit']=1; S.seen['skin:padrao']=1; }
function checkRewards(){ markDefaultsSeen(); const fresh=[];
  for(const it of ITEMS) if(it.ok() && !S.seen['item:'+it.id]){ S.seen['item:'+it.id]=1; fresh.push({kind:'item',obj:it}); }
  for(const sk of SKINS) if(sk.ok() && !S.seen['skin:'+sk.id]){ S.seen['skin:'+sk.id]=1; fresh.push({kind:'skin',obj:sk}); }
  for(const m of MEDALS) if(m.ok() && !S.seen['medal:'+m.id]){ S.seen['medal:'+m.id]=1; fresh.push({kind:'medal',obj:m}); }
  if(fresh.length){ save(); rewardQueue.push(...fresh); if($('#reward').hidden) showNextReward(); } }
function showNextReward(){ const r=rewardQueue.shift(); if(!r){ $('#reward').hidden=true; return; } const o=r.obj, img=$('#rw-img'), eq=$('#rw-equip');
  if(r.kind==='item'){ img.src=window.ART[o.img]; img.hidden=false; $('#rw-h').textContent=o.name; $('#rw-desc').innerHTML=`${o.perk}<br><b>Fatality:</b> ${o.fxName}.`; eq.hidden=false; eq.onclick=()=>{ S.inv.item=o.id; save(); SFX.ok(); showNextReward(); }; }
  else if(r.kind==='skin'){ img.src=window.ART[`${hero().key}_${o.id}_idle`]; img.hidden=false; $('#rw-h').textContent=`Skin: ${o.name}`; $('#rw-desc').textContent=`${o.desc} Liberada para Élida e Humberto.`; eq.hidden=false; eq.onclick=()=>{ S.inv.skin[S.hero||'elida']=o.id; save(); SFX.ok(); showNextReward(); }; }
  else { img.hidden=true; $('#rw-h').textContent=`${o.icon} Medalha: ${o.name}`; $('#rw-desc').textContent=o.desc; eq.hidden=true; }
  $('#reward').hidden=false; SFX.win(); $('#rw-close').focus(); }
$('#rw-close').onclick=()=>{ SFX.blip(); showNextReward(); if(curScreen==='s-map') goMap(); if(curScreen==='s-locker') goLocker(); };

/* ---------- Som (WebAudio) ---------- */
let AC=null, master=null, musicTimer=null;
function audio(){ if(!AC){ try{ AC=new (window.AudioContext||window.webkitAudioContext)(); master=AC.createGain(); master.connect(AC.destination);}catch(e){return null;} } master.gain.value=S.set.vol; if(AC.state==='suspended') AC.resume(); return AC; }
function tone(f,d=.1,type='square',v=.15,when=0){ const a=audio(); if(!a) return; const o=a.createOscillator(), g=a.createGain(); o.type=type; o.frequency.value=f; const t=a.currentTime+when; g.gain.setValueAtTime(v,t); g.gain.exponentialRampToValueAtTime(.0001,t+d); o.connect(g); g.connect(master); o.start(t); o.stop(t+d+.02); }
const SFX={
  blip(){ if(S.set.sfx) tone(740,.05,'sine',.12); },
  ok(){ if(!S.set.sfx) return; tone(660,.09,'sine',.18); tone(880,.14,'sine',.18,.09); },
  bad(){ if(!S.set.sfx) return; tone(300,.12,'triangle',.18); tone(200,.25,'triangle',.18,.1); },
  hit(){ if(!S.set.sfx) return; tone(1200,.05,'square',.08); tone(140,.16,'sawtooth',.18,.03); },
  zap(){ if(!S.set.sfx) return; for(let i=0;i<6;i++) tone(200+Math.random()*1400,.05,'sawtooth',.1,i*.03); },
  boom(){ if(!S.set.sfx) return; tone(90,.4,'sawtooth',.25); tone(55,.6,'triangle',.25,.05); },
  beep(){ if(S.set.sfx) tone(1000,.08,'sine',.15); },
  win(){ if(!S.set.sfx) return; [523,659,784,1047].forEach((f,i)=>tone(f,.16,'sine',.16,i*.11)); },
  lose(){ if(!S.set.sfx) return; [440,392,349,262].forEach((f,i)=>tone(f,.26,'triangle',.18,i*.2)); },
  flip(){ if(S.set.sfx) tone(980,.04,'sine',.1); }
};
const SONG=[262,330,392,330,294,349,440,349,262,330,392,523,494,392,330,294];
function musicOn(){ musicOff(); if(!S.set.music) return; let i=0; const step=()=>{ const f=SONG[i%SONG.length]; tone(f,.2,'sine',.045); if(i%4===0) tone(f/2,.35,'triangle',.03); i++; }; step(); musicTimer=setInterval(step,260); }
function musicOff(){ if(musicTimer){clearInterval(musicTimer); musicTimer=null;} }

/* ---------- Telas e laço de animação ---------- */
let curScreen='s-title', rafs={};
function show(id){ stopTimer(); document.querySelectorAll('.screen').forEach(s=>s.hidden=s.id!==id); curScreen=id; window.scrollTo({top:0}); for(const k in rafs) if(!id.includes(k)) stop(k); }
function toast(msg,ms=1800){ const t=$('#toast'); t.textContent=msg; t.hidden=false; clearTimeout(toast._t); toast._t=setTimeout(()=>t.hidden=true,ms); }
function loop(name, fn){ cancelAnimationFrame(rafs[name]); const t0=performance.now(); let last=t0; const f=t=>{ const dt=Math.min(.05,(t-last)/1000); last=t; fn((t-t0)/1000,dt); rafs[name]=requestAnimationFrame(f); }; rafs[name]=requestAnimationFrame(f); }
function stop(name){ cancelAnimationFrame(rafs[name]); delete rafs[name]; }

/* ---------- Personagens ---------- */
const HEROES = {
  elida:{ name:'Élida', origin:'Medicina · UEA · Manaus/AM', story:'Estuda com o estetoscópio no pescoço e o ATLS na ponta da língua. Não esquece uma dose de ácido tranexâmico.', stats:[.92,.75,.8], hearts:4, dmg:14, perk:'Vantagem: 4 vidas nos chefões.', key:'elida' },
  humberto:{ name:'Humberto', origin:'Dev Full Stack Sênior · São Luís → Manaus', story:'Trocou o debugger pelo estetoscópio por uma noite. Depura o xABCDE como quem depura código: na ordem, sem pular etapa.', stats:[.7,.95,.7], hearts:3, dmg:18, perk:'Vantagem: dano maior em cada acerto.', key:'humberto' }
};
const hero = () => HEROES[S.hero] || HEROES.elida;
function frameKey(h,f,skin){ const s=skin||skinOf(h.key); return s==='padrao'?`${h.key}_${f}`:`${h.key}_${s}_${f}`; }
const frame = (h,f) => IMG[frameKey(h,f)];

/* ---------- Partículas ---------- */
let PARTS=[];
function burst(x,y,color,n=18,spd=260,life=.7,size=6,shape='sq'){ for(let i=0;i<n;i++){ const a=Math.random()*Math.PI*2, v=spd*(.3+Math.random()*.7); PARTS.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-80,life,max:life,color,size:size*(.5+Math.random()),shape}); } }
function drawParts(ctx,dt){ PARTS=PARTS.filter(p=>(p.life-=dt)>0); for(const p of PARTS){ p.x+=p.vx*dt; p.y+=p.vy*dt; p.vy+=420*dt; ctx.globalAlpha=Math.max(0,p.life/p.max); ctx.fillStyle=p.color; const s=Math.round(p.size);
  if(p.shape==='coin'){ ctx.beginPath(); ctx.ellipse(p.x,p.y,s,s*Math.abs(Math.sin(p.life*12))+1,0,0,7); ctx.fill(); } else ctx.fillRect(Math.round(p.x)-s/2,Math.round(p.y)-s/2,s,s); } ctx.globalAlpha=1; }

/* ---------- Título ---------- */
function drawTitle(t){ const c=$('#cv-title'), ctx=c.getContext('2d');
  const z=1.05+Math.sin(t*.12)*.025, w=960*z, h=540*z; ctx.drawImage(IMG.title,(960-w)/2+Math.sin(t*.08)*14,(540-h)/2,w,h);
  ctx.save(); ctx.globalCompositeOperation='lighter'; for(let i=0;i<5;i++){ const a=.04+.03*Math.sin(t*.7+i); const x=470+Math.sin(t*.2+i)*30; ctx.fillStyle=`rgba(255,200,120,${a})`; ctx.beginPath(); ctx.moveTo(x,180); ctx.lineTo(x-260+i*120,540); ctx.lineTo(x-200+i*120,540); ctx.fill(); } ctx.restore();
}
function goTitle(){ show('s-title'); loop('title',drawTitle); $('#btn-press').hidden=false; ['#btn-new','#btn-cont','#btn-set'].forEach(s=>$(s).hidden=true); }
$('#btn-press').onclick=()=>{ audio(); SFX.ok(); musicOn(); $('#btn-press').hidden=true; $('#btn-new').hidden=false; $('#btn-set').hidden=false; $('#btn-cont').hidden=!S.hero; ($('#btn-cont').hidden?$('#btn-new'):$('#btn-cont')).focus(); };
$('#btn-new').onclick=()=>{ SFX.blip(); goSelect(); };
$('#btn-cont').onclick=()=>{ SFX.blip(); goMap(); };
$('#btn-set').onclick=openSettings;

/* ---------- Seleção ---------- */
let pick='elida';
function goSelect(){ show('s-select'); pick=S.hero||'elida'; const slots=$('#slots'); slots.innerHTML='';
  for(const id of Object.keys(HEROES)){ const h=HEROES[id]; const b=el('button',{class:'slot','data-hero':id,'aria-pressed':String(id===pick)});
    const im=el('img',{alt:''}); im.src=window.ART[h.key+'_face']; b.append(im, el('span',{},h.name));
    b.onclick=()=>{ pick=id; SFX.blip(); slots.querySelectorAll('.slot').forEach(s=>s.setAttribute('aria-pressed',String(s.dataset.hero===id))); detail(); };
    slots.append(b); }
  detail(); }
function detail(){ const h=HEROES[pick]; $('#d-name').textContent=h.name; $('#d-origin').textContent=h.origin; $('#d-story').textContent=h.story; $('#d-perk').textContent=h.perk;
  h.stats.forEach((v,i)=>$('#st'+i).style.width=(v*100)+'%'); $('#btn-pick').textContent='Jogar com '+h.name; $('#d-sprite').src=window.ART[frameKey(h,'idle',skinOf(pick))]; }
$('#sel-back').onclick=()=>{ SFX.blip(); goTitle(); };
$('#btn-pick').onclick=()=>{ S.hero=pick; save(); SFX.ok(); if(!S.seenIntro) playCut(INTRO, ()=>{ S.seenIntro=true; save(); goMap(); }); else goMap(); };

/* ---------- Cutscene ---------- */
const INTRO=[
  {who:'Rádio do pré-hospitalar', text:'Central para o pronto-socorro: múltiplas vítimas a caminho. Uma com sangramento ativo na coxa. Chegada em quatro minutos.'},
  {who:'Dra. Aurora', face:'mentor', text:'Que bom que você chegou. Sou a Dra. Aurora, coordenadora do trauma. O dia vai ser longo.'},
  {who:'Dra. Aurora', face:'mentor', text:'O ATLS mudou. Agora é xABCDE: o x de hemorragia exsanguinante vem antes até da via aérea.'},
  {who:'Dra. Aurora', face:'mentor', text:'O quadro de leitos segue as três seções do manual. Em cada leito: estude o prontuário, fixe os cartões e derrote o chefão.'},
  {who:'Dra. Aurora', face:'mentor', text:'Cada vitória enche o seu armário: torniquete, desfibrilador, skins… e, para quem chegar ao fim, o Estetoscópio de Ouro.'},
  {who:'HERO', face:'hero', text:'Pode deixar, Dra. Aurora. xABCDE na ponta da língua. Bora!'}
];
let cut=null;
function playCut(lines, done){ show('s-cut'); cut={lines,i:0,done,typing:false,timer:null}; loop('cut',drawCut); nextLine(); }
function drawCut(t){ const c=$('#cv-cut'),ctx=c.getContext('2d'); const im=IMG.title;
  const sx=im.width*.38, sw=im.width*.62, sh=sw*400/960; ctx.drawImage(im,sx,im.height-sh,sw,sh,0,0,960,400);
  const g=ctx.createLinearGradient(0,220,0,400); g.addColorStop(0,'rgba(0,0,0,0)'); g.addColorStop(1,'rgba(0,0,0,.55)'); ctx.fillStyle=g; ctx.fillRect(0,220,960,180);
  const h=hero(), speaking=cut&&cut.lines[cut.i]?cut.lines[cut.i].face:null;
  ctx.fillStyle='rgba(0,0,0,.35)'; ctx.beginPath(); ctx.ellipse(300,388,70,12,0,0,7); ctx.fill(); ctx.beginPath(); ctx.ellipse(640,388,60,12,0,0,7); ctx.fill();
  drawAt(ctx, frame(h,'idle'), 300, 390, 300, {sy:1+Math.sin(t*3)*.008, a: speaking==='mentor'?.8:1});
  drawAt(ctx, IMG.mentor_body, 640, 390, 300, {sy:1+Math.sin(t*2.6+1)*.008, a: speaking==='hero'?.8:1}); }
function nextLine(){ const L=cut.lines[cut.i]; if(!L){ stop('cut'); const d=cut.done; cut=null; d(); return; }
  const h=hero(); $('#d-who').textContent=L.who==='HERO'?h.name:L.who; const f=$('#d-face2');
  if(L.face==='mentor'){ f.src=window.ART.mentor_face; f.hidden=false; } else if(L.face==='hero'){ f.src=window.ART[h.key+'_face']; f.hidden=false; } else f.hidden=true;
  const tx=$('#d-text'); tx.textContent=''; $('#d-next').hidden=true; cut.typing=true; let k=0; const sp=+S.set.speed;
  clearInterval(cut.timer); if(sp>=99){ tx.textContent=L.text; cut.typing=false; $('#d-next').hidden=false; return; }
  cut.timer=setInterval(()=>{ k+=sp; tx.textContent=L.text.slice(0,k); if(k%6<sp && S.set.sfx) tone(520+Math.random()*80,.02,'sine',.04); if(k>=L.text.length){ clearInterval(cut.timer); cut.typing=false; $('#d-next').hidden=false; } },28); }
function advance(){ if(!cut) return; const L=cut.lines[cut.i]; if(cut.typing){ clearInterval(cut.timer); $('#d-text').textContent=L.text; cut.typing=false; $('#d-next').hidden=false; return; } cut.i++; SFX.blip(); nextLine(); }
$('#dialog').onclick=advance; $('#cut-next').onclick=advance; $('#cut-skip').onclick=()=>{ if(!cut) return; clearInterval(cut.timer); cut.i=cut.lines.length; nextLine(); };

/* ---------- Quadro de leitos (mapa) ---------- */
let sel=1;
function goMap(){ show('s-map'); if(!S.hero){ S.hero='elida'; save(); }
  const tot=CH.length, it=equippedItem();
  $('#map-hud').innerHTML=`<span class="rank">${rankName()}</span><span class="chip gold">★ ${totalStars()} de ${tot*3}</span><span class="chip ok">Chefões ${bossesWon()} de ${tot}</span><span class="chip">Medalhas ${MEDALS.filter(m=>m.ok()).length} de ${MEDALS.length}</span><span class="chip">Equipado: ${it.name}</span><span class="chip">Melhor simulado: ${S.best.sim||0}%</span>`;
  const b=$('#board'); b.innerHTML='';
  for(const T of SECTIONS){ b.append(el('h3',{},`<span class="sec" style="background:${T.color}">${T.t}</span><small>${T.s}</small>`)); const g=el('div',{class:'beds'});
    for(const n of T.ch){ const c=chap(n); if(c) g.append(bedBtn(c,T.color)); } b.append(g); }
  b.append(el('h3',{},`<span class="sec" style="background:var(--gold-d)">Final</span><small>todos os capítulos</small>`)); const g=el('div',{class:'beds'}); g.append(bedBtn(FINAL,'var(--gold)',true)); b.append(g);
  sel = chap(S.last)?S.last:(CH[0]?CH[0].n:1); renderDock(); }
function bedBtn(c,color,final){ const lock=!unlocked(c.n); const s=final?(P(99).boss?3:0):stars(c);
  const b=el('button',{class:'bed'+(final?' final':'')+(lock?' locked':''),'data-n':c.n,'aria-current':String(c.n===S.last),style:`--tri:${color}`});
  const ico=el('span',{class:'ico'}); const im=el('img',{alt:''}); im.src=window.ART[bossKey(c.n)]; ico.append(im);
  b.append(ico, el('span',{}, `<span class="lbl">${final?'LEITO FINAL':'LEITO '+String(c.n).padStart(2,'0')}</span><span class="ttl">${c.t}</span><span class="vitals" aria-label="${s} de 3 estrelas">${[0,1,2].map(i=>`<i class="${i<s?'on':''}"></i>`).join('')}</span>`));
  b.onclick=()=>{ SFX.blip(); if(lock){ toast('Derrote o chefão anterior para liberar'); return; } sel=c.n; S.last=c.n; save(); document.querySelectorAll('.bed').forEach(e=>e.setAttribute('aria-current',String(+e.dataset.n===c.n))); renderDock(); if(innerWidth<=860) $('#dock').scrollIntoView({behavior:'smooth',block:'start'}); };
  return b; }
function renderDock(){ const c=chap(sel), d=$('#dock'); d.innerHTML=''; if(!c) return;
  const cv=el('canvas',{width:640,height:300}); const x=cv.getContext('2d');
  x.drawImage(IMG.arena,0,60,960,450,0,0,640,300); x.fillStyle='rgba(0,0,0,.4)'; x.beginPath(); x.ellipse(170,282,55,9,0,0,7); x.fill(); x.beginPath(); x.ellipse(460,282,85,11,0,0,7); x.fill();
  drawAt(x, frame(hero(),'idle'), 170, 284, 210); drawAt(x, IMG[bossKey(c.n)], 460, 284, c.n===99?250:220);
  d.append(el('span',{class:'eyebrow'}, c.n===99?'Chefão final':'Capítulo '+c.n), el('h3',{},c.t), cv, el('p',{class:'muted',style:'font-size:.9rem'}, `Chefão: <b style="color:${c.boss.color}">${c.boss.name}</b>, ${c.boss.title}`));
  if(c.n===99){ const all=CH.reduce((a,k)=>a+k.battle.length,0);
    d.append(el('p',{style:'font-size:.9rem'},`20 questões sorteadas entre as ${all} dos 24 capítulos. Vencer libera o Estetoscópio de Ouro.`));
    const b=el('button',{class:'btn-red phase'},'<span>Enfrentar a Hora de Ouro</span><span>⚔</span>'); b.onclick=()=>startBattle(99); d.append(b); return; }
  const p=P(c.n), rp=Math.round(recallPct(c)*100), cd=cardsDone(c);
  const ph=(label,sub,done,fn,cls='')=>{ const b=el('button',{class:'phase '+cls},`<span>${label}<small>${sub}</small></span><span class="chip ${done?'ok':''}">${done?'✓':'·'}</span>`); b.onclick=fn; d.append(b); };
  ph(hasGuidedStudy(c.n)?'Fase 1 · Prontuário guiado':'Fase 1 · Active Recall', hasGuidedStudy(c.n)?`${c.text.length} seções + caso + passagem · ${rp}%`:`${c.text.length} seções · ${rp}% de acertos`, rp>=75, ()=>startRecall(c.n));
  ph('Fase 2 · Flashcards', `${cd} de ${c.cards.length} cartões dominados`, cd===c.cards.length, ()=>startCards(c.n));
  ph('Fase 3 · Chefão', p.boss?`Derrotado · melhor resultado: ${p.bossBest} ♥ restantes`:`${c.battle.length} questões · ${c.boss.name}`, p.boss, ()=>startBattle(c.n), 'btn-red'); }
$('#map-title').onclick=()=>{ SFX.blip(); goTitle(); };
$('#map-set').onclick=openSettings;
$('#map-sim').onclick=()=>startQuiz();
$('#map-locker').onclick=()=>{ SFX.blip(); goLocker(); };

/* ---------- Armário ---------- */
function goLocker(){ show('s-locker'); const h=hero(); $('#lk-hero').textContent=h.name;
  const items=$('#lk-items'); items.innerHTML='';
  for(const it of ITEMS){ const ok=it.ok(), eq=S.inv.item===it.id&&ok;
    const card=el('div',{class:'loot'+(ok?'':' locked')+(eq?' equipped':'')+(it.legend?' legend':'')});
    card.innerHTML=`${eq?'<span class="chip gold tag-eq">Equipado</span>':''}<div class="pic"><img alt="" src="${window.ART[it.img]}"></div><span class="name">${it.name}</span><span class="desc">${it.perk}<br><b>Fatality:</b> ${it.fxName}</span><span class="req">${ok?'Desbloqueado':'🔒 '+it.req()}</span>`;
    if(ok&&!eq){ const b=el('button',{class:'btn-sm btn-primary'},'Equipar'); b.onclick=()=>{ S.inv.item=it.id; save(); SFX.ok(); goLocker(); }; card.append(b); }
    items.append(card); }
  const skins=$('#lk-skins'); skins.innerHTML='';
  for(const sk of SKINS){ const ok=sk.ok(), eq=skinOf(S.hero)===sk.id;
    const card=el('div',{class:'loot'+(ok?'':' locked')+(eq?' equipped':'')+(sk.legend?' legend':'')});
    card.innerHTML=`${eq?'<span class="chip gold tag-eq">Usando</span>':''}<div class="pic"><img alt="" src="${window.ART[frameKey(h,'idle',sk.id)]}"></div><span class="name">${sk.name}</span><span class="desc">${sk.desc}</span><span class="req">${ok?'Desbloqueada':'🔒 '+sk.req()}</span>`;
    if(ok&&!eq){ const b=el('button',{class:'btn-sm btn-primary'},'Vestir'); b.onclick=()=>{ S.inv.skin[S.hero]=sk.id; save(); SFX.ok(); goLocker(); }; card.append(b); }
    skins.append(card); }
  const got=MEDALS.filter(m=>m.ok()).length; $('#lk-count').textContent=`${got} de ${MEDALS.length} conquistadas.`;
  $('#lk-medals').innerHTML=MEDALS.map(m=>`<div class="medal ${m.ok()?'got':''}"><span class="m" aria-hidden="true">${m.ok()?m.icon:'🔒'}</span><span><b>${m.name}</b><small>${m.desc}</small></span></div>`).join(''); }
$('#lk-back').onclick=()=>{ SFX.blip(); goMap(); };

/* ---------- Fase 1: Active Recall ---------- */
let RC=null;
function startRecall(n){ if(hasGuidedStudy(n)) return startStudy(n); const c=chap(n); RC={c}; show('s-recall'); $('#rc-h').textContent=c.t; $('#rc-tag').textContent=`Capítulo ${c.n} · Fase 1 · Active Recall`;
  const ch=$('#chart'); ch.classList.remove('hidden-text'); ch.scrollTop=0; $('#rc-hide').textContent='Esconder texto';
  ch.innerHTML=c.text.map(s=>`<section id="sec-${s.id}"><h4>${s.t}</h4>${s.b}</section>`).join('');
  const ql=$('#qlist'); ql.innerHTML=''; const p=P(n);
  c.recall.forEach((r,i)=>ql.append(recallCard(c,r,i,p))); rcScore(); }
function recallCard(c,r,i,p){ const st=p.rc[i]; const card=el('div',{class:'qcard'+(st===1?' right':st===0?' wrong':'')});
  card.append(el('p',{},`<b>${i+1}.</b> ${r.q}`), el('textarea',{'aria-label':'Sua resposta para a pergunta '+(i+1),placeholder:'Responda com suas palavras…'}));
  const ans=el('div',{class:'ans'},`<b>Gabarito:</b> ${r.a}`); ans.hidden=st==null; card.append(ans);
  const row=el('div',{class:'row'}); const bShow=el('button',{class:'btn-sm'},'Ver gabarito'), bFind=el('button',{class:'btn-sm btn-ghost'},'Achar no texto'), bOk=el('button',{class:'btn-sm btn-green'},'Acertei'), bNo=el('button',{class:'btn-sm btn-red'},'Errei');
  bOk.hidden=bNo.hidden=st==null;
  bShow.onclick=()=>{ SFX.flip(); ans.hidden=false; bOk.hidden=bNo.hidden=false; };
  bFind.onclick=()=>findInChart(r.s);
  const mark=v=>{ p.rc[i]=v; save(); card.className='qcard '+(v?'right':'wrong'); v?SFX.ok():SFX.bad(); rcScore(); checkRewards(); };
  bOk.onclick=()=>mark(1); bNo.onclick=()=>mark(0);
  row.append(bShow,bFind,bOk,bNo); card.append(row); return card; }
function findInChart(id){ const ch=$('#chart'), s=document.getElementById('sec-'+id); if(!s) return; ch.classList.remove('hidden-text'); $('#rc-hide').textContent='Esconder texto';
  ch.scrollTo({top:s.offsetTop-40,behavior:'smooth'}); if(innerWidth<=860) ch.scrollIntoView({behavior:'smooth'}); s.classList.add('flash'); setTimeout(()=>s.classList.remove('flash'),1400); }
function rcScore(){ const c=RC.c, p=P(c.n); const ans=Object.keys(p.rc).length, ok=Object.values(p.rc).filter(v=>v===1).length;
  $('#rc-score').textContent=`${ok} de ${c.recall.length} certas · ${ans} respondidas`; $('#rc-bar').style.width=(ok/c.recall.length*100)+'%';
  if(ans===c.recall.length && ok/c.recall.length>=.75 && !RC.toasted){ RC.toasted=true; toast('★ Fase 1 concluída!'); } }
$('#rc-hide').onclick=()=>{ const b=$('#chart'); b.classList.toggle('hidden-text'); $('#rc-hide').textContent=b.classList.contains('hidden-text')?'Mostrar texto':'Esconder texto'; };
$('#rc-back').onclick=()=>{ SFX.blip(); goMap(); };


/* ---------- Fase 1 guiada: prontuário completo → com suas palavras → caso → passagem de plantão ---------- */
const STUDY = window.ATLS_STUDY || {};
const hasGuidedStudy = n => !!STUDY[n];
let SD=null;

function studyProgress(n){ const p=P(n); if(!p.study||p.study.v!==2) p.study={v:2,read:false,keys:{},casePicks:[],handoff:null,finished:false}; return p.study; }
function recallTopics(n){ const c=chap(n), checks=STUDY[n].checks; return c.text.filter(s=>checks[s.id]); }
function studyScore(n){ const st=studyProgress(n), data=STUDY[n]; let ok=0,tot=0;
  for(const id in data.checks){ tot+=data.checks[id].keys.length; ok+=(st.keys[id]||[]).filter(Boolean).length; }
  const steps=data.case.steps; tot+=steps.length; ok+=st.casePicks.filter((pick,i)=>pick!=null&&steps[i].options[pick].ok).length;
  tot+=data.handoff.keys.length; ok+=(st.handoff||[]).filter(Boolean).length;
  return tot?ok/tot:0; }
const STUDY_STEPS = [
  {kind:'chart', label:'1. Prontuário'},
  {kind:'recall', label:'2. Com suas palavras'},
  {kind:'case', label:'3. Caso à beira do leito'},
  {kind:'handoff', label:'4. Passagem de plantão'}
];
function stepDone(step){ const st=studyProgress(SD.n);
  if(step.kind==='chart') return st.read;
  if(step.kind==='recall') return recallTopics(SD.n).every(s=>st.keys[s.id]);
  if(step.kind==='case') return st.casePicks.length>=STUDY[SD.n].case.steps.length;
  return !!st.handoff; }
function startStudy(n){ const c=chap(n); show('s-study'); $('#sd-h').textContent=c.t; $('#sd-tag').textContent=`Capítulo ${c.n} · Fase 1 · Prontuário guiado`;
  SD={n,c,idx:0,topic:0,caseStep:0}; const open=STUDY_STEPS.findIndex(s=>!stepDone(s)); SD.idx=open<0?0:open;
  if(STUDY_STEPS[SD.idx].kind==='recall'){ const st=studyProgress(n); const t=recallTopics(n).findIndex(s=>!st.keys[s.id]); SD.topic=t<0?0:t; }
  renderStudy(); }
function renderStepper(){ const nav=$('#sd-steps'); nav.innerHTML='';
  STUDY_STEPS.forEach((step,i)=>{ const b=el('button',{class:(i===SD.idx?'cur ':'')+(stepDone(step)?'done':'')},`${stepDone(step)?'✓ ':''}${step.label}`);
    b.onclick=()=>{ SD.idx=i; SD.topic=0; SD.caseStep=0; renderStudy(); }; nav.append(b); });
  nav.children[SD.idx]?.scrollIntoView({block:'nearest',inline:'center'}); }
function setChartButtonEnabled(enabled){ const b=$('#sd-chart'); b.disabled=!enabled; b.title=enabled?'':'Disponível depois de comparar com os pontos-chave'; }
function renderStudy(){ renderStepper(); setChartButtonEnabled(true); const kind=STUDY_STEPS[SD.idx].kind, main=$('#sd-main'); main.innerHTML=''; window.scrollTo({top:0});
  if(kind==='chart') renderFullChart(main); else if(kind==='recall') renderRecallTopic(main); else if(kind==='case') renderCaseStep(main); else renderHandoffStep(main); }
function goNextStep(){ if(SD.idx<STUDY_STEPS.length-1){ SD.idx++; SD.topic=0; SD.caseStep=0; renderStudy(); } else finishStudy(); }

/* 1. prontuário completo, numa leitura só, com índice */
function renderFullChart(main){ const c=SD.c;
  const index=el('div',{class:'study-card'}); index.append(el('h3',{},'📋 Prontuário do capítulo'), el('p',{class:'hint'},'Leia o capítulo inteiro com calma. Na próxima etapa o texto fica fechado e você explica cada tópico com suas palavras.'));
  const chips=el('div',{class:'row'}); c.text.forEach(s=>{ const b=el('button',{class:'btn-sm btn-ghost'},s.t); b.onclick=()=>document.getElementById('full-'+s.id)?.scrollIntoView({behavior:'smooth',block:'start'}); chips.append(b); }); index.append(chips);
  const chart=el('div',{class:'chart'},c.text.map(s=>`<section id="full-${s.id}"><h4>${s.t}</h4>${s.b}</section>`).join(''));
  const done=el('button',{class:'btn-primary'},'Terminei a leitura: fechar o prontuário'); done.onclick=()=>{ studyProgress(SD.n).read=true; save(); SFX.ok(); goNextStep(); };
  main.append(index, chart, done); }

/* 2. com suas palavras: um tópico por vez, texto fechado, comparação com pontos-chave */
function renderRecallTopic(main){ const topics=recallTopics(SD.n), sec=topics[SD.topic], keys=STUDY[SD.n].checks[sec.id].keys, st=studyProgress(SD.n);
  setChartButtonEnabled(false);
  const card=el('div',{class:'study-card'});
  card.append(el('span',{class:'eyebrow'},`Tópico ${SD.topic+1} de ${topics.length} · prontuário fechado`), el('h3',{},`🧠 ${sec.t}`),
    el('p',{class:'hint'},'Escreva tudo o que você lembra sobre este tópico, como se explicasse a um colega: o que fazer, quando e por quê.'));
  const memo=el('textarea',{class:'memo',placeholder:'Escreva aqui…','aria-label':`O que você lembra sobre ${sec.t}`}); card.append(memo);
  const btn=el('button',{class:'btn-primary'},'Comparar com os pontos-chave'); card.append(btn); main.append(card); memo.focus();
  btn.onclick=()=>{ btn.remove(); memo.readOnly=true; setChartButtonEnabled(true);
    card.append(el('p',{class:'hint'},`Marque os ${keys.length} pontos que o seu texto cobriu. Os que ficarem desmarcados têm o atalho para o trecho no prontuário.`));
    const list=keyChecklist(keys.map(k=>({t:k,s:sec.id}))); card.append(list.el);
    const last=SD.topic>=topics.length-1; const next=el('button',{class:'btn-primary'},last?'Concluir e ir para o caso':'Próximo tópico');
    next.onclick=()=>{ st.keys[sec.id]=list.values(); save(); SFX.ok(); if(last) goNextStep(); else { SD.topic++; renderStudy(); } }; card.append(next); }; }
function keyChecklist(keys){ const wrap=el('div',{class:'keylist'}); const boxes=keys.map(k=>{ const item=el('label',{class:'keyitem miss'}); const cb=el('input',{type:'checkbox'}); item.append(cb, el('span',{},k.t));
    const see=seeInChartButton(k.s); see.classList.add('see'); item.append(see); cb.onchange=()=>{ item.classList.toggle('miss',!cb.checked); see.hidden=cb.checked; }; wrap.append(item); return cb; });
  return {el:wrap, values:()=>boxes.map(b=>b.checked)}; }
function seeInChartButton(sectionId){ const b=el('button',{class:'btn-sm btn-ghost',type:'button'},'📋 Ver no prontuário'); b.onclick=e=>{ e.preventDefault(); e.stopPropagation(); openChartDrawer(SD.c,sectionId); }; return b; }

/* caso à beira do leito */
function monitorView(v){ const alarm=k=>(k==='PA'&&parseInt(v[k])<90)||(k==='FC'&&parseInt(v[k])>=120)||(k==='SatO2'&&parseInt(v[k])<92);
  return el('div',{class:'monitor','aria-label':'Sinais vitais'}, Object.keys(v).map(k=>`<span><small>${k}</small><b class="${alarm(k)?'alarm':''}">${v[k]}</b></span>`).join('')); }
function renderCaseStep(main){ const data=STUDY[SD.n].case, st=studyProgress(SD.n); const i=SD.caseStep, step=data.steps[i];
  const vitals=Object.assign({},data.vitals,...data.steps.slice(0,i+1).map(s=>s.vitals||{}));
  const card=el('div',{class:'study-card'}); card.append(el('h3',{},`🚑 ${data.title}`), monitorView(vitals));
  if(i===0) card.append(el('p',{},data.intro));
  card.append(el('span',{class:'eyebrow'},`Decisão ${i+1} de ${data.steps.length}`), el('p',{class:'case-q'},step.prompt));
  const opts=el('div',{class:'opts'}); card.append(opts); main.append(card);
  shuffle(step.options.map((_,k)=>k)).forEach((k,pos)=>{ const b=el('button',{},`<b>${LETTERS[pos]}</b><span>${step.options[k].t}</span>`); b.dataset.oi=k; b.onclick=()=>pickCaseOption(card,opts,step,k); opts.append(b); });
  opts.querySelector('button').focus({preventScroll:true}); }
function pickCaseOption(card,opts,step,k){ const st=studyProgress(SD.n), o=step.options[k]; st.casePicks[SD.caseStep]=k; save(); o.ok?SFX.ok():SFX.bad();
  [...opts.children].forEach(b=>{ b.disabled=true; const j=+b.dataset.oi; if(step.options[j].ok) b.classList.add('right'); if(j===k&&!o.ok) b.classList.add('wrong'); });
  const right=step.options.find(x=>x.ok); const fb=el('div',{class:'fb '+(o.ok?'ok':'no')},`<span class="verdict">${o.ok?'Boa conduta':'Não é a melhor conduta'}</span>${o.fb}${o.ok?'':`<br><b>Melhor conduta:</b> ${right.t}. ${right.fb}`}`);
  fb.append(el('br'), seeInChartButton(o.ok?o.s:(right.s||o.s))); card.append(fb);
  const last=SD.caseStep>=STUDY[SD.n].case.steps.length-1; const next=el('button',{class:'btn-primary'},last?'Ir para a passagem de plantão':'Próxima decisão');
  next.onclick=()=>{ if(last) goNextStep(); else { SD.caseStep++; renderStudy(); } }; card.append(next); next.focus({preventScroll:true}); }

/* passagem de plantão */
function renderHandoffStep(main){ const data=STUDY[SD.n].handoff; const card=el('div',{class:'study-card'});
  card.append(el('h3',{},'🔁 Passagem de plantão'), el('p',{},data.prompt), el('p',{class:'hint'},'S: situação · x: hemorragia · A · B · C · D · E · Background · Assessment · Recommendations'));
  const memo=el('textarea',{class:'memo',placeholder:'Escreva a passagem do caso…','aria-label':'Sua passagem de plantão'}); card.append(memo);
  const btn=el('button',{class:'btn-primary'},'Comparar com o checklist'); card.append(btn); main.append(card); memo.focus();
  btn.onclick=()=>{ btn.remove(); memo.readOnly=true; const list=keyChecklist(data.keys); card.append(el('p',{class:'hint'},'Marque o que a sua passagem incluiu:'), list.el);
    const done=el('button',{class:'btn-primary'},'Concluir a Fase 1'); done.onclick=()=>{ studyProgress(SD.n).handoff=list.values(); save(); finishStudy(); }; card.append(done); }; }
function finishStudy(){ const st=studyProgress(SD.n); st.finished=true; save(); const pct=Math.round(studyScore(SD.n)*100); pct>=75?SFX.win():SFX.ok();
  const main=$('#sd-main'); main.innerHTML=''; renderStepper();
  const card=el('div',{class:'study-card',style:'text-align:center;justify-items:center'});
  card.append(el('span',{class:'eyebrow'},'Fase 1 concluída'), el('span',{class:'score-ring'},`${pct}%`), el('p',{},pct>=75?'★ Estrela da Fase 1 conquistada! Pontos-chave lembrados, condutas no caso e passagem de plantão somados.':'Faltou pouco para a estrela (75%). Revise as etapas com erro pelo menu acima e refaça.'));
  const row=el('div',{class:'row',style:'justify-content:center'}); const a=el('button',{class:'btn-primary'},'Ir para os flashcards'); a.onclick=()=>startCards(SD.n); const b=el('button',{},'Voltar ao quadro'); b.onclick=goMap; row.append(a,b); card.append(row); main.append(card); checkRewards(); }

/* painel "Ver no prontuário" */
function openChartDrawer(c,sectionId){ const ch=$('#dr-chart'); $('#dr-h').textContent=`Prontuário · Capítulo ${c.n}`;
  ch.innerHTML=c.text.map(s=>`<section id="dr-${s.id}"><h4>${s.t}</h4>${s.b}</section>`).join(''); $('#drawer').hidden=false;
  const target=document.getElementById('dr-'+sectionId); requestAnimationFrame(()=>{ if(target){ ch.scrollTop=target.offsetTop-12; target.classList.add('flash'); setTimeout(()=>target.classList.remove('flash'),1600); } $('#dr-close').focus(); }); }
$('#dr-close').onclick=()=>{ $('#drawer').hidden=true; };
$('#drawer').onclick=e=>{ if(e.target.id==='drawer') $('#drawer').hidden=true; };
$('#sd-chart').onclick=()=>{ const topics=recallTopics(SD.n); const id=STUDY_STEPS[SD.idx].kind==='recall'?topics[SD.topic].id:SD.c.text[0].id; openChartDrawer(SD.c,id); };
$('#sd-back').onclick=()=>{ SFX.blip(); goMap(); };


/* ---------- Sala de Habilidades: imagem, laboratório e procedimentos ---------- */
const SKILLS = window.ATLS_SKILLS || [];
const SKILL_TABS = [
  {cat:'imagem', label:'🩻 Exames de imagem'},
  {cat:'lab', label:'🧪 Laboratório'},
  {cat:'proc', label:'🩺 Procedimentos'}
];
let skillTab='imagem';
function skillProgress(id){ if(!S.skills) S.skills={}; if(!S.skills[id]) S.skills[id]={answers:{}}; return S.skills[id]; }
function skillDone(it){ const pr=skillProgress(it.id); return it.quiz.every((_,i)=>pr.answers[i]!=null); }
const skillsDoneCount = () => SKILLS.filter(skillDone).length;
function goSkills(){ show('s-skills'); renderSkillTabs(); renderSkillGrid(); }
function renderSkillTabs(){ const tabs=$('#sk-tabs'); tabs.innerHTML='';
  for(const t of SKILL_TABS){ const n=SKILLS.filter(s=>s.cat===t.cat), done=n.filter(skillDone).length;
    const b=el('button',{role:'tab','aria-selected':String(t.cat===skillTab)},`${t.label} <small>${done}/${n.length}</small>`);
    b.onclick=()=>{ skillTab=t.cat; SFX.blip(); renderSkillTabs(); renderSkillGrid(); }; tabs.append(b); } }
function renderSkillGrid(){ const grid=$('#sk-grid'); grid.innerHTML='';
  const items=SKILLS.filter(s=>s.cat===skillTab);
  if(!items.length){ grid.append(el('p',{class:'muted'},'Em preparação.')); return; }
  for(const it of items){ const card=el('button',{class:'skill-card'}); const first=it.img&&it.img[0];
    const thumb=el('span',{class:'thumb'}); if(first&&window.ART[first.key]) thumb.style.backgroundImage=`url(${window.ART[first.key]})`;
    else { thumb.classList.add('noimg',it.cat); thumb.append(el('span',{class:'ico','aria-hidden':'true'},({imagem:'🩻',lab:'🧪',proc:'🩺'})[it.cat]||'📋')); }
    if(skillDone(it)) thumb.append(el('span',{class:'chip ok'},'✓ quiz feito'));
    card.append(thumb, el('span',{class:'info'},`<b>${it.t}</b><small>${it.sub||''}</small>`));
    card.onclick=()=>{ SFX.blip(); openSkill(it.id); }; grid.append(card); } }
function figureView(im){ const fig=el('figure'); const img=el('img',{alt:im.alt||'',loading:'lazy'}); img.src=window.ART[im.key]||'';
  img.onclick=()=>openZoom(img.src,im); fig.append(img);
  const credit=im.url?`<a href="${im.url}" target="_blank" rel="noopener">${im.credit}</a>`:im.credit;
  fig.append(el('figcaption',{},`${im.cap||''}<span class="credit">${credit||''}</span>`)); return fig; }
function openZoom(src,im){ $('#zoom-img').src=src; $('#zoom-img').alt=im.alt||''; $('#zoom-cap').textContent=im.cap||''; $('#zoom').hidden=false; $('#zoom-close').focus(); }
$('#zoom-close').onclick=()=>{ $('#zoom').hidden=true; };
$('#zoom').onclick=e=>{ if(e.target.id==='zoom') $('#zoom').hidden=true; };
function openSkill(id){ const it=SKILLS.find(s=>s.id===id); if(!it) return; show('s-skill');
  const tab=SKILL_TABS.find(t=>t.cat===it.cat); $('#ski-tag').textContent=`Sala de Habilidades · ${tab?tab.label.replace(/^\S+\s/,''):''}`; $('#ski-h').textContent=it.t;
  const main=$('#ski-main'); main.className='skill-detail '+it.cat; main.innerHTML='';
  if(it.img&&it.img.length){ const figs=el('div',{class:'figs'}); it.img.forEach(im=>figs.append(figureView(im))); main.append(figs); }
  main.append(el('div',{class:'chart'},it.b));
  if(it.quiz&&it.quiz.length){ const card=el('div',{class:'study-card'}); card.append(el('h3',{},'📝 Quiz'));
    it.quiz.forEach((Q,i)=>card.append(skillQuizItem(it,Q,i))); main.append(card); }
  const back=el('button',{class:'btn-ghost'},'Voltar à sala'); back.onclick=goSkills; main.append(back); }
function skillQuizItem(it,Q,i){ const wrap=el('div',{class:'quiz-item'}), pr=skillProgress(it.id);
  wrap.append(el('span',{class:'eyebrow'},`Questão ${i+1} de ${it.quiz.length}`), el('p',{class:'q'},Q.q));
  const opts=optionList(Q,(oi,btn)=>{ if(opts.dataset.done) return; opts.dataset.done='1'; const ok=oi===Q.c; pr.answers[i]=ok?1:0; save(); ok?SFX.ok():SFX.bad();
    wrap.append(revealAnswer(Q,btn,opts,ok)); if(skillDone(it)){ toast('✓ Quiz concluído'); checkRewards(); } });
  wrap.append(opts); return wrap; }
$('#sk-back').onclick=()=>{ SFX.blip(); goMap(); };
$('#ski-back').onclick=()=>{ SFX.blip(); goSkills(); };
$('#map-skills').onclick=()=>{ SFX.blip(); goSkills(); };

/* ---------- Fase 2: Flashcards ---------- */
let FC=null;
function startCards(n){ const c=chap(n); show('s-cards'); $('#fc-h').textContent=c.t; $('#fc-tag').textContent=`Capítulo ${c.n} · Fase 2 · Flashcards`; FC={c, queue:[], cur:-1, flipped:false}; refillCards(); nextCard(); }
function refillCards(){ const p=P(FC.c.n); FC.queue=shuffle(FC.c.cards.map((_,i)=>i).filter(i=>(p.fc[i]||0)<3)); }
function nextCard(){ const p=P(FC.c.n); if(!FC.queue.length) refillCards();
  if(!FC.queue.length){ FC.cur=-1; $('#card').classList.remove('flipped'); $('#fc-front').innerHTML='🏆 Baralho dominado!<br><small>Todos os cartões com 3 acertos seguidos.</small>'; $('#fc-backt').textContent=''; $('#fc-dots').innerHTML=''; ['#fc-wrong','#fc-right','#fc-flip'].forEach(s=>$(s).disabled=true); deck(); return; }
  FC.cur=FC.queue.shift(); FC.flipped=false; $('#card').classList.remove('flipped');
  const [f,b]=FC.c.cards[FC.cur]; setTimeout(()=>{ if(!FC.flipped) $('#fc-backt').innerHTML=b; },200); $('#fc-front').innerHTML=f;
  const lv=p.fc[FC.cur]||0; $('#fc-dots').innerHTML=[0,1,2].map(i=>`<i class="${i<lv?'on':''}"></i>`).join('');
  $('#fc-flip').disabled=false; $('#fc-wrong').disabled=$('#fc-right').disabled=true; deck(); }
function flipCard(){ if(!FC||FC.cur<0||FC.flipped) return; FC.flipped=true; $('#fc-backt').innerHTML=FC.c.cards[FC.cur][1]; $('#card').classList.add('flipped'); SFX.flip(); $('#fc-flip').disabled=true; $('#fc-wrong').disabled=$('#fc-right').disabled=false; }
function gradeCard(ok){ if(!FC||FC.cur<0||!FC.flipped) return; const p=P(FC.c.n); const i=FC.cur;
  if(ok){ p.fc[i]=(p.fc[i]||0)+1; SFX.ok(); if(p.fc[i]>=3) toast('Cartão dominado! ✓',1000); else FC.queue.splice(Math.min(FC.queue.length,2+Math.random()*3|0),0,i); }
  else { p.fc[i]=0; SFX.bad(); FC.queue.splice(Math.min(FC.queue.length,1+Math.random()*2|0),0,i); }
  save(); if(cardsDone(FC.c)===FC.c.cards.length && ok && p.fc[i]===3){ toast('★ Fase 2 concluída!'); checkRewards(); } nextCard(); }
function deck(){ const p=P(FC.c.n); $('#deck').innerHTML=FC.c.cards.map((_,i)=>`<span class="s${Math.min(3,p.fc[i]||0)}${i===FC.cur?' cur':''}" title="Cartão ${i+1}"></span>`).join(''); $('#fc-count').textContent=`${cardsDone(FC.c)} de ${FC.c.cards.length} dominados`; }
$('#card').onclick=flipCard; $('#card').onkeydown=e=>{ if(e.key==='Enter'){ e.preventDefault(); flipCard(); } };
$('#fc-flip').onclick=flipCard; $('#fc-right').onclick=()=>gradeCard(true); $('#fc-wrong').onclick=()=>gradeCard(false);
$('#fc-back').onclick=()=>{ SFX.blip(); goMap(); };
$('#fc-reset').onclick=()=>{ P(FC.c.n).fc={}; save(); refillCards(); nextCard(); toast('Baralho reiniciado'); };

/* ---------- Cronômetro de questão ---------- */
const SIM_SECONDS = 180;
let TIMER = null;
const formatClock = sec => `${Math.floor(sec/60)}:${String(sec%60).padStart(2,'0')}`;
function startTimer(seconds, container, onExpire){ stopTimer(); if(!seconds) return;
  const box=el('div',{class:'timer',role:'timer','aria-label':'Tempo restante'},`<span class="clock">${formatClock(seconds)}</span><div class="bar"><i style="width:100%"></i></div>`);
  container.prepend(box);
  const endAt=performance.now()+seconds*1000; let lastBeep=null;
  const tick=()=>{ const left=Math.max(0,(endAt-performance.now())/1000), whole=Math.ceil(left);
    box.querySelector('.clock').textContent=formatClock(whole); box.querySelector('i').style.width=(left/seconds*100)+'%';
    box.classList.toggle('low', left<=Math.min(10,seconds*.2));
    if(whole<=5 && whole>0 && whole!==lastBeep){ lastBeep=whole; SFX.beep(); }
    if(left<=0){ stopTimer(); onExpire(); } };
  TIMER={id:setInterval(tick,200), box}; tick(); }
function stopTimer(){ if(TIMER){ clearInterval(TIMER.id); TIMER.box.classList.add('stopped'); TIMER=null; } }

/* ---------- Fase 3: Chefão ---------- */
let BT=null;
const HERO_X=250, BOSS_X=700, FLOOR=500;
function battleStats(){ const h=hero(), it=equippedItem();
  return { hearts:h.hearts+(it.id==='steth'?1:0), dmg:h.dmg+(it.id==='scalpel'?4:0), critAt:it.id==='heli'?2:3, shield:it.id==='tq', revive:it.id==='def', item:it }; }
function startBattle(n){ const c=chap(n), st=battleStats();
  let pool; if(n===99){ pool=shuffle(CH.flatMap(k=>k.battle.map(b=>Object.assign({src:k.n},b)))).slice(0,20); } else pool=shuffle(c.battle.map(b=>Object.assign({src:c.n},b)));
  const maxHp=Math.round(pool.length*st.dmg*0.85);
  BT={c,n,pool,idx:0,hp:maxHp,maxHp,hearts:st.hearts,maxHearts:st.hearts,st,shield:st.shield,revive:st.revive,lost:0,combo:0,res:[],over:false,answered:false,missed:[],
      hurt:0,heroHurt:0,atk:0,bossAtk:0,state:'fight',shot:null,shake:0,fx:null};
  PARTS=[]; tintOf(bossKey(n),'#ffffff');
  show('s-battle'); $('#bt-title').textContent=`${c.boss.name}, ${c.boss.title}`; $('#bt-tag').textContent=n===99?'Chefão final · Revisão geral':`Capítulo ${c.n} · Fase 3 · Chefão`;
  $('#bh-name').textContent=c.boss.name; $('#hh-name').textContent=hero().name; hud(); loop('battle',drawArena); renderProg();
  const q=$('#qbox'); q.innerHTML=''; q.append(el('p',{style:`font-family:var(--f-sign);color:${c.boss.color};font-size:1.05rem`},`${c.boss.name}:`), el('p',{},`“${c.intro}”`), el('p',{class:'muted',style:'font-size:.9rem'},`Equipado: <b>${st.item.name}</b> · ${st.item.perk}`));
  const b=el('button',{class:'btn-primary next-btn'},'Lutar! (Enter)'); b.onclick=askBattle; q.append(b); b.focus({preventScroll:true}); }
function hud(){ $('#bh-bar').style.width=(BT.hp/BT.maxHp*100)+'%'; $('#bh-num').textContent=Math.max(0,BT.hp)+'/'+BT.maxHp;
  $('#hh-hearts').textContent='♥'.repeat(Math.max(0,BT.hearts))+'♡'.repeat(Math.max(0,BT.maxHearts-BT.hearts)); $('#hh-combo').textContent=BT.combo>=2?`combo ×${BT.combo}`:'';
  $('#hh-perk').textContent=[BT.shield?'🩹 escudo':'', BT.revive?'⚡ 1 reanimação':''].filter(Boolean).join(' '); }
function renderProg(){ $('#bt-prog').innerHTML=BT.pool.map((_,i)=>`<i class="${BT.res[i]===1?'r':BT.res[i]===0?'w':(i===BT.idx?'c':'')}"></i>`).join(''); }
function askBattle(){ if(BT.over||BT.fx) return; if(BT.idx>=BT.pool.length){
    if(BT.missed.length){ BT.pool=BT.pool.concat(shuffle(BT.missed)); BT.missed=[]; toast('O chefão resiste! Revanche nas que você errou.'); }
    else { BT.hp=0; return finishBoss(); } }
  BT.answered=false; renderProg(); const Q=BT.pool[BT.idx]; const q=$('#qbox'); q.innerHTML='';
  q.append(el('span',{class:'eyebrow'},`Questão ${BT.idx+1} de ${BT.pool.length}${BT.n===99?' · Capítulo '+Q.src:''}`), el('p',{class:'q'},Q.q), optionList(Q,(oi,btn,opts)=>answerBattle(oi,btn,opts)));
  q.querySelector('.opts button').focus({preventScroll:true});
  startTimer(+S.set.bossTime||0, q, ()=>answerBattle(null,null,q.querySelector('.opts'))); }
function optionList(Q,onPick){ const opts=el('div',{class:'opts'}); shuffle([0,1,2,3]).forEach((oi,k)=>{ const b=el('button',{},`<b>${LETTERS[k]}</b><span>${Q.o[oi]}</span>`); b.dataset.oi=oi; b.onclick=()=>onPick(oi,b,opts); opts.append(b); }); return opts; }
/* btn nulo = tempo esgotado */
function revealAnswer(Q,btn,opts,ok){ opts.querySelectorAll('button').forEach(b=>{ b.disabled=true; if(+b.dataset.oi===Q.c) b.classList.add('right'); }); if(!ok&&btn) btn.classList.add('wrong');
  const verdict=ok?'Acertou!':btn?'Errou':'Tempo esgotado';
  return el('div',{class:'explain '+(ok?'ok':'no')},`<span class="verdict">${verdict}</span>${Q.e}`); }
function answerBattle(oi,btn,opts){ if(BT.answered) return; BT.answered=true; stopTimer(); const Q=BT.pool[BT.idx]; const ok=oi!=null&&oi===Q.c;
  const q=$('#qbox'); q.append(revealAnswer(Q,btn,opts,ok));
  if(ok) heroStrikes(); else bossStrikes(Q);
  renderProg();
  const won=BT.hp<=0, down=BT.hearts<=0;
  const nb=el('button',{class:(won?'btn-gold':down?'btn-red':'btn-primary')+' next-btn'}, won?'Finalizar! (Enter)':down?'Continuar… (Enter)':'Próxima (Enter)');
  nb.onclick=()=>{ if(won) finishBoss(); else if(down) heroFalls(); else { BT.idx++; askBattle(); } }; q.append(nb); nb.focus({preventScroll:true}); }
function heroStrikes(){ BT.combo++; S.stats.maxCombo=Math.max(S.stats.maxCombo,BT.combo); const crit=BT.combo>=BT.st.critAt; const d=BT.st.dmg+(crit?6:0);
  BT.hp=Math.max(0,BT.hp-d); BT.res[BT.idx]=1; BT.atk=.75; BT.shot={t:0,crit};
  setTimeout(()=>{ BT.hurt=.5; BT.shake=crit?.35:.2; SFX.hit(); burst(700,300,crit?'#ffe27a':'#fff',crit?34:20,crit?380:280); burst(700,300,BT.c.boss.color||'#ef4d4d',12,220); float(crit?`CRÍTICO −${d}`:`−${d}`,'#ffd166',62,22); hud(); },320); }
function bossStrikes(Q){ BT.combo=0; BT.res[BT.idx]=0; BT.missed.push(Q); BT.bossAtk=.8;
  if(BT.shield){ BT.shield=false; setTimeout(()=>{ SFX.beep(); float('🩹 Sangramento controlado!','#5fe3c0',8,40); burst(250,330,'#5fe3c0',16,240); hud(); },300); return; }
  BT.hearts--; BT.lost++; setTimeout(()=>{ BT.heroHurt=.6; BT.shake=.3; SFX.bad(); burst(250,330,'#ef4d4d',22,300); float('−♥','#ef4d4d',20,40); hud(); },300); }
function float(txt,color,xPct,yPct){ const f=el('span',{class:'dmg',style:`left:${xPct}%;top:${yPct}%;color:${color}`},txt); $('#floats').append(f); setTimeout(()=>f.remove(),1000); }

/* vitória: fatality do herói conforme o item equipado */
function finishBoss(){ if(BT.over) return; BT.over=true; stopTimer(); $('#qbox').innerHTML=`<p class="muted">⚔ Finalizando com <b>${BT.st.item.name}</b>…</p>`; hud();
  if(!S.set.fx){ BT.state='win'; return endBattle(true); }
  startFx('hero', BT.st.item.fx, ()=>{ BT.state='win'; endBattle(true); }); }
/* derrota: fatality do chefão, que o desfibrilador pode interromper */
const BOSS_FX = ['papers','blackout','overtime'];
function heroFalls(){ if(BT.fx) return; $('#qbox').innerHTML=`<p class="muted">${BT.c.boss.name} prepara o golpe final…${BT.revive?' (o desfibrilador está pronto)':''}</p>`;
  const type=BOSS_FX[(BT.n===99?2:BT.n)%3];
  if(!S.set.fx){ if(BT.revive){ reviveHero(); return; } BT.over=true; BT.state='lose'; return endBattle(false); }
  startFx('boss', type, ()=>{ BT.over=true; BT.state='lose'; endBattle(false); }); }
function reviveHero(){ BT.revive=false; BT.hearts=1; BT.state='fight'; hud(); toast('⚡ Reanimado! Você volta com 1 vida.',2200);
  const q=$('#qbox'); q.innerHTML=''; const b=el('button',{class:'btn-primary next-btn'},'Voltar à luta (Enter)'); b.onclick=()=>{ BT.idx++; askBattle(); }; q.append(el('p',{},'O desfibrilador interrompeu o golpe final do chefão.'),b); b.focus({preventScroll:true}); }
function endBattle(win){ BT.over=true; BT.fx=null; hud(); const c=BT.c, q=$('#qbox'); q.innerHTML='';
  const right=BT.res.filter(v=>v===1).length, tot=BT.res.length;
  if(win){ SFX.win(); const p=P(BT.n); const first=!p.boss; p.boss=true; p.bossBest=Math.max(p.bossBest||0,BT.hearts); if(BT.lost===0) S.stats.flawless=true; S.last=BT.n; save();
    q.append(el('h3',{style:'color:var(--gold)'},`🏆 ${c.boss.name} derrotado!`), el('p',{},`Você acertou ${right} de ${tot} e terminou com ${BT.hearts} ♥.${first?' Estrela do chefão conquistada!':''}`));
  } else { SFX.lose(); q.append(el('h3',{style:'color:var(--red)'},'Plantão perdido…'), el('p',{},`${c.boss.name} venceu desta vez. Você acertou ${right} de ${tot}. Revise o capítulo (Fases 1 e 2) e tente de novo.`)); }
  const row=el('div',{class:'row'}); const again=el('button',{class:'btn-primary'},'Lutar de novo'); again.onclick=()=>startBattle(BT.n); const back=el('button',{class:'next-btn'},'Voltar ao quadro'); back.onclick=goMap; row.append(again,back);
  if(!win && BT.n!==99){ const r=el('button',{class:'btn-ghost'},'Revisar (Fase 1)'); r.onclick=()=>startRecall(BT.n); row.append(r); }
  q.append(row); if(win) checkRewards(); }

/* ---------- Fatalities ---------- */
const FX_DUR = {xabcde:3.4, tq:3.2, shock:3.2, slash:3.0, heli:3.8, gold:3.9, papers:3.2, blackout:3.2, overtime:3.2, revive:1.8};
const FX_TITLE = {papers:'Soterrado em prontuários', blackout:'Apagão no plantão', overtime:'Plantão de 36 horas', revive:'CLEAR! Reanimado'};
function startFx(side,type,onEnd){ BT.fx={side,type,t:0,dur:FX_DUR[type],onEnd,flags:{}}; $('#bt-back').disabled=true; }
function fxTitle(){ const f=BT.fx; if(f.type==='revive') return FX_TITLE.revive; return f.side==='hero'?BT.st.item.fxName:FX_TITLE[f.type]; }
function bossHeadY(bh){ return FLOOR-bh*.72; }

function drawFxOverlay(ctx,f){ const k=ease(Math.min(1,f.t/.35)); const bar=58*k;
  ctx.fillStyle='#000'; ctx.fillRect(0,0,960,bar); ctx.fillRect(0,540-bar,960,bar);
  const show=f.t>f.dur-1.3; if(!show) return; const a=ease((f.t-(f.dur-1.3))/.3);
  ctx.save(); ctx.globalAlpha=a; ctx.textAlign='center'; const s=1+(1-a)*.6;
  ctx.translate(480,250); ctx.scale(s,s);
  ctx.font='64px Bungee, Impact, sans-serif'; ctx.lineWidth=10; ctx.strokeStyle='#000'; const word=f.type==='revive'?'REANIMAÇÃO':'FATALITY';
  ctx.strokeText(word,0,0); ctx.fillStyle=f.side==='hero'||f.type==='revive'?'#ffd166':'#ef4d4d'; ctx.fillText(word,0,0);
  ctx.font='26px Bungee, Impact, sans-serif'; ctx.lineWidth=6; ctx.strokeText(fxTitle().toUpperCase(),0,46); ctx.fillStyle='#fff'; ctx.fillText(fxTitle().toUpperCase(),0,46); ctx.restore(); }
function bolt(ctx,x1,y1,x2,y2,color){ ctx.save(); ctx.strokeStyle=color; ctx.lineWidth=5; ctx.shadowColor=color; ctx.shadowBlur=18; ctx.beginPath(); ctx.moveTo(x1,y1);
  const n=9; for(let i=1;i<n;i++){ const p=i/n; ctx.lineTo(x1+(x2-x1)*p+(Math.random()-.5)*40, y1+(y2-y1)*p+(Math.random()-.5)*20); } ctx.lineTo(x2,y2); ctx.stroke(); ctx.lineWidth=2; ctx.strokeStyle='#fff'; ctx.stroke(); ctx.restore(); }
function once(f,key,t,fn){ if(f.t>=t && !f.flags[key]){ f.flags[key]=1; fn(); } }

/* cada fatality desenha herói e chefão; devolve nada */
const FX = {
  xabcde(ctx,f,bk,bh,h){ const L=['x','A','B','C','D','E']; drawAt(ctx,frame(h,f.t<2.4?'atk':'win'),HERO_X,FLOOR+4,f.t<2.4?250:270);
    let gone=f.t>2.5; if(!gone){ const fl=L.some((_,i)=>f.t>.35+i*.3&&f.t<.45+i*.3); drawAt(ctx,IMG[bk],BOSS_X+(fl?Math.sin(f.t*80)*8:0),FLOOR+4,bh*(f.t>2.2?1+(f.t-2.2)*.6:1)); if(fl) drawAt(ctx,tintOf(bk,'#ffffff'),BOSS_X,FLOOR+4,bh,{a:.6}); }
    L.forEach((ch,i)=>{ const t0=.15+i*.3, p=(f.t-t0)/.25; if(p>0&&p<1){ const x=HERO_X+120+(BOSS_X-HERO_X-120)*p, y=300-Math.sin(p*Math.PI)*80;
      ctx.save(); ctx.font='54px Bungee, Impact, sans-serif'; ctx.textAlign='center'; ctx.fillStyle=i===0?'#ef4d4d':'#5fe3c0'; ctx.strokeStyle='#000'; ctx.lineWidth=7; ctx.strokeText(ch,x,y); ctx.fillText(ch,x,y); ctx.restore(); }
      once(f,'L'+i,t0+.25,()=>{ SFX.hit(); BT.shake=.15; burst(BOSS_X,320,i===0?'#ef4d4d':'#5fe3c0',14,260); }); });
    once(f,'boom',2.5,()=>{ SFX.boom(); BT.shake=.5; burst(BOSS_X,300,'#fff',60,520,1.1,9); burst(BOSS_X,300,BT.c.boss.color||'#5fe3c0',40,400,1,8); }); },
  tq(ctx,f,bk,bh,h){ drawAt(ctx,frame(h,f.t<2.3?'atk':'win'),HERO_X,FLOOR+4,f.t<2.3?250:270);
    if(f.t<2.4){ const sq=f.t>1?1-.3*Math.abs(Math.sin((f.t-1)*9))*Math.min(1,(f.t-1)):1; drawAt(ctx,IMG[bk],BOSS_X,FLOOR+4,bh,{sx:sq,sy:2-sq>1.2?1.2:2-sq});
      [.35,.55,.75].forEach((yy,i)=>{ if(f.t>.3+i*.25){ const y=FLOOR-bh*yy, w=bh*.55*sq; ctx.fillStyle='#111'; ctx.fillRect(BOSS_X-w/2,y-9,w,18); ctx.fillStyle='#ef4d4d'; ctx.fillRect(BOSS_X+w/2-14,y-12,18,24); ctx.fillStyle='#777'; ctx.fillRect(BOSS_X-4,y-22,8,44); once(f,'s'+i,.3+i*.25,()=>SFX.beep()); } }); }
    once(f,'pop',2.4,()=>{ SFX.boom(); BT.shake=.5; burst(BOSS_X,300,'#ef4d4d',30,420,1,8); burst(BOSS_X,300,'#111',30,380,1,8); burst(BOSS_X,300,'#fff',30,300,.8,6); }); },
  shock(ctx,f,bk,bh,h){ drawAt(ctx,frame(h,f.t<2.2?'atk':'win'),HERO_X,FLOOR+4,f.t<2.2?250:270);
    drawAt(ctx,IMG.item_def,BOSS_X-160,FLOOR-200,90,{a:clamp(f.t*3,0,1)*(f.t<2.4?1:0)});
    if(f.t<.8&&f.t>.25){ ctx.save(); ctx.font='42px Bungee, Impact, sans-serif'; ctx.textAlign='center'; ctx.fillStyle='#ffd166'; ctx.strokeStyle='#000'; ctx.lineWidth=7; ctx.strokeText('CLEAR!',BOSS_X-160,FLOOR-230); ctx.fillText('CLEAR!',BOSS_X-160,FLOOR-230); ctx.restore(); }
    const zap=[.8,1.4,2.0].some(z=>f.t>z&&f.t<z+.25); const fall=f.t>2.2?Math.min(1,(f.t-2.2)/.8):0;
    if(fall<1){ drawAt(ctx,zap?tintOf(bk,'#bfefff'):IMG[bk],BOSS_X+(zap?Math.sin(f.t*90)*10:0),FLOOR+4,bh,{sy:1-fall*.9,a:1-fall*.6}); if(zap){ for(let i=0;i<3;i++) bolt(ctx,BOSS_X-160+Math.random()*40,FLOOR-200,BOSS_X+(Math.random()-.5)*bh*.6,FLOOR-Math.random()*bh*.8,'#7fd8ff'); ctx.fillStyle='rgba(200,240,255,.18)'; ctx.fillRect(0,0,960,540); } }
    [.8,1.4,2.0].forEach((z,i)=>once(f,'z'+i,z,()=>{ SFX.zap(); BT.shake=.3; burst(BOSS_X,320,'#7fd8ff',20,300); }));
    once(f,'fall',2.2,()=>{ SFX.boom(); burst(BOSS_X,FLOOR-20,'#9aa',40,200,1.2,10); }); },
  slash(ctx,f,bk,bh,h){ drawAt(ctx,frame(h,f.t<1.4?'atk':'win'),HERO_X,FLOOR+4,f.t<1.4?250:270);
    const im=IMG[bk]; if(!im) return; const s=bh/im.height, w=im.width*s, x0=BOSS_X-w/2, y0=FLOOR+4-bh;
    const sep=f.t>1.3?ease((f.t-1.3)/1.2):0, fade=f.t>2.2?1-(f.t-2.2)/.6:1;
    const half=(sign)=>{ ctx.save(); ctx.globalAlpha=clamp(fade,0,1); ctx.translate(sign*sep*90, sep*(sign>0?60:-30)); ctx.rotate(sign*sep*.12); ctx.beginPath();
      if(sign<0){ ctx.moveTo(x0-20,y0-20); ctx.lineTo(x0+w+20,y0-20); ctx.lineTo(x0-20,y0+bh+20); } else { ctx.moveTo(x0+w+20,y0-20); ctx.lineTo(x0+w+20,y0+bh+20); ctx.lineTo(x0-20,y0+bh+20); }
      ctx.closePath(); ctx.clip(); ctx.drawImage(im,x0,y0,w,bh); ctx.restore(); };
    half(-1); half(1);
    [[.4,-1],[.85,1]].forEach(([t0,dir],i)=>{ const p=(f.t-t0)/.22; if(p>0&&p<1.6){ ctx.save(); ctx.strokeStyle='#7ff3ff'; ctx.shadowColor='#7ff3ff'; ctx.shadowBlur=24; ctx.lineWidth=8*(1.6-p); ctx.beginPath();
        if(dir<0){ ctx.moveTo(x0+w+40,y0-30); ctx.lineTo(x0+w+40-(w+80)*Math.min(1,p),y0-30+(bh+60)*Math.min(1,p)); } else { ctx.moveTo(x0-40,y0+bh*.2); ctx.lineTo(x0-40+(w+80)*Math.min(1,p),y0+bh*.2+bh*.5*Math.min(1,p)); }
        ctx.stroke(); ctx.restore(); } once(f,'c'+i,t0,()=>{ SFX.zap(); BT.shake=.2; burst(BOSS_X,FLOOR-bh/2,'#7ff3ff',24,320); }); }); },
  heli(ctx,f,bk,bh,h){ drawAt(ctx,frame(h,'win'),HERO_X,FLOOR+4-Math.abs(Math.sin(f.t*5))*10,270);
    const arrive=ease(Math.min(1,f.t/1.2)), lift=f.t>1.7?ease((f.t-1.7)/1.6):0;
    const hx=1100-(1100-BOSS_X)*arrive+lift*500, hy=90-lift*160;
    const by=FLOOR+4-lift*420, sc=1-lift*.5; const cableEnd=f.t<1.2?hy:Math.min(FLOOR-bh*.95, hy+(f.t-1.2)/.4*(FLOOR-bh*.95-hy));
    if(f.t>1.2){ ctx.strokeStyle='#ddd'; ctx.lineWidth=3; ctx.beginPath(); ctx.moveTo(hx,hy+40); ctx.lineTo(hx+(lift>0?0:0),lift>0?by-bh*sc*.95:cableEnd); ctx.stroke(); }
    drawAt(ctx,IMG[bk],BOSS_X+lift*500,by,bh*sc,{rot:Math.sin(f.t*4)*.08*lift});
    drawAt(ctx,IMG.item_heli,hx,hy+60,110,{rot:-.05});
    ctx.strokeStyle='rgba(255,255,255,.6)'; ctx.lineWidth=3; ctx.beginPath(); const rw=((f.t*30|0)%2)?120:60; ctx.moveTo(hx-rw,hy-2); ctx.lineTo(hx+rw,hy-2); ctx.stroke();
    once(f,'hook',1.6,()=>{ SFX.beep(); burst(BOSS_X,FLOOR-bh,'#fff',12,200); }); once(f,'go',1.8,()=>SFX.boom()); },
  gold(ctx,f,bk,bh,h){ drawAt(ctx,frame(h,f.t<2.6?'atk':'win'),HERO_X,FLOOR+4,f.t<2.6?250:270);
    drawAt(ctx,IMG.item_steth,HERO_X+20,FLOOR-280,90,{a:clamp(f.t*2,0,1)});
    for(let i=0;i<6;i++){ const p=((f.t*1.4)-i*.25); if(p>0&&p<1&&f.t<2){ ctx.save(); ctx.strokeStyle=`rgba(255,209,102,${1-p})`; ctx.lineWidth=6; ctx.beginPath(); ctx.ellipse(HERO_X+80+(BOSS_X-HERO_X-80)*p,300,30+p*60,60+p*120,0,0,7); ctx.stroke(); ctx.restore(); } }
    const g=f.t>1.5?Math.min(1,(f.t-1.5)/.8):0; if(f.t<2.7){ const shakeX=f.t<1.6?Math.sin(f.t*60)*5:0; drawAt(ctx,IMG[bk],BOSS_X+shakeX,FLOOR+4,bh); if(g>0) drawAt(ctx,tintOf(bk,'#e0a82a'),BOSS_X,FLOOR+4,bh,{a:g}); }
    once(f,'shatter',2.7,()=>{ SFX.boom(); SFX.win(); BT.shake=.5; burst(BOSS_X,FLOOR-bh/2,'#ffd166',70,520,1.6,9,'coin'); burst(BOSS_X,FLOOR-bh/2,'#fff3c4',30,360,1.2,6); }); },
  papers(ctx,f,bk,bh,h){ drawAt(ctx,IMG[bk],BOSS_X-Math.min(1,f.t/.6)*60,FLOOR+4,bh); const cover=Math.min(1,f.t/2.2);
    if(cover<.95) drawAt(ctx,frame(h,'hurt'),HERO_X,FLOOR+4,250,{sy:1-cover*.4});
    if(!f.sheets){ f.sheets=Array.from({length:70},(_,i)=>({x:HERO_X+(Math.random()-.5)*230,d:Math.random()*2.2,r:(Math.random()-.5)*1.2,land:FLOOR-6-(i/70)*190})); }
    for(const s of f.sheets){ const p=(f.t-s.d)/.6; if(p<=0) continue; const y=p>=1?s.land:-40+(s.land+40)*p; ctx.save(); ctx.translate(s.x,y); ctx.rotate(s.r+(p<1?Math.sin(p*9)*.4:0)); ctx.fillStyle='#f5f2ea'; ctx.fillRect(-26,-18,52,36); ctx.fillStyle='#9fb3b0'; for(let l=-10;l<14;l+=7) ctx.fillRect(-18,l,36,2); ctx.restore(); }
    once(f,'p',.1,()=>SFX.bad()); once(f,'thud',2.2,()=>{ SFX.boom(); BT.shake=.3; }); if(BT.revive) once(f,'rv',1.6,()=>startFx('hero','revive',reviveHero)); },
  blackout(ctx,f,bk,bh,h){ const dark=Math.min(.9,f.t/1.2); const faint=f.t>1.1?ease((f.t-1.1)/.6):0;
    drawAt(ctx,frame(h,'hurt'),HERO_X,FLOOR+4,250,{rot:-faint*Math.PI/2*.95});
    drawAt(ctx,IMG[bk],BOSS_X,FLOOR+4,bh); ctx.fillStyle=`rgba(0,0,0,${dark})`; ctx.fillRect(0,0,960,540);
    const ey=bossHeadY(bh); ctx.save(); ctx.globalAlpha=dark; ctx.fillStyle='#ff3040'; ctx.shadowColor='#ff3040'; ctx.shadowBlur=25; ctx.beginPath(); ctx.ellipse(BOSS_X-26,ey,10,6,0,0,7); ctx.ellipse(BOSS_X+26,ey,10,6,0,0,7); ctx.fill(); ctx.restore();
    if(faint>.5){ ctx.save(); ctx.font='34px Bungee, Impact, sans-serif'; ctx.fillStyle='#bff5e6'; for(let i=0;i<3;i++){ const p=((f.t*.8+i*.33)%1); ctx.globalAlpha=1-p; ctx.fillText('Z',HERO_X+60+p*40+i*14,FLOOR-80-p*90-i*10); } ctx.restore(); }
    once(f,'off',.2,()=>SFX.lose()); if(BT.revive) once(f,'rv',1.6,()=>startFx('hero','revive',reviveHero)); },
  overtime(ctx,f,bk,bh,h){ drawAt(ctx,IMG[bk],BOSS_X,FLOOR+4,bh); const sit=f.t>1.4?ease((f.t-1.4)/.8):0;
    drawAt(ctx,frame(h,'hurt'),HERO_X,FLOOR+4,250,{sx:Math.cos(f.t*10*(1-sit)),sy:1-sit*.35});
    const cx=HERO_X, cy=150; ctx.save(); ctx.fillStyle='#f5f2ea'; ctx.strokeStyle='#16282b'; ctx.lineWidth=6; ctx.beginPath(); ctx.arc(cx,cy,50,0,7); ctx.fill(); ctx.stroke();
    ctx.lineCap='round'; ctx.lineWidth=5; ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+Math.cos(f.t*14)*38,cy+Math.sin(f.t*14)*38); ctx.stroke(); ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(cx,cy); ctx.lineTo(cx+Math.cos(f.t*2)*24,cy+Math.sin(f.t*2)*24); ctx.stroke(); ctx.restore();
    for(let i=0;i<5;i++){ const a=f.t*4+i*1.256; ctx.fillStyle='#ffd166'; ctx.font='28px sans-serif'; ctx.fillText('★',HERO_X-14+Math.cos(a)*70,FLOOR-230+sit*80+Math.sin(a)*18); }
    once(f,'tick',.1,()=>SFX.beep()); if(BT.revive) once(f,'rv',1.6,()=>startFx('hero','revive',reviveHero)); },
  revive(ctx,f,bk,bh,h){ drawAt(ctx,IMG[bk],BOSS_X,FLOOR+4,bh); const up=f.t>.9?ease((f.t-.9)/.6):0;
    drawAt(ctx,frame(h,up>.5?'win':'hurt'),HERO_X,FLOOR+4,250+up*20,{rot:-(1-up)*Math.PI/2*.9});
    drawAt(ctx,IMG.item_def,HERO_X,FLOOR-200,80,{a:f.t<1?1:1-(f.t-1)});
    if(f.t>.4&&f.t<.7){ bolt(ctx,HERO_X-30,FLOOR-170,HERO_X,FLOOR-90,'#7fd8ff'); bolt(ctx,HERO_X+30,FLOOR-170,HERO_X,FLOOR-90,'#7fd8ff'); ctx.fillStyle='rgba(200,240,255,.3)'; ctx.fillRect(0,0,960,540); }
    once(f,'z',.4,()=>{ SFX.zap(); BT.shake=.3; }); once(f,'up',1.2,()=>{ SFX.win(); burst(HERO_X,FLOOR-120,'#5fe3c0',30,300); }); }
};

function drawBattleScene(ctx,t,dt,bk,bh,h){ const dead=BT.state==='win', fx=BT.fx;
  ctx.fillStyle='rgba(0,0,0,.3)'; ctx.beginPath(); ctx.ellipse(HERO_X,FLOOR,70,13,0,0,7); ctx.fill();
  if(!dead){ ctx.beginPath(); ctx.ellipse(BOSS_X,FLOOR,110,16,0,0,7); ctx.fill(); }
  if(fx){ fx.t+=dt; FX[fx.type](ctx,fx,bk,bh,h); return; }
  const bob=Math.sin(t*2.2)*6, breathe=1+Math.sin(t*2.2)*.015; let bx=BOSS_X;
  if(BT.bossAtk>0){ const p=1-BT.bossAtk/.8; bx-=Math.sin(Math.min(1,p*1.6)*Math.PI)*260; }
  if(BT.hurt>0) bx+=Math.sin(t*70)*6;
  if(!dead){ drawAt(ctx,IMG[bk],bx,FLOOR+4+bob*.3,bh,{sy:breathe}); if(BT.hurt>0&&((t*20|0)%2)) drawAt(ctx,tintOf(bk,'#ffffff'),bx,FLOOR+4+bob*.3,bh,{sy:breathe,a:.75}); }
  let hf='idle', hx=HERO_X;
  if(dead) hf='win'; else if(BT.state==='lose') hf='hurt';
  else if(BT.heroHurt>0){ hf='hurt'; hx-=Math.sin((1-BT.heroHurt/.6)*Math.PI)*30; }
  else if(BT.atk>0){ hf='atk'; hx+=Math.sin((1-BT.atk/.75)*Math.PI)*60; }
  const hy=FLOOR+4+(hf==='idle'?Math.sin(t*3)*2:0)+(hf==='win'?-Math.abs(Math.sin(t*5))*14:0);
  drawAt(ctx,frame(h,hf),hx,hy,hf==='idle'?260:hf==='win'?270:250,{sy:hf==='idle'?1+Math.sin(t*3)*.01:1,a:BT.state==='lose'?.75:(BT.heroHurt>0&&((t*20|0)%2)?.45:1)});
  if(BT.shot){ BT.shot.t+=dt; const p=BT.shot.t/.32; if(p<1){ const x=HERO_X+120+(BOSS_X-HERO_X-140)*p, y=330-Math.sin(p*Math.PI)*60, r=BT.shot.crit?26:18;
      const g=ctx.createRadialGradient(x,y,0,x,y,r*2); g.addColorStop(0,'#fff'); g.addColorStop(.35,'rgba(95,227,192,.9)'); g.addColorStop(1,'rgba(95,227,192,0)'); ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,r*2,0,7); ctx.fill();
      ctx.fillStyle='#fff'; ctx.fillRect(x-r*.6,y-r*.18,r*1.2,r*.36); ctx.fillRect(x-r*.18,y-r*.6,r*.36,r*1.2); } else BT.shot=null; }
  if(BT.bossAtk>0){ ctx.fillStyle=`rgba(239,77,77,${.16*BT.bossAtk})`; ctx.fillRect(0,0,960,540); } }
function drawArena(t,dt){ const cv=$('#cv-arena'),ctx=cv.getContext('2d'), bk=bossKey(BT.n), h=hero(), bh=BT.n===99?380:330;
  const sh=BT.shake>0?(Math.random()-.5)*16*BT.shake/.3:0; BT.shake=Math.max(0,BT.shake-dt);
  ctx.save(); ctx.translate(sh,sh*.5); ctx.drawImage(IMG.arena,-10,-6,980,552);
  drawBattleScene(ctx,t,dt,bk,bh,h); drawParts(ctx,dt); ctx.restore();
  if(BT.fx){ drawFxOverlay(ctx,BT.fx); if(BT.fx.t>=BT.fx.dur){ const end=BT.fx.onEnd; BT.fx=null; $('#bt-back').disabled=false; end&&end(); } }
  if(BT.state==='lose'&&!BT.fx){ ctx.fillStyle='rgba(60,0,20,.3)'; ctx.fillRect(0,0,960,540); }
  BT.hurt=Math.max(0,BT.hurt-dt); BT.heroHurt=Math.max(0,BT.heroHurt-dt); BT.atk=Math.max(0,BT.atk-dt); BT.bossAtk=Math.max(0,BT.bossAtk-dt); }
$('#bt-back').onclick=()=>{ SFX.blip(); goMap(); };

/* ---------- Simulado ---------- */
let QZ=null;
const SIM_SIZE = 40;
/* banco de casos clínicos (window.ATLS_SIM); sem banco, usa as questões dos chefões */
function simBank(){ const bank=(window.ATLS_SIM||[]).map(q=>Object.assign({src:q.n},q)); return bank.length?bank:CH.flatMap(c=>c.battle.map(b=>Object.assign({src:c.n},b))); }
/* sorteio em rodízio por capítulo, para cobrir o manual inteiro antes de repetir capítulo */
function drawSimPool(bank,size){ const byCh={}; for(const q of shuffle(bank)) (byCh[q.src]=byCh[q.src]||[]).push(q);
  const pool=[]; let lists=shuffle(Object.values(byCh)); while(pool.length<size && lists.some(l=>l.length)){ for(const l of lists){ if(l.length&&pool.length<size) pool.push(l.pop()); } lists=lists.filter(l=>l.length); }
  return shuffle(pool); }
function startQuiz(){ QZ={pool:drawSimPool(simBank(),SIM_SIZE), idx:0, res:[], answered:false, started:Date.now()}; show('s-quiz');
  $('#qz-h').textContent=`Simulado · ${QZ.pool.length} casos clínicos · 3 min por questão`; askQuiz(); }
function askQuiz(){ const q=$('#qz-box'); q.innerHTML=''; $('#qz-prog').innerHTML=QZ.pool.map((_,i)=>`<i class="${QZ.res[i]===1?'r':QZ.res[i]===0?'w':(i===QZ.idx?'c':'')}"></i>`).join('');
  if(QZ.idx>=QZ.pool.length) return endQuiz(); const Q=QZ.pool[QZ.idx]; QZ.answered=false;
  const opts=optionList(Q,(oi,b)=>answerQuiz(Q,oi,b,opts));
  q.append(el('span',{class:'eyebrow'},`Questão ${QZ.idx+1} de ${QZ.pool.length} · Capítulo ${Q.src}`), el('p',{class:'q'},Q.q), opts);
  startTimer(SIM_SECONDS, q, ()=>answerQuiz(Q,null,null,opts)); }
function answerQuiz(Q,oi,btn,opts){ if(QZ.answered) return; QZ.answered=true; stopTimer(); const ok=oi!=null&&oi===Q.c; QZ.res[QZ.idx]=ok?1:0; ok?SFX.ok():SFX.bad();
  const q=$('#qz-box'); q.append(revealAnswer(Q,btn,opts,ok)); const nb=el('button',{class:'btn-primary next-btn'},'Próxima (Enter)'); nb.onclick=()=>{ QZ.idx++; askQuiz(); }; q.append(nb); nb.focus({preventScroll:true}); }
function endQuiz(){ const ok=QZ.res.filter(v=>v===1).length, pct=Math.round(ok/QZ.pool.length*100); if(pct>(S.best.sim||0)){ S.best.sim=pct; save(); }
  pct>=80?SFX.win():SFX.lose();
  const by={}; QZ.pool.forEach((Q,i)=>{ by[Q.src]=by[Q.src]||[0,0]; by[Q.src][1]++; if(QZ.res[i]===1) by[Q.src][0]++; });
  const q=$('#qz-box'); q.innerHTML='';
  q.append(el('h3',{style:`color:${pct>=80?'var(--green)':'var(--red)'}`},`${pct}% · ${ok} de ${QZ.pool.length}`), el('p',{class:'muted'},`Tempo total: ${formatClock(Math.round((Date.now()-QZ.started)/1000))}. Meta de referência: 80% de acertos. Capítulos com erro aparecem com borda vermelha:`));
  q.append(el('div',{class:'result-grid'}, Object.keys(by).sort((a,b)=>a-b).map(n=>{ const [a,t]=by[n]; return `<div style="${a<t?'border-color:var(--red)':''}"><span>Cap. ${n} · ${chap(+n).t}</span><b>${a}/${t}</b></div>`; }).join('')));
  const row=el('div',{class:'row'}); const a=el('button',{class:'btn-primary'},'Novo simulado'); a.onclick=startQuiz; const b=el('button',{class:'next-btn'},'Voltar ao quadro'); b.onclick=goMap; row.append(a,b); q.append(row); checkRewards(); }
$('#qz-back').onclick=()=>{ SFX.blip(); goMap(); };

/* ---------- Teclado ---------- */
document.addEventListener('keydown',e=>{
  if(e.target.matches('textarea,input,select')) return;
  if(!$('#reward').hidden){ if(e.key==='Enter'||e.key==='Escape'){ e.preventDefault(); $('#rw-close').click(); } return; }
  if(e.key==='Escape' && !$('#modal').hidden){ $('#set-close').click(); return; }
  if(e.key==='Escape' && !$('#drawer').hidden){ $('#drawer').hidden=true; return; }
  if(e.key==='Escape' && !$('#zoom').hidden){ $('#zoom').hidden=true; return; }
  if(curScreen==='s-cards'){ if(e.code==='Space'){ e.preventDefault(); flipCard(); } else if(e.key==='ArrowRight') gradeCard(true); else if(e.key==='ArrowLeft') gradeCard(false); }
  else if(curScreen==='s-cut' && (e.code==='Space'||e.key==='Enter')){ e.preventDefault(); advance(); }
  else if((curScreen==='s-battle'||curScreen==='s-quiz') && /^[1-4a-dA-D]$/.test(e.key)){ const i='1234'.includes(e.key)?+e.key-1:'abcd'.indexOf(e.key.toLowerCase()); const btn=document.querySelectorAll(curScreen==='s-battle'?'#qbox .opts button':'#qz-box .opts button')[i]; if(btn&&!btn.disabled) btn.click(); }
  else if((curScreen==='s-battle'||curScreen==='s-quiz') && e.key==='Enter'){ const n=document.querySelector(curScreen==='s-battle'?'#qbox .next-btn':'#qz-box .next-btn'); if(n){ e.preventDefault(); n.click(); } }
});

/* ---------- Configurações ---------- */
function openSettings(){ SFX.blip(); $('#modal').hidden=false; $('#set-music').checked=S.set.music; $('#set-sfx').checked=S.set.sfx; $('#set-vol').value=S.set.vol; $('#set-speed').value=S.set.speed; $('#set-lock').checked=S.set.lock; $('#set-fx').checked=S.set.fx; $('#set-boss-time').value=String(S.set.bossTime); $('#set-close').focus(); }
$('#set-music').onchange=e=>{ S.set.music=e.target.checked; save(); audio(); S.set.music?musicOn():musicOff(); };
$('#set-sfx').onchange=e=>{ S.set.sfx=e.target.checked; save(); SFX.blip(); };
$('#set-vol').oninput=e=>{ S.set.vol=+e.target.value; save(); if(master) master.gain.value=S.set.vol; };
$('#set-speed').onchange=e=>{ S.set.speed=+e.target.value; save(); };
$('#set-lock').onchange=e=>{ S.set.lock=e.target.checked; save(); if(curScreen==='s-map') goMap(); };
$('#set-fx').onchange=e=>{ S.set.fx=e.target.checked; save(); };
$('#set-boss-time').onchange=e=>{ S.set.bossTime=+e.target.value; save(); };
let resetArmed=false;
$('#set-reset').onclick=()=>{ if(!resetArmed){ resetArmed=true; $('#set-reset').textContent='Toque de novo para confirmar'; setTimeout(()=>{resetArmed=false; $('#set-reset').textContent='Apagar progresso';},3000); return; }
  const set=S.set; S=JSON.parse(JSON.stringify(DEF)); S.set=set; save(); resetArmed=false; $('#set-reset').textContent='Apagar progresso'; toast('Progresso apagado'); $('#modal').hidden=true; goTitle(); };
$('#set-close').onclick=()=>{ $('#modal').hidden=true; if(curScreen==='s-map') goMap(); };
$('#modal').onclick=e=>{ if(e.target.id==='modal') $('#set-close').click(); };

/* ---------- Início ---------- */
if(!CH.length){ document.body.insertAdjacentHTML('afterbegin','<p style="color:#ef4d4d">Erro: conteúdo não carregado.</p>'); }
markDefaultsSeen();
Promise.all([loadArt(), document.fonts?document.fonts.load('40px Bungee').catch(()=>{}):0]).then(goTitle);
