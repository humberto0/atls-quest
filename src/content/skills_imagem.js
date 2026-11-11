/* Sala de Habilidades — Exames de imagem no trauma (imagens reais, licenças livres, Wikimedia Commons) */
window.ATLS_SKILLS = (window.ATLS_SKILLS || []).concat([
  {
    cat: 'imagem', id: 'img-rx-torax-sistematica', t: 'Rx de tórax no trauma: como ler', sub: 'Sistematização em ABCDE na sala de emergência',
    img: [
      { key: 'sk_img_rxnormal_1', alt: 'Radiografia de tórax normal em incidência posteroanterior', cap: 'Rx de tórax normal (PA). Use-o como referência: traqueia central, mediastino estreito, seios costofrênicos agudos, cúpulas diafragmáticas bem definidas.', credit: 'Mikael Häggström · CC0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Normal_posteroanterior_(PA)_chest_radiograph_(X-ray).jpg' }
    ],
    b: `<h4>Quando e como é feito</h4>
<p>No politraumatizado, o Rx de tórax é um <b>adjunto do exame primário</b>: feito na própria sala, em <b>AP e com o paciente deitado</b>. Ele não deve atrasar condutas que são <b>clínicas</b>, como a descompressão do pneumotórax hipertensivo.</p>
<div class="pega">Pegadinha: o Rx em AP supino <b>alarga artificialmente o mediastino e a área cardíaca</b> e espalha líquido e ar pelo hemitórax. Por isso pneumotórax e hemotórax ficam menos óbvios do que no PA em pé.</div>
<h4>Leitura sistemática (ABCDE do Rx)</h4>
<ol>
<li><b>A — Via aérea:</b> traqueia centralizada? Desvio sugere efeito de massa (pneumotórax hipertensivo, hemotórax maciço). Confira a posição do tubo traqueal: ponta 2–4 cm acima da carina.</li>
<li><b>B — Respiração:</b> pulmões e pleura. Procure linha pleural sem trama vascular além dela (pneumotórax), velamento (hemotórax), opacidades em placa que não respeitam segmentos (contusão), enfisema subcutâneo.</li>
<li><b>C — Circulação:</b> mediastino (largura, contornos, botão aórtico, janela aortopulmonar), silhueta cardíaca.</li>
<li><b>D — Diafragma:</b> cúpulas nítidas? Elevação, contorno apagado ou alças/estômago no tórax sugerem ruptura diafragmática. Ar livre abaixo da cúpula sugere pneumoperitônio.</li>
<li><b>E — Esqueleto e "Everything else":</b> costelas (especialmente 1ª e 2ª, que indicam alta energia), clavículas, escápulas, coluna; posição de drenos, sondas e cateteres.</li>
</ol>
<h4>Achados que mudam a conduta na hora</h4>
<ul>
<li>Pneumotórax, hemotórax volumoso, mediastino alargado, ruptura diafragmática e tubo seletivo.</li>
<li>Fraturas de 1ª/2ª costelas, escápula ou esterno indicam trauma de alta energia e devem aumentar a suspeita de lesões associadas, como a de grandes vasos.</li>
</ul>
<div class="mais">Novo no ATLS 11: o Rx e o eFAST seguem como adjuntos do exame primário, sem atrasar o controle da hemorragia (x) e as condutas de B e C.</div>`,
    quiz: [
      { q: 'No Rx de tórax AP supino de um politraumatizado, o mediastino parece discretamente alargado. O que é correto considerar?', o: ['A incidência AP em supino magnifica o mediastino; o achado deve ser correlacionado com mecanismo e, se houver suspeita, com angiotomografia', 'O alargamento confirma lesão de aorta e indica toracotomia', 'O Rx em AP é ideal para avaliar mediastino', 'Deve-se repetir o Rx em PA em pé, mesmo com suspeita de lesão de coluna'], c: 0, e: '<b>Certo:</b> o AP supino magnifica o mediastino; com mecanismo de desaceleração e suspeita clínica, a investigação é feita com angiotomografia no paciente estável. <br><b>Por que não as outras:</b> o Rx não confirma lesão de aorta; o AP não é ideal para mediastino; colocar em pé um paciente com possível lesão de coluna não é adequado.' },
      { q: 'Na leitura sistemática do Rx de tórax, a fratura da 1ª costela deve levantar suspeita de quê?', o: ['Trauma de baixa energia, sem relevância', 'Fratura patológica, sempre', 'Trauma de alta energia e possível lesão de grandes vasos e plexo braquial', 'Pneumotórax hipertensivo obrigatório'], c: 2, e: '<b>Certo:</b> 1ª e 2ª costelas são protegidas e só fraturam com alta energia; associam-se a lesões vasculares e de plexo. <br><b>Por que não as outras:</b> não é trauma leve; fratura patológica não é a regra no trauma; pneumotórax pode ou não existir.' },
      { q: 'Paciente intubado: no Rx, a ponta do tubo está 1 cm abaixo da carina, à direita, e o pulmão esquerdo está opacificado. Conduta?', o: ['Drenar o tórax esquerdo', 'Realizar cricotireoidostomia', 'Trocar por tubo mais calibroso', 'Tracionar o tubo até a ponta ficar 2–4 cm acima da carina e reavaliar'], c: 3, e: '<b>Certo:</b> intubação seletiva no brônquio-fonte direito causa atelectasia à esquerda; reposicione o tubo e reavalie. <br><b>Por que não as outras:</b> drenar não trata atelectasia; o calibre não é o problema; não há indicação de via aérea cirúrgica.' }
    ]
  },
  {
    cat: 'imagem', id: 'img-pneumotorax', t: 'Pneumotórax e pneumotórax hipertensivo', sub: 'Linha pleural, desvio do mediastino e quando NÃO esperar o Rx',
    img: [
      { key: 'sk_img_ptx_1', alt: 'Radiografia com pneumotórax à esquerda', cap: 'Pneumotórax à esquerda: note a linha pleural visceral e a ausência de trama vascular entre ela e a parede torácica.', credit: 'Clinical Cases · CC BY-SA 2.5 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Pneumothorax_CXR.jpg' },
      { key: 'sk_img_ptxh_1', alt: 'Radiografia com pneumotórax hipertensivo', cap: 'Pneumotórax hipertensivo: hemitórax hipertransparente, pulmão colapsado e desvio do mediastino para o lado oposto. Na prática, este Rx não deveria existir: o diagnóstico é clínico.', credit: 'James Heilman, MD · CC BY-SA 3.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Tensionpneumo.png' },
      { key: 'sk_img_ptx_2', alt: 'Ilustração do pneumotórax com ar no espaço pleural e pulmão colapsado', cap: 'Ilustração: o ar no espaço pleural colapsa o pulmão. No hipertensivo, uma válvula unidirecional acumula ar a cada respiração.', credit: 'BruceBlaus (Blausen Medical) · CC BY 3.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Blausen_0742_Pneumothorax.png' }
    ],
    b: `<h4>O que procurar no Rx</h4>
<ul>
<li><b>Linha pleural visceral</b> fina e branca, com <b>ausência de trama vascular</b> além dela.</li>
<li>No paciente <b>deitado</b>, o ar sobe para a região anterior e basal: procure o <b>sinal do sulco profundo</b> (seio costofrênico anormalmente profundo e transparente) e hipertransparência do hemitórax.</li>
<li><b>Enfisema subcutâneo</b> e fraturas de costela são pistas associadas.</li>
</ul>
<h4>Pneumotórax hipertensivo: diagnóstico CLÍNICO</h4>
<p>Dispneia, <b>hipotensão</b>, turgência jugular (pode faltar na hipovolemia), <b>murmúrio vesicular abolido</b>, timpanismo e desvio da traqueia para o lado oposto (sinal tardio). Conduta imediata: <b>descompressão</b> (agulha ou toracostomia digital) e depois drenagem.</p>
<div class="mais">Novo no ATLS 11: no adulto, o sítio aceito para a descompressão por agulha é o <b>4º–5º espaço intercostal</b>, entre as linhas axilares anterior e média (o 2º EIC na linha hemiclavicular era o sítio cobrado em provas antigas).</div>
<div class="pega">Pegadinha: pedir Rx antes de descomprimir um paciente instável com quadro clássico é a alternativa errada.</div>
<h4>Pneumotórax simples</h4>
<p>Tratamento com <b>drenagem torácica</b> no trauma, especialmente se o paciente for para ventilação com pressão positiva ou transporte aéreo, porque o pneumotórax pode se tornar hipertensivo.</p>
<div class="caso">Motociclista, PA 78×40, FR 34, MV abolido à direita, traqueia desviada para a esquerda: descompressão imediata, sem Rx.</div>`,
    quiz: [
      { q: 'Vítima de colisão: dispneia intensa, PA 80×50, MV abolido à esquerda, hipertimpanismo e jugulares túrgidas. Próximo passo?', o: ['Rx de tórax para confirmar', 'Descompressão imediata (agulha no 4º–5º EIC entre linhas axilares anterior e média ou toracostomia digital)', 'TC de tórax', 'Intubação e observação'], c: 1, e: '<b>Certo:</b> é pneumotórax hipertensivo, diagnóstico clínico; descompressão imediata e depois drenagem. <br><b>Por que não as outras:</b> exames atrasam o tratamento de uma condição que mata em minutos; ventilação com pressão positiva sem descompressão piora o quadro.' },
      { q: 'No Rx em decúbito dorsal, qual sinal sugere pneumotórax?', o: ['Sinal do sulco profundo', 'Sinal da bota', 'Linhas B de Kerley', 'Broncograma aéreo'], c: 0, e: '<b>Certo:</b> em supino, o ar se acumula anteroinferiormente e aprofunda o seio costofrênico. <br><b>Por que não as outras:</b> linhas de Kerley sugerem edema intersticial; broncograma, consolidação; "bota", outra condição.' }
    ]
  },
  {
    cat: 'imagem', id: 'img-hemotorax', t: 'Hemotórax', sub: 'Velamento, hemotórax maciço e critérios de toracotomia',
    img: [
      { key: 'sk_img_hemo_2', alt: 'Radiografia com velamento extenso do hemitórax esquerdo por hemotórax maciço', cap: 'Hemotórax maciço à esquerda: opacificação do hemitórax esquerdo (paciente com fixação de coluna prévia).', credit: 'Ogura et al. · CC BY 2.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Massive_left_hemothorax.jpg' }
    ],
    b: `<h4>No Rx</h4>
<ul>
<li>Em pé: menisco no seio costofrênico (são necessários cerca de 200–300 mL para aparecer).</li>
<li><b>Deitado (AP supino):</b> o sangue se espalha posteriormente e o hemitórax fica <b>difusamente mais opaco</b>, com trama visível através dele. Pode passar despercebido.</li>
<li>Hemotórax maciço: hemitórax "branco", com desvio do mediastino para o lado oposto.</li>
</ul>
<h4>No eFAST</h4>
<p>Líquido anecoico acima do diafragma nas janelas de quadrante superior direito e esquerdo. O eFAST detecta volumes menores que o Rx supino.</p>
<h4>Conduta</h4>
<ul>
<li><b>Hemotórax maciço</b> (sangue no tórax que leva a choque): ressuscitação com hemocomponentes e <b>drenagem torácica</b>.</li>
<li>Indica <b>toracotomia</b>: drenagem inicial de ≈1.500 mL de sangue, ou débito persistente de ≈200 mL/h por 2–4 h, ou necessidade contínua de transfusão.</li>
<li>Hemotórax retido após drenagem: considerar VATS precoce.</li>
</ul>
<div class="pega">Pegadinha: drenar e, diante de grande volume imediato, apenas "clampear o dreno" para conter o sangramento não é conduta: a indicação é cirúrgica.</div>`,
    quiz: [
      { q: 'Após drenagem torácica à direita, saem 1.600 mL de sangue imediatamente. O paciente segue hipotenso. Conduta?', o: ['Clampear o dreno', 'Trocar o dreno por um de maior calibre', 'Indicar toracotomia, mantendo hemocomponentes', 'Observar o débito por 6 horas'], c: 2, e: '<b>Certo:</b> drenagem inicial de ≈1.500 mL caracteriza hemotórax maciço com indicação de toracotomia. <br><b>Por que não as outras:</b> clampear não controla a fonte; trocar o dreno não resolve; observar atrasa o tratamento.' },
      { q: 'Por que o hemotórax pode passar despercebido no Rx de tórax do politraumatizado?', o: ['Porque o sangue é radiotransparente', 'Porque sempre há enfisema subcutâneo', 'Porque o Rx não mostra o espaço pleural', 'Porque em AP supino o sangue se espalha posteriormente, causando apenas opacidade difusa do hemitórax'], c: 3, e: '<b>Certo:</b> sem a posição em pé, não há menisco; só um "véu" difuso. <br><b>Por que não as outras:</b> sangue é radiopaco; o Rx mostra a pleura; enfisema subcutâneo não é regra.' }
    ]
  },
  {
    cat: 'imagem', id: 'img-contusao-instavel', t: 'Contusão pulmonar e tórax instável', sub: 'Opacidades que não respeitam segmentos e o movimento paradoxal',
    img: [
      { key: 'sk_img_contusao_2', alt: 'Radiografia de tórax com tórax instável e contusão pulmonar à direita', cap: 'Rx: tórax instável com contusão pulmonar à direita (opacidade mal definida) e enfisema subcutâneo.', credit: 'Karim · CC BY-SA 3.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Pulmonary_contusion.jpg' },
      { key: 'sk_img_contusao_1', alt: 'Tomografia de tórax com contusão pulmonar bilateral', cap: 'TC: contusão pulmonar com opacidades em vidro fosco e consolidações periféricas, mais à direita, que não respeitam limites de segmentos.', credit: 'Hellerhoff · CC BY-SA 4.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Lungenkontusion_mit_diffusen_Einblutungen_rechts_mehr_als_links_und_schmalem_Seropneumothorax_22M_-_CT_-_001.jpg' },
      { key: 'sk_img_instavel_3', alt: 'Ilustração clássica do movimento paradoxal do tórax instável', cap: 'Movimento paradoxal: na inspiração o segmento instável afunda; na expiração, abaula.', credit: 'Brewer e Burford (Exército dos EUA) · Domínio público · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Flail_chest_mechaincs.jpg' }
    ],
    b: `<h4>Tórax instável</h4>
<ul>
<li>Definição: <b>duas ou mais costelas adjacentes fraturadas em dois ou mais pontos</b>, criando um segmento que perde a continuidade com a parede.</li>
<li>Sinal clínico: <b>movimento paradoxal</b> (pode ser mascarado por contratura muscular ou pela ventilação mecânica).</li>
<li>O que causa a hipóxia não é tanto a mecânica, mas a <b>contusão pulmonar subjacente</b> e a dor que impede a respiração eficaz.</li>
</ul>
<h4>Contusão pulmonar</h4>
<ul>
<li>Rx: opacidades mal definidas, <b>não segmentares</b>, que podem <b>piorar nas primeiras 24–48 h</b> (o Rx inicial subestima).</li>
<li>TC: mais sensível; vidro fosco e consolidações periféricas no local do impacto.</li>
</ul>
<h4>Conduta</h4>
<ul>
<li><b>Analgesia eficaz</b> (inclusive bloqueios regionais/peridural), oxigênio, fisioterapia respiratória.</li>
<li>Evitar <b>hiper-hidratação</b>, que piora a contusão; reposição criteriosa.</li>
<li>Intubação se houver falência respiratória (hipóxia refratária, fadiga). Fixação cirúrgica de costelas em casos selecionados.</li>
</ul>
<div class="mais">Novo no ATLS 11: o manual destaca a analgesia nas lesões da parede torácica como parte do tratamento, não como detalhe.</div>`,
    quiz: [
      { q: 'Idoso após capotamento: segmento da parede torácica direita que afunda na inspiração e SatO2 89% em ar ambiente. O principal determinante da hipóxia é:', o: ['O movimento paradoxal isolado', 'A contusão pulmonar subjacente e a dor', 'A anemia', 'A fratura de clavícula'], c: 1, e: '<b>Certo:</b> a contusão e a hipoventilação pela dor explicam a hipóxia. <br><b>Por que não as outras:</b> o movimento paradoxal sozinho contribui pouco; anemia e clavícula não explicam o quadro.' },
      { q: 'Paciente com contusão pulmonar estável. Qual medida pode PIORAR a evolução?', o: ['Administração liberal de grandes volumes de cristaloide', 'Fisioterapia respiratória', 'Analgesia com bloqueio regional', 'Oxigênio suplementar'], c: 0, e: '<b>Certo:</b> excesso de volume aumenta o edema no pulmão contundido. <br><b>Por que não as outras:</b> analgesia, fisioterapia e oxigênio são parte do tratamento.' }
    ]
  },
  {
    cat: 'imagem', id: 'img-mediastino-aorta', t: 'Mediastino alargado e lesão contusa de aorta', sub: 'Sinais no Rx e o papel da angiotomografia',
    img: [
      { key: 'sk_img_mediastino_1', alt: 'Radiografia de tórax com mediastino alargado', cap: 'Exemplo de mediastino alargado no Rx (neste caso, de causa não traumática). No trauma, o mesmo aspecto após desaceleração exige investigação de lesão de aorta.', credit: 'James Heilman, MD · CC BY-SA 4.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:WideMediastinum.png' }
    ],
    b: `<h4>Mecanismo</h4>
<p>Desaceleração brusca (colisão frontal em alta velocidade, queda de altura): a aorta se rompe no <b>istmo</b>, logo após a subclávia esquerda, onde a porção móvel encontra a fixa (ligamento arterioso). Quem chega vivo ao hospital geralmente tem uma lesão contida pela adventícia.</p>
<h4>Sinais no Rx de tórax</h4>
<ul>
<li><b>Mediastino alargado</b> (o achado mais lembrado);</li>
<li>Apagamento do <b>botão aórtico</b> e da janela aortopulmonar;</li>
<li>Desvio da traqueia e da sonda gástrica para a direita;</li>
<li>Rebaixamento do brônquio-fonte esquerdo;</li>
<li>"Capuz" apical esquerdo (hematoma), hemotórax esquerdo;</li>
<li>Fratura de 1ª/2ª costelas ou escápula (marcadores de alta energia).</li>
</ul>
<p>Um Rx normal não exclui a lesão: com mecanismo compatível, a investigação é feita com <b>angiotomografia</b> no paciente estável.</p>
<h4>Conduta</h4>
<ul>
<li>Controle de <b>FC e PA</b> (betabloqueador de curta ação), evitando hipertensão que pode romper a lesão contida, desde que não haja outro sangramento ativo prioritário.</li>
<li>Tratamento definitivo: hoje, na maioria, <b>endovascular</b>; lesões pequenas podem ser tratadas de forma não operatória.</li>
</ul>
<div class="pega">Pegadinha: o paciente instável com FAST positivo vai para a laparotomia antes da aorta: o sangramento ativo que mata primeiro é o que se trata primeiro.</div>`,
    quiz: [
      { q: 'Motorista, colisão frontal a 100 km/h, estável. Rx com mediastino alargado e botão aórtico apagado. Próximo passo?', o: ['Toracotomia de urgência', 'Ecocardiograma transtorácico apenas', 'Angiotomografia de tórax', 'Alta após analgesia'], c: 2, e: '<b>Certo:</b> paciente estável com suspeita de lesão contusa de aorta faz angiotomografia. <br><b>Por que não as outras:</b> toracotomia às cegas não é indicada no estável; ecocardiograma transtorácico não avalia bem o istmo; alta é inadmissível.' },
      { q: 'Onde ocorre mais frequentemente a lesão contusa de aorta nos sobreviventes?', o: ['Aorta ascendente', 'Arco, entre carótidas', 'Aorta abdominal infrarrenal', 'Istmo aórtico, logo distal à subclávia esquerda'], c: 3, e: '<b>Certo:</b> o istmo é o ponto de transição entre a aorta móvel e a fixa (ligamento arterioso). <br><b>Por que não as outras:</b> as demais localizações são bem menos comuns nos que chegam vivos.' }
    ]
  },
  {
    cat: 'imagem', id: 'img-diafragma', t: 'Ruptura diafragmática', sub: 'Vísceras no tórax e a sonda gástrica acima do diafragma',
    img: [
      { key: 'sk_img_diafragma_1', alt: 'Radiografia mostrando o baço herniado no hemitórax esquerdo', cap: 'Ruptura diafragmática esquerda: o baço (X) ocupa a porção inferior do hemitórax esquerdo, com perda do contorno da cúpula.', credit: 'Hariharan D, Singhal R, Kinra S, Chilton A · CC BY 2.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Diaphragmatic_rupture_spleen_herniation.jpg' }
    ],
    b: `<h4>Quem e onde</h4>
<ul>
<li>Mais comum à <b>esquerda</b> no trauma contuso: o fígado protege o lado direito.</li>
<li>No penetrante, pense nela em feridas <b>toracoabdominais</b> (abaixo do 4º EIC anterior ou da ponta da escápula).</li>
</ul>
<h4>Sinais no Rx</h4>
<ul>
<li>Cúpula diafragmática elevada, apagada ou com contorno irregular;</li>
<li>Alças intestinais ou estômago no hemitórax (bolhas de ar acima do diafragma);</li>
<li><b>Sonda gástrica enrolada no tórax</b> — sinal clássico de prova;</li>
<li>Pode simular hemotórax, pneumotórax ou elevação da cúpula.</li>
</ul>
<p>O Rx inicial é normal ou inespecífico em parte dos casos; a TC e, na dúvida, a <b>videolaparoscopia/toracoscopia</b> confirmam.</p>
<h4>Conduta</h4>
<p>Correção <b>cirúrgica</b>, geralmente por via abdominal na fase aguda, para tratar também lesões associadas.</p>
<div class="pega">Pegadinha: drenar às cegas um "hemotórax" à esquerda que na verdade é estômago herniado pode perfurar a víscera. Na dúvida, toracostomia digital antes do dreno.</div>`,
    quiz: [
      { q: 'Após colisão lateral, Rx mostra a sonda nasogástrica enrolada no hemitórax esquerdo. Diagnóstico mais provável?', o: ['Pneumotórax hipertensivo', 'Ruptura diafragmática esquerda', 'Hemotórax maciço', 'Contusão pulmonar'], c: 1, e: '<b>Certo:</b> sonda gástrica no tórax indica estômago herniado por ruptura diafragmática. <br><b>Por que não as outras:</b> nenhuma das outras explica a sonda acima do diafragma.' },
      { q: 'Por que a ruptura diafragmática contusa é mais frequente à esquerda?', o: ['Porque o fígado protege o hemidiafragma direito', 'Porque o diafragma esquerdo é mais espesso', 'Porque o coração empurra o diafragma', 'Porque os cintos de segurança cruzam à esquerda'], c: 0, e: '<b>Certo:</b> o fígado amortece e protege o lado direito. <br><b>Por que não as outras:</b> não são as explicações anatômicas aceitas.' }
    ]
  },
  {
    cat: 'imagem', id: 'img-pneumoperitonio', t: 'Pneumoperitônio', sub: 'Ar livre sob o diafragma = víscera oca perfurada',
    img: [
      { key: 'sk_img_pneumoperit_1', alt: 'Radiografia e tomografia mostrando ar livre abaixo do diafragma', cap: 'Ar livre sob a cúpula diafragmática esquerda no Rx (à esquerda) e confirmação na TC (à direita).', credit: 'Cerevisae · CC BY-SA 4.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Chest_X-ray_showing_presence_of_free_air_under_left_diaphragm.png' }
    ],
    b: `<h4>O que significa</h4>
<p>No trauma, <b>ar livre na cavidade</b> indica <b>lesão de víscera oca</b> (estômago, intestino delgado, cólon) até prova em contrário e é indicação de <b>laparotomia</b>.</p>
<h4>Como ver</h4>
<ul>
<li>Rx de tórax em pé (se a coluna permitir): faixa de ar entre o diafragma e o fígado. Em supino, procure ar delineando as duas faces da parede intestinal (sinal de Rigler).</li>
<li><b>TC com contraste</b> é muito mais sensível: pequenas bolhas de ar extraluminal, líquido livre sem lesão de órgão sólido, espessamento de alça.</li>
</ul>
<div class="pega">Pegadinha: líquido livre na TC <b>sem</b> lesão de órgão sólido, em vítima de trauma com <b>sinal do cinto</b>, deve fazer pensar em lesão de víscera oca e mesentério (associada à fratura de Chance).</div>`,
    quiz: [
      { q: 'Vítima de colisão com sinal do cinto no abdome. TC: pequenas bolhas de ar extraluminal e líquido livre sem lesão de baço ou fígado. Conduta?', o: ['Tratamento não operatório', 'Repetir TC em 48 h', 'Laparotomia', 'Alta com orientação'], c: 2, e: '<b>Certo:</b> pneumoperitônio no trauma indica lesão de víscera oca com indicação cirúrgica. <br><b>Por que não as outras:</b> observar ou dar alta atrasa o tratamento de uma peritonite em formação.' }
    ]
  },
  {
    cat: 'imagem', id: 'img-pelve', t: 'Rx de pelve: fratura em livro aberto', sub: 'Diástase da sínfise, choque e a cinta pélvica',
    img: [
      { key: 'sk_img_pelve_1', alt: 'Radiografia de pelve mostrando diástase importante da sínfise púbica', cap: 'Pelve pós-trauma: diástase da sínfise púbica (seta), o achado-chave da lesão em "livro aberto".', credit: 'Nevit Dilmen · CC BY-SA 3.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Diastasis_symphysis_pubis_1300500.JPG' },
      { key: 'sk_img_pelve_2', alt: 'Ilustração dos tipos de fratura pélvica pela classificação de Young-Burgess', cap: 'Classificação de Young-Burgess: compressão anteroposterior (livro aberto), compressão lateral e cisalhamento vertical.', credit: 'Domínio público · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Pelvic_Fracture_Young-Burgess_Classification.png' }
    ],
    b: `<h4>Por que importa</h4>
<p>A fratura em <b>livro aberto</b> (compressão anteroposterior) aumenta o volume da pelve e rompe o <b>plexo venoso pré-sacral</b>: sangramento retroperitoneal grave, uma das fontes do "four and the floor".</p>
<h4>Como ler o Rx AP de pelve</h4>
<ul>
<li><b>Sínfise púbica</b>: diástase acima de ~2,5 cm sugere lesão do complexo posterior (instável).</li>
<li>Articulações <b>sacroilíacas</b> alargadas; ramos púbicos; acetábulos; asas ilíacas.</li>
<li>Assimetria de altura entre as hemipelves sugere <b>cisalhamento vertical</b>.</li>
</ul>
<h4>Conduta no choque</h4>
<ul>
<li><b>Cinta pélvica</b> ou lençol na altura dos <b>trocânteres maiores</b> (não nas cristas ilíacas): fecha o anel e reduz o volume.</li>
<li>Hemocomponentes, ácido tranexâmico; se FAST negativo e instável, a fonte é provavelmente pélvica: <b>angioembolização</b>, tamponamento pré-peritoneal e/ou fixação externa.</li>
<li>Não manipule a pelve repetidamente ("teste de compressão") — pode desfazer coágulos.</li>
</ul>
<div class="pega">Pegadinha: sangue no meato uretral com fratura de pelve: não passe sonda vesical antes da uretrocistografia retrógrada.</div>`,
    quiz: [
      { q: 'Paciente hipotenso após atropelamento, FAST negativo, Rx de pelve com diástase de 5 cm da sínfise. Medida imediata?', o: ['Laparotomia exploradora', 'Teste de compressão repetido para confirmar instabilidade', 'Sondagem vesical para medir diurese', 'Cinta pélvica nos trocânteres maiores, hemocomponentes e preparar angioembolização/tamponamento'], c: 3, e: '<b>Certo:</b> fonte provável pélvica: fechar o anel e controlar o sangramento retroperitoneal. <br><b>Por que não as outras:</b> laparotomia não trata sangramento pélvico com FAST negativo; sondar pode lesar a uretra; manipular a pelve piora o sangramento.' },
      { q: 'Onde deve ser posicionada a cinta pélvica?', o: ['Sobre as cristas ilíacas', 'Na altura dos trocânteres maiores do fêmur', 'Sobre o umbigo', 'Na raiz da coxa'], c: 1, e: '<b>Certo:</b> nos trocânteres maiores a compressão fecha o anel pélvico. <br><b>Por que não as outras:</b> nas cristas ou no abdome não reduz o volume pélvico e pode piorar.' }
    ]
  },
  {
    cat: 'imagem', id: 'img-tc-cranio', t: 'TC de crânio: epidural, subdural, HSA e desvio', sub: 'Biconvexo, crescente e efeito de massa',
    img: [
      { key: 'sk_img_epidural_1', alt: 'Tomografia de crânio com hematoma epidural biconvexo', cap: 'Hematoma EPIDURAL: coleção hiperdensa biconvexa (lente, seta), limitada pelas suturas, com efeito de massa.', credit: 'James Heilman, MD · CC BY-SA 4.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:EpiduralHematoma.jpg' },
      { key: 'sk_img_subdural_1', alt: 'Tomografia de crânio com hematoma subdural em crescente', cap: 'Hematoma SUBDURAL: coleção em crescente que acompanha a convexidade e cruza suturas.', credit: 'Lucien Monfils · CC BY-SA 3.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Ct-scan_of_the_brain_with_an_subdural_hematoma.jpg' },
      { key: 'sk_img_hsa_1', alt: 'Tomografia de crânio com hemorragia subaracnóidea', cap: 'Hemorragia SUBARACNÓIDEA: sangue hiperdenso nos sulcos e cisternas. No trauma, é a hemorragia intracraniana mais comum.', credit: 'James Heilman, MD · CC BY-SA 3.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:SubarachnoidP.png' }
    ],
    b: `<h4>Leitura rápida</h4>
<table><tr><th></th><th>Epidural</th><th>Subdural agudo</th></tr>
<tr><td>Forma</td><td><b>Biconvexa</b> (lente)</td><td><b>Crescente</b></td></tr>
<tr><td>Suturas</td><td>Não cruza</td><td>Cruza</td></tr>
<tr><td>Vaso</td><td>Arterial (artéria meníngea média), fratura temporal</td><td>Venoso (veias pontes)</td></tr>
<tr><td>Clínica</td><td>Intervalo lúcido clássico</td><td>Idosos, alcoolistas, anticoagulados; pior prognóstico pela lesão cerebral associada</td></tr></table>
<ul>
<li><b>HSA traumática</b>: sangue nos sulcos da convexidade e cisternas; a mais comum no TCE.</li>
<li><b>Contusão</b>: focos hiperdensos no parênquima, em lobos frontais e temporais (golpe e contragolpe).</li>
<li><b>Desvio da linha média</b> ≥ 5 mm e apagamento de cisternas basais indicam efeito de massa e risco de herniação.</li>
</ul>
<h4>Conduta que importa</h4>
<ul>
<li>Avaliação neurocirúrgica imediata para hematomas com efeito de massa.</li>
<li>Enquanto isso: evitar <b>hipotensão e hipóxia</b> (dobram a mortalidade), PAS ≥ 100–110 mmHg, cabeceira 30°, normocapnia; hiperventilação breve só na herniação iminente.</li>
<li>Anticoagulado: TC mesmo com Glasgow 15 e reversão do anticoagulante.</li>
</ul>`,
    quiz: [
      { q: 'Jovem com trauma temporal, perdeu a consciência, recuperou e após 2 h está com Glasgow 9 e anisocoria. TC: coleção hiperdensa biconvexa que não cruza suturas. Diagnóstico?', o: ['Hematoma epidural', 'Hematoma subdural agudo', 'Hemorragia subaracnóidea', 'Lesão axonal difusa'], c: 0, e: '<b>Certo:</b> biconvexo, sem cruzar suturas, com intervalo lúcido: epidural (artéria meníngea média). <br><b>Por que não as outras:</b> subdural é em crescente; HSA ocupa sulcos e cisternas; LAD tem TC pouco alterada.' },
      { q: 'Idoso anticoagulado, queda da própria altura, Glasgow 15. Conduta?', o: ['Alta com orientação', 'Apenas observação clínica por 2 h', 'TC de crânio e reversão do anticoagulante se houver sangramento', 'Rx de crânio'], c: 2, e: '<b>Certo:</b> anticoagulado com TCE faz TC mesmo com Glasgow 15; sangramento indica reversão. <br><b>Por que não as outras:</b> o risco de hematoma tardio é alto; Rx de crânio não avalia o encéfalo.' },
      { q: 'Na TC, qual achado indica maior risco de herniação?', o: ['Fratura linear sem desvio', 'Hematoma subgaleal', 'Pequena HSA em um sulco', 'Desvio da linha média ≥ 5 mm com apagamento das cisternas basais'], c: 3, e: '<b>Certo:</b> desvio e cisternas apagadas significam efeito de massa grave. <br><b>Por que não as outras:</b> os demais achados, isolados, não indicam herniação iminente.' }
    ]
  },
  {
    cat: 'imagem', id: 'img-tc-abdome', t: 'TC de abdome: baço e fígado', sub: 'Lacerações, hemoperitônio e o tratamento não operatório',
    img: [
      { key: 'sk_img_baco_1', alt: 'Tomografia de abdome com contraste mostrando ruptura traumática do baço', cap: 'Ruptura traumática do baço na TC com contraste (fase portal): parênquima fragmentado e hematoma perisplênico.', credit: 'Hellerhoff · CC BY-SA 3.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Milzruptur_-_Computertomographie_axial_-_pv-Kontrastphase_001.jpg' }
    ],
    b: `<h4>Quem vai para a TC</h4>
<p>Somente o paciente <b>hemodinamicamente estável</b> (ou que respondeu à ressuscitação). O instável com FAST positivo vai para a <b>laparotomia</b>; "TC é o túnel da morte" para quem está instável.</p>
<h4>O que procurar</h4>
<ul>
<li><b>Laceração</b>: linha ou área hipodensa no órgão sólido.</li>
<li><b>Hematoma</b> subcapsular ou intraparenquimatoso.</li>
<li><b>Extravasamento de contraste</b> ("blush"): sangramento ativo — pode indicar angioembolização.</li>
<li><b>Hemoperitônio</b>: líquido livre com densidade de sangue (pelve, goteiras, espaço de Morison).</li>
</ul>
<h4>Tratamento não operatório (TNO)</h4>
<ul>
<li>Indicado para lesões de baço e fígado no paciente <b>estável</b>, sem peritonite, em local com vigilância, centro cirúrgico e sangue disponíveis.</li>
<li>Blush arterial em paciente estável: considerar <b>angioembolização</b>.</li>
<li>Falha do TNO (instabilidade, queda progressiva de Hb, peritonite): cirurgia.</li>
<li>Na criança, o TNO é a regra.</li>
</ul>`,
    quiz: [
      { q: 'Paciente estável após trauma abdominal. TC: laceração esplênica com pequeno hemoperitônio, sem blush e sem peritonite. Conduta?', o: ['Esplenectomia imediata', 'Tratamento não operatório com monitorização seriada', 'Alta hospitalar', 'Laparoscopia diagnóstica obrigatória'], c: 1, e: '<b>Certo:</b> estável e sem peritonite: TNO com vigilância. <br><b>Por que não as outras:</b> cirurgia não é necessária de início; alta é inadmissível; laparoscopia não é obrigatória.' },
      { q: 'Qual achado na TC sugere sangramento ativo e pode indicar angioembolização no paciente estável?', o: ['Extravasamento de contraste ("blush")', 'Hematoma subcapsular antigo', 'Cisto esplênico', 'Baço acessório'], c: 0, e: '<b>Certo:</b> o blush é contraste saindo do vaso: sangramento ativo. <br><b>Por que não as outras:</b> não indicam sangramento ativo.' }
    ]
  },
  {
    cat: 'imagem', id: 'img-fast', t: 'FAST: as 4 janelas', sub: 'Pericárdica, hepatorrenal, esplenorrenal e pélvica',
    img: [
      { key: 'sk_img_fast_1', alt: 'Ultrassom do espaço hepatorrenal (bolsa de Morison)', cap: 'Janela hepatorrenal (Morison): fígado à esquerda, rim à direita. Se houver sangue livre, ele aparece como faixa anecoica (preta) entre os dois.', credit: 'Drahreg01 · CC BY-SA 3.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Morison003.jpg' },
      { key: 'sk_img_fast_2', alt: 'Ultrassom mostrando derrame pericárdico', cap: 'Janela pericárdica: líquido anecoico ao redor do coração (derrame pericárdico). No trauma, com choque, pense em tamponamento.', credit: 'James Heilman, MD · CC BY-SA 3.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:PericardialeffusionUS.PNG' }
    ],
    b: `<h4>O que é</h4>
<p>Ultrassom à beira do leito, adjunto do exame primário, que procura <b>líquido livre</b> (sangue, no trauma) em 4 janelas. É rápido, repetível e não usa radiação.</p>
<h4>As janelas</h4>
<ol>
<li><b>Pericárdica</b> (subxifoide): líquido ao redor do coração → hemopericárdio/tamponamento.</li>
<li><b>Hepatorrenal</b> (bolsa de Morison, QSD): o local mais sensível para hemoperitônio no paciente deitado.</li>
<li><b>Esplenorrenal</b> (QSE): entre baço e rim e acima do baço.</li>
<li><b>Pélvica</b> (suprapúbica): ao redor da bexiga (melhor com bexiga cheia).</li>
</ol>
<h4>Como interpretar</h4>
<ul>
<li>Sangue livre = faixa <b>anecoica (preta)</b> entre órgãos.</li>
<li><b>Instável + FAST positivo → laparotomia</b> (ou toracotomia/janela se pericárdico).</li>
<li><b>Estável → TC</b>, mesmo com FAST positivo.</li>
<li><b>FAST negativo não exclui</b> lesão: não detecta bem retroperitônio, víscera oca e pequenos volumes (≈ 200 mL). Repita o exame se o quadro mudar.</li>
</ul>
<div class="mais">A lavagem peritoneal diagnóstica (LPD) ficou restrita a quando não há FAST nem TC disponíveis.</div>`,
    quiz: [
      { q: 'Paciente com PA 70×40 após colisão, FAST com líquido na bolsa de Morison. Conduta?', o: ['TC de abdome para graduar a lesão', 'Repetir o FAST em 30 minutos', 'Laparotomia, com ressuscitação hemostática', 'Lavagem peritoneal diagnóstica'], c: 2, e: '<b>Certo:</b> instável + FAST positivo = laparotomia. <br><b>Por que não as outras:</b> o instável não vai para a TC; repetir ou fazer LPD atrasa o controle do sangramento.' },
      { q: 'Paciente estável, FAST negativo, mas com sinal do cinto e dor abdominal. O que é correto?', o: ['FAST negativo exclui lesão abdominal', 'Dar alta', 'Indicar laparotomia imediata', 'FAST não exclui lesão de víscera oca ou retroperitônio; prosseguir com TC'], c: 3, e: '<b>Certo:</b> FAST tem baixa sensibilidade para víscera oca e retroperitônio. <br><b>Por que não as outras:</b> não exclui; estável sem peritonite não vai direto à cirurgia; alta é inadequada.' },
      { q: 'Qual janela do FAST é a mais sensível para hemoperitônio no paciente em decúbito dorsal?', o: ['Pericárdica', 'Hepatorrenal (bolsa de Morison)', 'Esplenorrenal', 'Pleural'], c: 1, e: '<b>Certo:</b> o espaço de Morison é o ponto mais declive do andar superior em supino. <br><b>Por que não as outras:</b> as outras janelas são importantes, mas menos sensíveis para hemoperitônio inicial.' }
    ]
  },
  {
    cat: 'imagem', id: 'img-efast', t: 'eFAST: pneumotórax no ultrassom', sub: 'Deslizamento pleural, praia vs código de barras e ponto pulmonar',
    img: [
      { key: 'sk_img_efast_1', alt: 'Ultrassom pulmonar em modo M mostrando o sinal da praia', cap: 'Modo M normal — "sinal da praia": linhas horizontais acima (parede, o "mar") e padrão granular abaixo da pleura (o pulmão que desliza, a "areia"). Exclui pneumotórax naquele ponto.', credit: 'Tinss · CC BY-SA 4.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Sea_shore_sign_on_a_lung_ultrasound.jpg' }
    ],
    b: `<h4>O que o "e" acrescenta</h4>
<p>O eFAST (FAST estendido) avalia também os <b>tórax</b>: <b>pneumotórax</b> (janelas anteriores, 2º–4º EIC na linha hemiclavicular) e <b>hemotórax</b> (acima do diafragma, nas janelas de QSD e QSE).</p>
<h4>Pneumotórax: os sinais</h4>
<ul>
<li><b>Deslizamento pleural</b> presente (a linha pleural "cintila" com a respiração) = <b>não há pneumotórax</b> naquele ponto.</li>
<li>Modo M: <b>sinal da praia</b> (normal) × <b>sinal do código de barras/estratosfera</b> (só linhas horizontais) = ausência de deslizamento, sugere pneumotórax.</li>
<li><b>Linhas B</b> (verticais, "em cauda de cometa") presentes também excluem pneumotórax no local.</li>
<li><b>Ponto pulmonar</b> (lung point): local onde o deslizamento aparece e desaparece — é <b>específico</b> de pneumotórax e marca sua borda.</li>
</ul>
<div class="pega">Pegadinha: ausência de deslizamento não é exclusiva de pneumotórax (intubação seletiva, aderências, apneia). O ponto pulmonar é o sinal que confirma.</div>
<p>O eFAST é mais sensível que o Rx em supino para pneumotórax. Mesmo assim, no pneumotórax hipertensivo, o diagnóstico continua <b>clínico</b>.</p>`,
    quiz: [
      { q: 'No eFAST, o modo M do hemitórax direito mostra apenas linhas horizontais paralelas (código de barras). O que isso sugere?', o: ['Ausência de deslizamento pleural, sugerindo pneumotórax', 'Pulmão normal', 'Hemotórax', 'Contusão pulmonar'], c: 0, e: '<b>Certo:</b> o código de barras indica ausência de movimento pleural, compatível com pneumotórax. <br><b>Por que não as outras:</b> o normal é o sinal da praia; hemotórax aparece como líquido anecoico.' },
      { q: 'Qual sinal ultrassonográfico é ESPECÍFICO para pneumotórax?', o: ['Sinal da praia', 'Linhas B', 'Ponto pulmonar (lung point)', 'Deslizamento pleural presente'], c: 2, e: '<b>Certo:</b> o ponto pulmonar marca a transição entre pulmão colado e ar pleural: específico de pneumotórax. <br><b>Por que não as outras:</b> praia, linhas B e deslizamento presente EXCLUEM pneumotórax no ponto examinado.' }
    ]
  },
  {
    cat: 'imagem', id: 'img-coluna-cervical', t: 'Coluna cervical: imagem e liberação clínica', sub: 'NEXUS, Regra Canadense e quando pedir TC',
    img: [
      { key: 'sk_img_coluna_1', alt: 'Tomografia sagital da coluna cervical com fratura-luxação C6-C7', cap: 'TC sagital: fratura-luxação em C6–C7, com perda do alinhamento das linhas vertebrais.', credit: 'Frank Gaillard · CC BY-SA 3.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Cervical_fracture_dislocation_C6-C7.jpeg' },
      { key: 'sk_img_coluna_2', alt: 'Tomografia sagital com fratura em lágrima de C3', cap: 'Fratura em "lágrima" (teardrop) de C3: fragmento triangular anteroinferior do corpo vertebral, sinal de lesão em flexão, instável.', credit: 'James Heilman, MD · CC BY-SA 4.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:TeardropFractureC3CTMarked.png' },
      { key: 'sk_img_coluna_3', alt: 'Tomografia axial mostrando fratura de Jefferson do atlas', cap: 'Fratura de Jefferson (C1): ruptura do anel do atlas por carga axial (ex.: mergulho em água rasa).', credit: 'Hellerhoff · CC BY-SA 3.0 · Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/File:Jeffersonfraktur_-_84jm-_CT_axial_-_001.jpg' }
    ],
    b: `<h4>Quem precisa de imagem</h4>
<p><b>NEXUS</b>: dispensa imagem se TODOS estiverem presentes: sem dor na linha média posterior, sem déficit neurológico focal, alerta, sem intoxicação e sem lesão dolorosa que distraia.</p>
<p><b>Regra Canadense</b> (pacientes alertas e estáveis): exige imagem se houver fator de alto risco (idade ≥ 65 anos, mecanismo perigoso, parestesias). Na ausência deles e com fator de baixo risco presente, testa-se a rotação ativa do pescoço (45° para cada lado).</p>
<h4>Qual exame</h4>
<ul>
<li><b>TC</b> é o exame de escolha no adulto com indicação de imagem (mais sensível que o Rx).</li>
<li>RM: déficit neurológico sem lesão na TC, suspeita ligamentar, planejamento cirúrgico.</li>
</ul>
<h4>Leitura do perfil (Rx ou TC sagital)</h4>
<ul>
<li>Visualize <b>C1 até T1</b>; as 4 linhas (anterior e posterior dos corpos, espinolaminar e dos processos espinhosos) devem ser contínuas.</li>
<li>Partes moles pré-vertebrais aumentadas sugerem hematoma.</li>
</ul>
<div class="mais">Novo no ATLS 11: restrição de movimento da coluna <b>seletiva</b>, baseada em critérios, com menos ênfase no colar rígido, especialmente no trauma penetrante.</div>`,
    quiz: [
      { q: 'Paciente alerta, sem intoxicação, sem déficit, sem dor na linha média cervical e sem lesão que distraia. Pelo NEXUS:', o: ['TC de coluna obrigatória', 'Manter colar por 24 h e repetir exame', 'Rx em 3 incidências obrigatório', 'A coluna cervical pode ser liberada clinicamente, sem imagem'], c: 3, e: '<b>Certo:</b> todos os critérios NEXUS ausentes: baixo risco, dispensa imagem. <br><b>Por que não as outras:</b> imagem e colar prolongado não são necessários nesse cenário.' },
      { q: 'Idoso de 72 anos, alerta, após queda de escada, dor cervical leve. Pela Regra Canadense:', o: ['Liberar sem imagem', 'Fazer imagem (TC): idade ≥ 65 é fator de alto risco', 'Testar rotação ativa e liberar', 'Pedir apenas Rx simples'], c: 1, e: '<b>Certo:</b> idade ≥ 65 anos é critério de alto risco e indica TC. <br><b>Por que não as outras:</b> o teste de rotação só se aplica sem fatores de alto risco; TC é preferível ao Rx no adulto.' }
    ]
  }
]);
