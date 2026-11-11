/* Fase 1 guiada — Capítulo 20: Comunicação de notícias graves no trauma agudo */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  20: {
    checks: {
      'c20-a': { keys: [
        'No trauma, a notícia grave chega de surpresa: a família não teve tempo de se preparar, porque horas antes a pessoa estava bem',
        'A forma como a notícia é dada fica marcada para sempre e influencia o luto e a confiança na equipe',
        'A comunicação influencia decisões que vêm logo depois, como ver o corpo e a doação de órgãos',
        'Comunicação ruim aumenta sofrimento, conflitos e queixas; comunicação boa, mesmo com a pior notícia, é lembrada como cuidado',
        'Comunicar bem segue uma estrutura treinável, como o xABCDE',
        'Ter um roteiro ajuda o médico a não travar e a não fugir para jargão ou eufemismo',
        'Novo no ATLS 11: capítulo próprio sobre comunicar notícias graves no contexto agudo do trauma, com vídeo'
      ] },
      'c20-b': { keys: [
        'Boa parte do sucesso acontece antes de entrar na sala: o ATLS 11 pede preparação das pessoas e do local',
        'Decidir quem vai falar, de preferência quem cuidou do paciente e sabe responder às perguntas',
        'Decidir quem acompanha: enfermagem, serviço social, capelania',
        'Confirmar as informações, a começar pelo nome do paciente: dar a notícia à família errada é um erro devastador',
        'Local: sala reservada, cadeiras para todos, lenços e celular no silencioso; a privacidade permite reagir sem plateia',
        'Ao entrar: sentar-se (transmite que há tempo), apresentar-se e confirmar com quem está falando e a relação com o paciente',
        'Nunca dar notícia grave no corredor, em pé, por telefone quando é possível pessoalmente, ou sem confirmar a identidade do paciente e da família'
      ] },
      'c20-c': { keys: [
        'O núcleo da conversa tem duas etapas, nesta ordem: aviso e manchete',
        'Aviso (tiro de aviso): frase curta que prepara para o impacto, como "Tenho uma notícia séria para compartilhar com vocês"',
        'O aviso dá alguns segundos para a pessoa se preparar e reduz o choque',
        'Manchete: os fatos em linguagem simples mais o significado, como "Apesar de todos os esforços, o coração dele parou e ele morreu"',
        'A família precisa entender o que aconteceu já na primeira frase, sem ter que interpretar',
        'Usar palavras claras: "morreu", "faleceu"',
        'Eufemismos ("partiu", "não resistiu", "perdemos") e jargão ("PCR refratária", "assistolia") deixam dúvida e falsa esperança',
        'Exemplo: "fizemos tudo o que podíamos" não informa o óbito; a mãe perguntou se o filho estava na UTI'
      ] },
      'c20-d': { keys: [
        'O ATLS 11 propõe um ABCDE para comunicar, fácil de lembrar porque lembra a avaliação primária',
        'A — Ask: perguntar o que a família já sabe, para partir do entendimento dela, corrigir equívocos e medir o preparo',
        'B — Begin: começar com o aviso ("tenho uma notícia séria")',
        'C — Concise: resumo conciso dos fatos (a manchete), sem detalhes técnicos desnecessários; detalhes vêm se a família pedir',
        'D — Do allow silence: permitir o silêncio e as emoções; choro, silêncio ou raiva são normais, e preencher o silêncio atrapalha o processamento',
        'E — Elicit questions / End: estimular perguntas e encerrar com o próximo passo, para a família não sair sem rumo',
        'Pegadinha: não confundir com o ABCDE da avaliação primária; aqui o D é permitir o silêncio e o A é perguntar o que sabem, não avisar'
      ] },
      'c20-e': { keys: [
        'A conversa não termina na manchete: a família precisa saber o que acontece agora',
        'Explicar os próximos passos: possibilidade de ver o corpo',
        'Doação de órgãos, se aplicável, conforme o protocolo local',
        'Serviço funerário e polícia/IML quando houver morte violenta',
        'Oferecer apoio: serviço social, apoio religioso e um contato para dúvidas posteriores',
        'Fazer debriefing com a equipe: comunicar óbitos é desgastante e falar sobre isso reduz o estresse traumático secundário'
      ] },
      'c20-prova': { keys: [
        'Cai como questão de sequência correta ou de atitude',
        'O protocolo mais conhecido nas provas é o SPIKES; o ATLS 11 usa lógica equivalente (preparar, avisar, manchete, silêncio, responder)',
        'SPIKES: Setting (local reservado, sentado), Perception (o que a família sabe), Invitation (quanto quer saber), Knowledge (informação clara), Emotions (acolher), Strategy/Summary (plano e próximos passos)',
        'Começar perguntando o que a família sabe, para ajustar a notícia ao ponto de partida',
        'Dar um aviso antes e depois a manchete em linguagem simples, usando "morreu" ou "faleceu"',
        'Permitir o silêncio e o choro, sem encher o momento de detalhes técnicos',
        'Não comunicar no corredor, por telefone sem necessidade, nem em pé com pressa',
        'Não mentir nem dar falsa esperança, e também não ser brutal: honestidade com empatia',
        'A presença da família na reanimação pode ser oferecida, com um profissional acompanhando',
        'Pegadinha: explicar a fisiopatologia antes de dizer que o paciente morreu; a manchete vem cedo e detalhes só se a família pedir'
      ] }
    },

    case: {
      title: 'Jovem que não sobreviveu ao trauma',
      intro: 'Rapaz de 19 anos, vítima de colisão de moto, chegou em parada cardiorrespiratória e morreu após 30 minutos de reanimação. A mãe e a irmã acabaram de chegar e esperam no corredor lotado do pronto-socorro.',
      vitals: { Hora: '02h40', Local: 'corredor', Família: 'mãe e irmã' },
      steps: [
        {
          prompt: 'A mãe aborda você no corredor: "Doutor, como está meu filho?". O que fazer primeiro?',
          options: [
            { t: 'Responder ali mesmo, para não deixá-la esperando', fb: 'Notícia grave nunca é dada no corredor, em pé e sem privacidade.', s: 'c20-b' },
            { t: 'Confirmar o nome do paciente e quem ela é, e levá-la com a irmã a uma sala reservada, com alguém da equipe junto', ok: true, fb: 'Preparar as pessoas e o local vem antes: confirmar a identidade evita o erro devastador de falar com a família errada.', s: 'c20-b' },
            { t: 'Pedir que a enfermagem dê a notícia enquanto você atende outro paciente', fb: 'Quem fala deve ser, de preferência, quem cuidou do paciente e sabe responder às perguntas.', s: 'c20-b' },
            { t: 'Dizer que ele está sendo atendido e que logo terão notícias', fb: 'Isso é mentira e falsa esperança; o paciente já morreu.', s: 'c20-prova' }
          ]
        },
        {
          prompt: 'Na sala, todos sentados. Como começar a conversa?',
          options: [
            { t: '"Infelizmente, ele morreu."', fb: 'A manchete clara está certa, mas antes vem o A: perguntar o que a família já sabe, e depois o aviso.', s: 'c20-d' },
            { t: 'Explicar em detalhes a mecânica do acidente e as lesões', fb: 'Detalhes técnicos não abrem a conversa; só vêm se a família pedir.', s: 'c20-prova' },
            { t: 'Apresentar-se e perguntar o que elas já sabem sobre o que aconteceu', ok: true, fb: 'A — Ask: partir do entendimento da família, corrigir equívocos e medir o quanto está preparada.', s: 'c20-d' },
            { t: 'Perguntar se ele usava capacete', fb: 'Abrir com uma pergunta de culpa piora o sofrimento e não prepara para a notícia.', s: 'c20-c' }
          ]
        },
        {
          prompt: 'A mãe diz que só sabe que ele caiu de moto. Qual a próxima frase?',
          options: [
            { t: '"Tenho uma notícia séria para compartilhar com vocês."', ok: true, fb: 'B — Begin: o aviso dá alguns segundos para a família se preparar e reduz o choque.', s: 'c20-c' },
            { t: '"Fizemos tudo o que podíamos."', fb: 'Essa frase não informa o óbito: a família pode entender que ele está internado.', s: 'c20-c' },
            { t: '"Ele teve uma PCR refratária com assistolia."', fb: 'Jargão deixa margem para dúvida e não diz o que aconteceu.', s: 'c20-c' },
            { t: '"Não se preocupe, vou explicar tudo com calma."', fb: 'Isso cria falsa expectativa justamente antes da pior notícia.', s: 'c20-prova' }
          ]
        },
        {
          prompt: 'Depois do aviso, qual é a manchete adequada?',
          options: [
            { t: '"Infelizmente ele não resistiu."', fb: '"Não resistiu" é eufemismo: deixa dúvida e pode gerar falsa esperança.', s: 'c20-c' },
            { t: '"Ele chegou muito grave, o coração parou, fizemos a reanimação, mas ele morreu."', ok: true, fb: 'Fatos em linguagem simples mais o significado, com a palavra "morreu": a família entende já na primeira frase.', s: 'c20-c' },
            { t: '"Ele partiu."', fb: 'Eufemismo: a família pode sair da sala sem ter entendido.', s: 'c20-c' },
            { t: '"Perdemos o paciente."', fb: '"Perdemos" é eufemismo; use "morreu" ou "faleceu".', s: 'c20-c' }
          ]
        },
        {
          prompt: 'A mãe começa a chorar alto e a irmã fica em silêncio, olhando para o chão. O que fazer?',
          options: [
            { t: 'Explicar as lesões para que entendam por que não houve chance', fb: 'Encher o silêncio de explicação atrapalha o processamento; detalhes só se pedirem.', s: 'c20-d' },
            { t: 'Ficar presente, em silêncio, oferecer lenço e aguardar o tempo delas', ok: true, fb: 'D — Do allow silence: choro e silêncio são reações normais e precisam de espaço.', s: 'c20-d' },
            { t: 'Pedir licença e sair, porque há outros pacientes', fb: 'Sair logo após a notícia deixa a família sem rumo; a conversa termina com perguntas e próximos passos.', s: 'c20-e' },
            { t: 'Pedir que se acalmem para continuar', fb: 'Choro e raiva são normais; pedir calma invalida a reação.', s: 'c20-d' }
          ]
        },
        {
          prompt: 'Após alguns minutos, a mãe pergunta: "E agora, o que eu faço?". Como encerrar?',
          options: [
            { t: '"O hospital vai entrar em contato." e encerrar', fb: 'A família não pode sair sem rumo: explique os próximos passos e ofereça apoio.', s: 'c20-e' },
            { t: 'Responder às perguntas e explicar os próximos passos: ver o corpo se quiser, IML por ser morte violenta, apoio social e religioso e um contato para dúvidas', ok: true, fb: 'E — Elicit questions / End: perguntas respondidas e próximos passos claros, incluindo IML na morte violenta.', s: 'c20-e' },
            { t: 'Desaconselhar que vejam o corpo, para poupá-las', fb: 'Ver o corpo é uma possibilidade a ser oferecida, não retirada.', s: 'c20-e' },
            { t: 'Pedir que liguem para o serviço social no dia seguinte', fb: 'O apoio deve ser oferecido ali, junto com os próximos passos.', s: 'c20-e' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Faça o debriefing da comunicação com a equipe, como um resumo estruturado do que foi feito e do que pode melhorar. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Preparação: identidade do paciente e da família confirmada, sala reservada, todos sentados, profissional de apoio presente', s: 'c20-b' },
        { t: 'A — perguntou o que a família já sabia antes de informar', s: 'c20-d' },
        { t: 'B — deu o aviso ("tenho uma notícia séria")', s: 'c20-c' },
        { t: 'C — manchete concisa com a palavra "morreu", sem jargão nem eufemismo', s: 'c20-c' },
        { t: 'D — permitiu o silêncio e o choro, sem encher de detalhes técnicos', s: 'c20-d' },
        { t: 'E — respondeu perguntas e explicou próximos passos: ver o corpo, IML na morte violenta, serviço funerário', s: 'c20-e' },
        { t: 'Apoio oferecido: serviço social, religioso e contato para dúvidas', s: 'c20-e' },
        { t: 'Debriefing da equipe para reduzir o estresse traumático secundário', s: 'c20-e' }
      ]
    }
  }
});
