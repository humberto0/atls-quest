window.ATLS = (window.ATLS||[]).concat([
/* ===================== CAP 13 — GESTANTE ===================== */
{
  n: 13,
  t: 'Trauma na gestante',
  boss: { name:'Cava Compressa', title:'a Rainha Supina', color:'#ff5fa2', shape:'golem' },
  intro: 'Deite-a de barriga para cima e eu esmago a veia cava! Duas vidas, um só plantão... será que você aguenta?',
  text: [
    {id:'c13-a', t:'Princípios: duas vítimas, uma prioridade', b:`
<p>No trauma da gestante há <b>dois pacientes</b>, mas a melhor forma de tratar o feto é <b>ressuscitar a mãe</b>. A sequência é a mesma: <b>xABCDE</b>.</p>
<p>A gravidez altera a fisiologia: <b>volume plasmático aumenta</b> (anemia dilucional), <b>FC sobe</b> 10–15 bpm, PA cai no 2º trimestre, <b>PaCO2 mais baixa</b> (~30 mmHg) por hiperventilação fisiológica e o esvaziamento gástrico é lento (maior risco de aspiração).</p>
<p>A gestante pode perder <b>até 30% da volemia</b> antes de mostrar sinais de choque, enquanto o feto já está sendo hipoperfundido.</p>
<div class="pega">Pegadinha: sinais vitais "normais" na mãe não garantem perfusão fetal. Sofrimento fetal pode ser o primeiro sinal de choque materno.</div>`},
    {id:'c13-b', t:'Compressão da veia cava e posição', b:`
<p>Em decúbito dorsal, o útero gravídico comprime a <b>veia cava inferior</b> a partir de cerca de <b>18 semanas</b>, reduzindo o débito cardíaco em <b>até 30%</b>.</p>
<p>Conduta: <b>deslocamento uterino manual para a esquerda</b> ou inclinar a prancha/maca para a esquerda mantendo a restrição de movimento da coluna.</p>
<div class="mais">Novo no ATLS 11: reforço do marco de ~18 semanas e da perda de até 30% do débito cardíaco em supino.</div>`},
    {id:'c13-c', t:'História obstétrica: CODE', b:`
<p>O ATLS 11 organiza a história obstétrica com o mnemônico <b>CODE</b>:</p>
<ul><li><b>C</b> — Complicações (da gestação atual)</li>
<li><b>O</b> — Obstetrícia: história obstétrica e quem faz o pré-natal</li>
<li><b>D</b> — Datação: idade gestacional e data provável do parto</li>
<li><b>E</b> — Evento: detalhes do trauma</li></ul>
<p>Altura uterina ajuda a estimar a idade gestacional: útero na <b>cicatriz umbilical ≈ 20 semanas</b>.</p>
<div class="mais">Novo no ATLS 11: mnemônico CODE para a história obstétrica.</div>`},
    {id:'c13-d', t:'Descolamento de placenta e avaliação fetal', b:`
<p>O <b>descolamento prematuro de placenta</b> é diagnóstico <b>clínico</b>. A maioria aparece nas primeiras <b>6 horas</b>, mas pode surgir em até <b>24 horas</b>.</p>
<p>Tríade: <b>contrações, sangramento vaginal e dor abdominal</b>. As <b>contrações</b> são o achado <b>mais sensível</b>.</p>
<p>Monitorização cardiotocográfica contínua é indicada a partir da viabilidade fetal, por no mínimo 6 horas. O ultrassom pode não detectar o descolamento.</p>
<p>Exames de imagem necessários para a mãe <b>não devem ser negados</b> por medo da radiação.</p>
<div class="pega">Pegadinha: USG normal não exclui descolamento — o diagnóstico é clínico e exige observação.</div>`},
    {id:'c13-e', t:'Isoimunização e cesárea de ressuscitação', b:`
<p>Toda gestante <b>Rh-negativa</b> com trauma recebe <b>imunoglobulina anti-D em até 72 horas</b>, mesmo com trauma leve.</p>
<p>O termo "cesárea perimortem" foi substituído por <b>"cesárea de ressuscitação"</b>. Considerar quando o útero está <b>no nível da cicatriz umbilical ou acima</b> e <b>não há circulação após 5 minutos</b> de RCP. Ela melhora o retorno venoso e a chance de sobrevida materna.</p>
<p>Atenção à <b>violência doméstica/por parceiro íntimo</b>: lesões incompatíveis com a história, atraso na procura e lesões em abdome/mamas.</p>
<div class="mais">Novo no ATLS 11: "cesárea de ressuscitação" substitui "perimortem".</div>`}
  ],
  recall: [
    {q:'Qual a melhor forma de tratar o feto no trauma da gestante?', a:'Ressuscitar a mãe: a sequência é a mesma (xABCDE) e a perfusão fetal depende da materna.', s:'c13-a'},
    {q:'Quanto da volemia a gestante pode perder antes de mostrar sinais de choque?', a:'Até cerca de 30%, enquanto o feto já pode estar hipoperfundido.', s:'c13-a'},
    {q:'A partir de que idade gestacional o útero comprime a veia cava em supino e qual o impacto?', a:'A partir de ~18 semanas, reduzindo o débito cardíaco em até 30%.', s:'c13-b'},
    {q:'Como evitar a compressão da cava mantendo restrição de movimento da coluna?', a:'Deslocamento uterino manual para a esquerda ou inclinar a prancha para a esquerda.', s:'c13-b'},
    {q:'O que significa o mnemônico CODE?', a:'Complicações; Obstetrícia (história e pré-natal); Datação (IG e DPP); Evento (detalhes do trauma).', s:'c13-c'},
    {q:'Qual a tríade do descolamento de placenta e qual o achado mais sensível?', a:'Contrações, sangramento vaginal e dor abdominal; contrações são o mais sensível.', s:'c13-d'},
    {q:'Até quando o descolamento pode se manifestar?', a:'A maioria em 6 horas, mas pode surgir em até 24 horas.', s:'c13-d'},
    {q:'Quando considerar a cesárea de ressuscitação?', a:'Útero na cicatriz umbilical ou acima e sem circulação após 5 minutos de RCP.', s:'c13-e'}
  ],
  cards: [
    ['Gestante: compressão da VCI começa por volta de...','~18 semanas; DC cai até 30% em supino.'],
    ['Manobra para descomprimir a cava','Deslocamento uterino manual para a esquerda (ou inclinar a prancha).'],
    ['CODE','Complicações, Obstetrícia/pré-natal, Datação, Evento.'],
    ['Descolamento de placenta: diagnóstico é...','Clínico (USG pode ser normal).'],
    ['Achado mais sensível do descolamento','Contrações uterinas.'],
    ['Janela de surgimento do descolamento','Maioria em 6 h; até 24 h.'],
    ['Rh-negativa com trauma','Imunoglobulina anti-D em até 72 h.'],
    ['Nome novo da cesárea perimortem','Cesárea de ressuscitação.'],
    ['Critério de tempo da cesárea de ressuscitação','Sem circulação após 5 min de RCP, útero ≥ umbigo.'],
    ['Útero na cicatriz umbilical equivale a...','~20 semanas de gestação.']
  ],
  battle: [
    {q:'Gestante de 30 semanas, colisão de carro, PA 88x50 deitada em prancha. Primeira medida para melhorar o débito cardíaco:', o:['Iniciar noradrenalina','Deslocar o útero manualmente para a esquerda','Intubar imediatamente','Solicitar USG obstétrica'], c:1, e:'Em supino o útero comprime a VCI e reduz o DC em até 30%; deslocamento uterino à esquerda é imediato.'},
    {q:'No mnemônico CODE da história obstétrica, a letra D corresponde a:', o:['Dor abdominal','Doenças prévias','Datação (idade gestacional e DPP)','Descolamento'], c:2, e:'CODE: Complicações, Obstetrícia, Datação, Evento.'},
    {q:'Qual achado é o MAIS sensível para descolamento prematuro de placenta pós-trauma?', o:['Sangramento vaginal','Contrações uterinas','Dor abdominal','Alteração na USG'], c:1, e:'A tríade é contrações, sangramento e dor; contrações são as mais sensíveis.'},
    {q:'Gestante Rh-negativa, 24 semanas, queda da própria altura, sem lesões aparentes. Conduta quanto à isoimunização:', o:['Nada, trauma leve','Anti-D só se houver sangramento','Anti-D em até 72 horas','Anti-D apenas após o parto'], c:2, e:'Toda Rh-negativa com trauma recebe imunoglobulina em até 72 h, mesmo trauma leve.'},
    {q:'Gestante em PCR traumática, útero acima da cicatriz umbilical. Quando considerar cesárea de ressuscitação?', o:['Após 20 min de RCP','Imediatamente, antes da RCP','Sem circulação após 5 min de RCP','Apenas se o feto tiver BCF presente'], c:2, e:'Considerar se útero ≥ umbigo e sem circulação após 5 minutos de RCP; o objetivo é também salvar a mãe.'},
    {q:'Sobre a fisiologia da gestante, é CORRETO:', o:['A PaCO2 é mais alta que o normal','O volume plasmático diminui','Pode perder até 30% da volemia antes de sinais de choque','O esvaziamento gástrico é acelerado'], c:2, e:'Hipervolemia relativa mascara o choque; PaCO2 é baixa e o esvaziamento gástrico é lento.'},
    {q:'Gestante com USG obstétrica normal 1 h após colisão, mas com contrações regulares. Conduta:', o:['Alta, USG normal exclui descolamento','Manter monitorização: descolamento é clínico e pode surgir até 24 h','Tocolítico e alta','Repetir USG em 1 semana'], c:1, e:'Descolamento é diagnóstico clínico; USG pode ser normal. Observar e monitorizar.'},
    {q:'Gestante com TC de abdome indicada para investigar sangramento. A melhor conduta é:', o:['Contraindicar TC pela radiação','Fazer apenas RX simples','Realizar a TC: exame necessário à mãe não deve ser negado','Aguardar o parto'], c:2, e:'Exames indicados para a mãe não devem ser negados por medo da radiação fetal.'}
  ]
},
/* ===================== CAP 14 — EXAME SECUNDÁRIO ===================== */
{
  n: 14,
  t: 'Avaliação inicial: exame secundário',
  boss: { name:'Lesão Oculta', title:'a Mestra do Esconde-Esconde', color:'#a77bff', shape:'ghost' },
  intro: 'Você achou que o exame primário bastava? Eu me escondo atrás da orelha, no dorso, no períneo... me encontre se for capaz!',
  text: [
    {id:'c14-a', t:'Quando fazer o exame secundário', b:`
<p>O <b>exame secundário</b> é a avaliação da <b>cabeça aos pés</b> com história completa e reavaliação dos sinais vitais.</p>
<p>Só começa <b>depois</b> que o exame primário (xABCDE) foi concluído, a ressuscitação está em andamento e o paciente mostra <b>normalização das funções vitais</b>.</p>
<p>Se o paciente piorar, <b>volte ao exame primário</b>. Se precisar ir ao centro cirúrgico ou ser transferido, o secundário pode ser feito depois.</p>
<div class="mais">Novo no ATLS 11: o exame secundário ganhou capítulo próprio, separado do exame primário.</div>`},
    {id:'c14-b', t:'História AMPLE e mecanismo', b:`
<p>Mnemônico <b>AMPLE</b>:</p>
<ul><li><b>A</b> — Alergias</li><li><b>M</b> — Medicações (atenção a <b>anticoagulantes</b> e betabloqueadores)</li><li><b>P</b> — Passado médico / gestação</li><li><b>L</b> — Última refeição (<i>Last meal</i>)</li><li><b>E</b> — Eventos e ambiente relacionados ao trauma</li></ul>
<p>O <b>mecanismo</b> (contuso, penetrante, queimadura, explosão) orienta a busca de lesões: ex. impacto lateral → tórax, baço/fígado, pelve; uso de cinto → lesão de víscera oca e coluna lombar.</p>`},
    {id:'c14-c', t:'Exame da cabeça aos pés', b:`
<ul><li><b>Cabeça e face</b>: couro cabeludo, olhos (acuidade, pupilas, lentes de contato), sinais de fratura de base (Battle, guaxinim, rinorreia/otorreia).</li>
<li><b>Pescoço</b>: se o colar for retirado, manter restrição manual; palpar coluna e traqueia.</li>
<li><b>Tórax</b>: inspeção, palpação, ausculta; RX.</li>
<li><b>Abdome e pelve</b>: exame seriado; não repetir compressão da pelve instável.</li>
<li><b>Períneo/reto/vagina</b>: sangue no meato, hematoma; toque conforme indicação, não de rotina.</li>
<li><b>Musculoesquelético</b>: deformidades, pulsos, <b>síndrome compartimental</b>.</li>
<li><b>Neurológico</b>: GCS, pupilas, déficits motores e sensitivos.</li></ul>
<p><b>Logroll</b> para examinar o dorso.</p>
<div class="pega">Pegadinha: lesões no dorso, axilas e períneo são as mais esquecidas — sem rolar o paciente, o exame está incompleto.</div>`},
    {id:'c14-d', t:'Torniquete: conversão e reavaliação', b:`
<p>Torniquetes colocados no exame primário devem ser <b>reavaliados</b> no secundário. Se o sangramento puder ser controlado por outra forma, faz-se a <b>conversão</b> (curativo compressivo/hemostático) com o torniquete frouxo no lugar, pronto para reaperto.</p>
<p>Registrar o <b>horário de aplicação</b>. Tempo prolongado aumenta risco de isquemia e perda do membro.</p>
<div class="mais">Novo no ATLS 11: conversão do torniquete incluída no exame secundário.</div>`},
    {id:'c14-e', t:'Síndrome compartimental e adjuntos', b:`
<p><b>Síndrome compartimental</b>: dor desproporcional, dor ao <b>estiramento passivo</b>, tensão do compartimento, parestesia. <b>Pulso presente não exclui</b>; ausência de pulso é sinal tardio.</p>
<p>Tratamento: liberar curativos/gessos e <b>fasciotomia</b> precoce.</p>
<p>Adjuntos do secundário: TC direcionada, radiografias de extremidades, exames contrastados, endoscopia, conforme estabilidade.</p>
<p><b>Reavaliação contínua</b>: monitorizar e repetir o exame — lesões passam despercebidas. Analgesia adequada faz parte do cuidado.</p>`}
  ],
  recall: [
    {q:'Quando o exame secundário deve começar?', a:'Após o exame primário completo, com ressuscitação em curso e funções vitais normalizando.', s:'c14-a'},
    {q:'O que fazer se o paciente piorar durante o exame secundário?', a:'Interromper e voltar ao exame primário (xABCDE).', s:'c14-a'},
    {q:'O que significa AMPLE?', a:'Alergias, Medicações, Passado médico/gestação, Última refeição (Last meal), Eventos/ambiente.', s:'c14-b'},
    {q:'Por que perguntar especificamente sobre anticoagulantes e betabloqueadores?', a:'Anticoagulantes pioram sangramento; betabloqueadores mascaram a taquicardia do choque.', s:'c14-b'},
    {q:'Quais sinais sugerem fratura de base de crânio?', a:'Sinal de Battle, olhos de guaxinim, rinorreia ou otorreia de líquor.', s:'c14-c'},
    {q:'Quais áreas mais são esquecidas e como examiná-las?', a:'Dorso, axilas e períneo; rolar o paciente em bloco (logroll).', s:'c14-c'},
    {q:'O que é a conversão do torniquete?', a:'Trocar o torniquete por curativo compressivo/hemostático mantendo-o frouxo no lugar, pronto para reaperto.', s:'c14-d'},
    {q:'Quais achados sugerem síndrome compartimental e qual é o tratamento?', a:'Dor desproporcional e ao estiramento passivo, compartimento tenso; pulso pode estar presente. Fasciotomia.', s:'c14-e'}
  ],
  cards: [
    ['Exame secundário começa quando?','Após o primário, com funções vitais normalizando.'],
    ['Piorou no secundário?','Volte ao xABCDE.'],
    ['AMPLE','Alergias, Medicações, Passado médico/gestação, Last meal (última refeição), Eventos/ambiente.'],
    ['Betabloqueador no trauma','Mascara taquicardia do choque.'],
    ['Sinal de Battle','Equimose retroauricular: fratura de base de crânio.'],
    ['Olhos de guaxinim','Equimose periorbitária: fratura de base de crânio.'],
    ['Como ver o dorso?','Logroll (rolar em bloco).'],
    ['Torniquete no secundário','Reavaliar e considerar conversão.'],
    ['Sinal precoce de síndrome compartimental','Dor ao estiramento passivo / desproporcional.'],
    ['Pulso presente exclui síndrome compartimental?','Não. Ausência de pulso é tardia.']
  ],
  battle: [
    {q:'Durante o exame secundário, o paciente fica taquicárdico e hipotenso. A conduta é:', o:['Concluir o exame e depois tratar','Pedir TC de corpo inteiro','Voltar ao exame primário (xABCDE)','Aumentar analgesia'], c:2, e:'Qualquer deterioração exige reavaliação pelo exame primário.'},
    {q:'No AMPLE, a letra L refere-se a:', o:['Lesões','Última refeição (Last meal)','Local do acidente','Lucidez'], c:1, e:'L = Last meal (última refeição), importante pelo risco de aspiração.'},
    {q:'Idoso com FC 78 e PA 92x60 após queda. Medicação que pode mascarar a resposta ao choque:', o:['Omeprazol','Betabloqueador','Estatina','Levotiroxina'], c:1, e:'Betabloqueadores impedem a taquicardia compensatória.'},
    {q:'Equimose retroauricular após trauma craniano sugere:', o:['Fratura de mandíbula','Fratura de base de crânio','Lesão de carótida','Fratura de órbita'], c:1, e:'Sinal de Battle = fratura de base de crânio (fossa média).'},
    {q:'Torniquete aplicado na cena há 50 min, paciente estável. No exame secundário, o mais adequado é:', o:['Retirar e descartar sem observação','Manter fixo até a alta','Reavaliar e considerar conversão para curativo hemostático, mantendo o torniquete frouxo no lugar','Afrouxar a cada 10 minutos'], c:2, e:'O ATLS 11 inclui conversão do torniquete no secundário, com o torniquete pronto para reaperto.'},
    {q:'Fratura de tíbia imobilizada; dor intensa ao estender passivamente os dedos; pulso pedioso presente. Diagnóstico e conduta:', o:['Dor esperada da fratura; opioide','Trombose venosa; anticoagular','Síndrome compartimental; liberar imobilização e fasciotomia','Lesão arterial; arteriografia'], c:2, e:'Dor ao estiramento passivo é sinal precoce; pulso presente não exclui.'},
    {q:'Qual lesão é mais provavelmente esquecida se não for feito o logroll?', o:['Fratura de fêmur','Ferida penetrante no dorso','Pneumotórax','Fratura de face'], c:1, e:'Dorso, axilas e períneo só são vistos com o paciente rolado em bloco.'},
    {q:'Paciente hemodinamicamente instável que precisa de laparotomia imediata. O exame secundário:', o:['Deve ser concluído antes da cirurgia','Pode ser feito depois do controle do sangramento','É dispensável','Deve ser feito pelo anestesista no lugar do primário'], c:1, e:'O secundário não deve atrasar intervenção ou transferência; é completado depois.'}
  ]
},
/* ===================== CAP 15 — TRANSFERÊNCIA ===================== */
{
  n: 15,
  t: 'Transferência para tratamento definitivo',
  boss: { name:'Ambulâncio Atrasildo', title:'o Senhor da Espera', color:'#4cc9ff', shape:'knight' },
  intro: 'Só mais uma tomografia antes de transferir... e mais uma... Enquanto você pede exames, eu seguro a ambulância!',
  text: [
    {id:'c15-a', t:'Quando transferir', b:`
<p>Transferir quando as necessidades do paciente <b>excedem os recursos</b> do hospital. A decisão deve ser <b>precoce</b>, assim que se reconhece a necessidade.</p>
<p><b>Não atrasar a transferência</b> para fazer exames diagnósticos que <b>não mudarão a conduta imediata</b> (ex.: TC que será repetida no centro de referência).</p>
<p>Antes de sair: estabilizar o possível (via aérea, controle de sangramento, acesso, sangue), mas sem perder tempo.</p>
<div class="pega">Pegadinha: "fazer a TC antes de transferir" é a resposta errada quando atrasa e não muda a conduta.</div>`},
    {id:'c15-b', t:'Responsabilidades e comunicação', b:`
<p>O <b>médico de origem</b> é responsável por iniciar a transferência, escolher o modo de transporte e o nível de cuidado durante o trajeto, em conjunto com o médico que recebe.</p>
<p>O <b>médico que recebe</b> confirma a capacidade de aceitar o paciente e pode orientar condutas.</p>
<p>A comunicação deve ser <b>médico a médico</b>, estruturada e documentada. Enviar registros, exames, imagens e folha de transferência.</p>`},
    {id:'c15-c', t:'S-xABCDE-BAR', b:`
<p>Mnemônico de passagem de caso do ATLS 11:</p>
<ul><li><b>S</b> — Situação: quem é você, onde está, dados do paciente, mecanismo, motivo da transferência</li>
<li><b>x</b> — torniquete, binder pélvico, protocolo de transfusão maciça, sangramento ativo</li>
<li><b>A</b> — via aérea pérvia? intubado? tamanho do tubo? coluna protegida?</li>
<li><b>B</b> — SatO2, dreno de tórax, parâmetros do ventilador</li>
<li><b>C</b> — PA/FC, acessos IV/IO, hemoderivados, TXA</li>
<li><b>D</b> — GCS, pupilas, déficits lateralizados</li>
<li><b>E</b> — outras lesões, temperatura, prevenção de hipotermia</li>
<li><b>B</b> — Background: comorbidades, medicações (anticoagulantes), alergias, funcionalidade</li>
<li><b>A</b> — Assessment: lesões confirmadas, diagnóstico de trabalho, preocupações</li>
<li><b>R</b> — Recomendações: necessidades imediatas, CC, UTI, imagem, equipe</li></ul>
<div class="mais">Novo no ATLS 11: S-xABCDE-BAR com checklist de transferência.</div>`},
    {id:'c15-d', t:'Durante o transporte', b:`
<p>Equipe e equipamento compatíveis com a gravidade. Antecipar problemas: <b>intubar antes</b> se houver risco de perder a via aérea no trajeto; drenar tórax antes de transporte aéreo se houver pneumotórax.</p>
<p>Monitorizar sinais vitais, SatO2, ETCO2 se intubado; manter sangue e analgesia; prevenir hipotermia.</p>
<p>No pré-hospital, a passagem usa o <b>MIST</b>: Mecanismo, Injúrias (lesões), Sinais vitais, Tratamento realizado.</p>`}
  ],
  recall: [
    {q:'Qual é o critério geral para transferir um paciente?', a:'Quando as necessidades do paciente excedem os recursos do hospital.', s:'c15-a'},
    {q:'Deve-se fazer TC antes de transferir?', a:'Não, se atrasar a transferência e não mudar a conduta imediata.', s:'c15-a'},
    {q:'Quem é responsável por iniciar a transferência e definir o nível de cuidado no transporte?', a:'O médico de origem.', s:'c15-b'},
    {q:'Como deve ser a comunicação entre os hospitais?', a:'Médico a médico, estruturada e documentada, com envio de registros e imagens.', s:'c15-b'},
    {q:'O que significa o S e o BAR em S-xABCDE-BAR?', a:'Situação; Background, Assessment e Recomendações.', s:'c15-c'},
    {q:'O que informar no x do S-xABCDE-BAR?', a:'Torniquete, binder pélvico, protocolo de transfusão maciça ativado e sangramento ativo.', s:'c15-c'},
    {q:'Qual intervenção fazer antes do transporte se houver risco de perder a via aérea?', a:'Garantir via aérea definitiva (intubar) antes de sair.', s:'c15-d'},
    {q:'O que significa MIST?', a:'Mecanismo, Injúrias, Sinais vitais, Tratamento realizado.', s:'c15-d'}
  ],
  cards: [
    ['Critério de transferência','Necessidades do paciente > recursos do hospital.'],
    ['TC antes de transferir?','Não, se atrasa e não muda conduta.'],
    ['Quem inicia a transferência?','Médico de origem.'],
    ['Comunicação ideal','Médico a médico, estruturada.'],
    ['S de S-xABCDE-BAR','Situação.'],
    ['x de S-xABCDE-BAR','Torniquete, binder, PTM, sangramento ativo.'],
    ['C de S-xABCDE-BAR','PA/FC, acessos, hemoderivados, TXA.'],
    ['BAR','Background, Assessment, Recomendações.'],
    ['MIST','Mecanismo, Injúrias, Sinais vitais, Tratamento.'],
    ['Risco de perder via aérea no trajeto','Intubar antes de transferir.']
  ],
  battle: [
    {q:'Paciente com hemoperitônio em hospital sem cirurgião. Já reconhecida a necessidade de transferência, qual atitude é INCORRETA?', o:['Contatar o médico do centro de referência','Fazer TC de corpo inteiro antes de liberar a ambulância','Iniciar hemoderivados','Enviar registros e imagens'], c:1, e:'Exames que não mudam a conduta imediata não devem atrasar a transferência.'},
    {q:'No S-xABCDE-BAR, a informação "TXA administrado às 14h10" entra em:', o:['x','B (Breathing)','C','R'], c:2, e:'Circulação: PA/FC, acessos, hemoderivados e TXA.'},
    {q:'No S-xABCDE-BAR, "binder pélvico aplicado e PTM ativado" entra em:', o:['S','x','C','A (Assessment)'], c:1, e:'x: torniquete, binder, PTM, sangramento ativo.'},
    {q:'O médico responsável por definir o modo de transporte e o nível de cuidado no trajeto é:', o:['O médico que recebe','O motorista da ambulância','O médico de origem','A central de regulação apenas'], c:2, e:'A responsabilidade de iniciar e definir o cuidado é do médico de origem.'},
    {q:'TCE com GCS 7 aguardando transporte de 2 horas. Antes da saída:', o:['Manter cânula de Guedel apenas','Garantir via aérea definitiva','Sedar sem intubar','Aguardar piora para intubar'], c:1, e:'GCS ≤8 e risco de perder via aérea no trajeto: intubar antes.'},
    {q:'No mnemônico MIST, usado na passagem pré-hospitalar, o T significa:', o:['Tempo','Transporte','Tratamento realizado','Temperatura'], c:2, e:'Mecanismo, Injúrias, Sinais vitais, Tratamento.'},
    {q:'No S-xABCDE-BAR, o primeiro B (após o E) corresponde a:', o:['Breathing','Background: comorbidades, medicações, alergias','Binder','Balanço hídrico'], c:1, e:'BAR = Background, Assessment, Recommendations.'},
    {q:'Qual afirmação sobre transferência é CORRETA?', o:['Só se transfere após estabilização completa','A decisão deve ser precoce, assim que se reconhece a necessidade','A comunicação pode ser feita só por enfermagem','Documentação é opcional'], c:1, e:'Decisão precoce reduz tempo até o tratamento definitivo.'}
  ]
},
/* ===================== CAP 16 — SISTEMAS DE TRAUMA ===================== */
{
  n: 16,
  t: 'Sistemas de trauma',
  boss: { name:'Desorganizador', title:'o Caos Sem Rede', color:'#2ee6c5', shape:'beast' },
  intro: 'Cada hospital por si! Sem regulação, sem triagem regional, sem reabilitação... meu caos é seu pesadelo.',
  text: [
    {id:'c16-a', t:'O que é um sistema de trauma', b:`
<p>Um <b>sistema de trauma</b> é um esforço <b>organizado e coordenado</b>, numa <b>área geográfica definida</b>, que oferece cuidado completo ao traumatizado e é <b>integrado à saúde pública</b>.</p>
<p>Objetivo: levar o <b>paciente certo ao lugar certo no tempo certo</b>.</p>
<div class="mais">Novo no ATLS 11: capítulo inteiro sobre sistemas de trauma.</div>`},
    {id:'c16-b', t:'Elementos do sistema', b:`
<p>Componentes-chave:</p>
<ul><li><b>Vigilância e prevenção</b> (registros de trauma, dados epidemiológicos)</li>
<li><b>Serviço médico de emergência</b> e regulação</li>
<li><b>Atendimento pré-hospitalar e transporte</b></li>
<li><b>Cuidado hospitalar agudo</b></li>
<li><b>Reabilitação</b></li>
<li><b>Pesquisa</b></li></ul>
<p>Sem qualquer um desses elos o sistema falha: não basta ter um bom centro de trauma.</p>`},
    {id:'c16-c', t:'Triagem regional e níveis de centro', b:`
<p>A <b>triagem regional</b> direciona o paciente ao nível adequado de cuidado, evitando sobrecarga dos centros de maior complexidade e <b>subtriagem</b> de pacientes graves.</p>
<p>Centros de trauma são classificados por <b>níveis</b> (nos EUA, do nível I ao IV): Nível I tem todos os recursos, ensino e pesquisa; níveis menores estabilizam e transferem.</p>
<p><b>Subtriagem</b>: grave levado a hospital sem recursos (aumenta mortalidade). <b>Supertriagem</b>: leve levado ao centro de alta complexidade (consome recursos).</p>
<div class="pega">Pegadinha: a subtriagem é o erro mais perigoso para o paciente; a supertriagem é mais tolerada.</div>`},
    {id:'c16-d', t:'Triagem de campo', b:`
<p>A triagem de campo segue a <b>diretriz nacional de 2021</b>, com critérios <b>Vermelhos</b> (alto risco: lesões e fisiologia graves → centro de trauma de maior nível) e <b>Amarelos</b> (risco moderado: mecanismo, idade, situações especiais → centro de trauma, não necessariamente o mais alto).</p>
<p>Substitui o antigo esquema de <b>passos sequenciais</b> (fisiologia → anatomia → mecanismo → considerações especiais).</p>
<div class="mais">Novo no ATLS 11: triagem de campo por critérios Vermelhos e Amarelos.</div>`},
    {id:'c16-e', t:'Adaptação aos recursos locais', b:`
<p>O ATLS 11 enfatiza a <b>aplicabilidade global</b>: os princípios são os mesmos, mas a implementação se adapta aos recursos locais ("flexibilidade padronizada").</p>
<p>Melhoria de qualidade, registros e revisão de mortes evitáveis fazem parte do sistema.</p>`}
  ],
  recall: [
    {q:'Como o ATLS 11 define sistema de trauma?', a:'Esforço organizado e coordenado numa área definida, integrado à saúde pública, com cuidado completo ao traumatizado.', s:'c16-a'},
    {q:'Qual o objetivo resumido de um sistema de trauma?', a:'Levar o paciente certo ao lugar certo no tempo certo.', s:'c16-a'},
    {q:'Quais são os elementos-chave de um sistema de trauma?', a:'Vigilância e prevenção, SME, pré-hospitalar/transporte, hospital agudo, reabilitação e pesquisa.', s:'c16-b'},
    {q:'Qual a diferença entre subtriagem e supertriagem?', a:'Subtriagem: grave enviado a hospital sem recursos. Supertriagem: leve enviado a centro de alta complexidade.', s:'c16-c'},
    {q:'Qual dos dois erros de triagem é mais perigoso para o paciente?', a:'A subtriagem.', s:'c16-c'},
    {q:'O que caracteriza um centro de trauma nível I?', a:'Todos os recursos, disponibilidade 24 h, ensino e pesquisa.', s:'c16-c'},
    {q:'Como é a triagem de campo no ATLS 11?', a:'Diretriz nacional de 2021 com critérios Vermelhos e Amarelos, em vez de passos sequenciais.', s:'c16-d'},
    {q:'O que é "flexibilidade padronizada"?', a:'Manter os princípios do ATLS adaptando a implementação aos recursos locais.', s:'c16-e'}
  ],
  cards: [
    ['Sistema de trauma é...','Esforço organizado e coordenado numa área definida, integrado à saúde pública.'],
    ['Lema do sistema de trauma','Paciente certo, lugar certo, tempo certo.'],
    ['Elementos do sistema','Vigilância/prevenção, SME, pré-hospitalar, hospital, reabilitação, pesquisa.'],
    ['Subtriagem','Grave enviado a hospital sem recursos.'],
    ['Supertriagem','Leve enviado a centro de alta complexidade.'],
    ['Erro de triagem mais perigoso','Subtriagem.'],
    ['Triagem de campo ATLS 11','Diretriz 2021: critérios Vermelhos e Amarelos.'],
    ['Critério Vermelho','Alto risco → centro de trauma de maior nível.'],
    ['Critério Amarelo','Risco moderado → centro de trauma (não necessariamente o mais alto).'],
    ['Centro nível I','Recursos completos 24 h, ensino e pesquisa.']
  ],
  battle: [
    {q:'Segundo o ATLS 11, um sistema de trauma é:', o:['Um hospital com cirurgião 24 h','Um esforço organizado e coordenado numa área definida, integrado à saúde pública','Uma ambulância avançada','Um protocolo de triagem hospitalar'], c:1, e:'O sistema vai além do hospital e envolve todo o ciclo de cuidado.'},
    {q:'Qual elemento NÃO faz parte dos componentes-chave de um sistema de trauma?', o:['Reabilitação','Pesquisa','Vigilância e prevenção','Marketing hospitalar'], c:3, e:'Elementos: vigilância/prevenção, SME, pré-hospitalar, hospital, reabilitação e pesquisa.'},
    {q:'Paciente com trauma grave levado a hospital sem cirurgião, ignorando centro de trauma próximo. Isso é:', o:['Supertriagem','Subtriagem','Triagem reversa','Triagem adequada'], c:1, e:'Subtriagem aumenta mortalidade evitável.'},
    {q:'A triagem de campo adotada no ATLS 11 se baseia em:', o:['Passos sequenciais fisiologia-anatomia-mecanismo','Critérios Vermelhos e Amarelos (diretriz nacional 2021)','Apenas escala de Glasgow','Apenas mecanismo do trauma'], c:1, e:'A diretriz de 2021 trocou os passos por critérios Vermelhos e Amarelos.'},
    {q:'Paciente com escoriações leves levado ao centro nível I por precaução. Isso caracteriza:', o:['Subtriagem','Supertriagem','Triagem secundária','Erro grave com aumento de mortalidade'], c:1, e:'Supertriagem consome recursos, mas é mais tolerada que a subtriagem.'},
    {q:'Um paciente com critério Vermelho de triagem de campo deve ir para:', o:['Unidade básica mais próxima','Centro de trauma de maior nível disponível','Qualquer hospital com tomógrafo','Domicílio com orientação'], c:1, e:'Critérios Vermelhos indicam alto risco e destino ao centro de maior nível.'},
    {q:'O conceito de "flexibilidade padronizada" no ATLS 11 significa:', o:['Cada hospital cria seu próprio ABCDE','Princípios iguais, implementação adaptada aos recursos locais','Abandonar protocolos em locais pobres','Usar apenas recursos militares'], c:1, e:'O ATLS 11 busca aplicabilidade global mantendo os princípios.'},
    {q:'Registros de trauma e revisão de mortes evitáveis fazem parte de qual elemento do sistema?', o:['Reabilitação','Vigilância/melhoria de qualidade','Transporte','Cuidado hospitalar agudo'], c:1, e:'Vigilância e melhoria de qualidade alimentam prevenção e ajuste do sistema.'}
  ]
},
/* ===================== CAP 17 — TRIAGEM E DESASTRES ===================== */
{
  n: 17,
  t: 'Triagem e manejo de desastres',
  boss: { name:'Multivítimus', title:'o Senhor do Caos em Massa', color:'#ffc93c', shape:'skull' },
  intro: 'Trinta feridos, quatro leitos e um só cirurgião! Quem você vai salvar primeiro? Tic-tac...',
  text: [
    {id:'c17-a', t:'Princípios da triagem', b:`
<p><b>Triagem</b> é classificar pacientes conforme a necessidade de tratamento e os recursos disponíveis.</p>
<ul><li><b>Incidente com múltiplas vítimas</b>: os recursos ainda dão conta → trata-se primeiro o <b>mais grave</b>.</li>
<li><b>Incidente com vítimas em massa / desastre</b>: as vítimas <b>excedem os recursos</b> → prioriza-se quem tem <b>maior chance de sobreviver</b> com menor gasto de tempo e recursos ("o maior bem para o maior número").</li></ul>
<div class="mais">Novo no ATLS 11: triagem e desastres saíram dos apêndices e viraram capítulo.</div>`},
    {id:'c17-b', t:'Triagem em massa: START e SALT', b:`
<p><b>START</b> (adultos): quem anda → <b>verde</b>; não respira após abrir via aérea → <b>preto</b> (se voltar a respirar → <b>vermelho</b>); FR &gt;30, enchimento capilar &gt;2 s/sem pulso radial, ou não obedece comandos → <b>vermelho</b>; demais → <b>amarelo</b>.</p>
<p><b>SALT</b>: <b>S</b>ort (classificar globalmente: quem anda, quem acena, quem está imóvel), <b>A</b>ssess (avaliar individualmente), <b>L</b>ifesaving interventions (controle de hemorragia, abrir via aérea, descompressão, antídotos), <b>T</b>reatment/Transport.</p>
<p>Cores: <b>Vermelho</b> imediato; <b>Amarelo</b> retardado; <b>Verde</b> mínimo; <b>Cinza/Expectante</b> e <b>Preto</b> óbito.</p>
<div class="pega">Pegadinha: na triagem em massa só se fazem intervenções rápidas que salvam vida (ex.: torniquete, abrir via aérea) — não se para a triagem para RCP.</div>`},
    {id:'c17-c', t:'Comando de incidentes', b:`
<p>O <b>Sistema de Comando de Incidentes</b> organiza a resposta com <b>cadeia de comando única</b>, papéis definidos, linguagem comum e comunicação clara.</p>
<p>No hospital: um <b>líder/comandante</b>, oficial de triagem na entrada, áreas separadas por cor, liberação de leitos, suspensão de cirurgias eletivas e convocação de equipes.</p>
<p>Plano de desastre deve ser <b>escrito e treinado</b> (simulados).</p>`},
    {id:'c17-d', t:'Fases e cenários especiais', b:`
<p>Fases do manejo de desastres: <b>mitigação, preparação, resposta e recuperação</b>.</p>
<p>Nos <b>tiroteios em massa</b> e explosões predominam lesões hemorrágicas de extremidades: torniquetes e controle de sangramento são prioritários. Considerar <b>descontaminação</b> antes da entrada em incidentes químicos/radiológicos.</p>
<p>Pacientes frequentemente chegam <b>por meios próprios</b> ao hospital mais próximo, inclusive a hospitais sem cirurgia, que precisam estabilizar e transferir.</p>
<p>O ATLS 11 treina dois cenários: <b>acidente com múltiplos veículos num hospital com cirurgia</b> e <b>tiroteio em massa num hospital sem cirurgia</b>.</p>`}
  ],
  recall: [
    {q:'Qual a diferença de prioridade entre incidente com múltiplas vítimas e com vítimas em massa?', a:'Múltiplas: recursos suficientes, trata o mais grave primeiro. Massa: recursos excedidos, prioriza quem tem maior chance de sobreviver.', s:'c17-a'},
    {q:'Qual o princípio ético da triagem em desastre?', a:'O maior bem para o maior número de pessoas.', s:'c17-a'},
    {q:'No START, qual a cor de quem anda e de quem não respira após abrir a via aérea?', a:'Verde para quem anda; preto para quem não respira.', s:'c17-b'},
    {q:'Quais critérios no START classificam como vermelho?', a:'FR >30, enchimento capilar >2 s ou sem pulso radial, ou não obedece comandos.', s:'c17-b'},
    {q:'O que significa SALT?', a:'Sort, Assess, Lifesaving interventions, Treatment/Transport.', s:'c17-b'},
    {q:'Quais as características do sistema de comando de incidentes?', a:'Cadeia de comando única, papéis definidos, linguagem comum e comunicação clara.', s:'c17-c'},
    {q:'Quais as fases do manejo de desastres?', a:'Mitigação, preparação, resposta e recuperação.', s:'c17-d'},
    {q:'Qual o padrão de lesão predominante em tiroteios em massa e a prioridade?', a:'Hemorragia, principalmente de extremidades; controle com torniquete e pressão.', s:'c17-d'}
  ],
  cards: [
    ['Múltiplas vítimas (recursos OK)','Trata primeiro o mais grave.'],
    ['Vítimas em massa (recursos excedidos)','Prioriza maior chance de sobreviver.'],
    ['START: anda','Verde.'],
    ['START: não respira após abrir via aérea','Preto.'],
    ['START: FR > 30','Vermelho.'],
    ['SALT','Sort, Assess, Lifesaving interventions, Treatment/Transport.'],
    ['Intervenções salvadoras na triagem','Torniquete, abrir via aérea, descompressão, antídoto.'],
    ['Comando de incidentes','Comando único, papéis definidos, linguagem comum.'],
    ['Fases do desastre','Mitigação, preparação, resposta, recuperação.'],
    ['Incidente químico','Descontaminar antes de entrar no hospital.']
  ],
  battle: [
    {q:'Explosão com 60 feridos e hospital com 2 salas cirúrgicas. A prioridade de tratamento é:', o:['O mais grave primeiro, sempre','Quem tem maior chance de sobreviver com menor uso de recursos','Ordem de chegada','Crianças e idosos primeiro'], c:1, e:'Quando as vítimas excedem os recursos, busca-se o maior bem para o maior número.'},
    {q:'No START, vítima que não anda, respira com FR 36. Classificação:', o:['Verde','Amarelo','Vermelho','Preto'], c:2, e:'FR >30 classifica como vermelho (imediato).'},
    {q:'No START, vítima sem respiração que volta a respirar após abertura da via aérea:', o:['Preto','Vermelho','Amarelo','Verde'], c:1, e:'Respiração após manobra de via aérea = vermelho; se não respirar, preto.'},
    {q:'Durante a triagem em massa (SALT), qual intervenção é apropriada no local?', o:['RCP prolongada','Toracotomia','Torniquete em sangramento de membro','Intubação com videolaringoscópio'], c:2, e:'Só intervenções rápidas que salvam vida: controle de hemorragia, abrir via aérea, descompressão, antídotos.'},
    {q:'O L em SALT significa:', o:['Logística','Lifesaving interventions (intervenções salvadoras)','Lista de vítimas','Leitos disponíveis'], c:1, e:'Sort, Assess, Lifesaving interventions, Treatment/Transport.'},
    {q:'Principal característica do sistema de comando de incidentes:', o:['Vários líderes por setor sem hierarquia','Cadeia de comando única com papéis definidos','Decisões feitas pela imprensa','Comunicação em códigos de cada hospital'], c:1, e:'Comando único, papéis claros e linguagem comum.'},
    {q:'Hospital sem centro cirúrgico recebe 10 vítimas de tiroteio que chegaram por meios próprios. Conduta adequada:', o:['Recusar atendimento','Triar, controlar hemorragia, estabilizar e transferir','Aguardar ambulâncias para triar','Operar com equipe clínica'], c:1, e:'Hospitais sem cirurgia devem triar, estabilizar e transferir rapidamente.'},
    {q:'Qual das alternativas é uma fase do manejo de desastres?', o:['Retaliação','Recuperação','Remoção da imprensa','Reconciliação'], c:1, e:'Fases: mitigação, preparação, resposta e recuperação.'}
  ]
},
/* ===================== CAP 18 — PREVENÇÃO ===================== */
{
  n: 18,
  t: 'Prevenção de lesões',
  boss: { name:'Acidentino', title:'o Fatalista', color:'#ff8a3d', shape:'flame' },
  intro: 'Foi só um acidente, ninguém tinha como evitar! ...Ou será que você vai provar que eu sou uma mentira?',
  text: [
    {id:'c18-a', t:'Trauma não é acidente', b:`
<p>O ATLS 11 reforça: <b>trauma não é acidente</b>. "Acidente" sugere algo aleatório e inevitável; na verdade a <b>maioria das lesões é previsível e evitável</b>.</p>
<p>O trauma é uma <b>doença</b> com hospedeiro, agente (energia) e ambiente, e pode ser estudada e prevenida como qualquer outra.</p>
<div class="mais">Novo no ATLS 11: capítulo próprio de Prevenção de Lesões.</div>`},
    {id:'c18-b', t:'Níveis de prevenção', b:`
<ul><li><b>Primária</b>: impedir que o evento aconteça (ex.: lei seca, limites de velocidade, cercar piscinas).</li>
<li><b>Secundária</b>: o evento acontece, mas a lesão é evitada ou reduzida (ex.: cinto de segurança, capacete, airbag).</li>
<li><b>Terciária</b>: reduzir as consequências após a lesão (ex.: atendimento de trauma e reabilitação).</li></ul>`},
    {id:'c18-c', t:'Os 3 Es', b:`
<p>Estratégias de prevenção:</p>
<ul><li><b>Educação</b>: mudar comportamento (campanhas, orientação). Isoladamente tem efeito limitado.</li>
<li><b>Engenharia/Ambiente</b>: mudar produtos e o ambiente (airbag, barreiras, iluminação, capacete). Costuma ser a mais eficaz por ser <b>passiva</b>.</li>
<li><b>Enforcement (fiscalização/legislação)</b>: leis e sua aplicação (lei do cinto, lei seca, cadeirinha).</li></ul>
<div class="pega">Pegadinha: medidas passivas (que não dependem da ação do indivíduo) costumam funcionar melhor que medidas ativas.</div>`},
    {id:'c18-d', t:'Matriz de Haddon', b:`
<p>A <b>matriz de Haddon</b> cruza <b>fases</b> (pré-evento, evento, pós-evento) com <b>fatores</b> (hospedeiro, agente/veículo, ambiente físico e social).</p>
<p>Exemplo em colisão: pré-evento + hospedeiro = motorista sóbrio; evento + veículo = airbag; pós-evento + ambiente = SME rápido.</p>`},
    {id:'c18-e', t:'Determinantes sociais e rastreio', b:`
<p>As estratégias variam conforme os <b>determinantes sociais</b> locais (pobreza, moradia, violência, acesso a serviços).</p>
<p>O atendimento do trauma é um <b>momento de oportunidade</b>: rastrear risco (uso de álcool e drogas, violência interpessoal, quedas no idoso, armas em casa) e fazer <b>intervenção breve</b> e encaminhamento.</p>
<p>Programas hospitalares de interrupção da violência reduzem reincidência.</p>`}
  ],
  recall: [
    {q:'Por que o ATLS evita a palavra "acidente"?', a:'Porque sugere evento aleatório e inevitável, e a maioria das lesões é previsível e evitável.', s:'c18-a'},
    {q:'Dê um exemplo de prevenção primária, secundária e terciária.', a:'Primária: lei seca; secundária: cinto/capacete; terciária: atendimento de trauma e reabilitação.', s:'c18-b'},
    {q:'Quais são os 3 Es da prevenção?', a:'Educação, Engenharia/Ambiente e Enforcement (fiscalização/legislação).', s:'c18-c'},
    {q:'Qual dos 3 Es costuma ser mais eficaz e por quê?', a:'Engenharia/Ambiente, por ser passiva e não depender do comportamento individual.', s:'c18-c'},
    {q:'A educação isolada é eficaz?', a:'Tem efeito limitado se usada sozinha.', s:'c18-c'},
    {q:'O que a matriz de Haddon cruza?', a:'Fases (pré-evento, evento, pós-evento) com fatores (hospedeiro, agente/veículo, ambiente).', s:'c18-d'},
    {q:'Por que as estratégias de prevenção variam entre locais?', a:'Porque dependem dos determinantes sociais locais.', s:'c18-e'},
    {q:'Que rastreios podem ser feitos durante o atendimento do trauma?', a:'Álcool e drogas, violência interpessoal, risco de quedas, armas em casa; com intervenção breve e encaminhamento.', s:'c18-e'}
  ],
  cards: [
    ['Trauma é acidente?','Não: a maioria é previsível e evitável.'],
    ['Prevenção primária','Impede o evento (ex.: lei seca).'],
    ['Prevenção secundária','Reduz a lesão no evento (ex.: cinto, capacete).'],
    ['Prevenção terciária','Reduz consequências (atendimento, reabilitação).'],
    ['3 Es','Educação, Engenharia/Ambiente, Enforcement.'],
    ['E mais eficaz','Engenharia/Ambiente (passiva).'],
    ['Lei do cinto é qual E?','Enforcement (fiscalização/legislação).'],
    ['Airbag é qual E?','Engenharia.'],
    ['Matriz de Haddon','Fases (pré, evento, pós) × fatores (hospedeiro, agente, ambiente).'],
    ['Momento oportuno para prevenção','O próprio atendimento do trauma (rastreio + intervenção breve).']
  ],
  battle: [
    {q:'Segundo o ATLS 11, o termo "acidente" deve ser evitado porque:', o:['É juridicamente incorreto','Sugere evento inevitável, e a maioria das lesões é evitável','É termo de uso militar','Não existe em português'], c:1, e:'Trauma é doença previsível e prevenível.'},
    {q:'A obrigatoriedade legal do uso de capacete por motociclistas é exemplo de qual E?', o:['Educação','Engenharia','Enforcement','Emergência'], c:2, e:'Legislação e fiscalização = Enforcement.'},
    {q:'Instalação de barreiras de concreto entre pistas de rodovia é exemplo de:', o:['Educação','Engenharia/Ambiente','Enforcement','Prevenção terciária'], c:1, e:'Mudança do ambiente físico = Engenharia/Ambiente.'},
    {q:'O uso de cinto de segurança é prevenção:', o:['Primária','Secundária','Terciária','Quaternária'], c:1, e:'O evento ocorre, mas a lesão é reduzida = secundária.'},
    {q:'Qual estratégia tende a ser a MENOS eficaz quando usada isoladamente?', o:['Engenharia','Legislação com fiscalização','Educação','Mudança do ambiente'], c:2, e:'Educação sozinha tem efeito limitado; funciona melhor combinada.'},
    {q:'Na matriz de Haddon, "atendimento pré-hospitalar rápido" corresponde a qual fase?', o:['Pré-evento','Evento','Pós-evento','Nenhuma'], c:2, e:'Medidas após a lesão pertencem à fase pós-evento.'},
    {q:'Paciente jovem internado por ferimento de arma de fogo pela segunda vez. Ação de prevenção mais adequada no hospital:', o:['Nenhuma, foge ao escopo médico','Rastreio de risco e encaminhamento a programa de interrupção da violência','Alta precoce','Apenas orientação verbal genérica'], c:1, e:'O atendimento é oportunidade de rastreio e intervenção; programas hospitalares reduzem reincidência.'},
    {q:'Programa de prevenção de quedas eficaz numa cidade não funcionou em outra. Explicação mais provável segundo o ATLS 11:', o:['Erro estatístico','As estratégias dependem dos determinantes sociais locais','Prevenção não funciona','Falta de tomógrafos'], c:1, e:'Estratégias de prevenção devem ser adaptadas aos determinantes sociais locais.'}
  ]
}
]);
