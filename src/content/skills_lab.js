/* Sala de Habilidades · Laboratório */
window.ATLS_SKILLS = (window.ATLS_SKILLS || []).concat([
 {
  "cat": "lab",
  "id": "lab-hemograma",
  "t": "Hemograma no trauma",
  "sub": "Por que a hemoglobina inicial engana",
  "img": [],
  "b": "<h4>Laudo-exemplo</h4>\n<table class=\"laudo\"><caption>Hemograma · motociclista na chegada (PA 84×50, FC 132, pele fria)</caption><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th></th></tr></thead><tbody><tr><td>Hemoglobina</td><td class=\"num\">13,8 g/dL</td><td class=\"ref\">13,5–17,5 g/dL</td><td><span class=\"normal\">NORMAL</span></td></tr><tr><td>Hematócrito</td><td class=\"num\">41%</td><td class=\"ref\">40–52%</td><td><span class=\"normal\">NORMAL</span></td></tr><tr><td>Leucócitos</td><td class=\"num\">16.800/mm³</td><td class=\"ref\">4.000–11.000/mm³</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>Plaquetas</td><td class=\"num\">210.000/mm³</td><td class=\"ref\">150.000–400.000/mm³</td><td><span class=\"normal\">NORMAL</span></td></tr></tbody></table>\n<p>Hemoglobina “normal” com PA 84×50 e FC 132: o paciente perdeu sangue total e a diluição ainda não aconteceu. A leucocitose é de estresse. A leitura correta é <b>choque hemorrágico até prova em contrário</b>.</p>\n<table class=\"laudo\"><caption>Mesmo paciente · 2 horas depois, após cristaloide e sangramento contínuo</caption><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th></th></tr></thead><tbody><tr><td>Hemoglobina</td><td class=\"num\">9,2 g/dL</td><td class=\"ref\">13,5–17,5 g/dL</td><td><span class=\"baixo\">BAIXO</span></td></tr><tr><td>Hematócrito</td><td class=\"num\">27%</td><td class=\"ref\">40–52%</td><td><span class=\"baixo\">BAIXO</span></td></tr><tr><td>Plaquetas</td><td class=\"num\">118.000/mm³</td><td class=\"ref\">150.000–400.000/mm³</td><td><span class=\"baixo\">BAIXO</span></td></tr></tbody></table>\n<p>A queda só apareceu depois da hemodiluição e da perda continuada. Esperar esse número para decidir transfusão ou cirurgia atrasa o tratamento.</p>\n<h4>O que olhar</h4>\n<ul>\n<li><b>Hemoglobina e hematócrito:</b> na hemorragia aguda, o paciente perde sangue total (hemácias e plasma juntos). A concentração só cai depois que o líquido intersticial migra para o vaso ou depois da reposição com cristaloide, o que leva horas. Por isso a <b>Hb da chegada pode estar normal</b> num paciente que já perdeu um terço da volemia.</li>\n<li><b>Hb seriada:</b> quedas sucessivas sugerem sangramento contínuo, mas a decisão de transfundir e de operar é <b>clínica</b> (perfusão, resposta à reposição, FAST, lactato).</li>\n<li><b>Leucócitos:</b> leucocitose de estresse é esperada nas primeiras horas (adrenalina e cortisol); não indica infecção.</li>\n<li><b>Plaquetas:</b> caem com consumo e diluição. Num paciente sangrando, a contagem baixa pede reposição dentro do protocolo de transfusão maciça.</li>\n</ul>\n<div class=\"pega\">Pegadinha: “Hb normal, então o choque não é hemorrágico.” Errado. No trauma, choque é hemorrágico até prova em contrário.</div>\n<div class=\"caso\">Motociclista com PA 80×50, FC 130, pele fria e Hb 13. A conduta é tratar como choque hemorrágico: controle do sangramento, sangue e busca da fonte (tórax, abdome, pelve, ossos longos, externo).</div>",
  "quiz": [
   {
    "q": "Homem de 30 anos, atropelado há 20 minutos, PA 82×48 mmHg, FC 136 bpm, extremidades frias. Hb de chegada: 13,4 g/dL. Qual a interpretação correta?",
    "o": [
     "A Hb normal afasta perda volêmica importante",
     "A Hb inicial pode estar normal mesmo com grande perda aguda; trata-se como choque hemorrágico",
     "O choque é provavelmente neurogênico, já que a Hb está normal",
     "Deve-se aguardar a Hb de controle em 6 horas antes de transfundir"
    ],
    "c": 1,
    "e": "<b>Certo:</b> na hemorragia aguda o paciente perde sangue total; a Hb só cai com a hemodiluição, que leva horas. A clínica de choque manda. <br><b>Por que não as outras:</b> Hb normal não afasta perda; choque no trauma é hemorrágico até prova em contrário; esperar a Hb atrasa o tratamento."
   },
   {
    "q": "No mesmo paciente, os leucócitos estão em 17.000/mm³. O que isso significa?",
    "o": [
     "Infecção grave em curso",
     "Leucocitose de estresse, esperada nas primeiras horas após o trauma",
     "Leucemia aguda",
     "Indicação de antibiótico de amplo espectro"
    ],
    "c": 1,
    "e": "<b>Certo:</b> catecolaminas e cortisol mobilizam neutrófilos; é resposta de estresse. <br><b>Por que não as outras:</b> não há evidência de infecção ou de doença hematológica; o número isolado não indica antibiótico."
   }
  ]
 },
 {
  "cat": "lab",
  "id": "lab-gasometria",
  "t": "Gasometria, déficit de bases e lactato",
  "sub": "Interpretação passo a passo",
  "img": [],
  "b": "<h4>Laudo-exemplo</h4>\n<table class=\"laudo\"><caption>Gasometria arterial · politrauma em choque (FiO₂ 0,5)</caption><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th></th></tr></thead><tbody><tr><td>pH</td><td class=\"num\">7,28</td><td class=\"ref\">7,35–7,45</td><td><span class=\"baixo\">BAIXO</span></td></tr><tr><td>PaCO₂</td><td class=\"num\">26 mmHg</td><td class=\"ref\">35–45 mmHg</td><td><span class=\"baixo\">BAIXO</span></td></tr><tr><td>HCO₃</td><td class=\"num\">12 mEq/L</td><td class=\"ref\">22–26 mEq/L</td><td><span class=\"baixo\">BAIXO</span></td></tr><tr><td>BE (excesso de bases)</td><td class=\"num\">−12 mEq/L</td><td class=\"ref\">−2 a +2 mEq/L</td><td><span class=\"critico\">CRÍTICO</span></td></tr><tr><td>Lactato</td><td class=\"num\">6,2 mmol/L</td><td class=\"ref\">&lt; 2 mmol/L</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>PaO₂</td><td class=\"num\">190 mmHg</td><td class=\"ref\">—</td><td></td></tr></tbody></table>\n<p>pH baixo com HCO₃ baixo: <b>acidose metabólica</b>. PaCO₂ esperada pela fórmula de Winter: 1,5 × 12 + 8 = 26 (±2); a medida é 26, então a compensação respiratória é adequada. BE −12 e lactato 6,2 indicam <b>hipoperfusão grave</b>: trate o choque, não o número.</p>\n<h4>Leitura em 4 passos</h4>\n<div class=\"fluxo\"><div class=\"passo\"><b>pH</b>Abaixo de 7,35 é acidemia; acima de 7,45, alcalemia.</div><div class=\"passo\"><b>Distúrbio primário</b>Qual valor explica o pH?<div class=\"ramos\"><div>HCO₃ baixo com pH baixo → acidose <b>metabólica</b></div><div>PaCO₂ alta com pH baixo → acidose <b>respiratória</b></div></div></div><div class=\"passo\"><b>Compensação</b>Na acidose metabólica, a PaCO₂ esperada é ≈ 1,5 × HCO₃ + 8 (±2).<div class=\"ramos\"><div>PaCO₂ dentro do esperado → compensada</div><div>PaCO₂ acima do esperado → acidose respiratória associada (TCE, tórax instável, sedação)</div></div></div><div class=\"passo\"><b>Perfusão</b>Déficit de bases e lactato medem a hipoperfusão e servem para acompanhar a ressuscitação.</div></div>\n<table class=\"laudo\"><caption>Outro exemplo · TCE grave com hipoventilação</caption><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th></th></tr></thead><tbody><tr><td>pH</td><td class=\"num\">7,25</td><td class=\"ref\">7,35–7,45</td><td><span class=\"baixo\">BAIXO</span></td></tr><tr><td>PaCO₂</td><td class=\"num\">60 mmHg</td><td class=\"ref\">35–45 mmHg</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>HCO₃</td><td class=\"num\">26 mEq/L</td><td class=\"ref\">22–26 mEq/L</td><td><span class=\"normal\">NORMAL</span></td></tr><tr><td>Lactato</td><td class=\"num\">1,4 mmol/L</td><td class=\"ref\">&lt; 2 mmol/L</td><td><span class=\"normal\">NORMAL</span></td></tr></tbody></table>\n<p>pH baixo com PaCO₂ alta e HCO₃ normal: <b>acidose respiratória aguda</b> por hipoventilação. No TCE, a hipercapnia dilata os vasos cerebrais e aumenta a pressão intracraniana: a conduta é garantir ventilação adequada.</p>\n<h4>No trauma</h4>\n<ul>\n<li>A regra é a <b>acidose metabólica lática</b> do choque: o tecido sem oxigênio produz lactato.</li>\n<li><b>Lactato &gt; 2 mmol/L</b> indica hipoperfusão; a queda progressiva (clareamento) mostra que a ressuscitação está funcionando. O ATLS 11 destaca o lactato para monitorar a ressuscitação.</li>\n<li><b>Déficit de bases:</b> quanto mais negativo, maior o choque. Na referência clássica do ATLS: até −2 normal, −2 a −6 leve, −6 a −10 moderado, abaixo de −10 grave.</li>\n<li><b>Bicarbonato não trata a causa.</b> A acidose melhora com controle do sangramento, sangue e perfusão.</li>\n<li>Acidose é um dos vértices da <b>tríade letal</b> (com hipotermia e coagulopatia): piora a coagulação e a contratilidade cardíaca.</li>\n</ul>\n<div class=\"pega\">Pegadinha: tratar acidose do choque com bicarbonato. A resposta certa é tratar o choque.</div>",
  "quiz": [
   {
    "q": "Politraumatizado em choque: pH 7,27; PaCO₂ 25 mmHg; HCO₃ 11 mEq/L; BE −12; lactato 7 mmol/L. A interpretação correta é:",
    "o": [
     "Acidose respiratória aguda",
     "Acidose metabólica com compensação respiratória, por hipoperfusão grave",
     "Alcalose metabólica compensada",
     "Distúrbio misto com acidose respiratória dominante"
    ],
    "c": 1,
    "e": "<b>Certo:</b> pH baixo e HCO₃ baixo definem acidose metabólica; PaCO₂ esperada ≈ 1,5×11+8 = 24,5 (±2, ou seja, 22,5–26,5), e 25 está dentro da faixa: compensação respiratória adequada. BE −12 e lactato 7 = hipoperfusão grave. <br><b>Por que não as outras:</b> a PaCO₂ está baixa, não alta; o pH é ácido; não há acidose respiratória dominante."
   },
   {
    "q": "Na mesma gasometria, qual a conduta para a acidose?",
    "o": [
     "Bicarbonato de sódio em bolus",
     "Hiperventilar para PaCO₂ de 20 mmHg",
     "Controlar o sangramento e repor sangue; acompanhar lactato e déficit de bases",
     "Aguardar nova gasometria em 6 horas"
    ],
    "c": 2,
    "e": "<b>Certo:</b> a acidose é consequência da hipoperfusão; trata-se a causa e usa-se lactato e BE para acompanhar. <br><b>Por que não as outras:</b> bicarbonato não corrige a causa; hiperventilar agressivamente não trata choque; esperar perde tempo."
   },
   {
    "q": "Paciente com TCE grave: pH 7,25; PaCO₂ 60 mmHg; HCO₃ 26 mEq/L. Qual o distúrbio?",
    "o": [
     "Acidose metabólica",
     "Acidose respiratória aguda por hipoventilação",
     "Alcalose respiratória",
     "Gasometria normal"
    ],
    "c": 1,
    "e": "<b>Certo:</b> pH baixo com PaCO₂ alta e HCO₃ normal = acidose respiratória aguda; no TCE, sinal de hipoventilação e indicação de via aérea definitiva. <br><b>Por que não as outras:</b> o HCO₃ está normal (não é metabólica); o pH é ácido."
   }
  ]
 },
 {
  "cat": "lab",
  "id": "lab-coagulacao",
  "t": "Coagulograma e coagulopatia do trauma",
  "sub": "TP/INR, TTPa, fibrinogênio, plaquetas e testes viscoelásticos",
  "img": [],
  "b": "<h4>Laudo-exemplo</h4>\n<table class=\"laudo\"><caption>Coagulograma · politrauma após 3 L de cristaloide, ainda sangrando</caption><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th></th></tr></thead><tbody><tr><td>TP/INR</td><td class=\"num\">1,7</td><td class=\"ref\">0,9–1,2</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>TTPa</td><td class=\"num\">48 s</td><td class=\"ref\">25–35 s</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>Fibrinogênio</td><td class=\"num\">110 mg/dL</td><td class=\"ref\">200–400 mg/dL</td><td><span class=\"critico\">CRÍTICO</span></td></tr><tr><td>Plaquetas</td><td class=\"num\">78.000/mm³</td><td class=\"ref\">150.000–400.000/mm³</td><td><span class=\"baixo\">BAIXO</span></td></tr><tr><td>Temperatura</td><td class=\"num\">34,8 °C</td><td class=\"ref\">36–37,5 °C</td><td><span class=\"baixo\">HIPOTERMIA</span></td></tr></tbody></table>\n<p>Todos os componentes da coagulação estão comprometidos, com o fibrinogênio, o primeiro a cair, em nível crítico. Diluição por cristaloide e hipotermia agravam a coagulopatia do trauma: <b>hemoderivados em proporção balanceada, reposição de fibrinogênio, aquecimento e TXA</b> dentro de 3 h.</p>\n<h4>Leitura do teste viscoelástico (ROTEM/TEG)</h4>\n<div class=\"fluxo\"><div class=\"passo\"><b>Tempo até o coágulo começar</b>CT (ROTEM) ou R (TEG) prolongado → faltam fatores → repor com <b>plasma</b>.</div><div class=\"passo\"><b>Firmeza do coágulo</b>A10/MCF (ROTEM) ou MA (TEG) baixa: qual componente falta?<div class=\"ramos\"><div>FIBTEM com amplitude baixa → falta <b>fibrinogênio</b> (crioprecipitado ou concentrado)</div><div>FIBTEM normal e EXTEM baixo → faltam <b>plaquetas</b></div></div></div><div class=\"passo\"><b>Lise precoce</b>O coágulo se desfaz cedo → hiperfibrinólise → <b>ácido tranexâmico</b>.</div></div>\n<h4>Por que o traumatizado sangra mais</h4>\n<p>A <b>coagulopatia induzida pelo trauma</b> começa cedo, pela própria lesão e pelo choque (consumo, hiperfibrinólise). Depois piora com <b>diluição</b> (cristaloide, hemácias sem plasma), <b>hipotermia</b> e <b>acidose</b>: a tríade letal.</p>\n<h4>O que cada exame mostra</h4>\n<ul>\n<li><b>TP/INR:</b> via extrínseca e comum; INR &gt; 1,5 no traumatizado sangrando pede plasma.</li>\n<li><b>TTPa:</b> via intrínseca; prolonga com consumo e diluição.</li>\n<li><b>Fibrinogênio:</b> é o primeiro fator a cair. Valores baixos (por volta de &lt; 150–200 mg/dL) com sangramento pedem crioprecipitado ou concentrado de fibrinogênio.</li>\n<li><b>Plaquetas:</b> no sangramento ativo, mantenha contagem adequada (alvo mais alto no TCE).</li>\n<li><b>Testes viscoelásticos (ROTEM/TEG):</b> mostram o coágulo inteiro em minutos. CT longo = falta de fatores (plasma); amplitude baixa = falta de fibrinogênio ou plaquetas; lise precoce = hiperfibrinólise (ácido tranexâmico).</li>\n</ul>\n<h4>Conduta</h4>\n<ul>\n<li>Não espere o laboratório para começar: ative cedo o <b>protocolo de transfusão maciça</b> com proporção balanceada (1:1:1).</li>\n<li><b>Ácido tranexâmico</b> até 3 h do trauma: 1 g em 10 min + 1 g em 8 h.</li>\n<li>Aqueça o paciente e os hemoderivados; reponha cálcio.</li>\n<li>Anticoagulado? Use a tabela de reversão: vitamina K + complexo protrombínico para antagonista da vitamina K; idarucizumabe para dabigatrana; antídotos específicos para inibidores do fator Xa, conforme disponibilidade.</li>\n</ul>\n<div class=\"mais\">Novo no ATLS 11: tabela ampliada de reversão de anticoagulantes e ênfase em hemoderivados no lugar de cristaloide.</div>",
  "quiz": [
   {
    "q": "Após 6 concentrados de hemácias e 2 L de cristaloide, o paciente segue sangrando: INR 1,9; fibrinogênio 95 mg/dL; plaquetas 70.000; temperatura 34,5 °C. Qual é a melhor estratégia?",
    "o": [
     "Mais concentrado de hemácias isolado até Hb 10",
     "Plasma, crioprecipitado/fibrinogênio e plaquetas dentro do protocolo de transfusão maciça, aquecimento e cálcio",
     "Vitamina K isolada e aguardar 24 horas",
     "Suspender toda transfusão e repetir coagulograma em 6 horas"
    ],
    "c": 1,
    "e": "<b>Certo:</b> é coagulopatia por consumo e diluição com hipotermia; repõe-se o que falta em proporção balanceada e corrige-se a tríade letal. <br><b>Por que não as outras:</b> hemácia isolada perpetua a coagulopatia; vitamina K demora horas; parar a reposição de quem sangra é fatal."
   },
   {
    "q": "No ROTEM, o traçado do FIBTEM mostra amplitude muito baixa, com CT normal no EXTEM. O que falta?",
    "o": [
     "Fatores da coagulação (plasma)",
     "Fibrinogênio",
     "Nada; o exame é normal",
     "Heparina em excesso"
    ],
    "c": 1,
    "e": "<b>Certo:</b> o FIBTEM isola a contribuição do fibrinogênio; amplitude baixa = fibrinogênio baixo, tratado com crioprecipitado ou concentrado de fibrinogênio. <br><b>Por que não as outras:</b> CT normal afasta falta de fatores; o traçado está alterado; não há dado de heparina."
   },
   {
    "q": "Idoso em uso de varfarina, queda da própria altura, TCE com hematoma subdural e INR 3,2. Qual a reversão mais adequada?",
    "o": [
     "Plasma isolado, 2 bolsas",
     "Vitamina K intravenosa associada a complexo protrombínico",
     "Protamina",
     "Idarucizumabe"
    ],
    "c": 1,
    "e": "<b>Certo:</b> antagonista da vitamina K com sangramento grave: complexo protrombínico (efeito rápido) mais vitamina K (efeito sustentado). <br><b>Por que não as outras:</b> plasma isolado é mais lento e exige volume grande; protamina reverte heparina; idarucizumabe reverte dabigatrana."
   }
  ]
 },
 {
  "cat": "lab",
  "id": "lab-eletrolitos",
  "t": "Eletrólitos na transfusão maciça",
  "sub": "Cálcio ionizado e potássio",
  "img": [],
  "b": "<h4>Laudo-exemplo</h4>\n<table class=\"laudo\"><caption>Durante transfusão maciça · 10 unidades de hemácias em 1 hora</caption><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th></th></tr></thead><tbody><tr><td>Potássio</td><td class=\"num\">6,1 mEq/L</td><td class=\"ref\">3,5–5,0 mEq/L</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>Cálcio ionizado</td><td class=\"num\">0,82 mmol/L</td><td class=\"ref\">1,12–1,32 mmol/L</td><td><span class=\"critico\">CRÍTICO</span></td></tr><tr><td>pH</td><td class=\"num\">7,24</td><td class=\"ref\">7,35–7,45</td><td><span class=\"baixo\">BAIXO</span></td></tr><tr><td>ECG</td><td class=\"num\">T apiculada</td><td class=\"ref\">—</td><td><span class=\"alto\">ALTERADO</span></td></tr></tbody></table>\n<p>Hipercalemia (hemácias estocadas, acidose, reperfusão) com alteração no ECG e hipocalcemia pelo citrato das bolsas. A primeira medida é <b>cálcio intravenoso</b>, que estabiliza a membrana cardíaca e repõe o cálcio consumido; depois, insulina com glicose e correção da acidose.</p>\n<h4>Cálcio ionizado</h4>\n<ul>\n<li>O <b>citrato</b> que anticoagula as bolsas se liga ao cálcio do paciente. Com muitas bolsas em pouco tempo, o cálcio ionizado cai.</li>\n<li>Hipocalcemia piora a <b>contratilidade cardíaca</b>, causa vasodilatação e atrapalha a <b>coagulação</b> (o cálcio é cofator).</li>\n<li>Meça o cálcio ionizado durante a transfusão maciça e reponha (gluconato ou cloreto de cálcio) conforme o protocolo.</li>\n</ul>\n<h4>Potássio</h4>\n<ul>\n<li>Hemácias estocadas liberam potássio; a reperfusão de membros isquêmicos (torniquete prolongado, esmagamento) e a acidose também elevam o K⁺.</li>\n<li>Faça <b>ECG</b> (ondas T apiculadas, QRS largo) e trate: cálcio para estabilizar a membrana, insulina com glicose, correção da acidose.</li>\n</ul>\n<div class=\"pega\">Pegadinha: esquecer o cálcio na transfusão maciça. A hipocalcemia é silenciosa e piora tanto o choque quanto o sangramento.</div>",
  "quiz": [
   {
    "q": "Durante a transfusão maciça (12 unidades em 2 horas), o paciente fica mais hipotenso, com cálcio ionizado de 0,78 mmol/L. Qual a causa provável e a conduta?",
    "o": [
     "Reação hemolítica; suspender toda transfusão",
     "Hipocalcemia por citrato; repor cálcio intravenoso",
     "Hipercalcemia; furosemida",
     "Hiponatremia dilucional; salina hipertônica"
    ],
    "c": 1,
    "e": "<b>Certo:</b> o citrato das bolsas quela o cálcio; a hipocalcemia piora a contratilidade e a coagulação, e o tratamento é repor cálcio. <br><b>Por que não as outras:</b> nada sugere hemólise; o cálcio está baixo, não alto; o sódio não é o problema."
   },
   {
    "q": "Após retirar um torniquete mantido por muitas horas, surgem ondas T apiculadas e QRS alargando. Qual a primeira medida?",
    "o": [
     "Cálcio intravenoso para estabilizar a membrana cardíaca",
     "Furosemida em dose alta",
     "Bicarbonato oral",
     "Aguardar o potássio do laboratório"
    ],
    "c": 0,
    "e": "<b>Certo:</b> hipercalemia com alteração no ECG pede cálcio imediato; depois insulina com glicose e correção da acidose. <br><b>Por que não as outras:</b> diurético e bicarbonato oral são lentos; com ECG alterado não se espera o laboratório."
   }
  ]
 },
 {
  "cat": "lab",
  "id": "lab-rabdomiolise",
  "t": "CK, função renal e síndrome de esmagamento",
  "sub": "Rabdomiólise e mioglobinúria",
  "img": [],
  "b": "<h4>Laudo-exemplo</h4>\n<table class=\"laudo\"><caption>Esmagamento de membros inferiores · 6 horas após o resgate</caption><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th></th></tr></thead><tbody><tr><td>CK</td><td class=\"num\">48.000 U/L</td><td class=\"ref\">&lt; 200 U/L</td><td><span class=\"critico\">CRÍTICO</span></td></tr><tr><td>Creatinina</td><td class=\"num\">2,4 mg/dL</td><td class=\"ref\">0,7–1,3 mg/dL</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>Potássio</td><td class=\"num\">5,8 mEq/L</td><td class=\"ref\">3,5–5,0 mEq/L</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>Urina · tira reagente (sangue)</td><td class=\"num\">+++</td><td class=\"ref\">negativo</td><td><span class=\"alto\">POSITIVO</span></td></tr><tr><td>Urina · sedimento (hemácias)</td><td class=\"num\">0–2 por campo</td><td class=\"ref\">&lt; 5 por campo</td><td><span class=\"normal\">NORMAL</span></td></tr></tbody></table>\n<p>Tira positiva para “sangue” sem hemácias no sedimento é <b>mioglobinúria</b>. Com CK muito alta, creatinina subindo e potássio elevado, o quadro é de rabdomiólise com lesão renal: <b>volume precoce para débito urinário alto</b>, ECG e vigilância dos compartimentos.</p>\n<h4>Tira positiva para sangue: o que é?</h4>\n<div class=\"fluxo\"><div class=\"passo\"><b>Tira reagente</b>O teste positivo para “sangue” detecta o grupo heme: hemácias, hemoglobina livre ou mioglobina.</div><div class=\"passo\"><b>Sedimento urinário</b>Há hemácias?<div class=\"ramos\"><div>Hemácias presentes → <b>hematúria</b> (rim, bexiga, uretra)</div><div>Sem hemácias → <b>mioglobina</b> (esmagamento, queimadura elétrica) ou hemoglobina livre</div></div></div><div class=\"passo\"><b>Mioglobinúria</b>Volume para débito urinário alto até a urina clarear, ECG e busca de síndrome compartimental.</div></div>\n<h4>O que acontece</h4>\n<p>Músculo esmagado ou isquêmico se rompe e libera <b>mioglobina, potássio, fosfato e ácidos</b>. A mioglobina lesa o túbulo renal (lesão renal aguda), o potássio ameaça o coração e o músculo edemaciado pode gerar <b>síndrome compartimental</b>.</p>\n<h4>Como reconhecer</h4>\n<ul>\n<li><b>CK muito elevada</b> (milhares a dezenas de milhares de U/L).</li>\n<li><b>Urina escura</b> e tira reagente positiva para “sangue” <b>sem hemácias</b> no sedimento: é mioglobina.</li>\n<li>Creatinina subindo, hipercalemia, acidose.</li>\n</ul>\n<h4>Conduta</h4>\n<ul>\n<li><b>Cristaloide vigoroso e precoce</b> para manter débito urinário alto (cerca de 100 mL/h no adulto) até a urina clarear.</li>\n<li>ECG e tratamento da hipercalemia.</li>\n<li>Examinar compartimentos (dor desproporcional, dor ao estiramento passivo, tensão) e indicar fasciotomia quando houver síndrome compartimental.</li>\n</ul>\n<div class=\"pega\">Pegadinha: tira “sangue +++” na urina do esmagado não é hematúria. Sem hemácias no sedimento, pense em mioglobinúria.</div>",
  "quiz": [
   {
    "q": "Operário retirado após 5 horas preso sob uma laje, com a coxa esmagada. Urina cor de coca-cola; tira reagente: sangue +++; sedimento: 1 hemácia por campo; CK 52.000 U/L. Qual a conduta prioritária?",
    "o": [
     "Cistoscopia para investigar hematúria",
     "Hidratação vigorosa visando débito urinário alto, ECG e controle do potássio",
     "Restrição hídrica para evitar edema",
     "Furosemida isolada sem hidratação"
    ],
    "c": 1,
    "e": "<b>Certo:</b> é rabdomiólise com mioglobinúria; o volume protege o rim e o ECG avalia a hipercalemia. <br><b>Por que não as outras:</b> não é hematúria (não há hemácias); restringir líquido piora a lesão renal; diurético sem volume não protege."
   },
   {
    "q": "No mesmo paciente, a coxa está tensa e a dor piora ao estender o joelho passivamente, com pulso distal presente. O que fazer?",
    "o": [
     "Tranquilizar: pulso presente afasta síndrome compartimental",
     "Elevar o membro acima do coração e reavaliar em 24 horas",
     "Suspeitar de síndrome compartimental e indicar avaliação cirúrgica para fasciotomia",
     "Aplicar torniquete"
    ],
    "c": 2,
    "e": "<b>Certo:</b> dor ao estiramento passivo e compartimento tenso sugerem síndrome compartimental; o pulso desaparece tarde. <br><b>Por que não as outras:</b> pulso presente não exclui; elevar demais reduz a perfusão; torniquete não tem indicação."
   }
  ]
 },
 {
  "cat": "lab",
  "id": "lab-figado-pancreas",
  "t": "Função hepática, amilase e lipase",
  "sub": "O que o laboratório diz no trauma abdominal",
  "img": [],
  "b": "<h4>Laudo-exemplo</h4>\n<table class=\"laudo\"><caption>Ciclista · impacto do guidão no epigástrio, hemodinamicamente estável</caption><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th></th></tr></thead><tbody><tr><td>TGO (AST)</td><td class=\"num\">380 U/L</td><td class=\"ref\">&lt; 40 U/L</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>TGP (ALT)</td><td class=\"num\">410 U/L</td><td class=\"ref\">&lt; 41 U/L</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>Amilase · chegada</td><td class=\"num\">80 U/L</td><td class=\"ref\">&lt; 100 U/L</td><td><span class=\"normal\">NORMAL</span></td></tr><tr><td>Amilase · 8 horas</td><td class=\"num\">620 U/L</td><td class=\"ref\">&lt; 100 U/L</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>Lipase · 8 horas</td><td class=\"num\">900 U/L</td><td class=\"ref\">&lt; 60 U/L</td><td><span class=\"alto\">ALTO</span></td></tr></tbody></table>\n<p>Transaminases altas sugerem lesão hepática. A amilase normal na chegada <b>não excluía</b> lesão pancreática: a elevação tardia, junto com o mecanismo (guidão no epigástrio), aponta para pâncreas ou duodeno, que ficam no retroperitônio e escapam do FAST. No paciente estável, o próximo passo é a <b>TC de abdome com contraste</b>.</p>\n<h4>Como usar</h4>\n<ul>\n<li><b>Transaminases (TGO/AST e TGP/ALT) elevadas</b> após trauma abdominal fechado sugerem lesão hepática e reforçam a indicação de TC no paciente estável.</li>\n<li><b>Amilase e lipase:</b> podem estar <b>normais nas primeiras horas</b> mesmo com lesão pancreática; a elevação tardia ou progressiva chama atenção para pâncreas e duodeno (lesões retroperitoneais que o FAST não vê).</li>\n<li>Nenhum exame laboratorial isolado <b>exclui</b> lesão intra-abdominal. O laboratório complementa; a decisão vem da clínica, do FAST e da TC.</li>\n</ul>\n<h4>Quando pensar em pâncreas e duodeno</h4>\n<ul>\n<li>Trauma epigástrico direto: guidão de bicicleta, volante, cinto.</li>\n<li>Dor desproporcional ao exame, piora nas horas seguintes, amilase subindo.</li>\n</ul>\n<div class=\"pega\">Pegadinha: “amilase normal, então não há lesão pancreática”. A amilase inicial tem baixa sensibilidade; repita e use a TC.</div>",
  "quiz": [
   {
    "q": "Criança de 9 anos caiu da bicicleta sobre o guidão. Estável, dor epigástrica moderada. Amilase de chegada normal; FAST negativo. Qual a melhor conduta?",
    "o": [
     "Alta, pois amilase normal e FAST negativo excluem lesão",
     "Observação, reavaliação clínica, amilase/lipase seriadas e TC com contraste",
     "Laparotomia imediata",
     "Lavado peritoneal diagnóstico obrigatório"
    ],
    "c": 1,
    "e": "<b>Certo:</b> guidão é mecanismo clássico de lesão pancreática e duodenal, retroperitoneais: FAST e amilase iniciais podem ser normais. Paciente estável: TC e reavaliação. <br><b>Por que não as outras:</b> exames normais não excluem; não há indicação de cirurgia num estável sem sinais; LPD não vê retroperitônio."
   },
   {
    "q": "Adulto estável após colisão, dor no hipocôndrio direito, TGO 480 e TGP 410. O que esse achado sugere e qual o próximo passo?",
    "o": [
     "Hepatite viral; sorologias",
     "Lesão hepática; TC de abdome com contraste",
     "Infarto agudo do miocárdio; cateterismo",
     "Nada; transaminases não mudam com trauma"
    ],
    "c": 1,
    "e": "<b>Certo:</b> transaminases elevadas após trauma sugerem lesão hepática; no estável, a TC define grau e conduta (muitas vezes não operatória). <br><b>Por que não as outras:</b> o contexto é trauma; nada sugere IAM; trauma hepático eleva transaminases."
   }
  ]
 },
 {
  "cat": "lab",
  "id": "lab-tipagem",
  "t": "Tipagem, prova cruzada e sangue O",
  "sub": "Qual sangue usar e quando",
  "img": [],
  "b": "<h4>Pedido de emergência ao banco de sangue</h4>\n<table class=\"laudo\"><caption>Mulher, 24 anos · ferimento por arma de fogo no abdome, PA 70×40</caption><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th></th></tr></thead><tbody><tr><td>Amostra para tipagem</td><td class=\"num\">colhida antes da 1ª bolsa</td><td class=\"ref\">—</td><td><span class=\"normal\">OK</span></td></tr><tr><td>Hemácias liberadas</td><td class=\"num\">2 unidades O negativo</td><td class=\"ref\">emergência, sem prova cruzada</td><td></td></tr><tr><td>Tipagem ABO/Rh</td><td class=\"num\">A positivo</td><td class=\"ref\">—</td><td></td></tr><tr><td>Pesquisa de anticorpos irregulares</td><td class=\"num\">negativa</td><td class=\"ref\">negativa</td><td><span class=\"normal\">NORMAL</span></td></tr><tr><td>Prova cruzada completa</td><td class=\"num\">em andamento</td><td class=\"ref\">—</td><td></td></tr></tbody></table>\n<p>Como ela é mulher em idade fértil, o sangue de emergência é <b>O negativo</b>, para evitar sensibilização Rh. A amostra foi colhida antes da transfusão, o que permite tipar corretamente; assim que o tipo sair, passa-se a sangue tipo-específico.</p>\n<h4>Qual sangue usar</h4>\n<div class=\"fluxo\"><div class=\"passo\"><b>Sem tempo para esperar</b>Choque grave: <b>sangue O</b>, sem prova cruzada; O negativo em meninas e mulheres em idade fértil.</div><div class=\"passo\"><b>Poucos minutos disponíveis</b>Sangue <b>tipo-específico</b> (ABO e Rh do paciente).</div><div class=\"passo\"><b>Paciente que permite esperar</b><b>Prova cruzada completa</b>, a opção mais segura.</div></div>\n<h4>Três níveis</h4>\n<ol>\n<li><b>Sangue O (sem prova cruzada):</b> para o choque grave que não pode esperar. <b>O negativo</b> em meninas e mulheres em idade fértil, para evitar sensibilização Rh; O positivo é aceitável em homens e quando O negativo falta.</li>\n<li><b>Tipo-específico:</b> ABO e Rh do paciente, disponível poucos minutos após a amostra chegar ao banco de sangue.</li>\n<li><b>Prova cruzada completa:</b> o mais seguro, mas demora mais; use quando o paciente permite esperar.</li>\n</ol>\n<h4>Regras práticas</h4>\n<ul>\n<li>Colha a <b>amostra para tipagem antes</b> de transfundir sangue O: depois, a tipagem fica difícil.</li>\n<li>Ative cedo o <b>protocolo de transfusão maciça</b>; o ATLS 11 cita o escore ABC (ferimento penetrante, PAS ≤ 90, FC ≥ 120, FAST positivo): 2 ou mais pontos indicam ativação.</li>\n<li>Prefira sangue e hemoderivados ao cristaloide no choque hemorrágico; aqueça os hemoderivados.</li>\n</ul>",
  "quiz": [
   {
    "q": "Mulher de 24 anos, ferimento por arma de fogo no abdome, PA 70×40, FC 140, FAST positivo. A tipagem ainda não saiu. Qual sangue usar?",
    "o": [
     "Aguardar a prova cruzada completa",
     "Sangue O negativo, após colher a amostra para tipagem",
     "Sangue AB positivo",
     "Apenas cristaloide até sair a tipagem"
    ],
    "c": 1,
    "e": "<b>Certo:</b> choque grave não espera; em mulher em idade fértil usa-se O negativo, colhendo antes a amostra. <br><b>Por que não as outras:</b> esperar a prova cruzada é fatal; AB não é doador universal de hemácias; cristaloide isolado piora a coagulopatia."
   },
   {
    "q": "Pelo escore ABC citado no ATLS 11, qual paciente deve ter o protocolo de transfusão maciça ativado?",
    "o": [
     "Contusão abdominal, PAS 110, FC 95, FAST negativo",
     "Facada no abdome com FC 128 e FAST negativo",
     "Queda da própria altura, PAS 130, FC 80",
     "Contusão torácica com PAS 100, FC 100, FAST negativo"
    ],
    "c": 1,
    "e": "<b>Certo:</b> mecanismo penetrante (1) + FC ≥ 120 (1) = 2 pontos, o que indica ativação. <br><b>Por que não as outras:</b> nas demais, a soma fica abaixo de 2."
   }
  ]
 },
 {
  "cat": "lab",
  "id": "lab-bhcg",
  "t": "β-hCG na mulher em idade fértil",
  "sub": "Por que pedir sempre",
  "img": [],
  "b": "<h4>Laudo-exemplo</h4>\n<table class=\"laudo\"><caption>Mulher, 26 anos · colisão automobilística, não sabia estar grávida</caption><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th></th></tr></thead><tbody><tr><td>β-hCG urinário</td><td class=\"num\">positivo</td><td class=\"ref\">negativo</td><td><span class=\"critico\">POSITIVO</span></td></tr><tr><td>β-hCG sérico</td><td class=\"num\">48.000 mUI/mL</td><td class=\"ref\">&lt; 5 mUI/mL</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>Tipagem ABO/Rh</td><td class=\"num\">O negativo</td><td class=\"ref\">—</td><td><span class=\"critico\">Rh NEGATIVO</span></td></tr><tr><td>Hemoglobina</td><td class=\"num\">11,2 g/dL</td><td class=\"ref\">11–15 g/dL</td><td><span class=\"normal\">NORMAL</span></td></tr></tbody></table>\n<p>Teste positivo muda a abordagem: <b>mãe primeiro</b>, avaliação obstétrica e da vitalidade fetal, e exames de imagem necessários mantidos. Como a paciente é Rh negativo, a <b>imunoglobulina anti-D em até 72 h</b> é obrigatória. A idade gestacional se estima pela ultrassonografia, não pelo β-hCG.</p>\n<h4>β-hCG positivo: o que muda</h4>\n<div class=\"fluxo\"><div class=\"passo\"><b>Mãe primeiro</b>Ressuscitar a mãe é a melhor proteção para o feto.</div><div class=\"passo\"><b>Útero a partir de cerca de 18 semanas</b>Em supino, comprime a cava → deslocamento manual do útero para a esquerda.</div><div class=\"passo\"><b>Rh negativa</b>Imunoglobulina anti-D em até 72 h.</div></div>\n<h4>Por que pedir</h4>\n<ul>\n<li>A gestação inicial pode não ser conhecida pela paciente e muda a avaliação: fisiologia diferente (frequência cardíaca mais alta, PA mais baixa, hemodiluição), risco de descolamento de placenta, necessidade de anti-D.</li>\n<li>Peça β-hCG (urina ou sangue) em <b>toda mulher em idade fértil</b> vítima de trauma.</li>\n</ul>\n<h4>Se positivo</h4>\n<ul>\n<li><b>Mãe primeiro:</b> ressuscitar a mãe é a melhor forma de proteger o feto.</li>\n<li>A partir de cerca de 18 semanas, o útero comprime a cava em supino: <b>deslocamento manual do útero para a esquerda</b>.</li>\n<li>Rh negativa: <b>imunoglobulina anti-D em até 72 h</b>.</li>\n<li><b>Exame de imagem necessário não se adia</b> por medo de radiação; proteja o abdome quando possível.</li>\n</ul>",
  "quiz": [
   {
    "q": "Mulher de 27 anos, colisão automobilística, estável, com dor torácica. Não sabe se está grávida. A TC de tórax é indicada. Qual a conduta?",
    "o": [
     "Contraindicar a TC até descartar gestação por ultrassom",
     "Pedir β-hCG e realizar a TC indicada, sem atrasar o diagnóstico",
     "Fazer só radiografia, nunca TC",
     "Aguardar a próxima menstruação"
    ],
    "c": 1,
    "e": "<b>Certo:</b> β-hCG em toda mulher em idade fértil, mas exame necessário não se adia por medo de radiação. <br><b>Por que não as outras:</b> atrasar o diagnóstico coloca a mãe em risco; limitar a imagem ou esperar não tem base."
   },
   {
    "q": "Gestante de 22 semanas, Rh negativo, após trauma abdominal leve, estável. Qual medida é obrigatória?",
    "o": [
     "Imunoglobulina anti-D em até 72 h",
     "Cesárea imediata",
     "Alta sem exames",
     "Corticoide para maturação pulmonar em todos os casos"
    ],
    "c": 0,
    "e": "<b>Certo:</b> toda gestante Rh negativo vítima de trauma recebe anti-D em até 72 h, porque pequena hemorragia feto-materna pode sensibilizar. <br><b>Por que não as outras:</b> não há indicação de cesárea; alta sem avaliação e monitorização é inadequada; corticoide não é rotina."
   }
  ]
 },
 {
  "cat": "lab",
  "id": "lab-troponina-ecg",
  "t": "ECG e troponina na lesão cardíaca contusa",
  "sub": "Quem precisa de monitorização",
  "img": [
   {
    "key": "sk_lab_ecg_1",
    "alt": "Eletrocardiograma de 12 derivações com taquicardia sinusal a 132 bpm",
    "cap": "Taquicardia sinusal: a alteração mais comum após contusão cardíaca, mas também comum por dor, choque e ansiedade.",
    "credit": "Ewingdo · CC BY-SA 4.0 · Wikimedia Commons",
    "url": "https://commons.wikimedia.org/wiki/File:ECG_Sinus_Tachycardia_132_bpm.jpg"
   }
  ],
  "b": "<h4>Laudo-exemplo</h4>\n<table class=\"laudo\"><caption>Condutor · tórax contra o volante, 2 horas após o impacto</caption><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th></th></tr></thead><tbody><tr><td>ECG</td><td class=\"num\">taquicardia sinusal 118 bpm + extrassístoles ventriculares</td><td class=\"ref\">ritmo sinusal 60–100 bpm</td><td><span class=\"alto\">ALTERADO</span></td></tr><tr><td>Troponina</td><td class=\"num\">discretamente elevada</td><td class=\"ref\">abaixo do percentil 99</td><td><span class=\"alto\">ALTO</span></td></tr><tr><td>FAST pericárdico</td><td class=\"num\">sem derrame</td><td class=\"ref\">sem derrame</td><td><span class=\"normal\">NORMAL</span></td></tr><tr><td>PA</td><td class=\"num\">108×70 mmHg</td><td class=\"ref\">—</td><td><span class=\"normal\">ESTÁVEL</span></td></tr></tbody></table>\n<p>ECG alterado após trauma torácico anterior sugere <b>lesão cardíaca contusa</b>: o paciente precisa de <b>monitorização contínua por 24 h</b>. O FAST pericárdico negativo afasta tamponamento naquele momento. Antes de atribuir a taquicardia à contusão, procure sangramento.</p>\n<h4>Quando suspeitar</h4>\n<ul>\n<li>Trauma torácico anterior de alta energia: volante, fratura de esterno, desaceleração.</li>\n<li>Arritmia, alteração no ECG, hipotensão sem outra causa.</li>\n</ul>\n<h4>Como investigar</h4>\n<ul>\n<li><b>ECG na admissão</b> é o principal exame. Achados: taquicardia sinusal (a mais comum), extrassístoles, fibrilação atrial, bloqueio de ramo direito, alterações de ST.</li>\n<li><b>Troponina</b> complementa: ECG normal com troponina normal torna lesão significativa improvável.</li>\n<li>ECG alterado: <b>monitorização contínua por 24 h</b>; instabilidade hemodinâmica: ecocardiograma.</li>\n<li>Hipotensão após trauma torácico: pense também em <b>tamponamento</b> (FAST pericárdico) e <b>pneumotórax hipertensivo</b>.</li>\n</ul>\n<div class=\"pega\">Pegadinha: a taquicardia sinusal é inespecífica. Antes de atribuí-la à contusão cardíaca, procure sangramento.</div>",
  "quiz": [
   {
    "q": "Motorista colidiu com o tórax no volante. Estável, dor esternal; ECG com extrassístoles ventriculares frequentes; troponina discretamente elevada. Qual a conduta?",
    "o": [
     "Alta com analgésico",
     "Monitorização eletrocardiográfica contínua por 24 horas e investigação com ecocardiograma se houver instabilidade",
     "Cateterismo de urgência em todos os casos",
     "Pericardiocentese imediata"
    ],
    "c": 1,
    "e": "<b>Certo:</b> ECG alterado após contusão torácica indica monitorização por 24 h; eco se houver instabilidade. <br><b>Por que não as outras:</b> não é caso de alta; cateterismo não é rotina; não há sinais de tamponamento."
   },
   {
    "q": "Qual é a alteração eletrocardiográfica mais comum após contusão cardíaca?",
    "o": [
     "Bloqueio atrioventricular total",
     "Taquicardia sinusal",
     "Supradesnivelamento de ST em parede inferior",
     "Onda de Osborn"
    ],
    "c": 1,
    "e": "<b>Certo:</b> a taquicardia sinusal é a mais frequente, embora inespecífica. <br><b>Por que não as outras:</b> BAVT e supra de ST são menos comuns; onda de Osborn é de hipotermia."
   }
  ]
 },
 {
  "cat": "lab",
  "id": "lab-urina",
  "t": "Urina: hematúria e mioglobinúria",
  "sub": "O que a cor e a tira contam",
  "img": [
   {
    "key": "sk_lab_urina_2",
    "alt": "Frasco com urina vermelho-escura de paciente traumatizado",
    "cap": "Hematúria macroscópica após trauma: investigar rim, bexiga e uretra conforme o mecanismo.",
    "credit": "James Heilman, MD · CC BY-SA 3.0 · Wikimedia Commons",
    "url": "https://commons.wikimedia.org/wiki/File:HematuriaTrauma.JPG"
   },
   {
    "key": "sk_lab_urina_1",
    "alt": "Leitura de tira reagente de urina comparando com a tabela de cores",
    "cap": "Tira positiva para “sangue” com sedimento sem hemácias = hemoglobina ou mioglobina livre.",
    "credit": "Iqbal Osman1 from singapore · CC BY 2.0 · Wikimedia Commons",
    "url": "https://commons.wikimedia.org/wiki/File:Urine_dipstick_reading_(14834996677).jpg"
   }
  ],
  "b": "<h4>Laudo-exemplo</h4>\n<table class=\"laudo\"><caption>Atropelado com fratura de pelve · urina por micção espontânea</caption><thead><tr><th>Exame</th><th>Resultado</th><th>Referência</th><th></th></tr></thead><tbody><tr><td>Aspecto</td><td class=\"num\">avermelhado</td><td class=\"ref\">amarelo-claro</td><td><span class=\"alto\">ALTERADO</span></td></tr><tr><td>Tira reagente (sangue)</td><td class=\"num\">+++</td><td class=\"ref\">negativo</td><td><span class=\"alto\">POSITIVO</span></td></tr><tr><td>Sedimento (hemácias)</td><td class=\"num\">&gt; 100 por campo</td><td class=\"ref\">&lt; 5 por campo</td><td><span class=\"alto\">ALTO</span></td></tr></tbody></table>\n<p>Muitas hemácias no sedimento confirmam <b>hematúria verdadeira</b>. Hematúria macroscópica com fratura de pelve sugere lesão de bexiga: no paciente estável, cistografia por TC. Se houver sangue no meato uretral, faça a <b>uretrocistografia retrógrada antes</b> de qualquer sonda vesical.</p>\n<h4>Hematúria</h4>\n<ul>\n<li><b>Macroscópica</b> após trauma: investigar com TC com contraste (incluindo fase excretora) no paciente estável.</li>\n<li><b>Fratura de pelve + hematúria macroscópica:</b> pense em lesão de bexiga; a cistografia por TC confirma.</li>\n<li><b>Sangue no meato uretral</b>, hematoma perineal ou de escroto: suspeita de lesão de uretra; faça <b>uretrocistografia retrógrada antes</b> de passar sonda vesical.</li>\n<li>Hematúria microscópica isolada em adulto estável, sem choque, costuma ter lesão de menor gravidade, mas o contexto manda.</li>\n</ul>\n<h4>Mioglobinúria</h4>\n<ul>\n<li>Urina escura com tira positiva para “sangue” e <b>sem hemácias no sedimento</b>: mioglobina (esmagamento, queimadura elétrica).</li>\n<li>Conduta: volume para débito urinário alto até a urina clarear.</li>\n</ul>\n<div class=\"mais\">Novo no ATLS 11: o toque retal deixou de ser rotina no exame secundário; os sinais externos de lesão uretral continuam valendo.</div>",
  "quiz": [
   {
    "q": "Homem com fratura de pelve após atropelamento apresenta sangue no meato uretral. Qual a conduta antes de passar sonda vesical?",
    "o": [
     "Passar sonda de Foley com cuidado",
     "Uretrocistografia retrógrada",
     "Cistostomia em todos os casos sem exame",
     "Toque retal obrigatório e depois sonda"
    ],
    "c": 1,
    "e": "<b>Certo:</b> sangue no meato sugere lesão de uretra; a uretrocistografia retrógrada vem antes de qualquer sonda. <br><b>Por que não as outras:</b> a sonda pode completar uma lesão parcial; cistostomia não é automática; o toque retal não é mais rotina no ATLS 11."
   },
   {
    "q": "Vítima de queimadura elétrica tem urina cor de chá escuro; tira: sangue +++; sedimento: 0 hemácias. O que ocorre?",
    "o": [
     "Hematúria por lesão renal",
     "Mioglobinúria por lesão muscular",
     "Contaminação da amostra",
     "Infecção urinária"
    ],
    "c": 1,
    "e": "<b>Certo:</b> a tira detecta o heme da mioglobina; sem hemácias no sedimento, é mioglobinúria da lesão muscular elétrica. Conduta: volume para débito urinário alto. <br><b>Por que não as outras:</b> sem hemácias não é hematúria; o quadro clínico não sugere contaminação nem infecção."
   },
   {
    "q": "Mulher estável, colisão lateral, hematúria macroscópica e dor lombar à direita. Próximo passo:",
    "o": [
     "TC de abdome com contraste com fase excretora",
     "Alta com hidratação oral",
     "Cistoscopia imediata",
     "Arteriografia de rotina"
    ],
    "c": 0,
    "e": "<b>Certo:</b> hematúria macroscópica após trauma, em paciente estável, pede TC com fase excretora para avaliar rim e vias urinárias. <br><b>Por que não as outras:</b> alta sem investigação é inadequada; cistoscopia e arteriografia não são o primeiro exame."
   }
  ]
 }
]);
