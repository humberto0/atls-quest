window.ATLS = (window.ATLS||[]).concat([
/* ================= CAP 1 ================= */
{
  n: 1,
  t: 'Avaliação inicial: exame primário',
  boss: { name:'Doutor Caos', title:'o Desordenador da Sala Vermelha', color:'#ffc93c', shape:'golem' },
  intro: 'Cinco vítimas, um pager apitando e nenhuma ordem! Vamos ver se o seu xABCDE aguenta o meu caos.',
  text: [
    {id:'c01-a', t:'Preparação e triagem', b:`
<p>A avaliação inicial começa <b>antes</b> do paciente chegar: fase pré-hospitalar (coordenação com o SME, informações do evento) e fase hospitalar (sala preparada, equipe paramentada, sangue disponível, aquecedores, monitores).</p>
<p>No pré-hospitalar, a passagem estruturada usa o <b>MIST</b>: Mecanismo, Injúrias (<i>injuries</i>, lesões), Sinais vitais, Tratamento realizado.</p>
<p>A <b>triagem</b> ordena o atendimento conforme a gravidade e os recursos disponíveis.</p>
<div class="mais">Novo no ATLS 11: a triagem de campo segue a diretriz nacional de 2021, com critérios <b>Vermelhos</b> e <b>Amarelos</b>, e não mais passos sequenciais.</div>`},
    {id:'c01-b', t:'O que mudou: xABCDE', b:`
<p>O exame primário é <b>avaliação e ressuscitação simultâneas</b>, na ordem de quem mata primeiro:</p>
<ul><li><b>x</b> – controle da hemorragia e<b>x</b>sanguinante e<b>x</b>terna</li><li><b>A</b> – via aérea com restrição do movimento da coluna</li><li><b>B</b> – respiração e ventilação</li><li><b>C</b> – circulação</li><li><b>D</b> – disfunção neurológica (disability)</li><li><b>E</b> – exposição e controle do ambiente</li></ul>
<div class="mais">Novo no ATLS 11: o <b>x</b> entra antes da via aérea. Sangramento externo maciço mata em minutos e se controla com as mãos e um torniquete.</div>
<div class="pega">Pegadinha: com equipe completa os passos acontecem em paralelo. A sequência serve para priorizar, não para esperar.</div>`},
    {id:'c01-c', t:'Ressuscitação no exame primário', b:`
<p>No choque hemorrágico, <b>sangue e hemoderivados são preferidos</b> para a ressuscitação. Cristaloide deve ser minimizado, no máximo cerca de <b>1 L</b> como ponte até o sangue chegar.</p>
<p>O <b>lactato</b> pode ser usado para acompanhar a resposta à ressuscitação.</p>
<p>Paciente hipotenso que precisa de via aérea: primeiro manobras básicas de via aérea e <b>volume/sangue</b>, depois a sequência rápida (SRI). Um vasopressor temporário pode contrapor a hipotensão causada pela SRI.</p>
<div class="mais">Novo no ATLS 11: "ressuscite antes de intubar" no paciente em choque, para evitar hipotensão e parada peri-intubação.</div>`},
    {id:'c01-d', t:'Adjuntos ao exame primário', b:`
<p>Adjuntos ajudam a avaliar sem atrasar a ressuscitação:</p>
<ul><li>Monitor cardíaco, oximetria, PA, <b>capnografia (ETCO2)</b></li><li>Gasometria e lactato</li><li>Sonda urinária e gástrica, quando não contraindicadas</li><li><b>eFAST</b>, RX de tórax e de pelve em AP</li></ul>
<p>Para localizar sangramento oculto, lembre <b>"four and the floor"</b>: tórax, abdome, pelve/retroperitônio, ossos longos e o chão (perda externa).</p>
<div class="pega">Pegadinha: sangue no meato uretral, equimose perineal ou suspeita de lesão de uretra contraindicam a sonda vesical antes de investigar.</div>`},
    {id:'c01-e', t:'Reavaliação, transferência e prevenção', b:`
<p>Reavalie sempre que o paciente piorar: volte ao <b>x</b>. O exame secundário só começa quando o primário está completo e os sinais vitais tendem a normalizar.</p>
<p>Se o hospital não tiver o recurso definitivo, decida a <b>transferência cedo</b>. Não atrase com exames que não mudam a conduta.</p>
<div class="mais">Novo no ATLS 11: mnemônico de transferência <b>S-xABCDE-BAR</b> e os <b>3 Es</b> da prevenção (Educação, Engenharia/Ambiente, Enforcement) apresentados já na avaliação inicial. Há também uma nova tabela-resumo do exame primário.</div>`}
  ],
  recall: [
    {q:'O que significa o "x" do xABCDE e por que ele vem antes da via aérea?', a:'Controle da hemorragia exsanguinante externa. Sangramento externo maciço mata em minutos e se controla rapidamente com pressão e torniquete.', s:'c01-b'},
    {q:'Como a triagem de campo do ATLS 11 está organizada?', a:'Pela diretriz nacional de 2021, com critérios Vermelhos e Amarelos, e não mais em passos sequenciais.', s:'c01-a'},
    {q:'Qual mnemônico organiza a passagem do pré-hospitalar e o que significa?', a:'MIST: Mecanismo, Injúrias (lesões), Sinais vitais, Tratamento realizado.', s:'c01-a'},
    {q:'Qual é o fluido preferido na ressuscitação do choque hemorrágico e qual o papel do cristaloide?', a:'Sangue e hemoderivados. Cristaloide é minimizado, cerca de 1 L no máximo como ponte.', s:'c01-c'},
    {q:'Qual exame laboratorial ajuda a monitorar a ressuscitação?', a:'O lactato (e a gasometria/déficit de base).', s:'c01-c'},
    {q:'O que fazer antes da sequência rápida num paciente hipotenso?', a:'Manobras básicas de via aérea e reposição com volume/sangue; vasopressor temporário pode contrapor a hipotensão pós-SRI.', s:'c01-c'},
    {q:'Quais são as fontes de sangramento do "four and the floor"?', a:'Tórax, abdome, pelve/retroperitônio, ossos longos e o chão (sangramento externo).', s:'c01-d'},
    {q:'Quando iniciar o exame secundário?', a:'Após completar o exame primário, com ressuscitação em andamento e sinais vitais tendendo à normalização.', s:'c01-e'}
  ],
  cards: [
    ['xABCDE: o que é o x?','Controle da hemorragia exsanguinante externa.'],
    ['Triagem de campo no ATLS 11','Diretriz 2021: critérios Vermelhos e Amarelos.'],
    ['MIST','Mecanismo, Injúrias, Sinais vitais, Tratamento.'],
    ['Fluido preferido no choque hemorrágico','Sangue e hemoderivados.'],
    ['Limite de cristaloide como ponte','Cerca de 1 L, minimizado.'],
    ['Marcador para monitorar ressuscitação','Lactato.'],
    ['Hipotenso que precisa de SRI','Ressuscitar antes; vasopressor temporário se hipotensão pós-SRI.'],
    ['"Four and the floor"','Tórax, abdome, pelve/retroperitônio, ossos longos + chão.'],
    ['Contraindicação à sonda vesical antes de investigar','Suspeita de lesão de uretra (sangue no meato, equimose perineal).'],
    ['Paciente piorou durante o atendimento','Reavaliar a partir do x do exame primário.']
  ],
  battle: [
    {q:'Motociclista chega com sangramento em jato na coxa, gemendo e com SpO2 92%. Qual a primeira ação?', o:['Intubação em sequência rápida','Torniquete/pressão direta na coxa','RX de tórax','Acesso central'], c:1, e:'No xABCDE, a hemorragia exsanguinante externa é controlada antes da via aérea.'},
    {q:'No ATLS 11, a triagem de campo é baseada em:', o:['Passos sequenciais fisiológico-anatômico-mecanismo','Apenas no Escore de Trauma Revisado','Critérios Vermelhos e Amarelos da diretriz de 2021','Somente idade e comorbidades'], c:2, e:'O ATLS 11 adotou a diretriz nacional de 2021 com critérios Vermelhos e Amarelos.'},
    {q:'Paciente hipotenso após trauma fechado, sem sangue disponível ainda. Conduta mais adequada com fluidos:', o:['2 L de cristaloide em bolus rápido','Até cerca de 1 L de cristaloide como ponte e sangue assim que possível','Coloide 1 L','Nenhum fluido até chegar sangue'], c:1, e:'Cristaloide é minimizado e serve só de ponte; sangue é preferido.'},
    {q:'Qual exame é citado para monitorar a progressão da ressuscitação?', o:['Hemoglobina isolada','Lactato','Troponina','Amilase'], c:1, e:'O lactato acompanha a perfusão tecidual e a resposta à ressuscitação.'},
    {q:'Vítima de queda com PA 78/40 precisa de via aérea definitiva. O que o ATLS 11 enfatiza?', o:['Intubar imediatamente sem preparo','Ressuscitar antes da SRI e ter vasopressor pronto para hipotensão','Fazer cricotireoidostomia direto','Usar só ventilação com máscara até chegar à UTI'], c:1, e:'Hipotensão e parada peri-intubação são riscos; otimize hemodinâmica antes da SRI.'},
    {q:'Qual NÃO faz parte do "four and the floor"?', o:['Tórax','Pelve/retroperitônio','Crânio (sangramento intracraniano)','Ossos longos'], c:2, e:'Sangramento intracraniano não causa choque hemorrágico no adulto; as fontes são tórax, abdome, pelve, ossos longos e chão.'},
    {q:'Achado que contraindica sondagem vesical antes de investigação:', o:['Diurese baixa','Sangue no meato uretral','Abdome distendido','Hematúria microscópica'], c:1, e:'Sangue no meato sugere lesão uretral; investigar com uretrografia antes.'},
    {q:'Durante o exame secundário o paciente fica hipotenso. Próximo passo:', o:['Terminar o exame secundário','Pedir TC de corpo inteiro','Retornar ao exame primário começando pelo x','Aguardar resultado do hemograma'], c:2, e:'Qualquer deterioração exige reavaliação do exame primário.'}
  ]
},
/* ================= CAP 2 ================= */
{
  n: 2,
  t: 'Equipe de reanimação e comunicação',
  boss: { name:'Ruído', title:'o Senhor da Comunicação Truncada', color:'#a77bff', shape:'ghost' },
  intro: 'Quem pediu o sangue? Alguém? NINGUÉM? Na minha sala, ordem solta no ar vira eco.',
  text: [
    {id:'c02-a', t:'Conceitos-chave da equipe', b:`
<p>Uma boa equipe de trauma depende de cinco pilares:</p>
<ul><li><b>Liderança e seguimento</b> (followership): o líder coordena; os membros executam e também alertam.</li><li><b>Consciência situacional</b>: saber o que está acontecendo e prever o que vem.</li><li><b>Comunicação verbal</b> clara.</li><li><b>Tomada de decisão</b>.</li><li><b>Gestão de tarefas</b>.</li></ul>
<div class="pega">Pegadinha: o líder ideal fica com as mãos livres para enxergar o todo, sem se prender a um procedimento.</div>`},
    {id:'c02-b', t:'As seis fases do cuidado', b:`
<ol><li><b>Planejamento prévio</b> (preplanning)</li><li><b>Huddle pré-chegada</b>: papéis, plano, equipamentos</li><li><b>Passagem na chegada</b></li><li><b>Avaliação inicial</b></li><li><b>Passagem na saída</b> (para CC, UTI ou outro hospital)</li><li><b>Debriefing</b> do evento</li></ol>
<div class="mais">Novo no ATLS 11: o cuidado da equipe é descrito em seis fases, do planejamento ao debriefing.</div>`},
    {id:'c02-c', t:'A passagem na chegada', b:`
<p>Começa com <b>"time out / all quiet"</b>: todos param e escutam o relato do pré-hospitalar, sem mexer no paciente (exceto se houver ameaça imediata).</p>
<p>O relato pode seguir o <b>IMIST-AMBO</b>: Identificação, Mecanismo, Injúrias, Sinais, Tratamento – Alergias, Medicações, Background (história), Outros.</p>
<div class="mais">Novo no ATLS 11: "time out / all quiet" e uma nova figura com o IMIST-AMBO.</div>`},
    {id:'c02-d', t:'Os 3 Cs e a ferramenta CUS', b:`
<p><b>3 Cs</b> da comunicação:</p>
<ul><li><b>Citar nomes</b> (chamar a pessoa pelo nome)</li><li><b>Clareza</b> da instrução</li><li><b>Comunicação em alça fechada</b>: quem recebe repete e confirma quando terminou</li></ul>
<p><b>CUS</b> é a ferramenta para qualquer membro levantar um alerta, em escalada: <b>C</b>oncerned (estou preocupado), <b>U</b>ncomfortable (estou desconfortável), <b>S</b>afety issue (é questão de segurança).</p>
<div class="pega">Pegadinha: alça fechada não é só repetir a ordem; inclui avisar quando a tarefa foi concluída.</div>`},
    {id:'c02-e', t:'Debriefing: TAKE STOCK', b:`
<p>Depois do atendimento, a equipe faz um <b>debriefing</b> curto e sem culpa para aprender com o caso e cuidar das pessoas.</p>
<p>O ATLS 11 usa a ferramenta <b>TAKE STOCK</b> para estruturar esse debriefing.</p>
<div class="mais">Novo no ATLS 11: debriefing com TAKE STOCK como parte formal das fases do cuidado.</div>`}
  ],
  recall: [
    {q:'Quais são os cinco conceitos-chave do funcionamento da equipe?', a:'Liderança/seguimento, consciência situacional, comunicação verbal, tomada de decisão e gestão de tarefas.', s:'c02-a'},
    {q:'Liste as seis fases do cuidado da equipe.', a:'Planejamento prévio, huddle pré-chegada, passagem na chegada, avaliação inicial, passagem na saída e debriefing.', s:'c02-b'},
    {q:'Como começa a passagem na chegada?', a:'Com "time out / all quiet": todos param e escutam o relato.', s:'c02-c'},
    {q:'O que significa IMIST-AMBO?', a:'Identificação, Mecanismo, Injúrias, Sinais, Tratamento; Alergias, Medicações, Background, Outros.', s:'c02-c'},
    {q:'Quais são os 3 Cs da comunicação?', a:'Citar nomes, clareza da instrução e comunicação em alça fechada.', s:'c02-d'},
    {q:'O que é a ferramenta CUS?', a:'Escalada de alerta: Concerned, Uncomfortable, Safety issue.', s:'c02-d'},
    {q:'Qual ferramenta estrutura o debriefing no ATLS 11?', a:'TAKE STOCK.', s:'c02-e'},
    {q:'Por que o líder deve evitar fazer procedimentos?', a:'Para manter as mãos livres e a consciência situacional do todo.', s:'c02-a'}
  ],
  cards: [
    ['Seis fases do cuidado','Planejamento, huddle, passagem chegada, avaliação, passagem saída, debriefing.'],
    ['"Time out / all quiet"','Abre a passagem na chegada: todos param e escutam.'],
    ['IMIST-AMBO','Identificação, Mecanismo, Injúrias, Sinais, Tratamento / Alergias, Medicações, Background, Outros.'],
    ['3 Cs','Citar nomes, Clareza, alça fechada (Closed-loop).'],
    ['CUS','Concerned, Uncomfortable, Safety issue.'],
    ['Debriefing do ATLS 11','TAKE STOCK.'],
    ['Followership','Membros executam e também alertam o líder sobre problemas.'],
    ['Alça fechada completa','Receber, repetir, executar e avisar que concluiu.'],
    ['Huddle pré-chegada serve para','Definir papéis, plano e equipamentos antes do paciente.'],
    ['Consciência situacional','Perceber, entender e antecipar o que vai acontecer.']
  ],
  battle: [
    {q:'Qual é o primeiro passo da passagem do paciente na chegada à sala de trauma?', o:['Transferir para a maca','Time out / all quiet','Puncionar acesso','Despir o paciente'], c:1, e:'O ATLS 11 começa a passagem com "time out / all quiet" para escutar o relato.'},
    {q:'Enfermeira percebe que ninguém conferiu a tipagem e quer alertar. Qual ferramenta ela usa?', o:['SBAR','CUS','AMPLE','MIST'], c:1, e:'CUS (Concerned, Uncomfortable, Safety issue) é a ferramenta para levantar preocupações em escalada.'},
    {q:'"Ana, aplique 1 g de ácido tranexâmico agora." "Aplicando 1 g de TXA." ... "TXA feito." Isso é:', o:['Comunicação em alça fechada','Passagem IMIST','Debriefing','Huddle'], c:0, e:'Nome, instrução clara, repetição e aviso de conclusão: alça fechada.'},
    {q:'Qual NÃO é uma das seis fases do cuidado da equipe?', o:['Huddle pré-chegada','Passagem na saída','Exame terciário','Debriefing'], c:2, e:'As fases são planejamento, huddle, passagem na chegada, avaliação, passagem na saída e debriefing.'},
    {q:'Os 3 Cs da comunicação são:', o:['Calma, Controle, Coragem','Citar nomes, Clareza, Closed-loop','Contar, Confirmar, Corrigir','Chamar, Checar, Concluir'], c:1, e:'Citar nomes, clareza da instrução e comunicação em alça fechada.'},
    {q:'Ferramenta de debriefing citada no ATLS 11:', o:['TAKE STOCK','SPIKES','SAMPLE','DOPE'], c:0, e:'TAKE STOCK estrutura o debriefing do evento.'},
    {q:'No IMIST-AMBO, o "B" de AMBO significa:', o:['Breathing','Background (história)','Blood','Bleeding'], c:1, e:'AMBO = Alergias, Medicações, Background, Outros.'},
    {q:'O melhor posicionamento do líder da equipe é:', o:['Fazer a intubação pessoalmente','Ficar fora da sala ao telefone','Manter as mãos livres e coordenar com visão do todo','Fazer o eFAST'], c:2, e:'Mãos livres preservam a consciência situacional para coordenar.'}
  ]
},
/* ================= CAP 3 ================= */
{
  n: 3,
  t: 'O x: hemorragia exsanguinante externa',
  boss: { name:'Sangria', title:'a Exsanguinadora', color:'#ff4d6d', shape:'blob' },
  intro: 'Tic-tac, cada batimento é meu! Enquanto você procura o laringoscópio, eu esvazio o tanque.',
  text: [
    {id:'c03-a', t:'Por que o x vem primeiro', b:`
<p>Hemorragia é a principal causa de <b>morte evitável</b> no trauma. Um sangramento externo maciço de membro pode matar em poucos minutos, antes de a obstrução de via aérea se tornar o problema.</p>
<p>Por isso o exame primário virou <b>xABCDE</b>: controle a hemorragia exsanguinante externa e depois siga para a via aérea.</p>
<div class="mais">Novo no ATLS 11: o controle da hemorragia exsanguinante externa virou um tema próprio e o primeiro passo do exame primário.</div>`},
    {id:'c03-b', t:'Pressão direta e empacotamento', b:`
<p>Primeira linha para a maioria dos sangramentos externos: <b>pressão direta</b> firme sobre o ponto que sangra.</p>
<p>Em feridas profundas ou juncionais (virilha, axila, pescoço), faça <b>empacotamento da ferida</b> (wound packing) com gaze, de preferência com <b>agente hemostático</b>, seguido de pressão firme por vários minutos.</p>
<div class="pega">Pegadinha: áreas juncionais não aceitam torniquete comum; o controle é por empacotamento e pressão.</div>`},
    {id:'c03-c', t:'Torniquete', b:`
<p>Indicado no sangramento de <b>extremidade</b> com risco de vida que não para com pressão direta, ou quando a pressão não é possível (vários feridos, cenário inseguro).</p>
<ul><li>Aplicar <b>proximal</b> à lesão (alguns centímetros acima, geralmente 5–7 cm), nunca sobre articulação.</li><li>Apertar até <b>parar o sangramento e sumir o pulso distal</b>.</li><li>Se não parar, aplicar um <b>segundo torniquete</b> logo acima do primeiro.</li><li><b>Anotar o horário</b> de aplicação.</li></ul>
<div class="pega">Pegadinha: torniquete frouxo (venoso) aumenta o sangramento, pois bloqueia o retorno venoso e deixa a artéria fluir.</div>`},
    {id:'c03-d', t:'Reavaliação e conversão', b:`
<p>Torniquete salva vidas, mas causa isquemia. Reavalie <b>cedo</b> se ele pode ser <b>substituído</b> (curativo compressivo, empacotamento) ou <b>convertido</b>.</p>
<p>A conversão é treinada junto com as habilidades de circulação e retomada no exame secundário. Não converta se o paciente estiver em choque ou se não houver como monitorar o membro; torniquetes mantidos por tempo prolongado devem ser removidos com avaliação especializada.</p>
<div class="mais">Novo no ATLS 11: aplicação e conversão de torniquete combinadas à estação de Circulação; pressão direta e empacotamento praticados na mesma estação.</div>`},
    {id:'c03-e', t:'Depois do x', b:`
<p>Controlado o sangramento externo, siga o ABCDE e trate a causa de base do choque:</p>
<ul><li>Sangue e hemoderivados cedo; ativar <b>protocolo de transfusão maciça</b> se indicado.</li><li><b>Ácido tranexâmico</b> até 3 h do trauma: 1 g em 10 min + 1 g em 8 h.</li><li>Procurar sangramentos ocultos (tórax, abdome, pelve, ossos longos).</li></ul>`}
  ],
  recall: [
    {q:'Por que o controle da hemorragia externa foi colocado antes da via aérea?', a:'Porque hemorragia é a principal causa de morte evitável e o sangramento externo maciço mata em minutos.', s:'c03-a'},
    {q:'Qual é a primeira linha para a maioria dos sangramentos externos?', a:'Pressão direta firme sobre o ponto de sangramento.', s:'c03-b'},
    {q:'Como controlar sangramento em área juncional (virilha, axila)?', a:'Empacotamento da ferida com gaze (idealmente hemostática) e pressão firme.', s:'c03-b'},
    {q:'Onde e até quando apertar o torniquete?', a:'Proximal à lesão, 5–7 cm acima, fora da articulação; até parar o sangramento e sumir o pulso distal.', s:'c03-c'},
    {q:'O que fazer se o sangramento continua após o primeiro torniquete?', a:'Aplicar um segundo torniquete logo acima do primeiro.', s:'c03-c'},
    {q:'Por que um torniquete frouxo é perigoso?', a:'Bloqueia o retorno venoso sem ocluir a artéria e aumenta o sangramento.', s:'c03-c'},
    {q:'O que o ATLS 11 recomenda sobre o torniquete após a aplicação?', a:'Reavaliar cedo para substituição ou conversão.', s:'c03-d'},
    {q:'Qual a dose do ácido tranexâmico e a janela de tempo?', a:'1 g em 10 min + 1 g em 8 h, até 3 h do trauma.', s:'c03-e'}
  ],
  cards: [
    ['Primeiro passo do xABCDE','Controle da hemorragia exsanguinante externa.'],
    ['Sangramento externo: primeira linha','Pressão direta.'],
    ['Ferida juncional sangrando','Empacotamento com gaze hemostática + pressão.'],
    ['Onde aplicar o torniquete','5–7 cm proximal à lesão, fora da articulação.'],
    ['Torniquete bem apertado','Para o sangramento e some o pulso distal.'],
    ['Torniquete não resolveu','Segundo torniquete logo acima do primeiro.'],
    ['Torniquete frouxo','Venoso: piora o sangramento.'],
    ['Registro obrigatório no torniquete','Horário da aplicação.'],
    ['Após aplicar torniquete','Reavaliar cedo para substituição/conversão.'],
    ['TXA no trauma','1 g em 10 min + 1 g em 8 h, até 3 h.']
  ],
  battle: [
    {q:'Vítima de facada na coxa, sangramento arterial pulsátil que não cede à pressão direta. Conduta:', o:['Elevar o membro e esperar','Torniquete proximal à lesão','Clampear às cegas com pinça','Intubar primeiro'], c:1, e:'Sangramento de extremidade com risco de vida refratário à pressão: torniquete.'},
    {q:'Ferimento por projétil na virilha com sangramento intenso. Melhor controle inicial:', o:['Torniquete de membro','Empacotamento da ferida com agente hemostático e pressão','Sutura contínua imediata','Compressão abdominal'], c:1, e:'Área juncional: empacotamento e pressão; torniquete comum não funciona ali.'},
    {q:'Após apertar o torniquete, o sangramento diminuiu mas o pulso distal continua presente. Interpretação:', o:['Torniquete adequado','Torniquete frouxo, pode piorar o sangramento','Lesão venosa isolada','Sinal de choque compensado'], c:1, e:'O torniquete deve ocluir o fluxo arterial; pulso distal presente indica aperto insuficiente.'},
    {q:'O sangramento persiste com o torniquete apertado ao máximo. Próximo passo:', o:['Retirar e reaplicar no mesmo lugar','Segundo torniquete imediatamente proximal ao primeiro','Afrouxar para reperfundir','Aguardar o cirurgião'], c:1, e:'Um segundo torniquete logo acima aumenta a área de compressão.'},
    {q:'Onde NÃO se deve aplicar o torniquete?', o:['Coxa','Braço','Sobre o joelho','Antebraço proximal'], c:2, e:'Sobre a articulação a compressão é ineficaz.'},
    {q:'Segundo o ATLS 11, após colocar um torniquete deve-se:', o:['Nunca mais mexer até a cirurgia','Reavaliar cedo para substituição ou conversão','Afrouxar a cada 15 minutos','Trocar por garrote venoso'], c:1, e:'Reavaliação precoce reduz isquemia e complicações.'},
    {q:'Qual informação obrigatoriamente acompanha o torniquete?', o:['Tipo sanguíneo','Horário da aplicação','Nome do socorrista','Pressão arterial'], c:1, e:'O tempo de isquemia guia decisões posteriores.'},
    {q:'Dose de TXA no trauma com hemorragia grave:', o:['500 mg dose única','1 g em 10 min + 1 g em 8 h, até 3 h do trauma','2 g após 6 h','1 g a cada 6 h por 3 dias'], c:1, e:'Regime CRASH-2: benefício maior quanto mais cedo, até 3 h.'}
  ]
},
/* ================= CAP 4 ================= */
{
  n: 4,
  t: 'Via aérea',
  boss: { name:'Glote Sombria', title:'a Laringe Impossível', color:'#4cc9ff', shape:'eye' },
  intro: 'Mallampati? LEMON? Aqui no trauma eu sou sempre difícil. Tenta a quarta vez, tenta!',
  text: [
    {id:'c04-a', t:'Avaliação: toda via aérea de trauma é difícil', b:`
<p>Sinais de comprometimento: agitação (hipóxia), sonolência (hipercapnia), cianose, ruídos (estridor, roncos, gorgolejo), rouquidão, uso de musculatura acessória.</p>
<p>Paciente que <b>fala normalmente</b> tem, naquele momento, via aérea pérvia e cérebro perfundido.</p>
<div class="mais">Novo no ATLS 11: toda via aérea de trauma é tratada como <b>potencialmente difícil</b>. LEMON, Mallampati e MACOCHA <b>não são confiáveis</b> nesse contexto.</div>`},
    {id:'c04-b', t:'Manobras básicas', b:`
<ul><li><b>Anteriorização da mandíbula (jaw thrust)</b>, mantendo restrição do movimento da coluna</li><li>Aspiração</li><li>Cânula orofaríngea (só em inconsciente, sem reflexo de vômito) e nasofaríngea (evitar se suspeita de fratura de base de crânio)</li><li>Bolsa-válvula-máscara (BVM) com duas pessoas</li><li>Dispositivos supraglóticos como ponte</li></ul>
<div class="mais">Novo no ATLS 11: a <b>elevação do mento (chin lift) foi removida</b>; a manobra preferida é a anteriorização da mandíbula.</div>`},
    {id:'c04-c', t:'Via aérea definitiva: SRI', b:`
<p>Via aérea definitiva = tubo na traqueia, balonete insuflado, fixado, ligado a O2.</p>
<p>Indicações: incapacidade de manter via aérea ou oxigenação, GCS ≤ 8, risco de obstrução (queimadura de via aérea, hematoma cervical expansivo), apneia.</p>
<ul><li><b>Sequência rápida (SRI)</b> é preferida.</li><li><b>Videolaringoscópio</b> é a opção ótima.</li><li><b>Oxigenação apneica</b> durante a laringoscopia.</li><li>No hipotenso: ressuscitar antes; vasopressor temporário para hipotensão pós-SRI.</li></ul>`},
    {id:'c04-d', t:'Tentativas, confirmação e falha', b:`
<ul><li>Após <b>3 tentativas</b> sem sucesso: trocar a <b>técnica ou o operador</b>.</li><li>Ventilar com <b>BVM entre as tentativas</b>.</li><li>Confirmar o tubo com capnografia: <b>ETCO2 sustentado = CO2 em pelo menos 7 ventilações</b>.</li></ul>
<div class="pega">Pegadinha: ver CO2 em 1–2 ventilações não confirma; tubo no esôfago pode mostrar CO2 transitório.</div>`},
    {id:'c04-e', t:'Via aérea cirúrgica (incisional)', b:`
<p>Indicada na situação <b>"não intuba, não oxigena"</b> ou <b>"não intuba, não ventila"</b>. Uma vez indicada, <b>complete o procedimento</b>; não volte a tentar intubar.</p>
<p>No adulto: cricotireoidostomia cirúrgica pela membrana cricotireóidea.</p>
<p><b>Cricotireoidostomia por agulha</b>: recomendada só para <b>lactentes e crianças pequenas</b>; fornece oxigenação de curta duração.</p>
<div class="mais">Novo no ATLS 11: "via aérea cirúrgica" também chamada de "incisional", com novas ilustrações.</div>`}
  ],
  recall: [
    {q:'Por que LEMON e Mallampati perdem valor no trauma?', a:'Porque toda via aérea de trauma é potencialmente difícil e esses escores não são confiáveis nesse contexto.', s:'c04-a'},
    {q:'Qual manobra básica foi removida e qual é a preferida?', a:'Elevação do mento foi removida; a preferida é a anteriorização da mandíbula (jaw thrust).', s:'c04-b'},
    {q:'Quando evitar a cânula nasofaríngea?', a:'Na suspeita de fratura de base de crânio/face média.', s:'c04-b'},
    {q:'Qual a técnica e o dispositivo preferidos para intubar?', a:'Sequência rápida com videolaringoscópio, com oxigenação apneica.', s:'c04-c'},
    {q:'O que fazer após três tentativas falhas de intubação?', a:'Trocar a técnica ou o operador, ventilando com BVM entre tentativas.', s:'c04-d'},
    {q:'Como se define ETCO2 sustentado para confirmar o tubo?', a:'CO2 detectado em pelo menos 7 ventilações.', s:'c04-d'},
    {q:'Quando indicar via aérea cirúrgica?', a:'Em "não intuba, não oxigena" ou "não intuba, não ventila"; uma vez indicada, completar.', s:'c04-e'},
    {q:'Para quem é a cricotireoidostomia por agulha?', a:'Só lactentes e crianças pequenas; oxigenação de curto prazo.', s:'c04-e'}
  ],
  cards: [
    ['Via aérea no trauma é...','Sempre potencialmente difícil.'],
    ['Manobra básica preferida','Anteriorização da mandíbula (jaw thrust).'],
    ['Chin lift no ATLS 11','Removido.'],
    ['Dispositivo ótimo para intubação','Videolaringoscópio.'],
    ['Durante laringoscopia','Oxigenação apneica.'],
    ['3 tentativas falharam','Trocar técnica ou operador.'],
    ['Entre tentativas','Ventilar com BVM.'],
    ['ETCO2 sustentado','CO2 em ≥7 ventilações.'],
    ['Indicação de via aérea cirúrgica','Não intuba, não oxigena/ventila.'],
    ['Crico por agulha','Só lactentes/crianças pequenas.']
  ],
  battle: [
    {q:'Paciente inconsciente após TCE, roncos e sem suspeita de coluna descartada. Manobra inicial recomendada:', o:['Elevação do mento com extensão cervical','Anteriorização da mandíbula','Hiperextensão do pescoço','Posição de recuperação'], c:1, e:'O ATLS 11 removeu o chin lift; jaw thrust mantém a coluna alinhada.'},
    {q:'Qual afirmação sobre avaliação da via aérea no trauma está correta (ATLS 11)?', o:['LEMON negativo garante intubação fácil','Mallampati é obrigatório antes da SRI','Toda via aérea de trauma deve ser tratada como potencialmente difícil','MACOCHA dispensa preparo de via aérea cirúrgica'], c:2, e:'Os escores não são confiáveis no trauma.'},
    {q:'Após três tentativas falhas de intubação com laringoscopia direta, a conduta é:', o:['Quarta tentativa pelo mesmo operador','Trocar técnica ou operador, ventilando com BVM entre tentativas','Desistir e transportar','Extubar e observar'], c:1, e:'Após 3 falhas, mude algo: dispositivo, técnica ou operador.'},
    {q:'Confirmação do tubo traqueal pela capnografia exige:', o:['CO2 em 1 ventilação','CO2 em pelo menos 7 ventilações','SpO2 > 90%','Ausculta epigástrica'], c:1, e:'ETCO2 sustentado = CO2 em ≥7 ventilações.'},
    {q:'Trauma de face grave, intubação impossível e saturação caindo apesar de BVM e supraglótico. Adulto. Conduta:', o:['Cricotireoidostomia cirúrgica','Cricotireoidostomia por agulha','Traqueostomia eletiva','Nova tentativa com laringoscópio direto'], c:0, e:'"Não intuba, não oxigena" no adulto: via aérea cirúrgica, e completar.'},
    {q:'Criança de 3 anos com falha de intubação e de oxigenação. Via aérea de resgate recomendada:', o:['Cricotireoidostomia cirúrgica','Cricotireoidostomia por agulha','Intubação nasal às cegas','Traqueostomia'], c:1, e:'Por agulha é recomendada só para lactentes/crianças pequenas; cirúrgica é desencorajada nessa idade.'},
    {q:'Motivo de evitar cânula nasofaríngea neste paciente: equimose periorbital bilateral e rinorreia clara.', o:['Risco de broncoespasmo','Suspeita de fratura de base de crânio','Hipotensão','Agitação'], c:1, e:'Olhos de guaxinim + rinoliquorreia sugerem fratura de base; risco de passagem intracraniana.'},
    {q:'Paciente com PA 70/40 precisa de intubação. Estratégia correta:', o:['Dose cheia de indutor e intubar já','Ressuscitar com sangue antes, ajustar indutor e ter vasopressor pronto','Evitar oxigenação apneica','Usar só ventilação não invasiva'], c:1, e:'Hipotensão peri-intubação é risco grave; otimize antes da SRI.'}
  ]
},
/* ================= CAP 5 ================= */
{
  n: 5,
  t: 'Respiração e ventilação',
  boss: { name:'Pneumotórax Rex', title:'o Desviador de Traqueias', color:'#2ee6c5', shape:'beast' },
  intro: 'Sinto o mediastino se mexer... Mais um pouco de pressão e o retorno venoso é meu!',
  text: [
    {id:'c05-a', t:'Avaliação da respiração', b:`
<p>Via aérea pérvia não garante ventilação. Exponha o tórax e avalie: <b>inspeção</b> (expansão, assimetria, feridas), <b>palpação</b>, <b>percussão</b>, <b>ausculta</b>, posição da <b>traqueia</b>, turgência jugular.</p>
<p>Adjuntos: oximetria, capnografia, gasometria, RX de tórax, <b>eFAST</b> (sensível para pneumotórax).</p>
<div class="mais">Novo no ATLS 11: capítulo próprio para distúrbios <b>imediatos e precoces</b> com risco de vida no tórax.</div>`},
    {id:'c05-b', t:'Pneumotórax hipertensivo', b:`
<p>Diagnóstico <b>clínico</b>: dispneia, hipotensão, taquicardia, MV abolido e hipertimpanismo do lado afetado, turgência jugular, desvio de traqueia (tardio). Não espere RX.</p>
<p>Tratamento imediato: <b>descompressão</b> (agulha ou digital) seguida de <b>drenagem torácica</b>.</p>
<ul><li>Adulto: 4º/5º espaço intercostal entre linhas <b>axilar anterior e média</b>.</li><li>Criança: 2º espaço intercostal, linha hemiclavicular.</li></ul>
<div class="mais">Novo no ATLS 11: o <b>sítio axilar</b> é apoiado para a descompressão por agulha de emergência.</div>`},
    {id:'c05-c', t:'Pneumotórax aberto e tórax instável', b:`
<p><b>Pneumotórax aberto</b>: ferida aspirativa; se o defeito tem ≥ 2/3 do diâmetro da traqueia, o ar entra preferencialmente pela ferida. Tratamento: <b>curativo de três pontas</b> (ou valvulado) e drenagem torácica longe da ferida.</p>
<p><b>Tórax instável</b>: dois ou mais arcos fraturados em dois ou mais pontos → movimento paradoxal. O problema maior é a <b>contusão pulmonar</b> subjacente. Oxigênio, ventilação adequada, <b>analgesia</b> eficaz, fluidos com cautela.</p>
<div class="mais">Novo no ATLS 11: ênfase no controle da dor nas lesões de parede torácica.</div>`},
    {id:'c05-d', t:'Hemotórax maciço e tamponamento', b:`
<p><b>Hemotórax maciço</b>: > 1.500 mL drenados de imediato, ou > 200 mL/h por 2–4 h, ou necessidade contínua de transfusão → toracotomia. Choque + MV reduzido + macicez.</p>
<p><b>Tamponamento cardíaco</b>: tríade de Beck (hipotensão, abafamento de bulhas, turgência jugular), sinal de Kussmaul. Diagnóstico pelo FAST. Tratamento definitivo: <b>toracotomia/janela pericárdica</b>; pericardiocentese só como ponte quando não há cirurgia.</p>
<div class="pega">Pegadinha: turgência jugular pode estar ausente se houver hipovolemia associada.</div>`},
    {id:'c05-e', t:'Toracostomia digital e com tubo', b:`
<p>A <b>toracostomia digital</b> (finger thoracostomy) descomprime e confirma a entrada na pleura. A <b>toracostomia com tubo</b> é o tratamento definitivo inicial de pneumo e hemotórax.</p>
<p>Local: 4º/5º espaço intercostal, anterior à linha axilar média, sobre a borda superior da costela inferior (evita o feixe neurovascular).</p>
<div class="mais">Novo no ATLS 11: habilidades de toracostomia digital e com tubo na estação de respiração, junto com via aérea cirúrgica e crico por agulha pediátrica.</div>`}
  ],
  recall: [
    {q:'Como se faz o diagnóstico do pneumotórax hipertensivo?', a:'Clinicamente (hipotensão, MV abolido, hipertimpanismo, jugulares túrgidas); não esperar RX.', s:'c05-b'},
    {q:'Qual sítio de descompressão por agulha é apoiado no adulto pelo ATLS 11?', a:'Sítio axilar: 4º/5º EIC entre linhas axilar anterior e média.', s:'c05-b'},
    {q:'Qual o sítio de descompressão na criança?', a:'2º espaço intercostal, linha hemiclavicular.', s:'c05-b'},
    {q:'Como tratar inicialmente o pneumotórax aberto?', a:'Curativo de três pontas (ou valvulado) e drenagem torácica longe da ferida.', s:'c05-c'},
    {q:'O que define tórax instável e qual o principal problema?', a:'Dois ou mais arcos fraturados em dois ou mais pontos; a contusão pulmonar subjacente.', s:'c05-c'},
    {q:'Quais critérios de drenagem indicam toracotomia no hemotórax?', a:'> 1.500 mL imediatos, > 200 mL/h por 2–4 h ou necessidade contínua de transfusão.', s:'c05-d'},
    {q:'Qual é a tríade de Beck?', a:'Hipotensão, abafamento de bulhas e turgência jugular.', s:'c05-d'},
    {q:'Onde inserir o dreno de tórax e por que na borda superior da costela?', a:'4º/5º EIC anterior à linha axilar média; borda superior evita o feixe neurovascular.', s:'c05-e'}
  ],
  cards: [
    ['Pneumotórax hipertensivo: diagnóstico','Clínico; não esperar RX.'],
    ['Descompressão por agulha no adulto (ATLS 11)','Sítio axilar: 4º/5º EIC, LAA–LAM.'],
    ['Descompressão na criança','2º EIC, linha hemiclavicular.'],
    ['Pneumotórax aberto','Curativo de três pontas + dreno longe da ferida.'],
    ['Tórax instável','≥2 arcos fraturados em ≥2 pontos; contusão pulmonar é o problema.'],
    ['Lesão de parede torácica: ponto enfatizado','Analgesia eficaz.'],
    ['Hemotórax maciço','> 1.500 mL imediatos.'],
    ['Toracotomia por débito','> 200 mL/h por 2–4 h.'],
    ['Tríade de Beck','Hipotensão, bulhas abafadas, jugular túrgida.'],
    ['Dreno de tórax: borda da costela','Superior da costela inferior.']
  ],
  battle: [
    {q:'Vítima de colisão, PA 70/40, MV abolido e hipertimpanismo à direita, jugulares túrgidas. Conduta imediata:', o:['RX de tórax','Descompressão torácica imediata','Pericardiocentese','TC de tórax'], c:1, e:'Pneumotórax hipertensivo é diagnóstico clínico e tratado na hora.'},
    {q:'Sítio para descompressão por agulha em adulto apoiado pelo ATLS 11:', o:['2º EIC linha hemiclavicular, obrigatoriamente','4º/5º EIC entre linhas axilar anterior e média','7º EIC linha escapular','Subxifoide'], c:1, e:'O sítio axilar é apoiado no adulto (parede mais fina, menos falha).'},
    {q:'Ferida torácica aspirativa grande. Tratamento inicial:', o:['Curativo oclusivo nos quatro lados','Curativo de três pontas e dreno longe da ferida','Sutura da ferida na sala','Intubação imediata em todos'], c:1, e:'Curativo de três pontas age como válvula; fechar quatro lados pode criar hipertensivo.'},
    {q:'Paciente com movimento paradoxal do hemitórax esquerdo e hipoxemia. Principal causa da hipoxemia:', o:['Instabilidade da parede','Contusão pulmonar subjacente','Dor isolada','Pneumotórax'], c:1, e:'No tórax instável, a contusão pulmonar é o principal determinante da hipóxia.'},
    {q:'Dreno de tórax drena 1.700 mL de sangue imediatamente. Conduta:', o:['Observar débito','Clampear o dreno','Indicar toracotomia','Retirar o dreno'], c:2, e:'> 1.500 mL imediatos caracteriza hemotórax maciço com indicação de toracotomia.'},
    {q:'Ferida precordial por faca, hipotensão, bulhas abafadas e jugulares túrgidas; FAST com líquido pericárdico. Tratamento definitivo:', o:['Pericardiocentese definitiva','Toracotomia/janela pericárdica','Drenagem torácica bilateral','Volume e observar'], c:1, e:'Tamponamento traumático tem tratamento cirúrgico; pericardiocentese é ponte.'},
    {q:'Na inserção do dreno torácico, a incisão sobre a borda superior da costela visa:', o:['Reduzir dor','Evitar o feixe neurovascular intercostal','Drenar mais sangue','Facilitar o RX'], c:1, e:'O feixe neurovascular corre na borda inferior de cada costela.'},
    {q:'Qual destes sinais pode faltar no tamponamento de um paciente muito hipovolêmico?', o:['Taquicardia','Turgência jugular','Hipotensão','Líquido no FAST'], c:1, e:'Sem volume, a jugular não enche.'}
  ]
},
/* ================= CAP 6 ================= */
{
  n: 6,
  t: 'Circulação e ressuscitação volêmica',
  boss: { name:'Barão Hipovolêmico', title:'Senhor da Tríade Letal', color:'#d98e0b', shape:'knight' },
  intro: 'Frio, ácido e sem coagular... minha tríade adora cristaloide. Pode despejar mais dois litros, vai!',
  text: [
    {id:'c06-a', t:'Tipos de choque', b:`
<p>Choque é perfusão e oxigenação tecidual inadequadas. No trauma, assuma <b>hemorrágico</b> até prova em contrário.</p>
<p>Choque <b>não hemorrágico</b>:</p>
<ul><li><b>Obstrutivo</b>: pneumotórax hipertensivo, tamponamento</li><li><b>Cardiogênico</b>: lesão cardíaca contusa, IAM</li><li><b>Distributivo</b>: neurogênico (hipotensão + bradicardia no TRM alto), séptico tardio</li></ul>
<div class="mais">Novo no ATLS 11: choque não hemorrágico classificado em obstrutivo, cardiogênico e distributivo. Lesão cardíaca contusa com conteúdo ampliado.</div>`},
    {id:'c06-b', t:'Reconhecer a hemorragia', b:`
<p>Taquicardia, pulso fino, pele fria, enchimento capilar lento, pressão de pulso estreita, alteração do nível de consciência, oligúria. Hipotensão é sinal <b>tardio</b>.</p>
<p><b>Índice de choque</b> = FC / PAS (elevado sugere perda importante). <b>ETCO2</b> baixo também pode refletir hipoperfusão.</p>
<div class="mais">Novo no ATLS 11: a <b>tabela de gravidade da hemorragia</b> substitui as classes I–IV; os percentuais de perda foram removidos e o GCS deu lugar ao <b>nível de consciência</b>.</div>
<div class="pega">Pegadinha: idosos, betabloqueados, atletas e gestantes podem não ficar taquicárdicos.</div>`},
    {id:'c06-c', t:'Acesso e fluidos', b:`
<p>Dois acessos periféricos <b>curtos e calibrosos</b> (lei de <b>Poiseuille</b>: fluxo cai com o comprimento e sobe com a 4ª potência do raio). Se falhar: <b>intraósseo</b>.</p>
<p><b>Concentrado de hemácias e sangue total</b> são os fluidos ideais. Cristaloide aquecido no máximo ~1 L como ponte.</p>
<p>Ressuscitação de controle de danos: <b>hipotensão permissiva</b> até o controle do sangramento, proporção <b>1:1:1</b> (hemácias:plasma:plaquetas), <b>ativação precoce do protocolo de transfusão maciça</b>, evitar a tríade letal (hipotermia, acidose, coagulopatia).</p>
<div class="pega">Pegadinha: hipotensão permissiva é contraindicada no TCE e no TRM.</div>`},
    {id:'c06-d', t:'TXA, cálcio e anticoagulantes', b:`
<p><b>Ácido tranexâmico</b> é apoiado no choque hemorrágico grave: 1 g em 10 min + 1 g em 8 h, até 3 h do trauma (no TCE, bolus de 2 g é aceito).</p>
<p>Transfusão maciça consome cálcio (citrato): monitorar e repor.</p>
<p>Anticoagulados: pergunte cedo e reverta conforme o agente.</p>
<div class="mais">Novo no ATLS 11: figura do mecanismo do TXA e tabela ampliada de reversão de anticoagulantes. A autotransfusão deixou de ser discutida.</div>`},
    {id:'c06-e', t:'Pelve, resposta e parada traumática', b:`
<p>Fratura de pelve instável sangra muito: <b>cinta pélvica</b> centrada nos <b>trocânteres maiores</b>, reduzindo o volume pélvico.</p>
<p>Avalie a resposta à ressuscitação (rápida, transitória, mínima/nenhuma). Resposta transitória ou nenhuma = sangramento ativo → controle cirúrgico/angiográfico.</p>
<p><b>Parada cardíaca traumática</b>: tratar causas reversíveis (hipovolemia, hipóxia, pneumotórax hipertensivo, tamponamento). O ATLS 11 discute critérios de <b>término da reanimação</b>.</p>
<div class="mais">Novo no ATLS 11: tabela de fatores clínicos associados a fratura de pelve e figuras de volume pélvico e compressão.</div>`}
  ],
  recall: [
    {q:'Como o ATLS 11 classifica o choque não hemorrágico?', a:'Obstrutivo, cardiogênico e distributivo.', s:'c06-a'},
    {q:'O que substituiu as classes I–IV de choque hemorrágico?', a:'Uma tabela de gravidade da hemorragia, sem percentuais de perda e com nível de consciência no lugar do GCS.', s:'c06-b'},
    {q:'Como se calcula o índice de choque?', a:'FC dividida pela PAS.', s:'c06-b'},
    {q:'O que a lei de Poiseuille ensina sobre acesso venoso?', a:'Cateter curto e calibroso dá mais fluxo (raio elevado à 4ª potência).', s:'c06-c'},
    {q:'Quais são os fluidos ideais de ressuscitação?', a:'Concentrado de hemácias e sangue total; cristaloide só como ponte (~1 L).', s:'c06-c'},
    {q:'Em quais pacientes a hipotensão permissiva é contraindicada?', a:'TCE e TRM.', s:'c06-c'},
    {q:'Por que repor cálcio na transfusão maciça?', a:'O citrato do sangue estocado quela o cálcio ionizado.', s:'c06-d'},
    {q:'Onde centrar a cinta pélvica?', a:'Nos trocânteres maiores.', s:'c06-e'}
  ],
  cards: [
    ['Choque no trauma até prova em contrário','Hemorrágico.'],
    ['Choque não hemorrágico (ATLS 11)','Obstrutivo, cardiogênico, distributivo.'],
    ['Classes I–IV','Substituídas por tabela de gravidade da hemorragia.'],
    ['Índice de choque','FC / PAS.'],
    ['Lei de Poiseuille na prática','Acesso curto e calibroso.'],
    ['Fluido ideal','Concentrado de hemácias / sangue total.'],
    ['Proporção balanceada','1:1:1 hemácias:plasma:plaquetas.'],
    ['Hipotensão permissiva: contraindicação','TCE e TRM.'],
    ['Cinta pélvica','Centrada nos trocânteres maiores.'],
    ['Autotransfusão no ATLS 11','Não é mais discutida.']
  ],
  battle: [
    {q:'Vítima de queda de moto, FC 130, PAS 85, ansiosa. Fluido mais adequado para ressuscitação:', o:['3 L de Ringer','Concentrado de hemácias/sangue total precoce','Albumina 20%','Soro glicosado'], c:1, e:'Sangue é o fluido ideal; cristaloide só como ponte.'},
    {q:'No ATLS 11, a classificação clássica do choque hemorrágico em classes I–IV:', o:['Foi mantida igual','Foi substituída por tabela de gravidade da hemorragia sem percentuais de perda','Ganhou a classe V','Passou a usar só o lactato'], c:1, e:'Tabela de gravidade, sem percentuais e com nível de consciência.'},
    {q:'Paciente com TRM cervical, PA 80/50 e FC 52, pele quente. Tipo de choque:', o:['Hemorrágico classe IV','Obstrutivo','Distributivo (neurogênico)','Cardiogênico'], c:2, e:'Hipotensão com bradicardia e pele quente: perda do tônus simpático.'},
    {q:'Por que preferir cateter periférico 14G curto a um cateter venoso central longo para infundir volume rápido?', o:['Menos infecção','Lei de Poiseuille: fluxo maior com menor comprimento e maior raio','É mais barato','Não precisa de aquecedor'], c:1, e:'O fluxo é proporcional à 4ª potência do raio e inverso ao comprimento.'},
    {q:'Hipotensão permissiva é ADEQUADA em:', o:['TCE grave','Trauma raquimedular','Ferimento penetrante de abdome sem TCE, antes do controle cirúrgico','Idoso com TCE'], c:2, e:'É contraindicada em TCE e TRM.'},
    {q:'Fratura de pelve em livro aberto com choque. Medida imediata:', o:['Cinta pélvica nos trocânteres maiores','Cinta na crista ilíaca','Mobilizar a pelve para testar estabilidade repetidamente','Tração esquelética'], c:0, e:'Binder sobre os trocânteres reduz o volume pélvico.'},
    {q:'Paciente recebeu 1 L de cristaloide, PA subiu e depois caiu novamente. Interpretação:', o:['Resposta rápida','Resposta transitória: sangramento ativo','Choque neurogênico','Erro de aferição'], c:1, e:'Resposta transitória indica perda contínua e necessidade de controle do sangramento.'},
    {q:'Sobre o ATLS 11, assinale a correta:', o:['Autotransfusão é a primeira opção','Tabela de reversão de anticoagulantes foi ampliada','TXA não é mais recomendado','Cristaloide 2 L é o padrão'], c:1, e:'A tabela foi ampliada e a autotransfusão saiu do texto.'}
  ]
}
]);
