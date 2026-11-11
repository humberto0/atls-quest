/* Fase 1 guiada — Capítulo 2: Função da equipe de reanimação e comunicação */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  2: {
    "checks": {
      "c02-a": {
        "keys": [
          "Trauma grave é atendido por equipe, e equipes falham mais por comunicação e coordenação do que por falta de técnica",
          "O ATLS organiza o trabalho em cinco pilares: liderança e seguimento, consciência situacional, comunicação verbal, tomada de decisão e gestão de tarefas",
          "Liderança e seguimento (followership): o líder define prioridades e distribui tarefas; os membros executam e alertam quando veem algo errado; seguir bem é tão importante quanto liderar",
          "Consciência situacional: saber o que acontece agora e prever o próximo problema (ex.: \"se a PA cair de novo, vamos para o centro cirúrgico\")",
          "Comunicação verbal clara, dirigida e confirmada",
          "Tomada de decisão: o líder decide com a informação disponível e revê a decisão se o quadro muda",
          "Gestão de tarefas: cada um sabe o que faz; nada fica sem dono e nada é feito em dobro",
          "O líder ideal fica com as mãos livres: quem está intubando ou puncionando perde a visão do todo"
        ]
      },
      "c02-b": {
        "keys": [
          "O cuidado da equipe não começa quando a porta abre nem termina quando o paciente sai: o ATLS 11 descreve seis fases",
          "Planejamento prévio (preplanning): protocolos, papéis fixos, treinamento e simulação preparam o sistema",
          "Huddle pré-chegada: reunião rápida antes da ambulância para definir o líder, quem faz via aérea, acesso e registro, o plano provável e deixar equipamentos e sangue prontos",
          "Passagem na chegada: receber o relato do pré-hospitalar sem perder informação",
          "Avaliação inicial: exame primário com ressuscitação, adjuntos e decisões",
          "Passagem na saída: para centro cirúrgico, UTI ou outro hospital, de forma estruturada",
          "Debriefing: aprender com o caso e cuidar da equipe",
          "Novo no ATLS 11: o funcionamento da equipe ganhou capítulo próprio, descrito nessas seis fases"
        ]
      },
      "c02-c": {
        "keys": [
          "A chegada é o momento mais caótico e quando a informação do pré-hospitalar mais se perde",
          "\"Time out / all quiet\": todos param e escutam o relato",
          "Durante o relato ninguém mexe no paciente, exceto para tratar uma ameaça imediata (ex.: sangramento arterial)",
          "O socorrista viu a cena, o mecanismo e a evolução; isso orienta todo o atendimento e o relato leva menos de um minuto",
          "IMIST: Identificação, Mecanismo, Injúrias, Sinais vitais e Tratamento",
          "AMBO, depois do IMIST: Alergias, Medicações, Background (história prévia) e Outros",
          "Depois do relato, transferência coordenada para a maca, com restrição do movimento da coluna quando indicada",
          "Novo no ATLS 11: \"time out / all quiet\" e uma figura com o IMIST-AMBO"
        ]
      },
      "c02-d": {
        "keys": [
          "Uma ordem que ninguém confirmou talvez não tenha sido cumprida",
          "Citar nomes: \"Ana, …\" em vez de \"alguém pega…\"; ordem sem destinatário ninguém executa",
          "Clareza: instrução específica, com dose, via e alvo (ex.: \"Ana, 1 g de ácido tranexâmico IV em 10 minutos\")",
          "Comunicação em alça fechada: quem recebe repete a ordem e avisa quando terminou, e o líder sabe exatamente o que já foi feito",
          "Alça fechada não é só repetir: precisa do retorno \"feito\"",
          "CUS permite que qualquer membro, inclusive o mais júnior, levante um alerta com intensidade crescente",
          "CUS: Concerned (\"estou preocupado\"), Uncomfortable (\"estou desconfortável\"), Safety issue (\"é uma questão de segurança, precisamos parar\")",
          "Hierarquia rígida faz as pessoas ficarem caladas diante de erros evidentes; o CUS existe para quebrar isso"
        ]
      },
      "c02-e": {
        "keys": [
          "Debriefing: conversa curta logo após o caso, sem busca de culpados",
          "Aprender: o que funcionou, o que atrasou e o que mudar no próximo caso (material, protocolo, comunicação)",
          "Cuidar das pessoas: casos graves, mortes e pacientes jovens afetam a equipe, e o debriefing abre espaço para pedir apoio",
          "Melhorar o sistema: problemas recorrentes viram ações de qualidade",
          "O ATLS 11 usa a ferramenta TAKE STOCK para estruturar o debriefing sem deixar pontos de fora",
          "Novo no ATLS 11: debriefing estruturado com TAKE STOCK como fase formal do cuidado da equipe"
        ]
      },
      "c02-prova": {
        "keys": [
          "Função da equipe cai menos que tórax e choque, mas aparece em questões de liderança, comunicação e passagem de caso",
          "Líder: coordena, distribui tarefas e mantém a visão global; idealmente não executa procedimentos",
          "Alça fechada: ordem com nome → confirmação (\"TXA 1 g, vou fazer\") → aviso de conclusão; ordem \"para a sala\" sem destinatário é erro típico",
          "Ao receber o aviso do pré-hospitalar, a resposta quase sempre é preparar equipe e material no huddle pré-chegada",
          "Passagem do pré-hospitalar: \"time out / all quiet\", todos escutam a passagem estruturada (MIST) antes de mexer no paciente, salvo ameaça imediata",
          "CUS: qualquer membro pode escalar uma preocupação de segurança, independentemente da hierarquia",
          "Debriefing serve para aprendizado e segurança, não para achar culpados",
          "Pegadinha: o líder que intuba \"porque é o mais experiente\" e larga a coordenação; a melhor resposta mantém o líder coordenando e delega o procedimento"
        ]
      }
    },
    "case": {
      "title": "Plantão com duas vítimas a caminho",
      "intro": "Você é o líder da equipe de trauma. O rádio avisa: capotamento, duas vítimas graves, uma com sangramento na coxa e outra rebaixada. Chegada em 8 minutos. Sua equipe tem uma médica residente, dois enfermeiros e um técnico.",
      "vitals": {
        "Chegada": "8 min",
        "Vítimas": "2",
        "Equipe": "5"
      },
      "steps": [
        {
          "prompt": "Faltam 8 minutos para a chegada. Qual é a melhor ação?",
          "options": [
            {
              "t": "Esperar as vítimas chegarem para dividir as tarefas",
              "fb": "Dividir tarefas na hora da chegada gera caos. O huddle pré-chegada existe para isso.",
              "s": "c02-b"
            },
            {
              "t": "Ir ao estacionamento esperar a ambulância",
              "fb": "O líder precisa organizar a sala e a equipe, não sair dela.",
              "s": "c02-a"
            },
            {
              "t": "Ligar para o centro cirúrgico e pedir sala sem ver os pacientes",
              "fb": "Pode até ser útil, mas não substitui a preparação da equipe que vai receber.",
              "s": "c02-b"
            },
            {
              "t": "Fazer o huddle pré-chegada: definir papéis (via aérea, acesso, registro), plano provável, equipamentos e sangue prontos",
              "ok": true,
              "fb": "O huddle pré-chegada prepara a equipe e o material antes de a porta abrir.",
              "s": "c02-b"
            }
          ]
        },
        {
          "prompt": "A primeira vítima entra. Todos querem agir ao mesmo tempo, e o socorrista tenta passar o caso. O que você faz?",
          "options": [
            {
              "t": "Pedir \"time out / all quiet\": todos param e escutam o relato estruturado, salvo quem trata uma ameaça imediata",
              "ok": true,
              "fb": "Menos de um minuto de silêncio preserva a informação crítica da cena. Sangramento arterial pode ser tratado enquanto isso.",
              "s": "c02-c"
            },
            {
              "t": "Deixar cada um examinar enquanto o socorrista fala",
              "fb": "Com todos agindo, a informação do pré-hospitalar se perde.",
              "s": "c02-c"
            },
            {
              "t": "Dispensar o socorrista: a equipe examina e descobre o resto",
              "fb": "O socorrista viu a cena, o mecanismo e a evolução. Isso orienta o atendimento.",
              "s": "c02-c"
            },
            {
              "t": "Pedir que o socorrista escreva tudo e entregue depois",
              "fb": "O relato verbal estruturado na chegada é o momento certo, e é rápido.",
              "s": "c02-c"
            }
          ]
        },
        {
          "prompt": "O paciente precisa de ácido tranexâmico. Como você dá a ordem?",
          "options": [
            {
              "t": "\"Alguém faz TXA!\"",
              "fb": "Ordem sem destinatário ninguém executa.",
              "s": "c02-d"
            },
            {
              "t": "\"Faz o antifibrinolítico aí\"",
              "fb": "Falta destinatário e falta clareza de dose, via e tempo.",
              "s": "c02-d"
            },
            {
              "t": "\"Ana, 1 g de ácido tranexâmico IV em 10 minutos. Me avise quando terminar.\"",
              "ok": true,
              "fb": "Nome, clareza (dose, via e tempo) e alça fechada: ela repete e avisa quando terminar.",
              "s": "c02-d"
            },
            {
              "t": "Escrever no prontuário e esperar alguém ver",
              "fb": "Sem comunicação verbal dirigida, a ordem pode nunca ser cumprida.",
              "s": "c02-d"
            }
          ]
        },
        {
          "prompt": "A intubação está difícil e o residente pede ajuda. Você é o mais experiente da sala.",
          "options": [
            {
              "t": "Assumir a laringoscopia e deixar a sala sem coordenação",
              "fb": "Líder com as mãos ocupadas perde a visão do todo.",
              "s": "c02-a"
            },
            {
              "t": "Manter a coordenação, orientar o residente, chamar outro operador experiente ou trocar a técnica",
              "ok": true,
              "fb": "O líder mantém a consciência situacional e delega o procedimento.",
              "s": "c02-prova"
            },
            {
              "t": "Mandar o residente continuar tentando até conseguir",
              "fb": "Coordenar inclui decidir quando trocar de técnica ou de operador, não insistir no que não está funcionando.",
              "s": "c02-a"
            },
            {
              "t": "Sair para atender a segunda vítima e voltar depois",
              "fb": "Sem líder, a sala perde a coordenação justamente no momento crítico.",
              "s": "c02-a"
            }
          ]
        },
        {
          "prompt": "Um técnico percebe que o torniquete foi colocado sobre o joelho e diz baixinho: \"acho que está errado\". Ninguém escuta. O que deveria acontecer?",
          "options": [
            {
              "t": "Ele deve usar o CUS e escalar: \"estou preocupado… é uma questão de segurança, precisamos parar\"",
              "ok": true,
              "fb": "O CUS permite que qualquer membro, inclusive o mais júnior, escale um alerta até ser ouvido.",
              "s": "c02-d"
            },
            {
              "t": "Ele deve esperar o debriefing para comentar",
              "fb": "Um problema de segurança precisa ser levantado na hora.",
              "s": "c02-d"
            },
            {
              "t": "Ele não deve interferir: não é médico",
              "fb": "Seguir bem inclui alertar quando algo está errado, independentemente da hierarquia.",
              "s": "c02-a"
            },
            {
              "t": "Ele deve corrigir sozinho, sem avisar ninguém",
              "fb": "Corrigir sem comunicar quebra a gestão de tarefas: o líder precisa saber o que mudou.",
              "s": "c02-a"
            }
          ]
        },
        {
          "prompt": "Os dois pacientes foram transferidos. A equipe está abalada e houve atrasos. O que fazer agora?",
          "options": [
            {
              "t": "Liberar todos sem conversa: o plantão continua",
              "fb": "Sem debriefing, a equipe não aprende e ninguém cuida de quem ficou abalado.",
              "s": "c02-e"
            },
            {
              "t": "Reunir a equipe para apontar quem errou",
              "fb": "Debriefing não é busca de culpados.",
              "s": "c02-e"
            },
            {
              "t": "Fazer um debriefing curto, estruturado (TAKE STOCK), sem culpados: o que funcionou, o que atrasou, como a equipe está",
              "ok": true,
              "fb": "Aprender, cuidar das pessoas e melhorar o sistema.",
              "s": "c02-e"
            },
            {
              "t": "Enviar um e-mail com as falhas para a chefia",
              "fb": "Problemas recorrentes viram ações de qualidade, mas o debriefing com a equipe vem primeiro.",
              "s": "c02-e"
            }
          ]
        }
      ]
    },
    "handoff": {
      "prompt": "Conduza o debriefing do plantão de forma estruturada. Escreva com suas palavras os pontos que a conversa deve cobrir, sem olhar o prontuário.",
      "keys": [
        {
          "t": "Conversa curta, logo após o caso, sem busca de culpados",
          "s": "c02-e"
        },
        {
          "t": "O que funcionou: huddle pré-chegada com papéis definidos e \"time out\" na chegada",
          "s": "c02-b"
        },
        {
          "t": "O que atrasou: a intubação difícil e a demora em trocar técnica ou operador",
          "s": "c02-a"
        },
        {
          "t": "Falha de comunicação: o alerta do técnico não foi ouvido; reforçar o CUS",
          "s": "c02-d"
        },
        {
          "t": "Ordens com nome, clareza e alça fechada",
          "s": "c02-d"
        },
        {
          "t": "Como a equipe está: espaço para falar do impacto emocional e pedir apoio",
          "s": "c02-e"
        },
        {
          "t": "Ações para o sistema: problemas recorrentes viram ações de qualidade (material, protocolo, treinamento)",
          "s": "c02-e"
        }
      ]
    }
  }
});
