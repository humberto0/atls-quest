/* Fase 1 guiada (prontuário completo → com suas palavras → caso → passagem de plantão) — Capítulo 9 */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  9: {
    checks: {
      'c09-a': {
        keys: [
          'Duas perguntas: quão funda (define o prognóstico local) e quão extensa (define a reposição volêmica)',
          'Superficial (1º grau): só eritema e dor, sem bolha; a barreira da pele está intacta',
          'Queimadura de 1º grau NÃO entra no cálculo da SCQ; incluir eritema superestima a SCQ e leva a excesso de volume',
          'Espessura parcial (2º grau), superficial ou profunda: bolhas e dor intensa, com terminações nervosas expostas',
          'Espessura total (3º grau): aspecto de couro, branco ou carbonizado, e indolor, porque os nervos foram destruídos',
          'Regra dos 9 no adulto: cabeça 9, cada membro superior 9, tronco anterior 18, posterior 18, cada membro inferior 18, períneo 1',
          'Na criança a cabeça é proporcionalmente maior e as pernas menores: a regra dos 9 adulta subestima a cabeça',
          'Áreas irregulares: a palma do paciente, com os dedos, vale cerca de 1%'
        ]
      },
      'c09-b': {
        keys: [
          'A queimadura extensa causa inflamação sistêmica e vazamento capilar: o plasma sai do vaso para o interstício',
          'Sem reposição o paciente entra em choque; com reposição excessiva surgem edema maciço, síndrome compartimental abdominal e dos membros e piora respiratória',
          'Fórmula da ABA por idade, com Ringer lactato: adulto 2 mL × kg × %SCQ',
          'Lesão elétrica: 4 mL × kg × %SCQ, porque a destruição profunda é maior que a vista na pele',
          'O volume é distribuído em 16 horas como taxa horária, sem ajuste pela hora da lesão nem pelo volume já recebido',
          'A fórmula é só o ponto de partida: o ajuste é hora a hora pela diurese',
          'Metas de diurese: adulto 0,5 mL/kg/h; criança 1 mL/kg/h; elétrica 1–1,5 mL/kg/h até a urina clarear (mioglobina)',
          'Exemplo: adulto de 70 kg com 40% SCQ = 2 × 70 × 40 = 5.600 mL em 16 h, cerca de 350 mL/h',
          'Diurese baixa: aumentar a taxa; diurese acima do alvo (ex.: >60 mL/h no exemplo): reduzir',
          'Evitar bolus; na hipotensão, bolus breve e procurar causa não relacionada à queimadura (hemorragia)',
          'Queimadura isolada raramente causa choque na primeira hora',
          'Novo no ATLS 11: cálculo em 16 h, não mais metade nas primeiras 8 h, sem compensar o tempo desde a lesão'
        ]
      },
      'c09-c': {
        keys: [
          'Calor e gases tóxicos lesam a via aérea, e o edema progride nas primeiras horas',
          'Uma via aérea pérvia agora pode fechar durante o transporte; intubar tarde, com laringe edemaciada, é mais difícil e perigoso',
          'Intubar precocemente se houver estridor ou rouquidão progressiva',
          'Intubar precocemente na queimadura facial profunda ou circunferencial do pescoço',
          'Intubar na lesão inalatória com dificuldade respiratória, ou antes de transporte longo com sinais de risco',
          'Usar tubo de calibre adequado (grande, se possível), para permitir broncoscopia e aspiração',
          'Lembrar de CO e cianeto em todo paciente de incêndio em local fechado'
        ]
      },
      'c09-d': {
        keys: [
          'Depois da reanimação: preservar perfusão, evitar infecção e levar o paciente ao lugar certo',
          'A espessura total forma escara rígida; circunferencial no tórax restringe a expansão e a ventilação',
          'Escara circunferencial nos membros comprime vasos com o edema e causa isquemia: indicação de escarotomia',
          'Cobrir com curativo limpo e seco, evitando resfriamento excessivo (o queimado perde calor facilmente)',
          'Profilaxia antitetânica',
          'Analgesia IV: a absorção intramuscular é errática no choque',
          'Transferir para centro de queimados: espessura parcial extensa, espessura total, face, mãos, pés, genitália, articulações, elétrica, química, inalatória, comorbidades e crianças sem estrutura local',
          'Transferir não justifica atrasar via aérea nem reposição: estabilizar antes de transportar'
        ]
      },
      'c09-e': {
        keys: [
          'No congelamento há cristais de gelo nos tecidos e, no reaquecimento, trombose da microcirculação',
          'Tecido que parece morto no início muitas vezes se recupera',
          'Reaquecimento rápido em água morna (cerca de 37–40 °C), só quando não houver risco de recongelar',
          'Congelar, descongelar e congelar de novo destrói mais tecido',
          'Analgesia potente: o reaquecimento é muito doloroso',
          'Discutir trombolítico no congelamento agudo com o centro de referência, para desfazer a trombose microvascular',
          'A demarcação entre tecido viável e inviável pode levar semanas a meses: evitar desbridamento ou amputação precoce',
          'Novo no ATLS 11: trombolítico para congelamento discutido com centro de referência'
        ]
      },
      'c09-prova': {
        keys: [
          'SCQ: regra dos 9 no adulto; na criança usar Lund-Browder; palma com dedos ≈ 1%; 1º grau não entra no cálculo',
          'Volume inicial pela fórmula por idade: adulto 2 mL × kg × %SCQ; elétrica 4 mL × kg × %SCQ',
          'Ajuste pela diurese: adulto 0,5 mL/kg/h, criança 1 mL/kg/h, elétrica 1–1,5 mL/kg/h',
          'Intubação precoce: estridor, rouquidão, queimadura facial profunda, escarro carbonáceo com desconforto, queimadura circunferencial do pescoço, transporte longo',
          'CO: incêndio fechado, cefaleia e confusão, oximetria falsamente normal; O2 a 100% e dosar COHb; pensar em cianeto se acidose lática persistente',
          'Escarotomia: espessura total circunferencial no tórax (restrição ventilatória) ou membro (isquemia)',
          'Elétrica: lesão visível subestima a profunda; ECG e monitorização, CK, rabdomiólise, mioglobinúria e síndrome compartimental',
          'Química: irrigação abundante e prolongada com água; não tentar neutralizar',
          'Antes vs agora: Parkland 4 mL/kg/%SCQ com metade nas primeiras 8 h contadas da queimadura; hoje adulto 2 mL/kg/%SCQ em 16 h, sem ajustar pela hora da lesão'
        ]
      }
    },

    case: {
      title: 'Explosão de botijão na cozinha',
      intro: 'Homem, 38 anos, 80 kg, atingido por explosão de botijão de gás na cozinha. Queimaduras em face, tórax anterior e abdome, ambos os braços e coxa esquerda. Chega 1 hora após o acidente.',
      vitals: { PA: '128×80', FC: '116', FR: '24', SatO2: '96%', Glasgow: '15' },
      steps: [
        {
          prompt: 'Ele fala com voz rouca, tem vibrissas nasais chamuscadas e queimadura facial profunda. Será transferido para um centro de queimados a 3 horas daqui. Qual a conduta para a via aérea?',
          options: [
            { t: 'Transferir em máscara de O2 e intubar se piorar no caminho', fb: 'O edema progride nas primeiras horas. No meio do transporte não haverá como resgatar uma laringe edemaciada.', s: 'c09-c' },
            { t: 'Intubar antes do transporte, com tubo de calibre adequado', ok: true, fb: 'Rouquidão, queimadura facial profunda e transporte longo: intubação precoce, com tubo grande para permitir broncoscopia e aspiração.', s: 'c09-c' },
            { t: 'Cricotireoidostomia eletiva antes de sair', fb: 'Não há indicação de via aérea cirúrgica eletiva: ele é intubável agora, e é por isso que se intuba cedo.', s: 'c09-c' },
            { t: 'Apenas observar, já que a SatO2 é 96%', fb: 'A saturação não mede o edema que vai fechar a via aérea, e pode ser falsamente normal pelo CO.', s: 'c09-c' }
          ]
        },
        {
          prompt: 'Mapa das lesões: face com eritema apenas (sem bolhas); tórax anterior e abdome com bolhas; ambos os membros superiores com bolhas; coxa esquerda anterior com bolhas (metade do membro inferior anterior). Qual a SCQ para o cálculo?',
          options: [
            { t: 'Cerca de 40%: tronco anterior 18 + membros superiores 18 + coxa anterior (metade da face anterior do membro inferior) ~4,5', ok: true, fb: 'Somam-se só as áreas com bolha ou mais profundas. A face com eritema (1º grau) não entra: incluí-la superestima o volume.', s: 'c09-a' },
            { t: 'Cerca de 49%, incluindo os 9% da cabeça', fb: 'A face tem só eritema. Queimadura de 1º grau não entra no cálculo da SCQ.', s: 'c09-a' },
            { t: 'Cerca de 22%, contando só os braços e a coxa', fb: 'O tronco anterior com bolhas vale 18% e precisa entrar.', s: 'c09-a' },
            { t: 'Impossível calcular sem a palma do paciente', fb: 'A regra dos 9 resolve áreas grandes; a palma (≈1%) serve para áreas irregulares.', s: 'c09-a' }
          ]
        },
        {
          prompt: 'Com 80 kg e cerca de 40% de SCQ, qual o volume inicial pela fórmula do ATLS 11?',
          options: [
            { t: '12.800 mL, metade nas primeiras 8 h contadas da hora da queimadura', fb: 'Essa é a lógica antiga (Parkland 4 mL e metade em 8 h). O ATLS 11 usa 2 mL × kg × %SCQ em 16 h.', s: 'c09-prova' },
            { t: '6.400 mL em 16 h (cerca de 400 mL/h), ajustados pela diurese', ok: true, fb: '2 × 80 × 40 = 6.400 mL, distribuídos em 16 h sem compensar o tempo desde a lesão: ~400 mL/h, titulados pela diurese.', s: 'c09-b' },
            { t: '6.400 mL em 16 h, descontando a primeira hora perdida (correr mais rápido agora)', fb: 'O ATLS 11 não ajusta pela hora da lesão nem pelo volume já recebido.', s: 'c09-b' },
            { t: '3.200 mL em 24 h', fb: 'Conta errada: 2 × 80 × 40 = 6.400 mL, em 16 h.', s: 'c09-b' }
          ]
        },
        {
          prompt: 'Na terceira hora de reposição, a diurese é de 20 mL/h e o paciente está taquicárdico.',
          vitals: { PA: '112×70', FC: '124' },
          options: [
            { t: 'Furosemida para aumentar a diurese', fb: 'Diurético força urina sem corrigir a hipovolemia e esconde o marcador de perfusão.', s: 'c09-b' },
            { t: 'Manter a taxa: a fórmula já está certa', fb: 'A fórmula é só o ponto de partida. O ajuste é hora a hora pela diurese.', s: 'c09-b' },
            { t: 'Aumentar a taxa de Ringer lactato, porque a meta é 0,5 mL/kg/h (40 mL/h para 80 kg)', ok: true, fb: 'Diurese de 20 mL/h está abaixo da meta de 0,5 mL/kg/h. Aumenta-se a taxa e reavalia-se na hora seguinte.', s: 'c09-b' },
            { t: 'Bolus de 3 L de cristaloide', fb: 'Evitam-se bolus no queimado: reposição excessiva causa edema maciço e síndrome compartimental.', s: 'c09-b' }
          ]
        },
        {
          prompt: 'O tórax tem escara de espessura total quase circunferencial, e a ventilação mecânica mostra pressões altas e expansão reduzida.',
          vitals: { SatO2: '91%' },
          options: [
            { t: 'Escarotomia do tórax', ok: true, fb: 'Escara rígida circunferencial no tórax restringe a expansão e a ventilação: indicação clássica de escarotomia.', s: 'c09-d' },
            { t: 'Aumentar a sedação e aguardar o centro de queimados', fb: 'A restrição é mecânica, pela escara. Sedar mais não resolve.', s: 'c09-d' },
            { t: 'Drenar o tórax bilateralmente de rotina', fb: 'Sem pneumotórax, a drenagem não trata a causa.', s: 'c09-d' },
            { t: 'Curativo compressivo apertado no tórax', fb: 'Comprimir o tórax pioraria a restrição.', s: 'c09-d' }
          ]
        },
        {
          prompt: 'Antes do transporte, o que completa os cuidados?',
          vitals: { PA: '118×74', FC: '108', SatO2: '96%' },
          options: [
            { t: 'Analgesia intramuscular e compressas frias por todo o corpo', fb: 'A absorção IM é errática no choque, e resfriar o queimado provoca hipotermia.', s: 'c09-d' },
            { t: 'Desbridar as bolhas na sala de emergência antes de sair', fb: 'Não é prioridade e atrasa a transferência.', s: 'c09-d' },
            { t: 'Esperar 24 horas de reposição antes de transferir', fb: 'A transferência ocorre assim que a via aérea e a reposição estão garantidas, sem atrasos.', s: 'c09-d' },
            { t: 'Curativo limpo e seco, evitar resfriamento, analgesia IV e profilaxia antitetânica', ok: true, fb: 'Esses são os cuidados antes da transferência para o centro de queimados.', s: 'c09-d' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Passe o caso para o centro de queimados no formato S-xABCDE-BAR. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Situação: 38 anos, 80 kg, explosão de botijão há ~1 h, com cerca de 40% de SCQ de espessura parcial', s: 'c09-a' },
        { t: 'A: lesão inalatória (rouquidão, vibrissas, queimadura facial profunda) e intubação precoce com tubo calibroso', s: 'c09-c' },
        { t: 'B: escarotomia do tórax por escara circunferencial com restrição ventilatória', s: 'c09-d' },
        { t: 'C: Ringer lactato pela fórmula 2 × 80 × 40 = 6.400 mL em 16 h, cerca de 400 mL/h', s: 'c09-b' },
        { t: 'C: taxa aumentada por diurese de 20 mL/h, abaixo da meta de 0,5 mL/kg/h (40 mL/h)', s: 'c09-b' },
        { t: 'D e B: pensar em CO e cianeto (incêndio), com dosagem de carboxi-hemoglobina', s: 'c09-c' },
        { t: 'E: curativo limpo e seco, evitar hipotermia', s: 'c09-d' },
        { t: 'Feito: analgesia IV e profilaxia antitetânica', s: 'c09-d' },
        { t: 'Recomendação: seguir a titulação pela diurese e vigiar síndrome compartimental', s: 'c09-b' }
      ]
    }
  }
});
