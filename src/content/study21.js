/* Fase 1 guiada — Capítulo 21: Trauma torácico, abdominopélvico e geniturinário */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  21: {
    checks: {
      'c21-a': { keys: [
        'O capítulo cobre os diagnósticos críticos não abordados no xABCDE',
        'Pneumotórax hipertensivo, hemotórax maciço e tamponamento já foram tratados no B e no C',
        'Aqui entram as lesões que não se mostram de cara: aparecem no exame secundário, na reavaliação ou na imagem',
        'São perigosas porque o paciente parece estável e descompensa horas depois (aorta contida, peritonite por víscera oca, hipoxemia por contusão)',
        'Raciocínio: mecanismo + achados sutis = suspeita ativa',
        'Novo no ATLS 11: graduação da lesão contusa de aorta com manejo não operatório; pneumomediastino e lesões esofágicas'
      ] },
      'c21-b': { keys: [
        'Lesões torácicas ocultas costumam ter mecanismo de alta energia ou desaceleração',
        'Contusão pulmonar: sangue e edema no parênquima atrapalham a troca gasosa, e a hipoxemia piora nas primeiras horas',
        'Na contusão pulmonar: evitar excesso de cristaloide (aumenta o edema), garantir analgesia e ventilação adequadas',
        'Lesão contusa de aorta: na desaceleração, a aorta móvel se desloca contra o istmo fixo (logo após a subclávia esquerda) e rasga; quem chega vivo tem ruptura contida',
        'RX da lesão de aorta: mediastino alargado, perda do botão aórtico, desvio da traqueia/SNG para a direita; diagnóstico por angio-TC',
        'Na lesão de aorta, controlar FC e PA com betabloqueador reduz o cisalhamento até o reparo; lesões menores podem ter manejo não operatório, maiores vão a reparo, geralmente endovascular',
        'Ruptura diafragmática: mais comum à esquerda (o fígado protege a direita); vísceras ou SNG no tórax ao RX',
        'Pneumomediastino/lesão esofágica: suspeitar em penetrante que cruza o mediastino ou pneumomediastino sem outra causa; esôfago lesado causa mediastinite grave',
        'Lesão cardíaca contusa: arritmias e alterações de condução; ECG na admissão é a triagem e a troponina pode complementar',
        'Fraturas de costelas: a analgesia é tratamento, porque dor leva a respiração superficial, atelectasia e pneumonia, sobretudo em idosos',
        'Pegadinha: RX de tórax normal não exclui lesão de aorta quando o mecanismo é sugestivo'
      ] },
      'c21-c': { keys: [
        'O abdome esconde sangue e o exame físico engana; a escolha do exame depende de o paciente estar estável ou instável',
        'Exame físico é pouco confiável com intoxicação, TCE, lesão de medula ou lesão distrativa',
        'FAST/eFAST: rápido, à beira-leito, repetível, procura líquido livre; é o exame do paciente instável',
        'TC com contraste detalha órgãos e retroperitônio, mas só no paciente hemodinamicamente estável',
        'Levar um paciente instável à TC é levá-lo para longe dos recursos de reanimação',
        'LPD (lavado peritoneal diagnóstico): alternativa quando não há US nem TC',
        'Instável + FAST positivo → controle cirúrgico do sangramento, sem mais exames',
        'Sinal do cinto de segurança: a faixa comprime o abdome contra a coluna, lesando víscera oca e mesentério e causando fratura de Chance (flexão-distração lombar)'
      ] },
      'c21-d': { keys: [
        'Baço e fígado são sólidos e sangram; no estável, em centro com cirurgião, UTI e angioembolização, a maioria tem manejo não operatório com reavaliação seriada',
        'Instabilidade em lesão de baço ou fígado muda tudo: vai para a cirurgia',
        'Víscera oca: a TC inicial pode ser pouco expressiva porque vazamento e peritonite levam horas; o exame abdominal seriado é essencial',
        'Pâncreas e duodeno são retroperitoneais: poucos sinais no início e diagnóstico frequentemente tardio',
        'Mecanismo típico de pâncreas/duodeno: impacto epigástrico, como o guidão da bicicleta',
        'Fratura de pelve instável sangra muito (plexo venoso e artérias)',
        'Pelve: controle com binder no trocânter maior, depois angioembolização, empacotamento pré-peritoneal ou fixação',
        'Exemplo: criança cai sobre o guidão, TC inicial quase normal e dor epigástrica crescente → pensar em pâncreas/duodeno e reavaliar'
      ] },
      'c21-e': { keys: [
        'O trato urinário raramente mata sozinho, mas a sonda na hora errada transforma lesão parcial em completa',
        'Lesão de uretra, geralmente associada à fratura de pelve: sangue no meato e hematoma perineal/escrotal',
        'Com suspeita de lesão uretral: uretrocistografia retrógrada antes da sonda vesical',
        'A sonda pode completar uma lesão parcial ou criar falso trajeto',
        'Bexiga: hematúria + fratura de pelve → cistografia (por TC)',
        'Rim: hematúria; a maioria é tratada sem cirurgia, com observação',
        'O toque retal/prostático não é mais rotina para indicar a sonda: mandam os sinais clínicos de lesão uretral'
      ] },
      'c21-prova': { keys: [
        'É o capítulo mais cobrado do trauma: estável x instável, qual exame e quando operar',
        'Trauma abdominal fechado instável + FAST positivo: laparotomia imediata; estável: TC com contraste',
        'FAST negativo não exclui lesão (víscera oca, retroperitônio, diafragma); repetir ou investigar se a suspeita persistir',
        'Órgão mais lesado: baço no fechado, fígado na arma branca, intestino delgado na arma de fogo',
        'Baço/fígado no estável: tratamento não operatório (observação, exame e Hb seriados, angioembolização se blush); instabilidade ou peritonite = cirurgia',
        'Sinal do cinto + fratura de Chance: víscera oca e pâncreas/duodeno, com TC inicial possivelmente normal',
        'Diafragma: mais à esquerda, RX com SNG no tórax ou elevação da cúpula',
        'Aorta: desaceleração, mediastino alargado no RX, confirmação por angiotomografia, controle de FC e PA com betabloqueador até o reparo',
        'Contusão pulmonar piora em 24–48 h; evitar hiper-hidratação',
        'Uretra: sangue no meato, hematoma perineal ou em "asa de borboleta" = uretrocistografia antes da sonda; se lesão, cistostomia',
        'Bexiga intraperitoneal (cúpula, bexiga cheia) = cirurgia; extraperitoneal (com fratura de pelve) = sonda vesical e observação na maioria',
        'Pelve instável com choque: cinta nos trocânteres; FAST negativo indica fonte pélvica → angioembolização ou tamponamento pré-peritoneal',
        'Antes x agora: toque retal não é mais rotina e a LPD ficou restrita a quando não há FAST/TC; pegadinha: mandar instável à TC'
      ] }
    },

    case: {
      title: 'Motorista em colisão frontal',
      intro: 'Homem, 45 anos, motorista em colisão frontal a 90 km/h, com cinto. Chega com equimose transversal no abdome inferior (sinal do cinto), dor abdominal e dor torácica. Via aérea pérvia, murmúrio vesicular presente bilateralmente.',
      vitals: { PA: '82×50', FC: '126', FR: '24', SatO2: '95%', Glasgow: '15' },
      steps: [
        {
          prompt: 'Paciente hipotenso e taquicárdico. Qual exame de imagem do abdome nesse momento?',
          options: [
            { t: 'TC de abdome com contraste para definir a lesão', fb: 'TC só no paciente estável; levar o instável à TC é afastá-lo dos recursos de reanimação.', s: 'c21-c' },
            { t: 'FAST/eFAST à beira-leito', ok: true, fb: 'FAST é rápido, à beira-leito e repetível: é o exame do paciente instável.', s: 'c21-c' },
            { t: 'Lavado peritoneal diagnóstico como primeira escolha', fb: 'A LPD fica restrita a quando não há ultrassom nem TC.', s: 'c21-prova' },
            { t: 'Exame físico seriado por 6 horas antes de qualquer exame', fb: 'O paciente está instável; não há tempo para observação sem investigação.', s: 'c21-c' }
          ]
        },
        {
          prompt: 'FAST com líquido livre no espaço hepatorrenal. PA 78×46 após o início dos hemoderivados. Conduta?',
          vitals: { PA: '78×46', FC: '132' },
          options: [
            { t: 'TC para graduar a lesão hepática antes de decidir', fb: 'Instável com fonte abdominal não vai à TC "para definir a lesão": vai ao centro cirúrgico.', s: 'c21-prova' },
            { t: 'Manejo não operatório com Hb seriada', fb: 'O manejo não operatório é para o paciente estável; instabilidade muda tudo.', s: 'c21-d' },
            { t: 'Laparotomia para controle cirúrgico do sangramento', ok: true, fb: 'Instável + FAST positivo → controle cirúrgico do sangramento, sem mais exames.', s: 'c21-c' },
            { t: 'Repetir o FAST em 30 minutos', fb: 'O FAST já é positivo e o paciente segue instável; repetir só atrasa o controle do sangramento.', s: 'c21-c' }
          ]
        },
        {
          prompt: 'Antes de ir ao centro cirúrgico, nota-se sangue no meato uretral e hematoma perineal. A equipe quer passar sonda vesical. O que fazer?',
          options: [
            { t: 'Passar a sonda com delicadeza, usando lubrificante', fb: 'A sonda pode completar uma lesão parcial ou criar falso trajeto.', s: 'c21-e' },
            { t: 'Fazer toque retal para decidir sobre a sonda', fb: 'O toque retal não é mais rotina para indicar a sonda; mandam os sinais clínicos.', s: 'c21-e' },
            { t: 'Não passar a sonda às cegas: suspeitar de lesão de uretra e fazer uretrocistografia retrógrada antes', ok: true, fb: 'Sangue no meato e hematoma perineal indicam lesão uretral: uretrocistografia antes da sonda.', s: 'c21-e' },
            { t: 'Passar sonda de três vias para irrigar a bexiga', fb: 'Qualquer sonda às cegas pode completar a lesão uretral.', s: 'c21-e' }
          ]
        },
        {
          prompt: 'Após a laparotomia, o paciente está estável na UTI. O RX de tórax mostra mediastino alargado e perda do botão aórtico. Conduta?',
          vitals: { PA: '128×76', FC: '98', SatO2: '96%' },
          options: [
            { t: 'Angio-TC de tórax e controle de FC e PA com betabloqueador até o reparo', ok: true, fb: 'Mecanismo de desaceleração + mediastino alargado = suspeita de lesão contusa de aorta: angio-TC e controle de FC/PA para reduzir o cisalhamento.', s: 'c21-b' },
            { t: 'Repetir o RX em 24 horas', fb: 'Quem chega vivo tem ruptura contida, que pode romper; a suspeita exige angio-TC.', s: 'c21-b' },
            { t: 'Drenagem torácica à esquerda', fb: 'O achado sugere lesão de aorta, não pneumotórax ou hemotórax a drenar.', s: 'c21-b' },
            { t: 'Vasopressor para manter PAS acima de 160 mmHg', fb: 'Pressão alta aumenta o cisalhamento na parede da aorta; o objetivo é controlar FC e PA.', s: 'c21-b' }
          ]
        },
        {
          prompt: 'No 2º dia, a saturação cai para 89% e há infiltrado no pulmão direito, onde havia contusão. Ele recebeu muito cristaloide. Qual a explicação e a conduta?',
          vitals: { SatO2: '89%', FR: '30' },
          options: [
            { t: 'Pneumonia aspirativa: antibiótico e mais volume', fb: 'O padrão é o da contusão pulmonar, que piora nas primeiras horas; mais volume aumenta o edema.', s: 'c21-b' },
            { t: 'Contusão pulmonar evoluindo: evitar excesso de cristaloide, garantir analgesia e ventilação adequadas', ok: true, fb: 'Contusão pulmonar piora em 24–48 h; excesso de cristaloide aumenta o edema no parênquima.', s: 'c21-b' },
            { t: 'Pneumotórax hipertensivo: descompressão imediata', fb: 'Não há sinais de pneumotórax hipertensivo; o quadro é de piora da contusão.', s: 'c21-a' },
            { t: 'Hemotórax maciço: toracotomia', fb: 'Infiltrado em área de contusão não é hemotórax maciço.', s: 'c21-a' }
          ]
        },
        {
          prompt: 'No 3º dia, ele refere dor abdominal crescente, distensão e febre; a TC inicial do abdome não mostrava lesão de alça. O que suspeitar?',
          vitals: { PA: '118×70', FC: '118', FR: '24' },
          options: [
            { t: 'Dor da laparotomia: aumentar a analgesia', fb: 'Dor crescente com febre após sinal do cinto pede investigação de víscera oca, não só analgesia.', s: 'c21-d' },
            { t: 'Lesão de víscera oca não detectada (sinal do cinto), com reexame e reavaliação cirúrgica', ok: true, fb: 'A TC inicial pode ser pouco expressiva: vazamento e peritonite levam horas. O exame abdominal seriado é essencial.', s: 'c21-d' },
            { t: 'Ruptura diafragmática tardia à direita', fb: 'A ruptura diafragmática é mais comum à esquerda e não explica o quadro de peritonite.', s: 'c21-b' },
            { t: 'Lesão renal: observar com hidratação', fb: 'Lesão renal se manifesta com hematúria e costuma ser tratada sem cirurgia; o quadro é de peritonite.', s: 'c21-e' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Passe o caso para a equipe da UTI que vai assumir o paciente no formato S-xABCDE-BAR. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Situação: homem de 45 anos, colisão frontal a 90 km/h com cinto e sinal do cinto', s: 'c21-c' },
        { t: 'C: chegou instável, FAST positivo no hepatorrenal → laparotomia sem passar pela TC', s: 'c21-c' },
        { t: 'Uretra: sangue no meato e hematoma perineal; sem sonda às cegas, uretrocistografia retrógrada antes', s: 'c21-e' },
        { t: 'Aorta: mediastino alargado e perda do botão aórtico → angio-TC, controle de FC e PA com betabloqueador até o reparo', s: 'c21-b' },
        { t: 'B: contusão pulmonar direita com piora da oxigenação; evitar excesso de cristaloide, analgesia e ventilação adequadas', s: 'c21-b' },
        { t: 'Abdome: risco de víscera oca e pâncreas/duodeno (sinal do cinto) com TC inicial pouco expressiva → exame abdominal seriado', s: 'c21-d' },
        { t: 'Recomendações: reavaliação seriada, cirurgia vascular para a aorta e urologia para a uretra', s: 'c21-prova' }
      ]
    }
  }
});
