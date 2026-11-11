/* Fase 1 guiada (prontuário completo → com suas palavras → caso → passagem de plantão) — Capítulo 10 */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  10: {
    checks: {
      'c10-a': {
        keys: [
          'A maioria das fraturas de extremidade não mata, mas algumas lesões musculoesqueléticas ameaçam a vida e entram no exame primário',
          'Hemorragia arterial grave de extremidade: pressão direta, torniquete e curativo hemostático (é o x do xABCDE)',
          'Fratura de pelve instável: o anel aberto aumenta o volume da pelve, que acomoda litros de sangue',
          'Binder pélvico centrado nos trocânteres maiores fecha o anel, reduz o volume e estabiliza os fragmentos sangrantes',
          'Binder na crista ilíaca não fecha a pelve: o centro é o trocânter maior',
          'Esmagamento: o músculo destruído libera potássio e mioglobina quando a compressão é aliviada',
          'Consequências do esmagamento: hipercalemia (arritmias) e lesão renal; hidratação vigorosa com meta de diurese ~100 mL/h no adulto',
          'Fraturas bilaterais de fêmur: cada fêmur pode perder 1–1,5 L, causando grande perda sanguínea'
        ]
      },
      'c10-b': {
        keys: [
          'Depois da vida, a prioridade é salvar o membro: músculo isquêmico tolera poucas horas',
          'Fratura exposta: a comunicação com o meio externo leva bactérias ao osso',
          'O que mais reduz infecção na fratura exposta é o antibiótico precoce',
          'Somam-se profilaxia antitetânica, curativo estéril e alinhamento com imobilização',
          'Lesão vascular: membro frio, pálido, sem pulso ou com hematoma em expansão pede avaliação cirúrgica urgente',
          'Amputação traumática: segmento resfriado sem congelar, em gaze úmida, em saco plástico, sobre gelo sem contato direto',
          'Gelo em contato direto queima o tecido e inviabiliza o reimplante',
          'Luxação com déficit neurovascular: redução precoce, porque a luxação comprime vasos e nervos',
          'Índice de lesão de extremidade: compara a pressão do membro lesado com a do sadio e ajuda a detectar lesão arterial oculta (novo no ATLS 11)'
        ]
      },
      'c10-c': {
        keys: [
          'Gustilo-Anderson estima contaminação e lesão de partes moles da fratura exposta; quanto maior o tipo, maior o risco e mais ampla a cobertura antibiótica',
          'Tipo I: ferida limpa, menor que 1 cm',
          'Tipo II: 1–10 cm, com lesão moderada de partes moles',
          'Tipo III: muito contaminada, grande lesão de partes moles, podendo ter lesão vascular',
          'Todas recebem cefalosporina de 1ª geração, para os germes da pele',
          'No tipo III acrescenta-se cobertura para gram-negativos (terra, ambientes contaminados)',
          'Antibiótico o mais cedo possível',
          'Novo no ATLS 11: Gustilo-Anderson incorporado à orientação de antibiótico'
        ]
      },
      'c10-d': {
        keys: [
          'Os músculos ficam em compartimentos fechados por fáscias que não esticam',
          'Se o conteúdo aumenta (sangue, edema, reperfusão) ou o envoltório aperta (gesso, curativo), a pressão supera a pressão capilar',
          'O músculo fica isquêmico mesmo com a artéria principal pérvia',
          'Locais e causas comuns: tíbia, antebraço, esmagamento, gesso apertado e reperfusão após isquemia',
          'Sinal mais precoce: dor desproporcional à lesão, que piora com o estiramento passivo do músculo',
          'Outros sinais: parestesia e compartimento tenso à palpação',
          'Pulso presente não exclui: a pressão capilar é muito menor que a arterial; ausência de pulso é sinal tardio (músculo já necrosado)',
          'Conduta: abrir gessos e curativos, manter o membro na altura do coração (elevar demais reduz a perfusão) e avaliação cirúrgica para fasciotomia'
        ]
      },
      'c10-e': {
        keys: [
          'Imagem e imobilização bem feitas evitam lesões perdidas e danos novos',
          'Radiografar o osso inteiro, incluindo as articulações acima e abaixo: fratura de diáfise pode vir com luxação na articulação vizinha',
          'Imobilizar incluindo a articulação acima e a abaixo, para o fragmento não se mover',
          'Checar pulso, perfusão e sensibilidade antes e depois da tala, porque a manipulação pode comprimir ou liberar estruturas',
          'Tração na fratura de diáfise de fêmur: realinha o osso, reduz a dor e diminui o sangramento para a coxa',
          'Exemplo: fratura de diáfise do rádio com dor no cotovelo; o RX do antebraço inteiro mostra a luxação da cabeça do rádio'
        ]
      },
      'c10-prova': {
        keys: [
          'Síndrome compartimental: dor desproporcional e dor ao estiramento passivo são precoces; pulso presente não exclui',
          'Conduta da síndrome compartimental: retirar curativos e gesso compressivos e fasciotomia; medir pressão ajuda no paciente inconsciente',
          'Pelve instável (livro aberto) com instabilidade: cinta pélvica nos trocânteres maiores, hemoderivados e controle definitivo (angioembolização, empacotamento pré-peritoneal ou fixação)',
          'Fratura exposta: antibiótico precoce (idealmente na primeira hora), antitetânica, cobertura estéril, alinhamento, imobilização e cirurgia',
          'Gustilo orienta o antibiótico; tipo III exige cobertura ampliada',
          'Sinais duros de lesão vascular (sangramento pulsátil, hematoma em expansão, frêmito ou sopro, ausência de pulso, isquemia distal) indicam exploração',
          'Índice tornozelo-braquial menor que 0,9 pede investigação',
          'Luxação de joelho: alto risco de lesão da artéria poplítea mesmo com pulso; avaliar com ITB e imagem',
          'Fratura de diáfise de fêmur perde volume importante; tração reduz dor e sangramento',
          'Esmagamento: rabdomiólise, hipercalemia e lesão renal; hidratação vigorosa e monitorização',
          'Imobilizar e radiografar incluindo as articulações acima e abaixo'
        ]
      }
    },

    case: {
      title: 'Atropelamento com fratura exposta de perna',
      intro: 'Homem, 27 anos, atropelado por moto. Tem ferida de 12 cm na face anterior da perna direita, com osso exposto e terra na ferida, e dor na pelve. Está pálido e sudoreico.',
      vitals: { PA: '86×54', FC: '128', FR: '24', SatO2: '96%', Glasgow: '15' },
      steps: [
        {
          prompt: 'A ferida da perna sangra pouco, em babação. A pelve dói à palpação e há instabilidade. Qual a medida para a pelve no exame primário?',
          options: [
            { t: 'Binder pélvico centrado nos trocânteres maiores', ok: true, fb: 'Pelve instável em paciente chocado: o binder nos trocânteres maiores fecha o anel, reduz o volume e estabiliza os fragmentos que sangram.', s: 'c10-a' },
            { t: 'Binder posicionado sobre as cristas ilíacas', fb: 'Na crista ilíaca o binder não fecha a pelve. O centro é o trocânter maior.', s: 'c10-a' },
            { t: 'Mobilizar a pelve repetidamente para confirmar a instabilidade', fb: 'Manobras repetidas desfazem coágulos e aumentam o sangramento.', s: 'c10-prova' },
            { t: 'Radiografia da perna antes de tratar a pelve', fb: 'A pelve instável ameaça a vida e vem antes da imagem da perna.', s: 'c10-a' }
          ]
        },
        {
          prompt: 'Com o binder e hemoderivados em curso, você foca na fratura exposta. Como classificá-la e qual o antibiótico?',
          vitals: { PA: '98×62', FC: '116' },
          options: [
            { t: 'Gustilo I; cefalosporina de 1ª geração apenas', fb: 'Tipo I é ferida limpa, menor que 1 cm. Esta tem 12 cm, com terra.', s: 'c10-c' },
            { t: 'Gustilo II; antibiótico só no centro cirúrgico', fb: 'Ferida maior que 10 cm e contaminada é tipo III, e o antibiótico deve ser o mais precoce possível.', s: 'c10-c' },
            { t: 'Não precisa de antibiótico se a ferida for lavada', fb: 'O que mais reduz infecção na fratura exposta é o antibiótico precoce.', s: 'c10-b' },
            { t: 'Gustilo III; cefalosporina de 1ª geração + cobertura para gram-negativos, o mais cedo possível', ok: true, fb: 'Ferida maior que 10 cm, muito contaminada: tipo III. Cefalosporina de 1ª geração para todas e cobertura de gram-negativos no tipo III.', s: 'c10-c' }
          ]
        },
        {
          prompt: 'O que mais deve ser feito pela fratura exposta na sala de emergência?',
          options: [
            { t: 'Explorar a ferida com o dedo para retirar fragmentos', fb: 'A conduta é curativo estéril e cirurgia; manipular a ferida no PS aumenta a contaminação.', s: 'c10-b' },
            { t: 'Profilaxia antitetânica, curativo estéril, alinhamento e imobilização incluindo articulações acima e abaixo, com checagem neurovascular antes e depois', ok: true, fb: 'Esse é o pacote da fratura exposta: antitetânica, cobertura estéril, alinhamento e tala bem feita, conferindo pulso, perfusão e sensibilidade.', s: 'c10-e' },
            { t: 'Imobilizar só o foco da fratura, sem as articulações', fb: 'A imobilização inclui a articulação acima e a abaixo, para o fragmento não se mover.', s: 'c10-e' },
            { t: 'Suturar a pele sobre o osso para fechar a fratura', fb: 'Fechar a pele sobre o osso contaminado aumenta o risco de infecção; o tratamento é cirúrgico.', s: 'c10-b' }
          ]
        },
        {
          prompt: 'Para a investigação por imagem da perna, o que pedir?',
          options: [
            { t: 'RX apenas do foco da fratura', fb: 'Fratura de diáfise pode vir com lesão da articulação vizinha.', s: 'c10-e' },
            { t: 'Ressonância magnética de urgência antes de qualquer RX', fb: 'Não é o exame inicial e atrasaria o atendimento.', s: 'c10-e' },
            { t: 'RX do osso inteiro, incluindo joelho e tornozelo', ok: true, fb: 'Radiografar o osso inteiro com as articulações acima e abaixo evita lesões perdidas.', s: 'c10-e' },
            { t: 'Nenhuma imagem: a fratura é visível', fb: 'Ver o osso exposto não mostra o padrão da fratura nem lesões articulares associadas.', s: 'c10-e' }
          ]
        },
        {
          prompt: 'Seis horas depois da tala gessada, ele relata dor intensa na perna, muito maior que antes e que piora ao estender os dedos passivamente. O pulso pedioso está presente.',
          vitals: { PA: '124×78', FC: '104' },
          options: [
            { t: 'Pulso presente exclui síndrome compartimental: aumentar a analgesia', fb: 'Falso. A pressão capilar é muito menor que a arterial; a perda de pulso é sinal tardio.', s: 'c10-d' },
            { t: 'Elevar bem a perna acima do coração e reavaliar em 6 horas', fb: 'Elevar demais reduz a perfusão, e esperar significa músculo necrosado.', s: 'c10-d' },
            { t: 'Suspeitar de síndrome compartimental: abrir gesso e curativos, membro na altura do coração e avaliação cirúrgica para fasciotomia', ok: true, fb: 'Dor desproporcional que piora ao estiramento passivo é o sinal mais precoce. A conduta é descomprimir e avaliar fasciotomia.', s: 'c10-d' },
            { t: 'Doppler arterial e aguardar o resultado sem mexer na tala', fb: 'A artéria está pérvia; o problema é a pressão no compartimento. Retirar o que comprime é imediato.', s: 'c10-d' }
          ]
        },
        {
          prompt: 'Outro paciente da mesma ocorrência teve a perna esmagada sob a moto por 2 horas. Ao ser liberado, o que esperar e fazer?',
          vitals: { PA: '110×70', FC: '112' },
          options: [
            { t: 'Hidratação vigorosa com meta de diurese ~100 mL/h e vigilância de hipercalemia e lesão renal', ok: true, fb: 'Ao aliviar o esmagamento, o músculo libera potássio e mioglobina: arritmias e lesão renal. Hidratação vigorosa protege o rim.', s: 'c10-a' },
            { t: 'Restringir líquidos para evitar edema do membro', fb: 'Restringir líquido aumenta o risco de lesão renal pela mioglobina.', s: 'c10-a' },
            { t: 'Nenhuma conduta específica se a pele estiver íntegra', fb: 'A lesão muscular é profunda e o risco sistêmico existe mesmo com pele íntegra.', s: 'c10-prova' },
            { t: 'Diurético e restrição de potássio na dieta, sem hidratação', fb: 'A base é hidratação vigorosa com meta de diurese alta.', s: 'c10-a' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Passe o caso para a ortopedia no formato S-xABCDE-BAR. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Situação: 27 anos, atropelado por moto, com pelve instável e fratura exposta da perna direita', s: 'c10-a' },
        { t: 'x e C: choque por pelve instável, binder nos trocânteres maiores e hemoderivados', s: 'c10-a' },
        { t: 'Fratura exposta Gustilo III (ferida de 12 cm, contaminada com terra)', s: 'c10-c' },
        { t: 'Antibiótico precoce: cefalosporina de 1ª geração + cobertura de gram-negativos; antitetânica', s: 'c10-c' },
        { t: 'Curativo estéril, alinhamento e tala incluindo joelho e tornozelo, com checagem neurovascular antes e depois', s: 'c10-e' },
        { t: 'RX do osso inteiro com as articulações acima e abaixo', s: 'c10-e' },
        { t: 'Suspeita de síndrome compartimental: gesso aberto, membro na altura do coração, pulso presente não exclui', s: 'c10-d' },
        { t: 'Recomendação: avaliação para fasciotomia e controle definitivo da pelve (angioembolização, empacotamento ou fixação)', s: 'c10-prova' }
      ]
    }
  }
});
