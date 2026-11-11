/* Fase 1 guiada (prontuário completo → com suas palavras → caso → passagem de plantão) — Capítulo 8 */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  8: {
    checks: {
      'c08-a': {
        keys: [
          'O E fecha o exame primário e tem dois objetivos, porque lesões e ameaças que não são vistas não são tratadas',
          'Objetivo 1: exposição completa, despindo totalmente o paciente',
          'Rolamento em bloco com restrição de movimento da coluna para examinar o dorso',
          'Inspecionar dorso, períneo, axilas e couro cabeludo, onde ferimentos penetrantes e sangramentos se escondem',
          'Objetivo 2: identificar e tratar ameaças ambientais com risco de vida já no primário',
          'Ameaças ambientais: hipotermia, queimaduras, intoxicação ou contaminação, afogamento e eletricidade',
          'Essas ameaças matam tão rápido quanto uma lesão mecânica',
          'Novo no ATLS 11: o E passou a incluir explicitamente as ameaças ambientais no exame primário'
        ]
      },
      'c08-b': {
        keys: [
          'Hipotermia é comum no traumatizado: exposição, sala fria, fluidos frios e choque (que reduz a produção de calor)',
          'Não é questão de conforto: é ameaça à vida',
          'As enzimas da coagulação funcionam mal no frio, então a hipotermia piora a coagulopatia e o paciente sangra mais',
          'Tríade letal: hipotermia, acidose e coagulopatia, cada uma alimentando as outras',
          'Prevenção: cobrir logo após examinar (cobertores, manta térmica) e manter a sala aquecida',
          'Fluidos e hemoderivados aquecidos em aquecedor apropriado; nunca micro-ondas para sangue, porque causa hemólise',
          'Medir a temperatura central',
          'Erro clássico: expor sem cobrir de volta; a sequência certa é expor, examinar e cobrir'
        ]
      },
      'c08-c': {
        keys: [
          'O grande queimado perde líquido rapidamente pelo aumento da permeabilidade capilar',
          'Esperar o cálculo exato da SCQ atrasa a reposição: o ATLS 11 manda iniciar já no exame primário',
          'Indicação: provável queimadura ≥20% da SCQ, com Ringer lactato em taxa fixa por idade antes do cálculo final',
          'Taxas: ≥13 anos 500 mL/h; 6–12 anos 250 mL/h; ≤5 anos 125 mL/h',
          'Depois do secundário, com peso e SCQ estimados, recalcula-se pela fórmula e ajusta-se pela diurese',
          'Parar o processo de queimadura: remover roupas e adornos (anéis viram torniquete com o edema)',
          'Queimadura química por pó seco: escovar o pó antes de irrigar abundantemente',
          'Novo no ATLS 11: taxas iniciais fixas por idade antes do cálculo da SCQ'
        ]
      },
      'c08-d': {
        keys: [
          'Algumas ameaças enganam porque o paciente parece bem: pensar no mecanismo (incêndio fechado, alta voltagem, produto químico)',
          'Lesão inalatória: queimadura facial, vibrissas chamuscadas, escarro carbonáceo, rouquidão e estridor',
          'O edema da via aérea piora nas horas seguintes, por isso a via aérea é avaliada cedo',
          'Monóxido de carbono liga-se à hemoglobina com afinidade muito maior que o O2',
          'O oxímetro de pulso não diferencia carboxi-hemoglobina e mostra saturação falsamente normal',
          'Tratamento do CO: O2 a 100% (acelera a eliminação) e dosagem de carboxi-hemoglobina',
          'Cianeto: incêndio em espaço fechado com acidose lática inexplicada; bloqueia a respiração celular; antídoto hidroxocobalamina',
          'Lesão elétrica: a corrente percorre tecidos profundos e a lesão interna é muito maior que a da pele (arritmias, rabdomiólise, síndrome compartimental)',
          'Contaminação química ou radiológica: descontaminar o paciente e proteger a equipe antes de tudo',
          'SatO2 normal não exclui CO: cefaleia e confusão após incêndio pedem O2 a 100% e COHb'
        ]
      },
      'c08-prova': {
        keys: [
          'Exposição completa é obrigatória: despir, inspecionar o dorso com rolamento em bloco e cobrir logo com cobertores aquecidos',
          'Tríade letal: hipotermia + acidose + coagulopatia; a hipotermia reduz a atividade das enzimas da coagulação',
          'Prevenir hipotermia: sala aquecida, cobertores térmicos, fluidos e hemoderivados aquecidos; cristaloide frio em grande volume é distrator clássico',
          'Hipotermia acidental grave: manipular com delicadeza (risco de FV) e reaquecimento ativo',
          'Na parada por hipotermia: "ninguém está morto até estar quente e morto"',
          'Temperatura central (esofágica, vesical ou retal) para confirmar; timpânica ou axilar subestima',
          'Congelamento: reaquecimento rápido em água morna só sem risco de recongelar, não esfregar, evitar amputação precoce',
          'Intermação com alteração neurológica é emergência: resfriamento rápido',
          'Novo no ATLS 11: o E virou exposição e ameaças ambientais, e o grande queimado recebe Ringer lactato em taxa inicial por idade (500, 250 ou 125 mL/h)'
        ]
      }
    },

    case: {
      title: 'Incêndio no apartamento',
      intro: 'Homem, 45 anos, 70 kg, retirado pelos bombeiros de um apartamento em chamas após cerca de 20 minutos em ambiente fechado. Tem queimaduras em tórax, abdome e braços, está confuso e queixa-se de cefaleia.',
      vitals: { PA: '118×74', FC: '112', FR: '24', SatO2: '99%', Glasgow: '14' },
      steps: [
        {
          prompt: 'O oxímetro marca 99%. O que essa saturação significa neste paciente?',
          options: [
            { t: 'Afasta intoxicação por monóxido de carbono', fb: 'É o contrário: o oxímetro não distingue carboxi-hemoglobina e mostra saturação falsamente normal.', s: 'c08-d' },
            { t: 'Pode ser falsamente normal; ofertar O2 a 100% e dosar carboxi-hemoglobina', ok: true, fb: 'Incêndio em local fechado, cefaleia e confusão: suspeite de CO. O2 a 100% acelera a eliminação, e a COHb confirma.', s: 'c08-d' },
            { t: 'Indica que basta cateter nasal de O2 a 2 L/min', fb: 'A saturação não é confiável aqui. O tratamento do CO é O2 a 100%.', s: 'c08-d' },
            { t: 'A confusão deve ser alcoólica, já que a saturação é normal', fb: 'Atribuir a confusão ao álcool antes de excluir CO e cianeto é erro grave.', s: 'c08-d' }
          ]
        },
        {
          prompt: 'Ele tem vibrissas chamuscadas, escarro com fuligem e a voz está ficando rouca.',
          vitals: { FR: '26' },
          options: [
            { t: 'Observar: a via aérea está pérvia agora', fb: 'O edema da via aérea progride nas horas seguintes. Esperar piorar transforma uma intubação possível numa via aérea impossível.', s: 'c08-d' },
            { t: 'Nebulização com broncodilatador e reavaliar em 6 horas', fb: 'Não trata o edema por calor, que vai fechar a via aérea.', s: 'c08-d' },
            { t: 'Avaliar a via aérea cedo e preparar via aérea definitiva precoce', ok: true, fb: 'Sinais de lesão inalatória com rouquidão progressiva: a via aérea deve ser garantida antes que o edema feche a laringe.', s: 'c08-d' },
            { t: 'Corticoide IV e alta após 2 horas se melhorar', fb: 'Lesão inalatória exige proteção da via aérea, não alta precoce.', s: 'c08-d' }
          ]
        },
        {
          prompt: 'A queimadura parece extensa (provavelmente mais de 20% da SCQ), mas a equipe ainda não terminou de calcular. Qual a conduta de fluidos já no exame primário?',
          options: [
            { t: 'Esperar o cálculo exato da SCQ para começar qualquer volume', fb: 'O ATLS 11 manda iniciar antes do cálculo, porque a perda de líquido começa logo.', s: 'c08-c' },
            { t: 'Bolus de 2 L de cristaloide frio', fb: 'Bolus não é a regra no queimado, e cristaloide frio piora hipotermia e coagulopatia.', s: 'c08-b' },
            { t: 'Ringer lactato a 500 mL/h, taxa fixa para ≥13 anos', ok: true, fb: 'Provável queimadura ≥20% SCQ no adulto: Ringer lactato a 500 mL/h no primário. Depois recalcula-se pela fórmula e ajusta-se pela diurese.', s: 'c08-c' },
            { t: 'Ringer lactato a 125 mL/h', fb: '125 mL/h é a taxa de crianças ≤5 anos. No adulto é 500 mL/h.', s: 'c08-c' }
          ]
        },
        {
          prompt: 'Ao despir o paciente, você nota uma aliança e um relógio no braço queimado, que já está edemaciado.',
          options: [
            { t: 'Retirar todos os adornos e roupas agora', ok: true, fb: 'Parar o processo de queimadura inclui remover roupas e adornos: com o edema, anéis e relógios viram torniquete.', s: 'c08-c' },
            { t: 'Deixar para retirar quando o edema regredir', fb: 'O edema só aumenta nas próximas horas e o adorno vai causar isquemia.', s: 'c08-c' },
            { t: 'Manter os adornos, porque têm valor para a família', fb: 'Guarde-os, mas retire-os: eles viram torniquete.', s: 'c08-c' },
            { t: 'Resfriar o braço com gelo para reduzir o edema', fb: 'Gelo lesa tecido e esfria o paciente, piorando a tríade letal.', s: 'c08-b' }
          ]
        },
        {
          prompt: 'Após 30 minutos de exposição para avaliação, a temperatura esofágica está em 35 °C e começam a sangrar os pontos de punção.',
          vitals: { PA: '108×66', FC: '118' },
          options: [
            { t: 'Normal para o queimado; seguir o exame descoberto', fb: 'Expor sem cobrir é erro clássico. A hipotermia já está piorando a coagulação.', s: 'c08-b' },
            { t: 'Cobrir, aquecer a sala e aquecer fluidos e hemoderivados em aquecedor apropriado', ok: true, fb: 'Expor, examinar e cobrir. As enzimas da coagulação funcionam mal no frio: hipotermia, acidose e coagulopatia formam a tríade letal.', s: 'c08-b' },
            { t: 'Aquecer as bolsas de sangue no micro-ondas', fb: 'Micro-ondas causa hemólise. Use aquecedor apropriado.', s: 'c08-b' },
            { t: 'Usar a temperatura axilar para decidir, que deve estar normal', fb: 'A temperatura axilar subestima. Use temperatura central.', s: 'c08-prova' }
          ]
        },
        {
          prompt: 'Mesmo com O2 a 100% e volume adequado, a gasometria mostra acidose lática importante e persistente, sem sangramento identificado.',
          vitals: { PA: '100×62', FC: '124' },
          options: [
            { t: 'Pensar em cianeto e administrar hidroxocobalamina', ok: true, fb: 'Incêndio em espaço fechado com plásticos queimados e acidose lática inexplicada: cianeto bloqueia a respiração celular. Antídoto: hidroxocobalamina.', s: 'c08-d' },
            { t: 'Bicarbonato em bolus e nenhuma outra medida', fb: 'Não trata a causa: o cianeto continua bloqueando a respiração celular.', s: 'c08-d' },
            { t: 'Reduzir o O2 porque a SatO2 está alta', fb: 'O O2 a 100% continua necessário pelo CO.', s: 'c08-d' },
            { t: 'Concluir que é apenas o choque do queimado e aumentar o volume para 2.000 mL/h', fb: 'Queimadura isolada raramente explica choque precoce, e volume excessivo causa edema e síndrome compartimental. Procure outra causa.', s: 'c08-c' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Passe o caso para a equipe do centro de queimados no formato S-xABCDE-BAR. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Situação: 45 anos, 70 kg, retirado de incêndio em local fechado após ~20 min, com queimaduras em tronco e braços', s: 'c08-a' },
        { t: 'A: lesão inalatória (vibrissas, fuligem, rouquidão) e plano de via aérea definitiva precoce', s: 'c08-d' },
        { t: 'B: O2 a 100% por suspeita de CO, com dosagem de carboxi-hemoglobina; saturação falsamente normal', s: 'c08-d' },
        { t: 'C: Ringer lactato a 500 mL/h iniciado no primário, a recalcular pela fórmula e ajustar pela diurese', s: 'c08-c' },
        { t: 'C: acidose lática persistente tratada como cianeto, com hidroxocobalamina', s: 'c08-d' },
        { t: 'E: exposição completa com dorso examinado; adornos retirados', s: 'c08-c' },
        { t: 'E: hipotermia a 35 °C corrigida com cobertura, sala e fluidos aquecidos; temperatura central', s: 'c08-b' },
        { t: 'Recomendação: monitorizar temperatura, coagulação, diurese e via aérea', s: 'c08-prova' }
      ]
    }
  }
});
