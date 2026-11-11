/* Fase 1 guiada (prontuário completo → com suas palavras → caso → passagem de plantão) — Capítulo 12 */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  12: {
    checks: {
      'c12-a': {
        keys: [
          'Envelhecer reduz a resposta ao estresse: o idoso pode parecer estável e estar muito pior, e lesão "pequena" pode ter grande consequência',
          'Reserva fisiológica reduzida: coração, pulmão e rim compensam pouco; o idoso tolera mal choque, hipóxia e cirurgia',
          'Betabloqueador e menor resposta cronotrópica mascaram a taquicardia',
          'No hipertenso crônico, uma PA "normal" pode ser hipotensão relativa (ex.: PAS de 110 pode ser choque)',
          'Atrofia cerebral estira as veias em ponte, que rompem com trauma mínimo e causam hematoma subdural de crescimento lento',
          'Osteoporose: fraturas com baixa energia, como queda da própria altura',
          'Comorbidades e polifarmácia (anticoagulantes, antiagregantes, anti-hipertensivos) mudam a apresentação e o risco',
          'Lactato e déficit de bases ajudam a detectar hipoperfusão escondida'
        ]
      },
      'c12-b': {
        keys: [
          'Fragilidade é a redução da reserva para enfrentar estresse: perda de massa muscular, mobilidade e independência',
          'Dois pacientes de 80 anos podem ter riscos totalmente diferentes',
          'A fragilidade prediz complicações e mortalidade melhor que a idade cronológica isolada',
          'O índice de fragilidade estratifica o risco, planeja monitorização e indica UTI',
          'Ajuda a guiar conversas honestas e precoces sobre objetivos de cuidado com paciente e família',
          'Novo no ATLS 11: capítulo renomeado para "Trauma no Adulto Mais Velho", com índice de fragilidade'
        ]
      },
      'c12-c': {
        keys: [
          'Anticoagulantes e antiplaquetários transformam lesões pequenas em sangramentos graves, sobretudo intracranianos',
          'O sangramento pode surgir ou crescer horas depois (piora tardia): perguntar sobre medicamentos é obrigatório',
          'Varfarina: complexo protrombínico (age rápido) + vitamina K (efeito sustentado)',
          'Dabigatrana: idarucizumabe, anticorpo específico',
          'Inibidores do fator Xa (apixabana, rivaroxabana): andexanet alfa ou complexo protrombínico',
          'Limiar baixo para TC de crânio no idoso anticoagulado, mesmo com trauma leve e GCS 15',
          'Com sangramento, reverter e observar, porque pode crescer sem sinais iniciais'
        ]
      },
      'c12-d': {
        keys: [
          'Queda é o mecanismo mais comum, muitas vezes da própria altura',
          'Investigar a causa da queda: síncope, arritmia, AVC',
          'Fratura de costelas: a dor impede respirar fundo e tossir, levando a atelectasia, pneumonia e insuficiência respiratória',
          'Cada costela fraturada a mais aumenta a mortalidade',
          'Analgesia agressiva nas fraturas de costela, incluindo bloqueios regionais',
          'Fratura de quadril e de odontoide (C2) após queda, mesmo simples',
          'Lactato e déficit de bases detectam hipoperfusão oculta quando FC e PA enganam'
        ]
      },
      'c12-e': {
        keys: [
          'Cuidar do idoso inclui protegê-lo de quem o machuca e do preconceito da própria equipe',
          'Tipos de maus-tratos: físico, negligência, psicológico, financeiro e sexual',
          'Sinais: lesões inexplicadas ou em estágios diferentes, desnutrição, úlceras de pressão e atraso na procura',
          'Sinal de alerta: cuidador que responde pelo paciente e não o deixa falar',
          'Diante da suspeita: conversar com o paciente a sós, documentar e notificar conforme a legislação',
          'Etarismo: não limitar o tratamento pela idade cronológica',
          'Decidir com base em fisiologia, fragilidade e desejos do paciente',
          'Novo no ATLS 11: discussão ampliada de maus-tratos ao idoso e etarismo'
        ]
      },
      'c12-prova': {
        keys: [
          'Sinais vitais enganosos: betabloqueador impede a taquicardia; PA normal no hipertenso crônico pode ser hipotensão relativa; usar lactato e déficit de bases',
          'Queda da própria altura é o mecanismo mais comum e pode causar TCE, fratura de quadril e de coluna cervical',
          'Anticoagulado: limiar baixo para TC de crânio mesmo com GCS 15',
          'Reversão: varfarina com complexo protrombínico + vitamina K; dabigatrana com idarucizumabe; anti-Xa com agente específico ou complexo protrombínico',
          'Hematoma subdural é mais frequente pela atrofia cerebral, com trauma mínimo e sintomas tardios',
          'Fratura de costela: morbimortalidade cresce a cada costela; analgesia agressiva (bloqueios) e fisioterapia contra pneumonia',
          'Coluna cervical: espondilose e hiperextensão causam síndrome medular central; fraturas de C2 são comuns',
          'Índice de fragilidade orienta prognóstico e planejamento; considerar diretivas antecipadas',
          'Maus-tratos ao idoso: lesões em estágios diferentes, desnutrição, atraso na procura; notificar',
          'Idoso com FC 78 e PAS 112 após trauma, em betabloqueador e anti-hipertensivo, pode estar em choque'
        ]
      }
    },

    case: {
      title: 'Idosa que caiu no banheiro',
      intro: 'Mulher, 82 anos, hipertensa, em uso de atenolol e apixabana (fibrilação atrial). Caiu da própria altura no banheiro, bateu a cabeça e o lado direito do tórax. Lúcida, queixa-se de dor ao respirar. Mora com um sobrinho, que responde a todas as perguntas por ela.',
      vitals: { PA: '112×70', FC: '76', FR: '22', SatO2: '94%', Glasgow: '15' },
      steps: [
        {
          prompt: 'O plantonista diz: "Sinais vitais normais, GCS 15, foi só uma queda". Como você interpreta?',
          options: [
            { t: 'Concordo: queda da própria altura é trauma leve', fb: 'No idoso, queda da própria altura pode causar lesões graves, e os números podem enganar.', s: 'c12-d' },
            { t: 'Os vitais podem enganar: o betabloqueador impede a taquicardia e PAS 112 pode ser hipotensão relativa numa hipertensa; dosar lactato e déficit de bases', ok: true, fb: 'Reserva baixa, atenolol e hipertensão crônica mascaram o choque. Lactato e déficit de bases revelam hipoperfusão oculta.', s: 'c12-a' },
            { t: 'FC 76 garante que não há sangramento', fb: 'O betabloqueador e a menor resposta cronotrópica escondem a taquicardia.', s: 'c12-a' },
            { t: 'Avaliar só a idade: aos 82 anos não se investiga a fundo', fb: 'Limitar a investigação pela idade é etarismo. As decisões se baseiam em fisiologia, fragilidade e desejos da paciente.', s: 'c12-e' }
          ]
        },
        {
          prompt: 'Ela está lúcida, sem déficit, mas bateu a cabeça e usa apixabana. Precisa de TC de crânio?',
          options: [
            { t: 'Não: GCS 15 dispensa imagem', fb: 'No idoso anticoagulado o limiar para TC é baixo, mesmo com trauma leve e GCS 15.', s: 'c12-c' },
            { t: 'Só se surgir cefaleia nas próximas 24 horas', fb: 'O sangramento pode crescer sem sinais iniciais; esperar sintomas atrasa o diagnóstico.', s: 'c12-c' },
            { t: 'Sim: idosa anticoagulada com trauma craniano tem limiar baixo para TC, mesmo com GCS 15', ok: true, fb: 'Anticoagulante transforma lesões pequenas em sangramentos intracranianos graves, que podem surgir horas depois.', s: 'c12-c' },
            { t: 'Apenas RX de crânio', fb: 'O RX não mostra sangramento intracraniano.', s: 'c12-c' }
          ]
        },
        {
          prompt: 'A TC mostra pequeno hematoma subdural agudo, sem desvio. Como reverter a apixabana?',
          options: [
            { t: 'Vitamina K isolada', fb: 'Vitamina K reverte varfarina, não inibidores do fator Xa.', s: 'c12-c' },
            { t: 'Idarucizumabe', fb: 'Idarucizumabe é o antídoto específico da dabigatrana.', s: 'c12-c' },
            { t: 'Andexanet alfa ou complexo protrombínico, e observar pela chance de crescimento', ok: true, fb: 'Inibidor do fator Xa reverte-se com andexanet alfa ou complexo protrombínico. Depois, observação, porque o subdural pode crescer sem sinais.', s: 'c12-c' },
            { t: 'Não reverter: hematoma pequeno não cresce', fb: 'No anticoagulado o sangramento pode aumentar horas depois.', s: 'c12-c' }
          ]
        },
        {
          prompt: 'O RX mostra fratura de 4 costelas à direita. Ela respira superficialmente e evita tossir por dor.',
          vitals: { FR: '26', SatO2: '92%' },
          options: [
            { t: 'Analgesia agressiva, incluindo bloqueio regional, e fisioterapia respiratória', ok: true, fb: 'Cada costela fraturada aumenta a mortalidade: a dor impede respirar fundo e tossir, levando a atelectasia e pneumonia. Analgesia agressiva previne isso.', s: 'c12-d' },
            { t: 'Analgesia leve, para não deprimir a respiração, e alta', fb: 'Dor mal controlada é justamente o que leva à pneumonia e à insuficiência respiratória.', s: 'c12-d' },
            { t: 'Faixa compressiva apertada no tórax', fb: 'Restringir o tórax piora a ventilação e favorece atelectasia.', s: 'c12-d' },
            { t: 'Nenhuma medida: fratura de costela não é grave', fb: 'No idoso, fratura de costela tem morbimortalidade alta, que cresce a cada costela.', s: 'c12-prova' }
          ]
        },
        {
          prompt: 'Ao examinar, você nota úlcera de pressão sacral, desnutrição e hematomas antigos e recentes nos braços. O sobrinho insiste em responder por ela.',
          options: [
            { t: 'Ignorar: é comum em idosos acamados', fb: 'Lesões em estágios diferentes, desnutrição, úlceras e cuidador controlador são sinais de maus-tratos.', s: 'c12-e' },
            { t: 'Perguntar ao sobrinho na frente dela se há maus-tratos', fb: 'A conversa deve ser com a paciente, a sós.', s: 'c12-e' },
            { t: 'Dar alta com o sobrinho e marcar retorno', fb: 'Devolver a paciente a um possível ambiente de risco sem avaliação é inadequado.', s: 'c12-e' },
            { t: 'Conversar com a paciente a sós, documentar os achados e notificar conforme a legislação', ok: true, fb: 'Suspeita de maus-tratos ao idoso: falar com a paciente sem o cuidador, documentar e notificar.', s: 'c12-e' }
          ]
        },
        {
          prompt: 'A família pergunta se "vale a pena" internar em UTI aos 82 anos. Como orientar a decisão?',
          options: [
            { t: 'Não internar: a idade por si só define que não vale a pena', fb: 'Isso é etarismo: a idade cronológica sozinha não deve limitar o tratamento.', s: 'c12-e' },
            { t: 'Usar o índice de fragilidade e os desejos da paciente para estratificar o risco e decidir monitorização e UTI, com conversa honesta e precoce', ok: true, fb: 'A fragilidade prediz complicações melhor que a idade e orienta UTI e objetivos de cuidado, junto com os desejos da paciente.', s: 'c12-b' },
            { t: 'Internar todo idoso em UTI, sem discussão', fb: 'A decisão deve ser individualizada pela fragilidade e pelos objetivos de cuidado.', s: 'c12-b' },
            { t: 'Deixar a decisão só para o sobrinho', fb: 'A paciente está lúcida: os desejos dela orientam a decisão, e há suspeita sobre o cuidador.', s: 'c12-e' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Passe o caso para a equipe da UTI no formato S-xABCDE-BAR. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Situação: 82 anos, queda da própria altura, em apixabana e atenolol, hipertensa', s: 'c12-a' },
        { t: 'C: vitais enganosos (betabloqueador, hipertensão crônica); lactato e déficit de bases para hipoperfusão oculta', s: 'c12-a' },
        { t: 'D: GCS 15 com hematoma subdural agudo pequeno na TC', s: 'c12-c' },
        { t: 'Reversão da apixabana com andexanet alfa ou complexo protrombínico e observação de crescimento', s: 'c12-c' },
        { t: 'B: 4 costelas fraturadas à direita, com analgesia agressiva (bloqueio) e fisioterapia', s: 'c12-d' },
        { t: 'Investigar a causa da queda (síncope, arritmia na fibrilação atrial, AVC)', s: 'c12-d' },
        { t: 'Suspeita de maus-tratos: achados documentados e notificação feita', s: 'c12-e' },
        { t: 'Recomendação: decisões guiadas pelo índice de fragilidade e pelos desejos da paciente', s: 'c12-b' }
      ]
    }
  }
});
