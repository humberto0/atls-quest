/* Fase 1 guiada — Capítulo 23: Trauma ocular */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  23: {
    checks: {
      'c23-a': { keys: [
        'O exame ocular entra no exame secundário, mas algumas lesões são tempo-dependentes: a visão pode ser perdida em horas, ou minutos na queimadura química',
        'Acuidade visual, mesmo grosseira (contar dedos, vulto, luz), é o "sinal vital do olho": define gravidade, serve de base e tem valor prognóstico',
        'Pupilas: tamanho, forma, reação e defeito pupilar aferente relativo (DPAR), que indica sofrimento do nervo óptico ou da retina',
        'Movimentos oculares: restrição sugere fratura ou compressão',
        'Avaliar pálpebras, câmara anterior (hifema) e proptose',
        'Pressão intraocular é útil no hematoma retrobulbar, mas não deve ser medida se houver suspeita de globo aberto (a pressão do aparelho pode expulsar o conteúdo)',
        'Novo no ATLS 11: fluxograma priorizado por tempo e descrição/ilustrações de cantotomia lateral e cantólise'
      ] },
      'c23-b': { keys: [
        'A órbita é uma caixa óssea com pouca folga, fechada na frente pelas pálpebras presas pelos tendões cantais',
        'Sangue atrás do globo eleva a pressão, empurra o olho para fora e comprime o nervo óptico e sua irrigação: é uma síndrome compartimental',
        'Sinais: proptose tensa, dor, queda da acuidade, PIO elevada, DPAR, oftalmoplegia e pálpebras tensas',
        'Tratamento: cantotomia lateral + cantólise imediata',
        'Cortar o tendão cantal lateral "abre a caixa", deixa o globo avançar e baixa a pressão',
        'O diagnóstico é clínico: não esperar TC',
        'A isquemia do nervo óptico e da retina pode causar perda visual irreversível em poucas horas (estimativa clássica: cerca de 90–120 min)',
        'Pegadinha: não atrasar a cantotomia para fazer TC ou chamar especialista se o quadro é clínico'
      ] },
      'c23-c': { keys: [
        'A queimadura química é a verdadeira emergência ocular: enquanto o agente está em contato, continua destruindo tecido',
        'Irrigar imediatamente, antes de qualquer exame detalhado, inclusive antes de medir a acuidade',
        'Usar soro fisiológico ou Ringer em grande volume',
        'Anestésico tópico ajuda o paciente a manter o olho aberto durante a irrigação',
        'Irrigar até pH neutro (7–7,5)',
        'Remover partículas dos fórnices evertendo as pálpebras, senão o agente continua agindo',
        'Álcalis são piores que ácidos: ácidos coagulam proteínas e formam barreira; álcalis saponificam as membranas e penetram profundamente'
      ] },
      'c23-d': { keys: [
        'Globo aberto: ferida de espessura total na córnea ou esclera; o objetivo é não deixar o conteúdo sair e evitar infecção até o reparo',
        'Suspeitar com ferida penetrante, pupila em gota/irregular, hifema, prolapso de tecido escuro e câmara anterior rasa',
        'Protetor rígido apoiado nos ossos da órbita, sem pressão sobre o olho',
        'Não aplicar colírio, pomada ou curativo compressivo, e não medir a PIO',
        'Antiemético e analgesia: vômito e Valsalva aumentam a pressão intraocular e a extrusão',
        'Antibiótico sistêmico (endoftalmite é devastadora) e profilaxia antitetânica',
        'Cabeceira elevada e avaliação oftalmológica urgente',
        'Não retirar corpo estranho cravado no globo: mesmo raciocínio do objeto empalado'
      ] },
      'c23-e': { keys: [
        'Hifema é sangue na câmara anterior; pode ressangrar e elevar a PIO',
        'No hifema: cabeceira elevada, protetor, medir PIO se não houver globo aberto e encaminhar à oftalmologia',
        'Blow-out: o impacto aumenta a pressão na órbita e quebra o assoalho, o osso mais fino',
        'Blow-out dá diplopia e restrição do olhar para cima por encarceramento do músculo reto inferior',
        'Blow-out também dá hipoestesia infraorbitária (nervo infraorbitário) e enoftalmia',
        'Abrasão de córnea: diagnóstico com fluoresceína',
        'Não prescrever anestésico tópico de uso contínuo na abrasão: atrasa a cicatrização e pode causar úlcera'
      ] },
      'c23-prova': { keys: [
        'Trauma ocular cai em questões curtas de prioridade: qual a primeira conduta',
        'Queimadura química: irrigação imediata e abundante com soro ou água, antes de qualquer exame, até pH neutro (7,0–7,5); álcali é a pior',
        'Globo aberto (pupila em gota, prolapso de úvea, Seidel positivo, hifema com perda visual): protetor rígido sem pressão, cabeceira elevada, antiemético, analgesia, antibiótico sistêmico e antitetânica',
        'No globo aberto: não pingar colírio, não aplicar pomada, não fazer curativo compressivo, não medir PIO',
        'Hematoma retrobulbar: proptose tensa, dor, perda visual, DPAR e PIO elevada → cantotomia lateral com cantólise imediata, sem esperar TC',
        'Corpo estranho empalado no olho: não retirar; proteger e encaminhar',
        'Hifema: cabeceira elevada, repouso e protetor; evitar AINE/AAS',
        'Blow-out: diplopia ao olhar para cima, enoftalmo, hipoestesia infraorbitária e aprisionamento do reto inferior',
        'Acuidade visual é o sinal vital do olho: registrar sempre que possível',
        'Pegadinha: "primeiro medir a acuidade e o pH" na queimadura química; irrigar vem antes de tudo'
      ] }
    },

    case: {
      title: 'Agressão com soco no rosto',
      intro: 'Homem, 35 anos, agredido com socos no rosto há 40 minutos. Exame primário sem alterações. No exame secundário, o olho esquerdo está saltado e duro, as pálpebras tensas, e ele refere dor intensa e que só enxerga vultos desse lado.',
      vitals: { PA: '138×86', FC: '96', FR: '18', SatO2: '99%', Glasgow: '15' },
      steps: [
        {
          prompt: 'Qual é a avaliação ocular inicial essencial, que funciona como "sinal vital do olho"?',
          options: [
            { t: 'Acuidade visual, mesmo grosseira (contar dedos, vulto, luz)', ok: true, fb: 'A acuidade define a gravidade, serve de base para comparar e tem valor prognóstico.', s: 'c23-a' },
            { t: 'Fundoscopia sob dilatação pupilar', fb: 'Não é o exame inicial; a dilatação ainda prejudica a avaliação das pupilas e do DPAR.', s: 'c23-a' },
            { t: 'TC de órbitas antes de qualquer exame', fb: 'O exame clínico vem antes; a TC não define a primeira avaliação.', s: 'c23-a' },
            { t: 'Teste com fluoresceína', fb: 'A fluoresceína serve para abrasão de córnea, não é a avaliação inicial.', s: 'c23-e' }
          ]
        },
        {
          prompt: 'Há defeito pupilar aferente relativo à esquerda e a PIO está muito elevada. Não há sinais de globo aberto. Qual o diagnóstico mais provável?',
          vitals: { PIO: '48 mmHg' },
          options: [
            { t: 'Globo aberto', fb: 'Não há ferida, pupila em gota ou prolapso; proptose tensa com PIO alta sugere compressão retrobulbar.', s: 'c23-d' },
            { t: 'Fratura de assoalho da órbita (blow-out)', fb: 'O blow-out dá enoftalmia e restrição do olhar para cima, não proptose tensa com PIO alta.', s: 'c23-e' },
            { t: 'Hematoma retrobulbar / síndrome compartimental orbitária', ok: true, fb: 'Proptose tensa, dor, queda da acuidade, PIO elevada e DPAR = síndrome compartimental orbitária.', s: 'c23-b' },
            { t: 'Abrasão de córnea', fb: 'Abrasão não causa proptose, PIO alta nem DPAR.', s: 'c23-e' }
          ]
        },
        {
          prompt: 'Qual a conduta imediata?',
          options: [
            { t: 'Solicitar TC de órbitas para confirmar antes de intervir', fb: 'O diagnóstico é clínico: não espere a TC, porque a perda visual pode ficar irreversível em pouco tempo.', s: 'c23-b' },
            { t: 'Curativo compressivo e gelo', fb: 'Compressão aumenta a pressão na órbita; o tratamento é descomprimir.', s: 'c23-b' },
            { t: 'Aguardar o oftalmologista para decidir', fb: 'Não se atrasa a cantotomia para chamar especialista quando o quadro é clínico.', s: 'c23-b' },
            { t: 'Cantotomia lateral com cantólise imediata', ok: true, fb: 'Cortar o tendão cantal lateral abre a "caixa", deixa o globo avançar e baixa a pressão.', s: 'c23-b' }
          ]
        },
        {
          prompt: 'Por que não esperar? Qual a janela clássica estimada para dano visual irreversível?',
          options: [
            { t: 'Cerca de 24 horas', fb: 'A isquemia do nervo óptico e da retina leva a dano irreversível em poucas horas, não em um dia.', s: 'c23-b' },
            { t: 'Cerca de 90–120 minutos (estimativa clássica)', ok: true, fb: 'A estimativa clássica é de cerca de 90–120 min de isquemia do nervo óptico e da retina.', s: 'c23-b' },
            { t: 'Não há janela: o dano é sempre reversível', fb: 'A perda visual pode ser irreversível em poucas horas.', s: 'c23-b' },
            { t: 'Cerca de 12 horas, como no globo aberto', fb: 'A urgência da síndrome compartimental orbitária é de minutos a poucas horas.', s: 'c23-b' }
          ]
        },
        {
          prompt: 'Após a cantotomia, a PIO cai e a visão melhora. No outro olho, nota-se sangue na câmara anterior, sem ferida aberta. Qual a conduta para esse achado?',
          vitals: { PIO: '22 mmHg' },
          options: [
            { t: 'Hifema: cabeceira elevada, protetor, medir PIO, evitar AINE/AAS e oftalmologia', ok: true, fb: 'O hifema pode ressangrar e elevar a PIO; sem globo aberto, a PIO pode ser medida.', s: 'c23-e' },
            { t: 'Prescrever ibuprofeno para a dor e dar alta', fb: 'AINE e AAS devem ser evitados no hifema pelo risco de ressangramento.', s: 'c23-prova' },
            { t: 'Curativo compressivo no olho', fb: 'O manejo é com protetor e cabeceira elevada, não compressão.', s: 'c23-e' },
            { t: 'Drenar o sangue com agulha na emergência', fb: 'Não é conduta da emergência; o paciente deve ser avaliado pela oftalmologia.', s: 'c23-e' }
          ]
        },
        {
          prompt: 'No mesmo plantão, chega um pedreiro com cal (álcali) no olho direito. Qual o primeiro passo?',
          options: [
            { t: 'Medir a acuidade visual e o pH antes de irrigar', fb: 'Na queimadura química, irrigar vem antes de tudo, inclusive da acuidade.', s: 'c23-c' },
            { t: 'Irrigação imediata e abundante com soro, com anestésico tópico, até pH neutro, removendo partículas dos fórnices', ok: true, fb: 'Enquanto o agente está em contato, continua destruindo tecido; álcali é pior porque penetra.', s: 'c23-c' },
            { t: 'Protetor rígido e encaminhar à oftalmologia', fb: 'Sem irrigar, o álcali continua penetrando e destruindo o olho.', s: 'c23-c' },
            { t: 'Neutralizar com solução ácida', fb: 'A conduta é irrigação em grande volume até pH neutro, não neutralização química.', s: 'c23-c' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Passe o caso do primeiro paciente para o oftalmologista no formato S-xABCDE-BAR. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Situação: homem de 35 anos agredido com socos no rosto, exame primário sem alterações', s: 'c23-a' },
        { t: 'Olho esquerdo: proptose tensa, dor, acuidade de vultos, DPAR e PIO de 48 mmHg', s: 'c23-b' },
        { t: 'Diagnóstico clínico de hematoma retrobulbar, sem esperar TC', s: 'c23-b' },
        { t: 'Cantotomia lateral com cantólise feita, com o horário; PIO caiu para 22 e a visão melhorou', s: 'c23-b' },
        { t: 'Olho direito: hifema sem globo aberto; cabeceira elevada, protetor, evitar AINE/AAS', s: 'c23-e' },
        { t: 'Acuidade visual registrada antes e depois como base de comparação', s: 'c23-a' },
        { t: 'Recomendação: avaliação oftalmológica urgente, reavaliar PIO e acuidade, TC de órbitas depois da descompressão', s: 'c23-prova' }
      ]
    }
  }
});
