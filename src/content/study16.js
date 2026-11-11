/* Fase 1 guiada (prontuário completo → com suas palavras → caso → resumo final) — Capítulo 16 */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  16: {
    checks: {
      'c16-a': {
        keys: [
          'Sistema de trauma: esforço organizado e coordenado, numa área geográfica definida',
          'Oferece cuidado completo ao traumatizado e é integrado à saúde pública',
          'O trauma grave é uma doença dependente do tempo',
          'Um ótimo cirurgião não salva o paciente que chega tarde, ao hospital errado e sem informação',
          'Objetivo: o paciente certo, no lugar certo, no tempo certo',
          'Regiões com sistemas maduros reduzem a mortalidade evitável por trauma',
          'Sistema inclusivo: todos os hospitais participam conforme sua capacidade; os menores estabilizam e transferem, os maiores recebem os mais complexos',
          'Novo no ATLS 11: capítulo inteiro sobre sistemas de trauma'
        ]
      },
      'c16-b': {
        keys: [
          'O sistema é uma corrente: a força total é a do elo mais fraco',
          'Vigilância e prevenção: registros de trauma e dados epidemiológicos orientam prevenção e planejamento',
          'Serviço médico de emergência e regulação: recebe o chamado e decide o destino',
          'Atendimento pré-hospitalar e transporte: começa o xABCDE na cena e leva ao hospital adequado',
          'Cuidado hospitalar agudo: pronto-socorro, centro cirúrgico e UTI',
          'Reabilitação: devolve função e reinserção social; sem ela, sobreviver não significa recuperar',
          'Pesquisa: mede resultados e testa melhorias',
          'Sem qualquer elo o sistema falha: não basta ter um bom centro de trauma'
        ]
      },
      'c16-c': {
        keys: [
          'A triagem regional direciona cada paciente ao nível de cuidado de que ele precisa',
          'Subtriagem: paciente grave levado a hospital sem recursos; atrasa o tratamento definitivo e aumenta a mortalidade',
          'A subtriagem é o erro mais perigoso para o paciente',
          'Supertriagem: paciente leve levado ao centro de alta complexidade; consome recursos e pode sobrecarregar o centro',
          'A supertriagem raramente prejudica aquele paciente e é mais tolerada',
          'Os sistemas aceitam alguma supertriagem para manter a subtriagem baixa',
          'Nos EUA, centros de trauma do nível I ao IV',
          'Nível I: todos os recursos 24 horas, ensino, pesquisa e liderança regional; níveis menores estabilizam e transferem'
        ]
      },
      'c16-d': {
        keys: [
          'Triagem de campo: decisão, ainda na cena, de para onde levar o paciente',
          'O ATLS 11 adota a diretriz nacional de 2021, com critérios Vermelhos e Amarelos',
          'Vermelhos (alto risco): lesões anatômicas graves e alterações fisiológicas importantes',
          'Destino dos Vermelhos: centro de trauma de maior nível disponível',
          'Amarelos (risco moderado): mecanismo de alta energia, idade, gestação, anticoagulação e outras situações especiais',
          'Destino dos Amarelos: um centro de trauma, não necessariamente o de maior nível',
          'Substitui o antigo esquema de passos sequenciais (fisiologia → anatomia → mecanismo → considerações especiais)',
          'Critérios agrupados por risco são mais simples de aplicar na cena'
        ]
      },
      'c16-e': {
        keys: [
          'O ATLS 11 enfatiza a aplicabilidade global',
          'Os princípios (xABCDE, controle precoce do sangramento, transferência precoce) são os mesmos em qualquer lugar',
          'A implementação se adapta aos recursos locais',
          'Flexibilidade padronizada: hospital do interior e centro nível I tratam pela mesma lógica, com ferramentas diferentes',
          'Registros de trauma coletam dados de cada atendimento',
          'A revisão de mortes evitáveis procura falhas no caminho: atraso, subtriagem, erro técnico',
          'Os achados viram mudanças de protocolo, treinamento e prevenção, fechando o ciclo de melhoria de qualidade'
        ]
      },
      'c16-prova': {
        keys: [
          'Distribuição trimodal clássica: mortes imediatas (segundos a minutos; cérebro ou grandes vasos; só a prevenção reduz)',
          'Mortes precoces (minutos a horas; hemorragia, hematomas intracranianos, pneumotórax): é onde o ATLS atua',
          'Mortes tardias (dias a semanas): sepse e falência de múltiplos órgãos',
          'Em sistemas maduros a distribuição tende a bimodal, porque o atendimento eficiente reduz o pico tardio',
          'Hora de ouro: período em que diagnóstico e tratamento rápidos mais reduzem mortes evitáveis',
          'Sistema inclusivo (todos os hospitais participam) é melhor que o exclusivo (só centros de trauma)',
          'Nível I: todas as especialidades 24 h, ensino e pesquisa; os menores estabilizam e transferem',
          'Subtriagem é o erro mais grave; supertriagem moderada é aceitável',
          'Elementos: prevenção e vigilância, pré-hospitalar e transporte, hospital de agudos, reabilitação, pesquisa e melhoria de qualidade',
          'Antes vs agora: triagem de campo em quatro passos sequenciais virou critérios Vermelhos (maior nível) e Amarelos (centro de trauma, pode ser de nível menor)',
          'Pegadinha: o pico de mortes que o ATLS mais reduz é o precoce (minutos a horas), não o imediato'
        ]
      }
    },

    case: {
      title: 'Montando o sistema de trauma de uma região',
      intro: 'Você foi convidado pela secretaria de saúde para organizar o atendimento ao trauma de uma região com um hospital grande na capital (com neurocirurgia, UTI e cirurgia 24 h) e cinco hospitais pequenos no interior. Hoje cada ambulância leva o paciente “para o hospital mais perto”.',
      vitals: { 'Mortes evitáveis': 'altas', 'Transferências': 'tardias', 'Registro': 'inexistente' },
      steps: [
        {
          prompt: 'Qual modelo de sistema propor?',
          options: [
            { t: 'Exclusivo: só o hospital da capital atende trauma', fb: 'O sistema inclusivo é melhor: todos os hospitais participam conforme sua capacidade.', s: 'c16-prova' },
            { t: 'Inclusivo: todos participam conforme sua capacidade; os pequenos estabilizam e transferem, o grande recebe os mais complexos', ok: true, fb: 'Num sistema inclusivo cada hospital tem seu papel, e o paciente certo chega ao lugar certo no tempo certo.', s: 'c16-a' },
            { t: 'Manter como está: levar ao hospital mais próximo', fb: 'Isso gera subtriagem: pacientes graves em hospitais sem recursos, com mais mortalidade.', s: 'c16-c' },
            { t: 'Investir só em um excelente centro de trauma na capital', fb: 'O sistema é uma corrente: não basta um bom centro de trauma se os outros elos falham.', s: 'c16-b' }
          ]
        },
        {
          prompt: 'Que critérios de triagem de campo adotar para as ambulâncias?',
          options: [
            { t: 'Os quatro passos sequenciais: fisiologia, anatomia, mecanismo e considerações especiais', fb: 'Esse é o modelo antigo. O ATLS 11 adota a diretriz de 2021 com critérios por risco.', s: 'c16-d' },
            { t: 'Levar todos os pacientes para a capital', fb: 'Supertriagem excessiva sobrecarrega o centro sem benefício para os leves.', s: 'c16-c' },
            { t: 'Critérios Vermelhos (alto risco → centro de maior nível) e Amarelos (risco moderado → um centro de trauma)', ok: true, fb: 'É a diretriz nacional de 2021 adotada pelo ATLS 11: critérios agrupados por risco são mais simples na cena.', s: 'c16-d' },
            { t: 'Deixar a decisão só para o socorrista, sem critérios', fb: 'A triagem de campo precisa de critérios definidos para reduzir a subtriagem.', s: 'c16-d' }
          ]
        },
        {
          prompt: 'Um paciente com anticoagulante e mecanismo de alta energia, mas com sinais vitais normais. Como classificar?',
          options: [
            { t: 'Vermelho: vai obrigatoriamente para o centro de maior nível', fb: 'Vermelhos são lesões anatômicas graves e alterações fisiológicas importantes; este paciente não tem.', s: 'c16-d' },
            { t: 'Não precisa de centro de trauma', fb: 'Mecanismo de alta energia e anticoagulação são critérios Amarelos: destino é um centro de trauma.', s: 'c16-d' },
            { t: 'Amarelo: deve ir a um centro de trauma, não necessariamente o de maior nível', ok: true, fb: 'Mecanismo, idade, gestação e anticoagulação são critérios Amarelos (risco moderado).', s: 'c16-d' },
            { t: 'Preto: expectante', fb: 'Categoria preta é de triagem em massa, não de triagem de campo do dia a dia.', s: 'c16-d' }
          ]
        },
        {
          prompt: 'A equipe pergunta qual erro de triagem é mais importante evitar.',
          options: [
            { t: 'A supertriagem, porque custa caro', fb: 'A supertriagem é mais tolerada; raramente prejudica o paciente.', s: 'c16-c' },
            { t: 'A subtriagem, porque atrasa o tratamento definitivo e aumenta a mortalidade', ok: true, fb: 'Os sistemas aceitam alguma supertriagem para manter a subtriagem baixa.', s: 'c16-c' },
            { t: 'Os dois têm o mesmo peso', fb: 'A subtriagem é o erro mais perigoso; a supertriagem moderada é aceitável.', s: 'c16-prova' },
            { t: 'Nenhum: o destino não muda o desfecho', fb: 'O trauma grave é dependente do tempo: o destino muda o desfecho.', s: 'c16-a' }
          ]
        },
        {
          prompt: 'Como saber se o sistema está funcionando?',
          options: [
            { t: 'Pelo número de cirurgias realizadas na capital', fb: 'Volume isolado não mostra falhas no caminho do paciente.', s: 'c16-e' },
            { t: 'Pela opinião dos diretores dos hospitais', fb: 'É preciso dados: registros de trauma e revisão de mortes evitáveis.', s: 'c16-e' },
            { t: 'Não é preciso medir: o protocolo basta', fb: 'Sem melhoria de qualidade, o ciclo do sistema não se fecha.', s: 'c16-e' },
            { t: 'Registro de trauma e revisão de mortes evitáveis, transformando achados em protocolo, treino e prevenção', ok: true, fb: 'A melhoria de qualidade fecha o ciclo: dados mostram atrasos, subtriagem e erros técnicos.', s: 'c16-e' }
          ]
        },
        {
          prompt: 'Um vereador pergunta qual pico de mortes o novo sistema e o ATLS mais vão reduzir.',
          options: [
            { t: 'As mortes imediatas, na cena', fb: 'As mortes imediatas (cérebro, grandes vasos) só a prevenção reduz.', s: 'c16-prova' },
            { t: 'As mortes precoces, de minutos a horas (hemorragia, hematoma intracraniano, pneumotórax)', ok: true, fb: 'É onde o ATLS atua: a hora de ouro, em que diagnóstico e tratamento rápidos mais reduzem mortes evitáveis.', s: 'c16-prova' },
            { t: 'As mortes tardias por sepse, exclusivamente', fb: 'O atendimento eficiente reduz o pico tardio, mas o principal alvo do ATLS é o pico precoce.', s: 'c16-prova' },
            { t: 'Nenhuma: mortes por trauma não são evitáveis', fb: 'Sistemas maduros reduzem a mortalidade evitável por trauma.', s: 'c16-a' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Resuma para a secretaria de saúde o plano do sistema de trauma da região. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Objetivo: levar o paciente certo ao lugar certo no tempo certo (trauma grave é dependente do tempo)', s: 'c16-a' },
        { t: 'Modelo inclusivo: hospitais pequenos estabilizam e transferem; o centro da capital recebe os mais complexos', s: 'c16-a' },
        { t: 'Todos os elos: vigilância e prevenção, regulação, pré-hospitalar, hospital agudo, reabilitação e pesquisa', s: 'c16-b' },
        { t: 'Triagem de campo com critérios Vermelhos e Amarelos (diretriz de 2021)', s: 'c16-d' },
        { t: 'Meta de subtriagem baixa, aceitando alguma supertriagem', s: 'c16-c' },
        { t: 'Princípios iguais em todos os hospitais, implementação adaptada aos recursos (flexibilidade padronizada)', s: 'c16-e' },
        { t: 'Registro de trauma e revisão de mortes evitáveis para melhoria contínua', s: 'c16-e' }
      ]
    }
  }
});
