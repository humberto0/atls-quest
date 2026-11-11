/* Fase 1 guiada — Capítulo 24: Lesões em zonas de combate e ambientes austeros */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  24: {
    checks: {
      'c24-a': { keys: [
        'Ambientes austeros são lugares com falta de recursos, tempo ou segurança: combate, desastres, áreas remotas e hospitais pequenos e isolados',
        'O ATLS mantém o conceito de ATLS Operational Environment: o xABCDE continua valendo, adaptado ao risco, ao tempo de evacuação e ao disponível',
        'O x do xABCDE nasceu da experiência militar',
        'Nos conflitos, a hemorragia de extremidade foi a principal causa de morte evitável: soldados morriam em minutos de sangramento de membro, antes de qualquer problema de via aérea',
        'Por isso o protocolo militar MARCH/TCCC coloca a hemorragia maciça em primeiro lugar',
        'O ATLS 11 incorporou essa ideia ao atendimento civil'
      ] },
      'c24-b': { keys: [
        'O TCCC divide o atendimento em três fases, conforme onde a equipe está',
        'Cuidado sob fogo: prioridade é a segurança (neutralizar a ameaça, sair da linha de fogo) e o controle da hemorragia maciça com torniquete',
        'Sob fogo, nada além disso: tentar via aérea sob tiros arrisca socorrista e vítima',
        'Cuidado tático em campo: com a ameaça controlada, avaliação completa pelo MARCH',
        'Cuidado na evacuação: mais recursos (equipamento, pessoal, sangue) e reavaliação contínua no transporte',
        'MARCH: Massive hemorrhage, Airway, Respiration, Circulation, Hypothermia/Head',
        'Paralelo com o xABCDE: hemorragia primeiro, e a hipotermia ganha letra própria',
        'Pegadinha: sob fogo, o primeiro passo é a segurança e não a via aérea'
      ] },
      'c24-c': { keys: [
        'Aplicar o torniquete alto e apertado ("high and tight") na urgência, ou alguns centímetros acima da ferida quando há tempo de localizar a lesão',
        'Apertar até parar o sangramento e o pulso distal',
        'Torniquete frouxo bloqueia só o retorno venoso, deixa o sangue arterial entrar, congestiona o membro e aumenta o sangramento venoso',
        'Se não controlou, colocar um segundo torniquete acima do primeiro (aumenta a área de compressão)',
        'Anotar o horário de aplicação: a isquemia tem limite e a equipe seguinte precisa saber',
        'Reavaliar cedo: substituir por torniquete mais distal ou converter para curativo compressivo/hemostático quando seguro',
        'O TCCC sugere tentar a conversão em até 2 h, reduzindo o tempo de isquemia',
        'Novo no ATLS 11: tabela de armadilhas do torniquete e mitigação; reavaliação precoce para substituição ou conversão'
      ] },
      'c24-d': { keys: [
        'Cuidado prolongado em campo: a evacuação pode demorar horas ou dias, exigindo manter o paciente vivo com o disponível e reavaliar continuamente',
        'Prevenir hipotermia: o frio prejudica as enzimas da coagulação e alimenta o ciclo hipotermia–acidose–coagulopatia',
        'Sangue total fresco de doadores previamente triados ("banco de sangue ambulante") quando disponível',
        'TXA precoce na hemorragia grave',
        'Triagem constante: com recursos limitados, o objetivo é salvar o maior número de sobreviventes, e as prioridades mudam com novas vítimas ou falta de suprimentos',
        'Cirurgia de controle de danos quando possível: parar sangramento e contaminação e deixar o reparo definitivo para depois',
        'Exemplo: evacuação prevista em 24 h → além do torniquete, aquecer, reavaliar periodicamente e converter o torniquete quando seguro'
      ] },
      'c24-e': { keys: [
        'A explosão é o mecanismo mais característico do combate e lesa de quatro formas',
        'Primária: a onda de pressão atinge órgãos com ar (pulmão de blast, membrana timpânica, intestino) e pode não haver ferida externa',
        'Secundária: fragmentos e projéteis lançados pela explosão (trauma penetrante)',
        'Terciária: o corpo é arremessado contra objetos (trauma contuso)',
        'Quaternária: todo o resto, como queimaduras, esmagamento e inalação de fumaça e tóxicos',
        'Amputações traumáticas de membros → torniquete imediato',
        'Feridas contaminadas → antibiótico precoce e desbridamento, porque solo e fragmentos levam bactérias para dentro'
      ] },
      'c24-prova': { keys: [
        'O tema aparece em questões de hemorragia, pré-hospitalar e múltiplas vítimas',
        'MARCH tem a mesma lógica do xABCDE: hemorragia maciça primeiro',
        'Torniquete: sangramento de extremidade com risco à vida que não para com pressão direta; proximal à lesão, apertado até parar o sangramento e o pulso distal; anotar o horário',
        'Sangramento continua: segundo torniquete proximal ao primeiro',
        'Não afrouxar o torniquete para "ver se ainda sangra"; a conversão é planejada e não em paciente em choque',
        'Fases do TCCC: sob fogo (só torniquete e sair da linha de tiro), tático em campo (MARCH completo), evacuação',
        'Hemorragia juncional (virilha, axila): torniquete não funciona; empacotar com gaze hemostática e comprimir',
        'Hipotermia faz parte da tríade letal: prevenir desde o início com manta e fluidos aquecidos',
        'Ambiente austero exige priorização, cuidado prolongado, triagem e transferência precoce',
        'Antes x agora: o ATLS 11 trouxe para o civil o x antes do A e o torniquete precoce'
      ] }
    },

    case: {
      title: 'Explosão em área remota',
      intro: 'Explosão em uma pedreira isolada, a 3 horas do hospital mais próximo. Um operário de 30 anos está caído com amputação traumática da perna direita abaixo do joelho, sangrando muito, e há risco de nova detonação no local.',
      vitals: { PA: '—', FC: '138', FR: '30', SatO2: '—', Glasgow: '14' },
      steps: [
        {
          prompt: 'O local ainda tem risco de nova explosão. Qual o primeiro passo da equipe?',
          options: [
            { t: 'Abrir a via aérea e iniciar ventilação no local', fb: 'Sob ameaça, via aérea arrisca socorrista e vítima; primeiro segurança e hemorragia maciça.', s: 'c24-b' },
            { t: 'Garantir a segurança, aplicar torniquete alto e apertado e retirar a vítima da área de risco', ok: true, fb: 'Como no cuidado sob fogo: segurança e controle da hemorragia maciça com torniquete, nada mais.', s: 'c24-b' },
            { t: 'Fazer o exame completo MARCH antes de mover a vítima', fb: 'O MARCH completo é feito com a ameaça controlada, no cuidado tático em campo.', s: 'c24-b' },
            { t: 'Esperar a equipe de resgate especializada para tocar na vítima', fb: 'A amputação sangrando mata em minutos; o torniquete é imediato.', s: 'c24-e' }
          ]
        },
        {
          prompt: 'Em local seguro, o coto ainda sangra apesar do torniquete bem apertado. O que fazer?',
          options: [
            { t: 'Afrouxar e reposicionar o mesmo torniquete', fb: 'Afrouxar devolve o sangramento; acrescente outro torniquete.', s: 'c24-prova' },
            { t: 'Elevar o membro e aguardar', fb: 'Elevar não substitui o controle mecânico do sangramento.', s: 'c24-prova' },
            { t: 'Colocar um segundo torniquete acima do primeiro', ok: true, fb: 'O segundo torniquete proximal aumenta a área de compressão e costuma controlar o sangramento.', s: 'c24-c' },
            { t: 'Retirar o torniquete e fazer pressão direta', fb: 'Em amputação, o torniquete é a conduta; retirar devolve o sangramento.', s: 'c24-e' }
          ]
        },
        {
          prompt: 'Sangramento controlado. Agora, com a ameaça controlada, como seguir a avaliação?',
          vitals: { PA: '88×54', FC: '126', FR: '26', SatO2: '93%' },
          options: [
            { t: 'MARCH: Massive hemorrhage, Airway, Respiration, Circulation, Hypothermia/Head', ok: true, fb: 'No cuidado tático em campo, avaliação completa pelo MARCH, com a hipotermia ganhando letra própria.', s: 'c24-b' },
            { t: 'Ir direto para a evacuação, sem outra avaliação', fb: 'Com a ameaça controlada, há tempo para avaliar e tratar outras lesões pelo MARCH.', s: 'c24-b' },
            { t: 'Avaliar só o coto, porque é a única lesão visível', fb: 'Na explosão, pode haver lesões primárias sem ferida externa, como o pulmão de blast.', s: 'c24-e' },
            { t: 'Fazer ABCDE começando pela via aérea, como antes', fb: 'A hemorragia maciça vem primeiro, como no xABCDE.', s: 'c24-a' }
          ]
        },
        {
          prompt: 'Ele tem dispneia progressiva sem nenhuma ferida no tórax e sangue no ouvido. Qual mecanismo explica?',
          vitals: { FR: '32', SatO2: '90%' },
          options: [
            { t: 'Lesão terciária: arremessado contra uma rocha', fb: 'A terciária é contusa; o padrão de órgãos com ar sem ferida externa é o da primária.', s: 'c24-e' },
            { t: 'Lesão secundária por fragmentos', fb: 'Lesão secundária é penetrante, por fragmentos; não há ferida no tórax.', s: 'c24-e' },
            { t: 'Lesão quaternária por inalação', fb: 'Possível no contexto, mas tímpano lesado e dispneia sem ferida apontam para a onda de pressão.', s: 'c24-e' },
            { t: 'Lesão primária por onda de pressão: pulmão de blast e membrana timpânica', ok: true, fb: 'A onda de pressão atinge órgãos com ar e pode não deixar ferida externa.', s: 'c24-e' }
          ]
        },
        {
          prompt: 'A evacuação vai demorar cerca de 3 horas e a temperatura está caindo. Quais medidas durante o cuidado prolongado?',
          vitals: { 'Temp.': '35,1 °C' },
          options: [
            { t: 'Aquecer (manta), TXA precoce, sangue total fresco se disponível e reavaliação contínua', ok: true, fb: 'Prevenir hipotermia quebra o ciclo hipotermia–acidose–coagulopatia; TXA precoce e sangue quando disponíveis.', s: 'c24-d' },
            { t: 'Infundir 3 L de cristaloide em temperatura ambiente', fb: 'Cristaloide frio em grande volume piora a hipotermia e a coagulopatia.', s: 'c24-d' },
            { t: 'Deixar a vítima descoberta para monitorar o sangramento', fb: 'O frio prejudica as enzimas da coagulação; a vítima deve ser aquecida.', s: 'c24-d' },
            { t: 'Afrouxar o torniquete a cada 30 minutos para reperfundir', fb: 'Afrouxar repetidamente devolve o sangramento; a conversão é planejada e não em paciente em choque.', s: 'c24-prova' }
          ]
        },
        {
          prompt: 'Duas horas depois, ainda no local, a vítima segue em choque. A equipe discute converter o torniquete. Qual a decisão?',
          vitals: { PA: '86×50', FC: '124' },
          options: [
            { t: 'Converter agora, porque já se passaram 2 horas', fb: 'Não se converte o torniquete em paciente em choque; em amputação, o torniquete é a conduta.', s: 'c24-prova' },
            { t: 'Afrouxar para ver se ainda sangra', fb: 'Não se afrouxa para "ver se sangra"; a conversão é planejada.', s: 'c24-prova' },
            { t: 'Manter o torniquete: amputação em paciente em choque não é candidata à conversão; anotar o horário e informar a equipe de destino', ok: true, fb: 'A conversão é uma decisão planejada e não se faz em paciente em choque; o horário orienta a equipe seguinte.', s: 'c24-c' },
            { t: 'Substituir por curativo compressivo simples', fb: 'Isso é conversão, contraindicada em choque e em amputação.', s: 'c24-c' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Passe o caso para a equipe de evacuação/hospital no formato S-xABCDE-BAR. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Situação: homem de 30 anos, explosão em pedreira remota, amputação traumática da perna direita abaixo do joelho', s: 'c24-e' },
        { t: 'x: dois torniquetes no membro, com o horário de aplicação de cada um', s: 'c24-c' },
        { t: 'Torniquete não convertido: paciente em choque e amputação', s: 'c24-prova' },
        { t: 'A e B: dispneia progressiva e sangue no ouvido, suspeita de pulmão de blast (lesão primária)', s: 'c24-e' },
        { t: 'C: choque, TXA precoce e sangue total fresco se disponível', s: 'c24-d' },
        { t: 'Hipotermia: temperatura em queda, aquecimento com manta', s: 'c24-d' },
        { t: 'Recomendações: antibiótico precoce e desbridamento da ferida contaminada; controle de danos; reavaliação contínua no transporte', s: 'c24-e' }
      ]
    }
  }
});
