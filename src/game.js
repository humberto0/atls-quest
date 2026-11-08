"use strict";
/* ============================================================
   ATLS Quest v2 — motor do jogo
   Dados: window.ATLS = [{n,t,boss,intro,text,recall,cards,battle}]
   Arte:  window.ART  = {chave: dataURI}
   ============================================================ */

/* ---------- Títulos oficiais (sumário do ATLS 11) ---------- */
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
  {t:'Seção I', s:'Avaliação, manejo e ressuscitação do paciente traumatizado (xABCDE)', ch:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]},
  {t:'Seção II', s:'Sistemas de trauma e cuidado centrado no paciente', ch:[16,17,18,19,20]},
  {t:'Seção III', s:'Lesões específicas e padrões de lesão: considerações especiais', ch:[21,22,23,24]},
];
const FINAL = {n:99, t:'Revisão geral · A Hora de Ouro', boss:{name:'Golden Hour',title:'o Titã da Hora de Ouro',color:'#ffc93c'},
  intro:'Cada minuto conta. Vinte e quatro capítulos, uma só hora. Vamos ver se você aguenta.'};

const $ = s => document.querySelector(s);
const el = (tag, attrs={}, html) => { const e=document.createElement(tag); for(const k in attrs){ if(k==='class') e.className=attrs[k]; else e.setAttribute(k,attrs[k]); } if(html!=null) e.innerHTML=html; return e; };
const shuffle = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; };
const clamp = (v,a,b)=>Math.max(a,Math.min(b,v));
const LETTERS = ['A','B','C','D'];

/* ---------- Arte ---------- */
const IMG = {};
function loadArt(){ const A=window.ART||{}; return Promise.all(Object.keys(A).map(k=>new Promise(res=>{ const im=new Image(); im.onload=im.onerror=()=>res(); im.src=A[k]; IMG[k]=im; }))); }
function bossKey(n){ return 'boss'+(n===99?'99':String(n).padStart(2,'0')); }
const WHITE = {};
function whiteOf(k){ if(WHITE[k]) return WHITE[k]; const im=IMG[k]; if(!im||!im.width) return null; const c=document.createElement('canvas'); c.width=im.width; c.height=im.height; const x=c.getContext('2d'); x.drawImage(im,0,0); x.globalCompositeOperation='source-atop'; x.fillStyle='#fff'; x.fillRect(0,0,c.width,c.height); return WHITE[k]=c; }
/* desenha imagem ancorada pelo centro-base */
function drawAt(ctx, im, cx, by, h, opt={}){ if(!im||!im.width) return; const s=h/im.height; const w=im.width*s*(opt.sx||1), hh=h*(opt.sy||1);
  ctx.save(); ctx.globalAlpha=opt.a==null?1:opt.a; if(opt.flip){ ctx.translate(cx,0); ctx.scale(-1,1); ctx.translate(-cx,0); }
  ctx.drawImage(im, cx-w/2, by-hh, w, hh); ctx.restore(); }

/* ---------- Salvamento ---------- */
const KEY='atlsquest11_v2';
const DEF={hero:null, seenIntro:false, ch:{}, set:{music:false,sfx:true,vol:.5,speed:2,lock:false}, best:{sim:0}, last:1};
let S = load();
function load(){ try{ const r=JSON.parse(localStorage.getItem(KEY)||'null'); if(r) return Object.assign({},DEF,r,{set:Object.assign({},DEF.set,r.set||{})}); }catch(e){} return JSON.parse(JSON.stringify(DEF)); }
function save(){ try{ localStorage.setItem(KEY,JSON.stringify(S)); }catch(e){} }
function P(n){ if(!S.ch[n]) S.ch[n]={rc:{}, fc:{}, boss:false, bossBest:0}; return S.ch[n]; }
function chap(n){ return n===99?FINAL:CH.find(c=>c.n===n); }
function recallPct(c){ const p=P(c.n); const k=Object.values(p.rc).filter(v=>v===1).length; return c.recall.length?k/c.recall.length:0; }
function cardsDone(c){ const p=P(c.n); return c.cards.filter((_,i)=>(p.fc[i]||0)>=3).length; }
function stars(c){ let s=0; if(recallPct(c)>=.75) s++; if(cardsDone(c)===c.cards.length) s++; if(P(c.n).boss) s++; return s; }
function unlocked(n){ if(!S.set.lock) return true; if(n===99) return CH.every(c=>P(c.n).boss); const i=CH.findIndex(c=>c.n===n); return i<=0 || P(CH[i-1].n).boss; }

/* ---------- Som (WebAudio) ---------- */
let AC=null, master=null, musicTimer=null;
function audio(){ if(!AC){ try{ AC=new (window.AudioContext||window.webkitAudioContext)(); master=AC.createGain(); master.connect(AC.destination);}catch(e){return null;} } master.gain.value=S.set.vol; if(AC.state==='suspended') AC.resume(); return AC; }
function tone(f,d=.1,type='square',v=.15,when=0){ const a=audio(); if(!a) return; const o=a.createOscillator(), g=a.createGain(); o.type=type; o.frequency.value=f; const t=a.currentTime+when; g.gain.setValueAtTime(v,t); g.gain.exponentialRampToValueAtTime(.0001,t+d); o.connect(g); g.connect(master); o.start(t); o.stop(t+d+.02); }
const SFX={
  blip(){ if(S.set.sfx) tone(660,.05,'square',.08); },
  ok(){ if(!S.set.sfx) return; tone(523,.08); tone(659,.08,'square',.15,.08); tone(784,.14,'square',.15,.16); },
  bad(){ if(!S.set.sfx) return; tone(220,.15,'sawtooth',.15); tone(150,.25,'sawtooth',.15,.12); },
  hit(){ if(!S.set.sfx) return; tone(880,.06,'square',.12); tone(120,.14,'square',.2,.05); tone(90,.18,'triangle',.2,.09); },
  win(){ if(!S.set.sfx) return; [523,659,784,1047,784,1047].forEach((f,i)=>tone(f,.14,'square',.14,i*.12)); },
  lose(){ if(!S.set.sfx) return; [392,330,262,196].forEach((f,i)=>tone(f,.22,'triangle',.18,i*.2)); },
  flip(){ if(S.set.sfx) tone(880,.04,'triangle',.08); }
};
const SONG=[220,262,330,262,196,247,294,247,175,220,262,220,196,247,294,330];
function musicOn(){ musicOff(); if(!S.set.music) return; let i=0; const step=()=>{ const f=SONG[i%SONG.length]; tone(f,.16,'triangle',.05); if(i%4===0) tone(f/2,.3,'square',.025); i++; }; step(); musicTimer=setInterval(step,240); }
function musicOff(){ if(musicTimer){clearInterval(musicTimer); musicTimer=null;} }

/* ---------- Telas e laço de animação ---------- */
let curScreen='s-title', rafs={};
function show(id){ document.querySelectorAll('.screen').forEach(s=>s.hidden=s.id!==id); curScreen=id; window.scrollTo({top:0}); for(const k in rafs) if(!id.includes(k)) stop(k); }
function toast(msg,ms=1800){ const t=$('#toast'); t.textContent=msg; t.hidden=false; clearTimeout(toast._t); toast._t=setTimeout(()=>t.hidden=true,ms); }
function loop(name, fn){ cancelAnimationFrame(rafs[name]); const t0=performance.now(); let last=t0; const f=t=>{ const dt=Math.min(.05,(t-last)/1000); last=t; fn((t-t0)/1000,dt); rafs[name]=requestAnimationFrame(f); }; rafs[name]=requestAnimationFrame(f); }
function stop(name){ cancelAnimationFrame(rafs[name]); delete rafs[name]; }

/* ---------- Personagens ---------- */
const HEROES = {
  elida:{ name:'Élida', origin:'Medicina · UEA · Manaus/AM', story:'Estuda com o estetoscópio no pescoço e o ATLS na ponta da língua. Não esquece uma dose de ácido tranexâmico.', stats:[.92,.75,.8], hearts:4, dmg:14,
    perk:'Vantagem: 4 vidas nos chefões.', key:'elida' },
  humberto:{ name:'Humberto', origin:'Dev Full Stack Sênior · São Luís → Manaus', story:'Trocou o debugger pelo estetoscópio por uma noite. Depura o xABCDE como quem depura código: na ordem, sem pular etapa.', stats:[.7,.95,.7], hearts:3, dmg:18,
    perk:'Vantagem: dano maior em cada acerto.', key:'humberto' }
};
const hero = () => HEROES[S.hero] || HEROES.elida;
const frame = (h,f) => IMG[h.key+'_'+f];

/* ---------- Partículas ---------- */
let PARTS=[];
function burst(x,y,color,n=18,spd=260,life=.7,size=6){ for(let i=0;i<n;i++){ const a=Math.random()*Math.PI*2, v=spd*(.3+Math.random()*.7); PARTS.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-80,life,max:life,color,size:size*(.5+Math.random())}); } }
function drawParts(ctx,dt){ PARTS=PARTS.filter(p=>(p.life-=dt)>0); for(const p of PARTS){ p.x+=p.vx*dt; p.y+=p.vy*dt; p.vy+=420*dt; ctx.globalAlpha=Math.max(0,p.life/p.max); ctx.fillStyle=p.color; const s=Math.round(p.size); ctx.fillRect(Math.round(p.x)-s/2,Math.round(p.y)-s/2,s,s); } ctx.globalAlpha=1; }

/* ---------- Título ---------- */
const TSTARS = Array.from({length:60},()=>[Math.random()*960,Math.random()*230,Math.random()*6]);
function drawTitle(t){ const c=$('#cv-title'), ctx=c.getContext('2d');
  const z=1.04+Math.sin(t*.15)*.02, w=960*z, h=540*z; ctx.drawImage(IMG.title,(960-w)/2+Math.sin(t*.1)*12,(540-h)/2,w,h);
  for(const [x,y,p] of TSTARS){ const a=Math.max(0,Math.sin(t*2+p)); if(a>.6){ ctx.fillStyle=`rgba(255,248,234,${a-.4})`; ctx.fillRect(x,y,2,2); ctx.fillRect(x-2,y+0.5,6,1); } }
  const g=ctx.createRadialGradient(480,300,200,480,300,620); g.addColorStop(0,'rgba(0,0,0,0)'); g.addColorStop(1,'rgba(5,3,15,.65)'); ctx.fillStyle=g; ctx.fillRect(0,0,960,540);
  ctx.fillStyle='rgba(0,0,0,.08)'; for(let y=0;y<540;y+=3) ctx.fillRect(0,y,960,1);
}
function goTitle(){ show('s-title'); loop('title',drawTitle); $('#btn-press').hidden=false; ['#btn-new','#btn-cont','#btn-set'].forEach(s=>$(s).hidden=true); }
$('#btn-press').onclick=()=>{ audio(); SFX.ok(); musicOn(); $('#btn-press').hidden=true; $('#btn-new').hidden=false; $('#btn-set').hidden=false; $('#btn-cont').hidden=!S.hero; ($('#btn-cont').hidden?$('#btn-new'):$('#btn-cont')).focus(); };
$('#btn-new').onclick=()=>{ SFX.blip(); goSelect(); };
$('#btn-cont').onclick=()=>{ SFX.blip(); goMap(); };
$('#btn-set').onclick=openSettings;

/* ---------- Seleção ---------- */
let pick='elida';
function goSelect(){ show('s-select'); pick=S.hero||'elida';
  const slots=$('#slots'); slots.innerHTML='';
  for(const id of Object.keys(HEROES)){ const h=HEROES[id]; const b=el('button',{class:'slot','data-hero':id,'aria-pressed':String(id===pick)});
    const im=el('img',{alt:''}); im.src=window.ART[h.key+'_face']; b.append(im, el('span',{class:'pix'},h.name));
    b.onclick=()=>{ pick=id; SFX.blip(); slots.querySelectorAll('.slot').forEach(s=>s.setAttribute('aria-pressed',String(s.dataset.hero===id))); detail(); };
    slots.append(b); }
  detail();
}
function detail(){ const h=HEROES[pick]; $('#d-name').textContent=h.name; $('#d-origin').textContent=h.origin; $('#d-story').textContent=h.story; $('#d-perk').textContent=h.perk;
  h.stats.forEach((v,i)=>$('#st'+i).style.width=(v*100)+'%'); $('#btn-pick').textContent='Jogar com '+h.name;
  $('#d-sprite').src=window.ART[h.key+'_idle']; }
$('#sel-back').onclick=()=>{ SFX.blip(); goTitle(); };
$('#btn-pick').onclick=()=>{ S.hero=pick; save(); SFX.ok(); if(!S.seenIntro) playCut(INTRO, ()=>{ S.seenIntro=true; save(); goMap(); }); else goMap(); };

/* ---------- Cutscene ---------- */
const INTRO=[
  {who:'Rádio do SAMU', text:'Central para o pronto-socorro: múltiplas vítimas a caminho. Uma com sangramento ativo na coxa. Chegada em quatro minutos.'},
  {who:'Dra. Aurora', face:'mentor', text:'Que bom que você chegou. Sou a Dra. Aurora, coordenadora do trauma. Esta noite vai ser longa.'},
  {who:'Dra. Aurora', face:'mentor', text:'O ATLS mudou. Agora é xABCDE: o x de hemorragia exsanguinante vem antes até da via aérea.'},
  {who:'Dra. Aurora', face:'mentor', text:'O mapa segue as três seções do manual, com 24 capítulos. Em cada um: leia e responda com suas palavras, fixe os cartões e derrote o chefão.'},
  {who:'HERO', face:'hero', text:'Pode deixar, Dra. Aurora. xABCDE na ponta da língua. Bora!'}
];
let cut=null;
function playCut(lines, done){ show('s-cut'); cut={lines,i:0,done,typing:false,timer:null}; loop('cut',drawCut); nextLine(); }
function drawCut(t){ const c=$('#cv-cut'),ctx=c.getContext('2d'); const im=IMG.title;
  // recorte do lado do hospital
  const sx=im.width*.42, sw=im.width*.58, sh=sw*400/960; ctx.drawImage(im,sx,im.height-sh,sw,sh,0,0,960,400);
  ctx.fillStyle='rgba(10,6,25,.35)'; ctx.fillRect(0,0,960,400);
  const g=ctx.createLinearGradient(0,250,0,400); g.addColorStop(0,'rgba(0,0,0,0)'); g.addColorStop(1,'rgba(0,0,0,.6)'); ctx.fillStyle=g; ctx.fillRect(0,250,960,150);
  const h=hero(), speaking=cut&&cut.lines[cut.i]?cut.lines[cut.i].face:null;
  ctx.fillStyle='rgba(0,0,0,.4)'; ctx.beginPath(); ctx.ellipse(300,388,70,12,0,0,7); ctx.fill(); ctx.beginPath(); ctx.ellipse(640,388,60,12,0,0,7); ctx.fill();
  drawAt(ctx, frame(h,'idle'), 300, 390, 300, {sy:1+Math.sin(t*3)*.008, a: speaking==='mentor'?.75:1});
  drawAt(ctx, IMG.mentor_body, 640, 390, 300, {sy:1+Math.sin(t*2.6+1)*.008, a: speaking==='hero'?.75:1});
}
function nextLine(){ const L=cut.lines[cut.i]; if(!L){ stop('cut'); const d=cut.done; cut=null; d(); return; }
  const h=hero(); $('#d-who').textContent=L.who==='HERO'?h.name:L.who; const f=$('#d-face2');
  if(L.face==='mentor'){ f.src=window.ART.mentor_face; f.hidden=false; } else if(L.face==='hero'){ f.src=window.ART[h.key+'_face']; f.hidden=false; } else f.hidden=true;
  const tx=$('#d-text'); tx.textContent=''; $('#d-next').hidden=true; cut.typing=true; let k=0; const sp=+S.set.speed;
  clearInterval(cut.timer); if(sp>=99){ tx.textContent=L.text; cut.typing=false; $('#d-next').hidden=false; return; }
  cut.timer=setInterval(()=>{ k+=sp; tx.textContent=L.text.slice(0,k); if(k%6<sp && S.set.sfx) tone(420+Math.random()*80,.02,'square',.03); if(k>=L.text.length){ clearInterval(cut.timer); cut.typing=false; $('#d-next').hidden=false; } },28);
}
function advance(){ if(!cut) return; const L=cut.lines[cut.i]; if(cut.typing){ clearInterval(cut.timer); $('#d-text').textContent=L.text; cut.typing=false; $('#d-next').hidden=false; return; } cut.i++; SFX.blip(); nextLine(); }
$('#dialog').onclick=advance; $('#cut-next').onclick=advance; $('#cut-skip').onclick=()=>{ if(!cut) return; clearInterval(cut.timer); cut.i=cut.lines.length; nextLine(); };

/* ---------- Mapa ---------- */
let sel=1;
function goMap(){ show('s-map'); if(!S.hero){ S.hero='elida'; save(); }
  const tot=CH.length, st=CH.reduce((a,c)=>a+stars(c),0), bosses=CH.filter(c=>P(c.n).boss).length;
  $('#map-hud').innerHTML=`<span class="chip gold">★ ${st} de ${tot*3}</span><span class="chip ok">Chefões ${bosses} de ${tot}</span><span class="chip">Plantonista: ${hero().name}</span><span class="chip">Melhor simulado: ${S.best.sim||0}%</span>${S.set.lock?'':'<span class="chip">Modo livre: tudo liberado</span>'}`;
  const tr=$('#trail'); tr.innerHTML='';
  for(const T of SECTIONS){ tr.append(el('h3',{},`${T.t} <small>${T.s}</small>`)); const g=el('div',{class:'nodes'});
    for(const n of T.ch){ const c=chap(n); if(c) g.append(nodeBtn(c)); } tr.append(g); }
  tr.append(el('h3',{},'Chefão final <small>todos os capítulos</small>')); const g=el('div',{class:'nodes'}); g.append(nodeBtn(FINAL,true)); tr.append(g);
  sel = chap(S.last)?S.last:(CH[0]?CH[0].n:1); renderDock();
}
function nodeBtn(c,final){ const lock=!unlocked(c.n); const s=final?(S.ch[99]&&S.ch[99].boss?3:0):stars(c);
  const b=el('button',{class:'node'+(final?' final':'')+(s===3?' done':'')+(lock?' locked':''),'data-n':c.n,'aria-current':String(c.n===S.last)});
  const ico=el('span',{class:'ico'}); const im=el('img',{alt:''}); im.src=window.ART[bossKey(c.n)]; ico.append(im);
  b.append(ico, el('span',{}, `<span class="num">${final?'FINAL':'Capítulo '+c.n}</span><span class="ttl">${c.t}</span><span class="stars" aria-label="${s} de 3 estrelas">${'★'.repeat(s)}${'☆'.repeat(3-s)}</span>`));
  b.onclick=()=>{ SFX.blip(); if(lock){ toast('Derrote o chefão anterior para liberar'); return; } sel=c.n; S.last=c.n; save(); document.querySelectorAll('.node').forEach(e=>e.setAttribute('aria-current',String(+e.dataset.n===c.n))); renderDock(); if(innerWidth<=820) $('#dock').scrollIntoView({behavior:'smooth',block:'start'}); };
  return b; }
function renderDock(){ const c=chap(sel), d=$('#dock'); d.innerHTML=''; if(!c) return;
  const cv=el('canvas',{width:640,height:300}); const x=cv.getContext('2d');
  x.drawImage(IMG.arena,0,40,960,450,0,0,640,300); x.fillStyle='rgba(10,6,25,.25)'; x.fillRect(0,0,640,300);
  x.fillStyle='rgba(0,0,0,.45)'; x.beginPath(); x.ellipse(170,282,55,9,0,0,7); x.fill(); x.beginPath(); x.ellipse(460,282,85,11,0,0,7); x.fill();
  drawAt(x, frame(hero(),'idle'), 170, 284, 210); drawAt(x, IMG[bossKey(c.n)], 460, 284, c.n===99?250:220);
  d.append(el('span',{class:'tag'}, c.n===99?'Chefão final':'Capítulo '+c.n), el('h3',{},c.t), cv, el('p',{class:'muted',style:'font-size:.9rem'}, `Chefão: <b style="color:${c.boss.color}">${c.boss.name}</b>, ${c.boss.title}`));
  if(c.n===99){ const all=CH.reduce((a,k)=>a+k.battle.length,0);
    d.append(el('p',{style:'font-size:.9rem'},`20 questões sorteadas entre as ${all} dos 24 capítulos. Você tem as mesmas vidas de sempre.`));
    const b=el('button',{class:'btn-red phase'},'<span>Enfrentar a Hora de Ouro</span><span>⚔</span>'); b.onclick=()=>startBattle(99); d.append(b); return; }
  const p=P(c.n), rp=Math.round(recallPct(c)*100), cd=cardsDone(c);
  const ph=(label,sub,done,fn,cls='')=>{ const b=el('button',{class:'phase '+cls},`<span>${label}<small>${sub}</small></span><span class="chip ${done?'ok':''}">${done?'✓':'·'}</span>`); b.onclick=fn; d.append(b); };
  ph('Fase 1 · Active Recall', `${c.text.length} seções · ${rp}% de acertos`, rp>=75, ()=>startRecall(c.n));
  ph('Fase 2 · Flashcards', `${cd} de ${c.cards.length} cartões dominados`, cd===c.cards.length, ()=>startCards(c.n));
  ph('Fase 3 · Chefão', p.boss?`Derrotado · melhor resultado: ${p.bossBest} ♥ restantes`:`${c.battle.length} questões · ${c.boss.name}`, p.boss, ()=>startBattle(c.n), 'btn-red');
}
$('#map-title').onclick=()=>{ SFX.blip(); goTitle(); };
$('#map-set').onclick=openSettings;
$('#map-sim').onclick=()=>startQuiz();

/* ---------- Fase 1: Active Recall ---------- */
let RC=null;
function startRecall(n){ const c=chap(n); RC={c}; show('s-recall'); $('#rc-h').textContent=c.t; $('#rc-tag').textContent=`Capítulo ${c.n} · Fase 1 · Active Recall`;
  const bl=$('#balloon'); bl.classList.remove('hidden-text'); $('#rc-hide').textContent='Esconder texto';
  bl.innerHTML=c.text.map(s=>`<section id="sec-${s.id}"><h4>${s.t}</h4>${s.b}</section>`).join('');
  const ql=$('#qlist'); ql.innerHTML=''; const p=P(n);
  c.recall.forEach((r,i)=>{ const st=p.rc[i]; const card=el('div',{class:'qcard'+(st===1?' right':st===0?' wrong':'')});
    card.append(el('p',{},`<b>${i+1}.</b> ${r.q}`)); const ta=el('textarea',{'aria-label':'Sua resposta para a pergunta '+(i+1),placeholder:'Responda com suas palavras…'}); card.append(ta);
    const ans=el('div',{class:'ans'},`<b>Gabarito:</b> ${r.a}`); ans.hidden=st==null; card.append(ans);
    const row=el('div',{class:'row'}); const bShow=el('button',{},'Ver gabarito'); const bFind=el('button',{},'Achar no texto'); const bOk=el('button',{class:'btn-teal'},'Acertei'); const bNo=el('button',{class:'btn-red'},'Errei');
    bOk.hidden=bNo.hidden=st==null;
    bShow.onclick=()=>{ SFX.flip(); ans.hidden=false; bOk.hidden=bNo.hidden=false; };
    bFind.onclick=()=>{ const s=document.getElementById('sec-'+r.s); if(!s) return; bl.classList.remove('hidden-text'); $('#rc-hide').textContent='Esconder texto'; bl.scrollTo({top:s.offsetTop-8,behavior:'smooth'}); if(innerWidth<=820) bl.scrollIntoView({behavior:'smooth'}); s.classList.add('flash'); setTimeout(()=>s.classList.remove('flash'),1400); };
    const mark=v=>{ p.rc[i]=v; save(); card.className='qcard '+(v?'right':'wrong'); v?SFX.ok():SFX.bad(); rcScore(); };
    bOk.onclick=()=>mark(1); bNo.onclick=()=>mark(0);
    row.append(bShow,bFind,bOk,bNo); card.append(row); ql.append(card); });
  rcScore();
}
function rcScore(){ const c=RC.c, p=P(c.n); const ans=Object.keys(p.rc).length, ok=Object.values(p.rc).filter(v=>v===1).length;
  $('#rc-score').textContent=`${ok} de ${c.recall.length} certas · ${ans} respondidas`; $('#rc-bar').style.width=(ok/c.recall.length*100)+'%';
  if(ans===c.recall.length && ok/c.recall.length>=.75 && !RC.toasted){ RC.toasted=true; toast('★ Fase 1 concluída!'); } }
$('#rc-hide').onclick=()=>{ const b=$('#balloon'); b.classList.toggle('hidden-text'); $('#rc-hide').textContent=b.classList.contains('hidden-text')?'Mostrar texto':'Esconder texto'; };
$('#rc-back').onclick=()=>{ SFX.blip(); goMap(); };

/* ---------- Fase 2: Flashcards ---------- */
let FC=null;
function startCards(n){ const c=chap(n); show('s-cards'); $('#fc-h').textContent=c.t; $('#fc-tag').textContent=`Capítulo ${c.n} · Fase 2 · Flashcards`;
  FC={c, queue:[], cur:-1, flipped:false}; refillCards(); nextCard(); }
function refillCards(){ const p=P(FC.c.n); FC.queue=shuffle(FC.c.cards.map((_,i)=>i).filter(i=>(p.fc[i]||0)<3)); }
function nextCard(){ const p=P(FC.c.n); if(!FC.queue.length) refillCards();
  if(!FC.queue.length){ FC.cur=-1; $('#card').classList.remove('flipped'); $('#fc-front').innerHTML='🏆 Baralho dominado!<br><small class="muted">Todos os cartões com 3 acertos seguidos.</small>'; $('#fc-backt').textContent=''; $('#fc-dots').innerHTML=''; ['#fc-wrong','#fc-right','#fc-flip'].forEach(s=>$(s).disabled=true); deck(); return; }
  FC.cur=FC.queue.shift(); FC.flipped=false; $('#card').classList.remove('flipped');
  const [f,b]=FC.c.cards[FC.cur]; setTimeout(()=>{ if(!FC.flipped) $('#fc-backt').innerHTML=b; },200); $('#fc-front').innerHTML=f;
  const lv=p.fc[FC.cur]||0; $('#fc-dots').innerHTML=[0,1,2].map(i=>`<i class="${i<lv?'on':''}"></i>`).join('');
  $('#fc-flip').disabled=false; $('#fc-wrong').disabled=$('#fc-right').disabled=true; deck(); }
function flipCard(){ if(!FC||FC.cur<0||FC.flipped) return; FC.flipped=true; $('#fc-backt').innerHTML=FC.c.cards[FC.cur][1]; $('#card').classList.add('flipped'); SFX.flip(); $('#fc-flip').disabled=true; $('#fc-wrong').disabled=$('#fc-right').disabled=false; }
function gradeCard(ok){ if(!FC||FC.cur<0||!FC.flipped) return; const p=P(FC.c.n); const i=FC.cur;
  if(ok){ p.fc[i]=(p.fc[i]||0)+1; SFX.ok(); if(p.fc[i]>=3) toast('Cartão dominado! ✓',1000); else FC.queue.splice(Math.min(FC.queue.length,2+Math.random()*3|0),0,i); }
  else { p.fc[i]=0; SFX.bad(); FC.queue.splice(Math.min(FC.queue.length,1+Math.random()*2|0),0,i); }
  save(); if(cardsDone(FC.c)===FC.c.cards.length && ok && p.fc[i]===3) toast('★ Fase 2 concluída!'); nextCard(); }
function deck(){ const p=P(FC.c.n); $('#deck').innerHTML=FC.c.cards.map((_,i)=>`<span class="s${Math.min(3,p.fc[i]||0)}${i===FC.cur?' cur':''}" title="Cartão ${i+1}"></span>`).join('');
  $('#fc-count').textContent=`${cardsDone(FC.c)} de ${FC.c.cards.length} dominados`; }
$('#card').onclick=flipCard; $('#card').onkeydown=e=>{ if(e.key==='Enter'){ e.preventDefault(); flipCard(); } };
$('#fc-flip').onclick=flipCard; $('#fc-right').onclick=()=>gradeCard(true); $('#fc-wrong').onclick=()=>gradeCard(false);
$('#fc-back').onclick=()=>{ SFX.blip(); goMap(); };
$('#fc-reset').onclick=()=>{ P(FC.c.n).fc={}; save(); refillCards(); nextCard(); toast('Baralho reiniciado'); };
document.addEventListener('keydown',e=>{
  if(e.target.matches('textarea,input,select')) return;
  if(curScreen==='s-cards'){ if(e.code==='Space'){ e.preventDefault(); flipCard(); } else if(e.key==='ArrowRight') gradeCard(true); else if(e.key==='ArrowLeft') gradeCard(false); }
  else if(curScreen==='s-cut' && (e.code==='Space'||e.key==='Enter')){ e.preventDefault(); advance(); }
  else if((curScreen==='s-battle'||curScreen==='s-quiz') && /^[1-4a-dA-D]$/.test(e.key)){ const i='1234'.includes(e.key)?+e.key-1:'abcd'.indexOf(e.key.toLowerCase()); const btn=document.querySelectorAll(curScreen==='s-battle'?'#qbox .opts button':'#qz-box .opts button')[i]; if(btn&&!btn.disabled) btn.click(); }
  else if((curScreen==='s-battle'||curScreen==='s-quiz') && e.key==='Enter'){ const n=document.querySelector(curScreen==='s-battle'?'#qbox .next-btn':'#qz-box .next-btn'); if(n){ e.preventDefault(); n.click(); } }
});

/* ---------- Fase 3: Chefão ---------- */
let BT=null;
function startBattle(n){ const c=chap(n); const h=hero();
  let pool; if(n===99){ pool=shuffle(CH.flatMap(k=>k.battle.map(b=>Object.assign({src:k.n},b)))).slice(0,20); } else pool=shuffle(c.battle.map(b=>Object.assign({src:c.n},b)));
  const maxHp=Math.round(pool.length*h.dmg*0.85);
  BT={c, n, pool, idx:0, hp:maxHp, maxHp, hearts:h.hearts, maxHearts:h.hearts, combo:0, res:[], over:false, answered:false, missed:[],
      hurt:0, heroHurt:0, atk:0, bossAtk:0, state:'fight', deadT:0, shot:null, shake:0};
  PARTS=[]; whiteOf(bossKey(n));
  show('s-battle'); $('#bt-title').textContent=`${c.boss.name}, ${c.boss.title}`; $('#bt-tag').textContent=n===99?'Chefão final · Revisão geral':`Capítulo ${c.n} · Fase 3 · Chefão`;
  $('#bh-name').textContent=c.boss.name; $('#hh-name').textContent=h.name; hud(); loop('battle',drawArena); renderProg();
  const q=$('#qbox'); q.innerHTML=''; q.append(el('p',{class:'pix',style:`color:${c.boss.color};font-size:1.1rem`},`${c.boss.name}:`), el('p',{},`“${c.intro}”`));
  const b=el('button',{class:'btn-gold next-btn'},'Lutar! (Enter)'); b.onclick=askBattle; q.append(b); b.focus({preventScroll:true});
}
function hud(){ $('#bh-bar').style.width=(BT.hp/BT.maxHp*100)+'%'; $('#bh-num').textContent=Math.max(0,BT.hp)+' / '+BT.maxHp;
  $('#hh-hearts').textContent='♥'.repeat(Math.max(0,BT.hearts))+'♡'.repeat(Math.max(0,BT.maxHearts-BT.hearts)); $('#hh-combo').textContent=BT.combo>=2?`Combo ×${BT.combo}`:''; }
function renderProg(){ $('#bt-prog').innerHTML=BT.pool.map((_,i)=>`<i class="${BT.res[i]===1?'r':BT.res[i]===0?'w':(i===BT.idx?'c':'')}"></i>`).join(''); }
function askBattle(){ if(BT.over) return; if(BT.idx>=BT.pool.length){
    if(BT.missed.length){ BT.pool=BT.pool.concat(shuffle(BT.missed)); BT.missed=[]; toast('O chefão resiste! Revanche nas que você errou.'); }
    else { BT.hp=0; return endBattle(true); } }
  BT.answered=false; renderProg(); const Q=BT.pool[BT.idx]; const q=$('#qbox'); q.innerHTML='';
  const order=shuffle([0,1,2,3]);
  q.append(el('span',{class:'tag'},`Questão ${BT.idx+1} de ${BT.pool.length}${BT.n===99?' · Capítulo '+Q.src:''}`), el('p',{class:'q'},Q.q));
  const opts=el('div',{class:'opts'}); order.forEach((oi,k)=>{ const b=el('button',{},`<b>${LETTERS[k]}</b><span>${Q.o[oi]}</span>`); b.dataset.oi=oi; b.onclick=()=>answerBattle(oi,b,opts); opts.append(b); }); q.append(opts);
  opts.querySelector('button').focus({preventScroll:true});
}
function answerBattle(oi,btn,opts){ if(BT.answered) return; BT.answered=true; const Q=BT.pool[BT.idx]; const ok=oi===Q.c;
  opts.querySelectorAll('button').forEach(b=>{ b.disabled=true; if(+b.dataset.oi===Q.c) b.classList.add('right'); }); if(!ok) btn.classList.add('wrong');
  const h=hero();
  if(ok){ BT.combo++; const crit=BT.combo>=3; const d=h.dmg+(crit?6:0); BT.atk=.75; BT.shot={t:0,crit};
    setTimeout(()=>{ BT.hp=Math.max(0,BT.hp-d); BT.hurt=.5; BT.shake=crit?.35:.2; SFX.hit(); burst(700,300,crit?'#ffe27a':'#fff3c4',crit?34:20,crit?380:280); burst(700,300,BT.c.boss.color||'#ff4d6d',12,220); float(crit?`CRÍTICO −${d}`:`−${d}`, '#ffc93c', 66, 22); hud(); },320);
    BT.res[BT.idx]=1; }
  else { BT.combo=0; BT.bossAtk=.8; setTimeout(()=>{ BT.hearts--; BT.heroHurt=.6; BT.shake=.3; SFX.bad(); burst(250,330,'#ff4d6d',22,300); float('−♥','#ff4d6d',22,40); hud(); },300); BT.res[BT.idx]=0; BT.missed.push(Q); }
  setTimeout(()=>{ hud(); renderProg(); },0);
  const q=$('#qbox'); q.append(el('div',{class:'explain'},`<b>${ok?'Acertou!':'Errou.'}</b> ${Q.e}`));
  const projHp=ok?BT.hp-(h.dmg+(BT.combo>=3?6:0)):BT.hp, projHearts=ok?BT.hearts:BT.hearts-1;
  const won=projHp<=0, lost=projHearts<=0;
  const nb=el('button',{class:'btn-gold next-btn'}, won?'Golpe final! (Enter)':lost?'Continuar (Enter)':'Próxima (Enter)'); nb.onclick=()=>{ if(won) endBattle(true); else if(lost) endBattle(false); else { BT.idx++; askBattle(); } }; q.append(nb); nb.focus({preventScroll:true});
}
function float(txt,color,xPct,yPct){ const f=el('span',{class:'dmg',style:`left:${xPct}%;top:${yPct}%;color:${color}`},txt); $('#floats').append(f); setTimeout(()=>f.remove(),1000); }
function endBattle(win){ BT.over=true; BT.hp=win?0:BT.hp; BT.hearts=win?BT.hearts:0; hud(); const c=BT.c; const q=$('#qbox'); q.innerHTML='';
  const right=BT.res.filter(v=>v===1).length, tot=BT.res.length;
  if(win){ SFX.win(); BT.state='win'; BT.deadT=0; burst(700,280,'#ffc93c',50,420,1.2,8); burst(700,280,'#ffffff',30,300,1,5);
    const p=P(BT.n); const first=!p.boss; p.boss=true; p.bossBest=Math.max(p.bossBest||0,BT.hearts); S.last=BT.n; save();
    q.append(el('h3',{style:'color:var(--gold)'},`🏆 ${c.boss.name} derrotado!`), el('p',{},`Você acertou ${right} de ${tot} e terminou com ${BT.hearts} ♥.${first?' Estrela do chefão conquistada!':''}`));
  } else { SFX.lose(); BT.state='lose'; q.append(el('h3',{style:'color:var(--red)'},'Plantão perdido…'), el('p',{},`${c.boss.name} venceu desta vez. Você acertou ${right} de ${tot}. Revise o capítulo (Fases 1 e 2) e tente de novo.`)); }
  const row=el('div',{class:'row'}); const again=el('button',{class:'btn-gold'},'Lutar de novo'); again.onclick=()=>startBattle(BT.n); const back=el('button',{class:'next-btn'},'Voltar ao mapa'); back.onclick=goMap; row.append(again,back);
  if(!win && BT.n!==99){ const r=el('button',{},'Revisar (Fase 1)'); r.onclick=()=>startRecall(BT.n); row.append(r); }
  q.append(row);
}
const HERO_X=250, BOSS_X=700, FLOOR=500;
function drawArena(t,dt){ const cv=$('#cv-arena'),ctx=cv.getContext('2d'); const c=BT.c, bk=bossKey(BT.n), h=hero();
  const sh=BT.shake>0?(Math.random()-.5)*16*BT.shake/.3:0; BT.shake=Math.max(0,BT.shake-dt);
  ctx.save(); ctx.translate(sh, sh*.5);
  ctx.drawImage(IMG.arena,-10,-6,980,552);
  ctx.fillStyle='rgba(10,6,25,.18)'; ctx.fillRect(0,0,960,540);
  // sombras
  ctx.fillStyle='rgba(0,0,0,.45)'; ctx.beginPath(); ctx.ellipse(HERO_X,FLOOR,70,13,0,0,7); ctx.fill();
  const dead=BT.state==='win'; if(dead) BT.deadT+=dt;
  if(!dead || BT.deadT<1.6){ ctx.beginPath(); ctx.ellipse(BOSS_X,FLOOR,110*(dead?Math.max(0,1-BT.deadT/1.6):1),16,0,0,7); ctx.fill(); }
  // chefão
  const bob=Math.sin(t*2.2)*6, breathe=1+Math.sin(t*2.2)*.015; let bx=BOSS_X, by=FLOOR+4;
  if(BT.bossAtk>0){ const p=1-BT.bossAtk/.8; bx-=Math.sin(Math.min(1,p*1.6)*Math.PI)*260; }
  if(BT.hurt>0) bx+=Math.sin(t*70)*6;
  const bh=BT.n===99?380:330;
  if(dead){ const k=Math.min(1,BT.deadT/1.6); if(k<1){ const flick=((t*24|0)%2)?1:.35; drawAt(ctx,IMG[bk],bx+Math.sin(t*50)*6*(1-k),by+k*40,bh*(1-k*.25),{a:(1-k)*flick,sy:1-k*.3}); if(Math.random()<.5) burst(bx+(Math.random()-.5)*160,by-Math.random()*bh*.7,Math.random()<.5?'#ffc93c':(c.boss.color||'#fff'),3,160,.6,6); } }
  else { drawAt(ctx,IMG[bk],bx,by+bob*.3,bh,{sy:breathe}); if(BT.hurt>0 && ((t*20|0)%2)){ drawAt(ctx,whiteOf(bk),bx,by+bob*.3,bh,{sy:breathe,a:.75}); } }
  // herói
  let hf='idle', hx=HERO_X;
  if(BT.state==='win') hf='win'; else if(BT.state==='lose') hf='hurt';
  else if(BT.heroHurt>0){ hf='hurt'; hx-=Math.sin((1-BT.heroHurt/.6)*Math.PI)*30; }
  else if(BT.atk>0){ hf='atk'; hx+=Math.sin((1-BT.atk/.75)*Math.PI)*60; }
  const hh=frame(h,hf); const hy=FLOOR+4+(hf==='idle'?Math.sin(t*3)*2:0)+(hf==='win'?-Math.abs(Math.sin(t*5))*14:0);
  ctx.save(); if(BT.state==='lose') ctx.globalAlpha=.7; if(BT.heroHurt>0 && ((t*20|0)%2)) ctx.globalAlpha=.45;
  drawAt(ctx,hh,hx,hy,hf==='idle'?260:hf==='win'?270:250,{sy:hf==='idle'?1+Math.sin(t*3)*.01:1}); ctx.restore();
  // projétil
  if(BT.shot){ BT.shot.t+=dt; const p=BT.shot.t/.32; if(p<1){ const x=HERO_X+120+(BOSS_X-HERO_X-140)*p, y=330-Math.sin(p*Math.PI)*60; const r=BT.shot.crit?26:18;
      const g=ctx.createRadialGradient(x,y,0,x,y,r*2); g.addColorStop(0,'rgba(255,255,255,1)'); g.addColorStop(.3,'rgba(255,214,90,.9)'); g.addColorStop(1,'rgba(255,140,40,0)'); ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,r*2,0,7); ctx.fill();
      ctx.fillStyle='#fff'; ctx.fillRect(x-r*.6,y-r*.18,r*1.2,r*.36); ctx.fillRect(x-r*.18,y-r*.6,r*.36,r*1.2); if(Math.random()<.8) burst(x,y,'#ffe27a',2,80,.4,5); }
    else BT.shot=null; }
  // ataque do chefão: aura
  if(BT.bossAtk>0){ ctx.fillStyle=`rgba(255,40,80,${.18*BT.bossAtk})`; ctx.fillRect(0,0,960,540); }
  drawParts(ctx,dt);
  ctx.restore();
  if(BT.state==='lose'){ ctx.fillStyle='rgba(60,0,20,.35)'; ctx.fillRect(0,0,960,540); }
  BT.hurt=Math.max(0,BT.hurt-dt); BT.heroHurt=Math.max(0,BT.heroHurt-dt); BT.atk=Math.max(0,BT.atk-dt); BT.bossAtk=Math.max(0,BT.bossAtk-dt);
}
$('#bt-back').onclick=()=>{ SFX.blip(); goMap(); };

/* ---------- Simulado ---------- */
let QZ=null;
function startQuiz(){ const pool=[]; for(const c of CH){ shuffle(c.battle).slice(0,2).forEach(b=>pool.push(Object.assign({src:c.n},b))); }
  QZ={pool:shuffle(pool).slice(0,40), idx:0, res:[], answered:false}; show('s-quiz'); $('#qz-h').textContent=`Simulado ATLS · ${QZ.pool.length} questões`; askQuiz(); }
function askQuiz(){ const q=$('#qz-box'); q.innerHTML=''; $('#qz-prog').innerHTML=QZ.pool.map((_,i)=>`<i class="${QZ.res[i]===1?'r':QZ.res[i]===0?'w':(i===QZ.idx?'c':'')}"></i>`).join('');
  if(QZ.idx>=QZ.pool.length) return endQuiz(); const Q=QZ.pool[QZ.idx]; QZ.answered=false; const order=shuffle([0,1,2,3]);
  q.append(el('span',{class:'tag'},`Questão ${QZ.idx+1} de ${QZ.pool.length} · Capítulo ${Q.src}`), el('p',{class:'q'},Q.q));
  const opts=el('div',{class:'opts'}); order.forEach((oi,k)=>{ const b=el('button',{},`<b>${LETTERS[k]}</b><span>${Q.o[oi]}</span>`); b.dataset.oi=oi;
    b.onclick=()=>{ if(QZ.answered) return; QZ.answered=true; const ok=oi===Q.c; QZ.res[QZ.idx]=ok?1:0; ok?SFX.ok():SFX.bad();
      opts.querySelectorAll('button').forEach(x=>{ x.disabled=true; if(+x.dataset.oi===Q.c) x.classList.add('right'); }); if(!ok) b.classList.add('wrong');
      q.append(el('div',{class:'explain'},`<b>${ok?'Certo.':'Errado.'}</b> ${Q.e}`)); const nb=el('button',{class:'btn-gold next-btn'},'Próxima (Enter)'); nb.onclick=()=>{ QZ.idx++; askQuiz(); }; q.append(nb); nb.focus({preventScroll:true}); };
    opts.append(b); }); q.append(opts); }
function endQuiz(){ const ok=QZ.res.filter(v=>v===1).length, pct=Math.round(ok/QZ.pool.length*100); if(pct>(S.best.sim||0)){ S.best.sim=pct; save(); }
  pct>=80?SFX.win():SFX.lose();
  const by={}; QZ.pool.forEach((Q,i)=>{ by[Q.src]=by[Q.src]||[0,0]; by[Q.src][1]++; if(QZ.res[i]===1) by[Q.src][0]++; });
  const q=$('#qz-box'); q.innerHTML='';
  q.append(el('h3',{style:`color:${pct>=80?'var(--teal)':'var(--red)'}`},`${pct}% · ${ok} de ${QZ.pool.length}`), el('p',{class:'muted'},'Meta de referência: 80% de acertos, a nota de aprovação da prova escrita do ATLS. Capítulos com erro aparecem com borda vermelha:'));
  q.append(el('div',{class:'result-grid'}, Object.keys(by).sort((a,b)=>a-b).map(n=>{ const [a,t]=by[n]; return `<div style="${a<t?'border-color:var(--red)':''}"><span>Cap. ${n} · ${chap(+n).t}</span><b>${a}/${t}</b></div>`; }).join('')));
  const row=el('div',{class:'row'}); const a=el('button',{class:'btn-gold'},'Novo simulado'); a.onclick=startQuiz; const b=el('button',{class:'next-btn'},'Voltar ao mapa'); b.onclick=goMap; row.append(a,b); q.append(row); }
$('#qz-back').onclick=()=>{ SFX.blip(); goMap(); };

/* ---------- Configurações ---------- */
function openSettings(){ SFX.blip(); const m=$('#modal'); m.hidden=false; $('#set-music').checked=S.set.music; $('#set-sfx').checked=S.set.sfx; $('#set-vol').value=S.set.vol; $('#set-speed').value=S.set.speed; $('#set-lock').checked=S.set.lock; $('#set-close').focus(); }
$('#set-music').onchange=e=>{ S.set.music=e.target.checked; save(); audio(); S.set.music?musicOn():musicOff(); };
$('#set-sfx').onchange=e=>{ S.set.sfx=e.target.checked; save(); SFX.blip(); };
$('#set-vol').oninput=e=>{ S.set.vol=+e.target.value; save(); if(master) master.gain.value=S.set.vol; };
$('#set-speed').onchange=e=>{ S.set.speed=+e.target.value; save(); };
$('#set-lock').onchange=e=>{ S.set.lock=e.target.checked; save(); if(curScreen==='s-map') goMap(); };
let resetArmed=false;
$('#set-reset').onclick=()=>{ if(!resetArmed){ resetArmed=true; $('#set-reset').textContent='Toque de novo para confirmar'; setTimeout(()=>{resetArmed=false; $('#set-reset').textContent='Apagar progresso';},3000); return; }
  const set=S.set; S=JSON.parse(JSON.stringify(DEF)); S.set=set; save(); resetArmed=false; $('#set-reset').textContent='Apagar progresso'; toast('Progresso apagado'); $('#modal').hidden=true; goTitle(); };
$('#set-close').onclick=()=>{ $('#modal').hidden=true; if(curScreen==='s-map') goMap(); };
$('#modal').onclick=e=>{ if(e.target.id==='modal') $('#set-close').click(); };
document.addEventListener('keydown',e=>{ if(e.key==='Escape' && !$('#modal').hidden) $('#set-close').click(); });

/* ---------- Início ---------- */
if(!CH.length){ document.body.insertAdjacentHTML('afterbegin','<p style="color:#ff4d6d">Erro: conteúdo não carregado.</p>'); }
loadArt().then(goTitle);
