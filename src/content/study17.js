/* Fase 1 guiada (prontuário completo → com suas palavras → caso → relatório ao comando) — Capítulo 17 */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  17: {
    checks: {
      'c17-a': {
        keys: [
          'Triagem é classificar pacientes conforme a necessidade de tratamento e os recursos disponíveis',
          'A lógica muda conforme a proporção entre vítimas e recursos',
          'Incidente com múltiplas vítimas: os recursos ainda dão conta e trata-se primeiro o mais grave',
          'Vítimas em massa ou desastre: as vítimas excedem os recursos',
          'No desastre, priorizar quem tem maior chance de sobreviver com menor gasto de tempo e recursos',
          'Razão ética: gastar sala cirúrgica e muito sangue num paciente quase sem chance pode custar a vida de vários salváveis',
          'Princípio: o maior bem para o maior número',
          'Novo no ATLS 11: triagem e desastres saíram dos apêndices e viraram capítulo'
        ]
      },
      'c17-b': {
        keys: [
          'Na cena a triagem deve ser rápida (menos de um minuto por vítima) e reprodutível',
          'START: quem anda → verde (mínimo)',
          'START: não respira → abrir a via aérea; continua sem respirar → preto; volta a respirar → vermelho',
          'START: FR acima de 30, enchimento capilar acima de 2 s ou sem pulso radial, ou não obedece comandos → vermelho',
          'START: os demais → amarelo',
          'SALT: Sort, classificação global (quem anda, quem acena, quem está imóvel) para achar rápido os mais graves',
          'SALT: Assess, avaliação individual',
          'SALT: Lifesaving interventions rápidas (controle de hemorragia, abrir via aérea, descompressão torácica, antídotos)',
          'SALT: Treatment/Transport por prioridade',
          'Cores: vermelho imediato, amarelo retardado, verde mínimo, cinza expectante, preto óbito',
          'Na triagem em massa não se para para fazer RCP: só intervenções de segundos, como torniquete e abertura da via aérea'
        ]
      },
      'c17-c': {
        keys: [
          'No desastre, o caos vem mais da falta de coordenação que da falta de recursos',
          'Sistema de Comando de Incidentes: cadeia de comando única, cada pessoa responde a um só chefe',
          'Papéis definidos: triagem, logística, comunicação, segurança',
          'Linguagem comum, sem códigos próprios de cada hospital',
          'Comunicação clara entre cena, regulação e hospitais',
          'No hospital: um comandante e um oficial de triagem na entrada',
          'No hospital: áreas separadas por cor, liberação de leitos, suspensão de cirurgias eletivas e convocação de equipes',
          'O plano de desastre deve ser escrito e treinado em simulados: o que nunca foi ensaiado não funciona'
        ]
      },
      'c17-d': {
        keys: [
          'Quatro fases: mitigação (reduzir o risco antes), preparação (planos, estoques, treinos), resposta (atendimento) e recuperação',
          'A recuperação restabelece serviços e apoia vítimas e equipe',
          'Em tiroteios em massa e explosões predominam hemorragias de extremidades: torniquete e controle de sangramento são prioridade',
          'Incidentes químicos ou radiológicos: descontaminar antes da entrada no hospital',
          'Por quê: para não contaminar a equipe e não fechar o pronto-socorro',
          'Muitos pacientes chegam por meios próprios ao hospital mais próximo, inclusive a hospitais sem cirurgia',
          'Hospitais sem cirurgia precisam triar, estabilizar e transferir',
          'O ATLS 11 treina acidente com múltiplos veículos em hospital com cirurgia e tiroteio em massa em hospital sem cirurgia'
        ]
      },
      'c17-e': {
        keys: [
          'A primeira classificação é uma foto de um momento',
          'Pacientes amarelos podem piorar e virar vermelhos; vermelhos estabilizados podem esperar',
          'A retriagem deve ser repetida na chegada ao hospital e a intervalos regulares',
          'Feridos leves costumam chegar primeiro, por conta própria, ocupando leitos e equipe',
          'Os graves chegam depois, trazidos pelo pré-hospitalar',
          'Oficial de triagem na porta e áreas separadas por cor evitam que o hospital seja tomado pelos verdes',
          'Verdes vão para a área verde, fora da sala vermelha, que fica reservada para os graves a caminho'
        ]
      },
      'c17-prova': {
        keys: [
          'START na ordem: anda? → verde; não respira → abrir via aérea (voltou → vermelho; não voltou → preto)',
          'Respira com FR acima de 30 → vermelho; enchimento capilar acima de 2 s ou pulso radial ausente → vermelho',
          'Não obedece comandos simples → vermelho; passou em tudo → amarelo (“30 – 2 – pode fazer”)',
          'Intervenções no START: só abrir a via aérea e controlar hemorragia com pressão direta; sem RCP',
          'JumpSTART (criança): sem respiração e com pulso → 5 ventilações de resgate; FR abaixo de 15 ou acima de 45 → vermelho; neurológico pelo AVDI',
          'SALT: Sort, Assess, Lifesaving interventions, Treatment/Transport; tem a categoria expectante',
          'Múltiplas vítimas: tratar o mais grave; desastre: priorizar quem tem mais chance (maior bem para o maior número)',
          'Comando de incidentes: cadeia única, comunicação padronizada, amplitude de controle de 3 a 7 subordinados por líder',
          'Fases: mitigação, preparação, resposta e recuperação',
          'Ondas: leves chegam primeiro ao hospital mais próximo, graves depois; retriagem constante',
          'Agentes químicos: descontaminação antes de entrar no hospital',
          'Explosão: primária (onda de pressão: tímpano, pulmão, intestino), secundária (fragmentos), terciária (arremesso), quaternária (queimaduras, inalação, esmagamento)',
          'Pegadinha: não anda, FR 24, enchimento 1 s, obedece → amarelo; quem anda é verde mesmo com fratura de antebraço'
        ]
      }
    },

    case: {
      title: 'Explosão no centro da cidade',
      intro: 'Uma explosão atinge uma feira no centro. A regulação avisa que há dezenas de vítimas. Você está de plantão no pronto-socorro de um hospital com cirurgia e é designado para organizar a porta de entrada.',
      vitals: { 'Vítimas estimadas': '40+', 'Salas vermelhas': '3', 'Cirurgiões': '2' },
      steps: [
        {
          prompt: 'O hospital recebe o alerta. Qual a primeira medida de organização?',
          options: [
            { t: 'Cada médico atende quem chegar primeiro, sem coordenação', fb: 'O caos do desastre vem da falta de coordenação; é preciso cadeia de comando única.', s: 'c17-c' },
            { t: 'Ativar o plano de desastre com comando de incidentes: comandante, oficial de triagem na porta e áreas por cor', ok: true, fb: 'Cadeia de comando única, papéis definidos, áreas separadas por cor, liberação de leitos e convocação de equipes.', s: 'c17-c' },
            { t: 'Esperar as vítimas chegarem para decidir', fb: 'A preparação vem antes; com o alerta, a resposta organizada começa já.', s: 'c17-d' },
            { t: 'Manter as cirurgias eletivas do dia', fb: 'No desastre suspendem-se cirurgias eletivas e liberam-se leitos.', s: 'c17-c' }
          ]
        },
        {
          prompt: 'Nos primeiros 20 minutos chegam 15 pessoas andando, com cortes leves, pedindo atendimento na sala vermelha.',
          vitals: { 'Chegadas': '15 leves' },
          options: [
            { t: 'Atender todos na sala vermelha, já que chegaram primeiro', fb: 'Os leves chegam primeiro e lotam o hospital; os graves ainda estão a caminho.', s: 'c17-e' },
            { t: 'Mandá-los embora para outro hospital', fb: 'Eles precisam de atendimento, só que na área adequada.', s: 'c17-e' },
            { t: 'Direcioná-los para a área verde, reservando a sala vermelha para os graves a caminho', ok: true, fb: 'Os feridos leves chegam primeiro, por conta própria. Oficial de triagem na porta e áreas por cor protegem a sala vermelha.', s: 'c17-e' },
            { t: 'Classificá-los como vermelhos para agilizar', fb: 'Quem anda é verde no START.', s: 'c17-b' }
          ]
        },
        {
          prompt: 'Chega um homem que não anda, FR 26, enchimento capilar de 1 segundo, obedece comandos. Classificação START?',
          options: [
            { t: 'Vermelho', fb: 'Para vermelho seria preciso FR acima de 30, enchimento acima de 2 s (ou sem pulso radial) ou não obedecer comandos.', s: 'c17-prova' },
            { t: 'Amarelo', ok: true, fb: 'Não anda, mas passou em respiração (FR ≤ 30), perfusão (enchimento ≤ 2 s) e comando: amarelo.', s: 'c17-b' },
            { t: 'Verde', fb: 'Verde é quem anda.', s: 'c17-b' },
            { t: 'Preto', fb: 'Preto é quem não respira mesmo com a via aérea aberta.', s: 'c17-b' }
          ]
        },
        {
          prompt: 'Uma mulher chega sem respirar. Você abre a via aérea e ela volta a respirar. Classificação?',
          options: [
            { t: 'Preto, porque estava sem respirar', fb: 'Se volta a respirar após abrir a via aérea, ela é vermelha.', s: 'c17-b' },
            { t: 'Iniciar RCP antes de classificar', fb: 'Na triagem em massa não se para para fazer RCP.', s: 'c17-b' },
            { t: 'Amarelo, aguardando reavaliação', fb: 'Quem volta a respirar com a abertura da via aérea é vermelho.', s: 'c17-prova' },
            { t: 'Vermelho (imediato)', ok: true, fb: 'Voltou a respirar após a abertura da via aérea: vermelho, prioridade imediata.', s: 'c17-b' }
          ]
        },
        {
          prompt: 'Várias vítimas têm sangramento em jato nas pernas por fragmentos. O que priorizar na triagem?',
          options: [
            { t: 'Torniquete e controle rápido do sangramento, intervenções de segundos que salvam vidas', ok: true, fb: 'Em explosões predominam hemorragias de extremidades; controle de hemorragia é uma das intervenções permitidas na triagem.', s: 'c17-d' },
            { t: 'Levar cada um à TC antes de qualquer conduta', fb: 'Na triagem só cabem intervenções de segundos que salvam vida.', s: 'c17-b' },
            { t: 'Esperar o cirurgião para pinçar os vasos', fb: 'O torniquete controla em segundos; esperar custa vidas.', s: 'c17-d' },
            { t: 'Classificar todos como pretos', fb: 'Sangramento de extremidade é tratável: são pacientes salváveis.', s: 'c17-b' }
          ]
        },
        {
          prompt: 'Uma hora depois, um paciente amarelo na área de espera está com FR 34 e pálido.',
          vitals: { FR: '34' },
          options: [
            { t: 'Manter amarelo: a classificação inicial vale até o fim', fb: 'A triagem é dinâmica: amarelos podem piorar e virar vermelhos.', s: 'c17-e' },
            { t: 'Retriar: agora é vermelho e vai para a sala vermelha', ok: true, fb: 'A retriagem deve ser repetida a intervalos regulares. FR acima de 30 é critério de vermelho.', s: 'c17-e' },
            { t: 'Classificar como preto', fb: 'Ele respira; não é preto.', s: 'c17-b' },
            { t: 'Dar alta para liberar o leito', fb: 'Ele piorou e precisa de prioridade imediata.', s: 'c17-e' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Faça o relatório da porta de entrada para o comandante do incidente. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Situação: explosão com dezenas de vítimas, plano de desastre e comando de incidentes ativados', s: 'c17-c' },
        { t: 'Organização: oficial de triagem na porta, áreas separadas por cor, cirurgias eletivas suspensas, equipes convocadas', s: 'c17-c' },
        { t: 'Triagem pelo START (ou SALT), com número de vítimas por cor', s: 'c17-b' },
        { t: 'Onda de feridos leves chegou primeiro e foi para a área verde; sala vermelha reservada', s: 'c17-e' },
        { t: 'Predomínio de hemorragia de extremidades: torniquetes aplicados', s: 'c17-d' },
        { t: 'Retriagem feita a intervalos regulares (amarelos que pioraram viraram vermelhos)', s: 'c17-e' },
        { t: 'Necessidades: recursos que faltam, transferências e comunicação com a regulação', s: 'c17-c' }
      ]
    }
  }
});
