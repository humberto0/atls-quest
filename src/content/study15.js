/* Fase 1 guiada (prontuário completo → com suas palavras → caso → passagem de plantão) — Capítulo 15 */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  15: {
    checks: {
      'c15-a': {
        keys: [
          'Transferir quando as necessidades do paciente excedem os recursos do hospital',
          'Exemplos de falta de recursos: cirurgião, neurocirurgião, UTI, hemoderivados ou experiência com o tipo de lesão',
          'A decisão de transferir deve ser precoce, assim que a necessidade é reconhecida',
          'O tempo até o tratamento definitivo (cirurgia, embolização, neurocirurgia) é o que mais pesa na sobrevida do paciente grave',
          'Não atrasar a transferência com exames que não mudarão a conduta imediata',
          'A TC feita na origem muitas vezes é repetida no centro de referência: gasta tempo e radiação',
          'Antes de sair, fazer só o que salva a vida no trajeto: via aérea, controle de sangramento, acesso, sangue e drenagem torácica',
          'Pegadinha: “fazer a TC antes de transferir” é errado quando atrasa e não muda a conduta'
        ]
      },
      'c15-b': {
        keys: [
          'A transferência envolve dois médicos e exige responsabilidades claras',
          'Médico de origem: inicia a transferência e estabiliza o possível',
          'Médico de origem: escolhe o modo de transporte e o nível de cuidado no trajeto, em conjunto com o médico que recebe',
          'Médico que recebe: confirma a capacidade do hospital (leito, equipe, sala) e pode orientar condutas antes da saída',
          'Comunicação médico a médico, estruturada e documentada',
          'Passagens informais, por terceiros e sem roteiro, são a principal fonte de informação perdida',
          'Com o paciente seguem registros, exames, imagens, horários de medicações e a folha de transferência'
        ]
      },
      'c15-c': {
        keys: [
          'A passagem estruturada segue a ordem do atendimento: quem recebe entende rápido e nada é esquecido',
          'S — Situação: quem você é, onde está, dados do paciente, mecanismo e motivo da transferência',
          'x — torniquete (e horário), binder pélvico, protocolo de transfusão maciça, sangramento ativo',
          'A — via aérea pérvia ou intubado, tamanho e posição do tubo, coluna protegida',
          'B — SatO2, dreno de tórax e débito, parâmetros do ventilador',
          'C — PA e FC, acessos IV ou IO, hemoderivados recebidos, TXA e horário',
          'D — GCS, pupilas, déficits lateralizados',
          'E — outras lesões, temperatura e medidas contra hipotermia',
          'B — Background: comorbidades, medicações (sobretudo anticoagulantes), alergias e funcionalidade prévia',
          'A — Assessment: lesões confirmadas, diagnóstico de trabalho e preocupações',
          'R — Recomendações: o que o paciente precisa ao chegar (centro cirúrgico, UTI, imagem, equipe)',
          'Novo no ATLS 11: S-xABCDE-BAR com checklist de transferência'
        ]
      },
      'c15-d': {
        keys: [
          'Ambulância e aeronave têm espaço, equipe e equipamento limitados: a regra é antecipar',
          'Intubar antes se houver risco de perder a via aérea no caminho (GCS ≤ 8, queimadura de via aérea, edema progressivo)',
          'Drenar o tórax antes de transporte aéreo se houver pneumotórax: a altitude expande o ar e pode torná-lo hipertensivo',
          'Monitorizar sinais vitais, SatO2 e ETCO2 se intubado',
          'Manter sangue, analgesia e sedação disponíveis e prevenir hipotermia',
          'Equipe e equipamento compatíveis com a gravidade do paciente',
          'Na passagem do pré-hospitalar para o hospital usa-se o MIST: Mecanismo, Injúrias (lesões), Sinais vitais e Tratamento',
          'Intubar dentro da ambulância em movimento é bem mais arriscado que antes da saída'
        ]
      },
      'c15-prova': {
        keys: [
          'Não atrasar a transferência com exames que não mudam a conduta local (ex.: TC de crânio num hospital sem neurocirurgia)',
          'Contato médico a médico; a responsabilidade é de quem transfere até a chegada ao destino',
          'Estabilizar o possível antes: via aérea definitiva se houver risco (Glasgow ≤ 8, queimadura de via aérea, combativo)',
          'Também antes: drenar pneumotórax, acesso calibroso, sonda gástrica, hemoderivados e imobilização',
          'Se precisa de cirurgia que o hospital não oferece: controle de danos possível e transferir, sem esperar estabilidade impossível',
          'Documentação: resumo, exames (imagens), medicações e hemoderivados administrados',
          'Transporte aéreo: altitude expande gases; drenar pneumotórax e usar sondas gástrica e vesical',
          'Equipe capacitada no transporte e reavaliação contínua pelo xABCDE',
          'Antes vs agora: ABC-SBAR virou S-xABCDE-BAR, com o x da hemorragia exsanguinante',
          'Pegadinha: hospital pequeno, FAST positivo e instável, sem cirurgião → ressuscitar e transferir imediatamente, não TC'
        ]
      }
    },

    case: {
      title: 'TCE grave em hospital sem neurocirurgia',
      intro: 'Homem de 34 anos, queda de moto em rodovia, chega a um hospital pequeno do interior, sem neurocirurgião. Glasgow 7, pupila direita maior que a esquerda, murmúrio vesicular diminuído à esquerda. O centro de referência fica a 2 horas de helicóptero.',
      vitals: { PA: '132×78', FC: '96', FR: '24', SatO2: '91%', Glasgow: '7' },
      steps: [
        {
          prompt: 'O que fazer primeiro em relação à transferência?',
          options: [
            { t: 'Fazer TC de crânio antes de decidir', fb: 'Sem neurocirurgia no local, a TC não muda a conduta e só atrasa o tratamento definitivo.', s: 'c15-prova' },
            { t: 'Esperar o paciente estabilizar completamente', fb: 'Não se espera uma estabilidade impossível no local: o tratamento definitivo está no destino.', s: 'c15-prova' },
            { t: 'Decidir já transferir e contatar diretamente o médico do centro de referência', ok: true, fb: 'As necessidades excedem os recursos: a decisão deve ser precoce, com contato médico a médico.', s: 'c15-a' },
            { t: 'Pedir para a enfermagem avisar o outro hospital', fb: 'A comunicação deve ser médico a médico, estruturada; passagens por terceiros perdem informação.', s: 'c15-b' }
          ]
        },
        {
          prompt: 'Glasgow 7 e 2 horas de transporte. E a via aérea?',
          options: [
            { t: 'Intubar antes de sair, para garantir a via aérea definitiva', ok: true, fb: 'GCS ≤ 8 com risco de perder a via aérea: intubar antes, porque intubar em movimento é bem mais arriscado.', s: 'c15-d' },
            { t: 'Levar com máscara e intubar se piorar no voo', fb: 'Intubar dentro da aeronave em movimento é muito mais arriscado: antecipe.', s: 'c15-d' },
            { t: 'Aguardar a chegada ao centro de referência', fb: 'Com GCS 7, o risco de perder a via aérea no trajeto é alto.', s: 'c15-d' },
            { t: 'Fazer só uma cânula orofaríngea', fb: 'A cânula não é via aérea definitiva; com GCS ≤ 8 está indicada a intubação.', s: 'c15-prova' }
          ]
        },
        {
          prompt: 'O RX de tórax confirma pneumotórax à esquerda. O transporte será de helicóptero.',
          vitals: { SatO2: '94%' },
          options: [
            { t: 'Não drenar: o pneumotórax é pequeno', fb: 'Em altitude o ar se expande e o pneumotórax pode virar hipertensivo no voo.', s: 'c15-d' },
            { t: 'Drenar o tórax antes da decolagem', ok: true, fb: 'A altitude expande gases: drenar antes do transporte aéreo evita que o pneumotórax vire hipertensivo.', s: 'c15-d' },
            { t: 'Drenar só se a SatO2 cair durante o voo', fb: 'Procedimentos no trajeto são difíceis. A regra é antecipar.', s: 'c15-d' },
            { t: 'Trocar o helicóptero por ambulância para não drenar', fb: 'O tempo até o tratamento definitivo pesa muito; drenar resolve o problema da altitude.', s: 'c15-a' }
          ]
        },
        {
          prompt: 'Antes da decolagem, o que mais deve ir com o paciente?',
          options: [
            { t: 'Só o paciente: o outro hospital refaz os exames', fb: 'Com o paciente seguem registros, exames, imagens, horários de medicações e a folha de transferência.', s: 'c15-b' },
            { t: 'Apenas a receita das medicações', fb: 'É preciso o conjunto: registros, imagens, horários de medicações e hemoderivados e a folha de transferência.', s: 'c15-prova' },
            { t: 'Um resumo verbal para o piloto repassar', fb: 'A passagem é médico a médico, estruturada e documentada.', s: 'c15-b' },
            { t: 'Registros, exames e imagens, horários de medicações e hemoderivados, e a folha de transferência', ok: true, fb: 'Documentação completa evita que informação se perca entre as equipes.', s: 'c15-b' }
          ]
        },
        {
          prompt: 'Durante o voo, o que deve ser monitorizado?',
          vitals: { PA: '128×76', FC: '92', SatO2: '97%' },
          options: [
            { t: 'Sinais vitais, SatO2 e ETCO2, com sedação, analgesia e prevenção de hipotermia', ok: true, fb: 'Paciente intubado: ETCO2 obrigatório, além de sinais vitais, SatO2, sedação, analgesia e temperatura.', s: 'c15-d' },
            { t: 'Só a frequência cardíaca', fb: 'Monitorização incompleta: falta SatO2, ETCO2 e temperatura.', s: 'c15-d' },
            { t: 'Nada: o piloto avisa se houver problema', fb: 'A equipe deve ser compatível com a gravidade e reavaliar continuamente pelo xABCDE.', s: 'c15-prova' },
            { t: 'Apenas a pressão arterial a cada 30 minutos', fb: 'É insuficiente para um paciente intubado com TCE grave.', s: 'c15-d' }
          ]
        },
        {
          prompt: 'Ao chegar, como iniciar a passagem para o neurocirurgião?',
          options: [
            { t: 'Começar pelos exames laboratoriais', fb: 'A passagem segue a ordem do atendimento, começando pela Situação e pelo x.', s: 'c15-c' },
            { t: 'Pelo S-xABCDE-BAR: Situação, depois x, A, B, C, D, E, Background, Assessment e Recomendações', ok: true, fb: 'A passagem estruturada segue a ordem do atendimento, e quem recebe entende rápido.', s: 'c15-c' },
            { t: 'Pelo ABC-SBAR antigo', fb: 'O ATLS 11 usa S-xABCDE-BAR, que inclui o x da hemorragia exsanguinante.', s: 'c15-prova' },
            { t: 'Relato livre, sem ordem definida', fb: 'Passagens sem roteiro são a principal fonte de informação perdida.', s: 'c15-b' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Passe o caso para o neurocirurgião do centro de referência no formato S-xABCDE-BAR. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Situação: homem de 34 anos, queda de moto, transferido por TCE grave sem neurocirurgia na origem', s: 'c15-c' },
        { t: 'x: sem hemorragia externa, sem torniquete ou binder', s: 'c15-c' },
        { t: 'A: intubado antes do transporte, tamanho e posição do tubo, coluna protegida', s: 'c15-c' },
        { t: 'B: pneumotórax esquerdo drenado antes do voo, débito do dreno, SatO2 e parâmetros do ventilador', s: 'c15-d' },
        { t: 'C: PA e FC, acessos, hemoderivados e medicações com horários', s: 'c15-c' },
        { t: 'D: Glasgow 7 e anisocoria (pupila direita maior)', s: 'c15-c' },
        { t: 'E: outras lesões e temperatura', s: 'c15-c' },
        { t: 'Background e Assessment: comorbidades, medicações e alergias; diagnóstico de trabalho de TCE grave', s: 'c15-c' },
        { t: 'Recomendações: avaliação neurocirúrgica imediata ao chegar', s: 'c15-c' }
      ]
    }
  }
});
