/* Fase 1 guiada (prontuário completo → com suas palavras → caso → plano de prevenção) — Capítulo 18 */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  18: {
    checks: {
      'c18-a': {
        keys: [
          'Trauma não é acidente: a palavra sugere algo aleatório, fruto do azar e impossível de evitar',
          'A maioria das lesões é previsível e evitável',
          'As lesões se repetem com as mesmas pessoas, nos mesmos lugares e pelos mesmos mecanismos',
          'O trauma pode ser estudado como qualquer doença, com três componentes',
          'Hospedeiro: a pessoa (idade, uso de álcool, comportamento)',
          'Agente: a energia transferida (cinética, térmica, elétrica, química)',
          'Ambiente: físico (estrada, iluminação) e social (leis, cultura, pobreza)',
          'Mudar a linguagem muda a postura: de “fatalidade” para problema de saúde pública',
          'Novo no ATLS 11: capítulo próprio de Prevenção de Lesões'
        ]
      },
      'c18-b': {
        keys: [
          'A prevenção atua em três momentos que se complementam',
          'Primária: impedir que o evento aconteça',
          'Exemplos de primária: lei seca, limites de velocidade, cercar piscinas, iluminação de vias',
          'Secundária: o evento acontece, mas a lesão é evitada ou reduzida',
          'Exemplos de secundária: cinto de segurança, capacete, airbag, cadeirinha infantil',
          'Terciária: reduzir as consequências depois da lesão (atendimento de qualidade e reabilitação)',
          'O próprio ATLS é prevenção terciária'
        ]
      },
      'c18-c': {
        keys: [
          'As estratégias se agrupam nos 3 Es',
          'Educação: mudar comportamento (campanhas, orientação)',
          'A educação depende de cada pessoa agir certo toda vez: isoladamente tem efeito limitado',
          'Engenharia/Ambiente: mudar produtos e ambientes (airbag, barreiras entre pistas, iluminação, capacete bem projetado)',
          'A engenharia costuma ser a mais eficaz porque é passiva: protege mesmo quem não faz nada',
          'Enforcement: legislação e fiscalização (lei do cinto, lei seca, cadeirinha), que transforma o comportamento seguro em regra',
          'Os melhores programas combinam os três: a lei obriga, a engenharia protege e a educação explica',
          'Medidas passivas costumam funcionar melhor que medidas ativas'
        ]
      },
      'c18-d': {
        keys: [
          'A matriz de Haddon é uma ferramenta para achar pontos de prevenção',
          'Cruza as fases do evento com os fatores envolvidos',
          'Fases: pré-evento, evento e pós-evento',
          'Fatores: hospedeiro, agente/veículo, ambiente físico e ambiente social',
          'Cada célula da matriz sugere uma intervenção',
          'Pré-evento numa colisão: motorista sóbrio (hospedeiro), freios bons (veículo), via iluminada (ambiente)',
          'Evento: uso do cinto (hospedeiro), airbag (veículo), barreira que absorve impacto (ambiente)',
          'Pós-evento: saúde prévia (hospedeiro), tanque que não pega fogo (veículo), SME rápido (ambiente)'
        ]
      },
      'c18-e': {
        keys: [
          'As estratégias variam conforme os determinantes sociais: pobreza, moradia, violência, educação e acesso a serviços',
          'Um programa que funciona numa cidade pode falhar em outra se não for adaptado',
          'O atendimento do trauma é um momento de oportunidade: paciente e família estão mais abertos a mudanças',
          'Durante a internação, rastrear riscos: álcool e drogas, violência interpessoal, risco de quedas no idoso, armas em casa',
          'Fazer intervenção breve e encaminhar',
          'Programas hospitalares de interrupção da violência reduzem a reincidência de lesões',
          'Jovem reinternado por arma de fogo: tratar a lesão, rastrear o risco e encaminhar a programa de interrupção da violência'
        ]
      },
      'c18-prova': {
        keys: [
          'Trauma não é acidente: é previsível e evitável, por isso se fala em “lesão”',
          'Primária impede o evento: lei seca, iluminação de vias, cercar piscinas, semáforos',
          'Secundária reduz a gravidade quando o evento ocorre: cinto, airbag, capacete, cadeirinha',
          'Terciária reduz as consequências depois: pré-hospitalar rápido, sistema de trauma, reabilitação',
          'Haddon: fases (pré-evento, evento, pós-evento) × fatores (hospedeiro, agente ou veículo, ambiente físico e social)',
          'Exemplo de Haddon: motorista alcoolizado = hospedeiro, pré-evento',
          '3 Es: Educação, Engenharia (ambiente) e Enforcement; educação isolada é a menos eficaz, engenharia a mais eficaz',
          'Medidas passivas (airbag, barreiras) funcionam melhor que as ativas (colocar o cinto)',
          'Momento de oportunidade: a internação é ideal para intervenção breve sobre álcool e outros riscos',
          'Pegadinha: o cinto de segurança é prevenção secundária (não impede a colisão, reduz a lesão)'
        ]
      }
    },

    case: {
      title: 'Programa de prevenção de lesões de moto',
      intro: 'Seu hospital atende muitos jovens motociclistas feridos à noite, vários com uso de álcool, numa avenida mal iluminada. A diretoria pede que você proponha um programa de prevenção.',
      vitals: { 'Internações/mês': '45', 'Com álcool': '40%', 'Reinternações': '12%' },
      steps: [
        {
          prompt: 'No primeiro relatório, como descrever essas lesões?',
          options: [
            { t: '“Acidentes” inevitáveis da cidade', fb: 'Trauma não é acidente: a palavra sugere azar e impossibilidade de evitar.', s: 'c18-a' },
            { t: 'Fatalidades sem padrão definido', fb: 'As lesões se repetem com as mesmas pessoas, lugares e mecanismos.', s: 'c18-a' },
            { t: 'Lesões previsíveis e evitáveis, tratadas como problema de saúde pública', ok: true, fb: 'A maioria das lesões é previsível e evitável; mudar a linguagem muda a postura.', s: 'c18-a' },
            { t: 'Responsabilidade só dos motociclistas, sem papel do hospital', fb: 'O trauma tem hospedeiro, agente e ambiente; o hospital participa da prevenção.', s: 'c18-a' }
          ]
        },
        {
          prompt: 'Alguém propõe instalar iluminação na avenida. Que nível de prevenção é esse?',
          options: [
            { t: 'Primária: impede que o evento aconteça', ok: true, fb: 'Iluminação de vias é prevenção primária, como lei seca e limites de velocidade.', s: 'c18-b' },
            { t: 'Secundária', fb: 'Secundária reduz a lesão quando o evento acontece (capacete, cinto).', s: 'c18-b' },
            { t: 'Terciária', fb: 'Terciária reduz consequências depois da lesão (atendimento, reabilitação).', s: 'c18-b' },
            { t: 'Não é prevenção', fb: 'Mudar o ambiente é uma das formas mais eficazes de prevenção.', s: 'c18-c' }
          ]
        },
        {
          prompt: 'E o uso obrigatório de capacete bem ajustado?',
          options: [
            { t: 'Primária, porque evita a colisão', fb: 'O capacete não impede a colisão.', s: 'c18-prova' },
            { t: 'Terciária', fb: 'Terciária atua depois da lesão.', s: 'c18-b' },
            { t: 'Não tem nível definido', fb: 'O capacete é exemplo clássico de prevenção secundária.', s: 'c18-b' },
            { t: 'Secundária: o evento acontece, mas a lesão é reduzida', ok: true, fb: 'Capacete, cinto, airbag e cadeirinha são prevenção secundária.', s: 'c18-b' }
          ]
        },
        {
          prompt: 'Qual estratégia, isolada, tende a ser a menos eficaz?',
          options: [
            { t: 'Barreiras e iluminação na via (engenharia)', fb: 'A engenharia costuma ser a mais eficaz, por ser passiva.', s: 'c18-c' },
            { t: 'Campanha educativa isolada', ok: true, fb: 'A educação depende de cada pessoa agir certo toda vez: isoladamente tem efeito limitado.', s: 'c18-c' },
            { t: 'Fiscalização da lei seca', fb: 'O enforcement transforma o comportamento seguro em regra; é eficaz, sobretudo combinado.', s: 'c18-c' },
            { t: 'Combinação dos 3 Es', fb: 'Os melhores programas combinam os três.', s: 'c18-c' }
          ]
        },
        {
          prompt: 'Na matriz de Haddon, “motociclista alcoolizado” fica em qual célula?',
          options: [
            { t: 'Veículo, evento', fb: 'O motociclista é o hospedeiro, e o álcool atua antes da colisão.', s: 'c18-d' },
            { t: 'Ambiente social, pós-evento', fb: 'O uso de álcool é característica do hospedeiro, no pré-evento.', s: 'c18-d' },
            { t: 'Hospedeiro, pré-evento', ok: true, fb: 'É o exemplo clássico: motorista alcoolizado = hospedeiro, pré-evento.', s: 'c18-prova' },
            { t: 'Agente, evento', fb: 'O agente é a energia transferida; o álcool é fator do hospedeiro.', s: 'c18-d' }
          ]
        },
        {
          prompt: 'Um jovem de 19 anos está internado pela segunda vez após queda de moto alcoolizado. O que fazer além de tratar as lesões?',
          vitals: { 'Reinternação': 'sim' },
          options: [
            { t: 'Nada: prevenção não é papel do hospital', fb: 'O atendimento é um momento de oportunidade para prevenção.', s: 'c18-e' },
            { t: 'Rastrear o uso de álcool, fazer intervenção breve e encaminhar', ok: true, fb: 'A internação é o momento de oportunidade: paciente e família estão mais abertos a mudanças.', s: 'c18-e' },
            { t: 'Esperar a alta para orientar por telefone', fb: 'O melhor momento para a intervenção breve é durante a internação.', s: 'c18-e' },
            { t: 'Só entregar um folheto de campanha', fb: 'Educação isolada tem efeito limitado; rastreio com intervenção breve e encaminhamento é mais eficaz.', s: 'c18-c' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Apresente à diretoria o plano de prevenção de lesões de moto. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Enquadramento: lesões previsíveis e evitáveis, não “acidentes”', s: 'c18-a' },
        { t: 'Análise por hospedeiro, agente e ambiente (álcool, energia cinética, avenida escura)', s: 'c18-a' },
        { t: 'Prevenção primária: iluminação da via e fiscalização da lei seca', s: 'c18-b' },
        { t: 'Prevenção secundária: capacete bem ajustado', s: 'c18-b' },
        { t: 'Prevenção terciária: atendimento de qualidade e reabilitação', s: 'c18-b' },
        { t: 'Combinação dos 3 Es, priorizando medidas passivas de engenharia', s: 'c18-c' },
        { t: 'Matriz de Haddon para mapear intervenções por fase e fator', s: 'c18-d' },
        { t: 'Intervenção breve e encaminhamento durante a internação, adaptados aos determinantes sociais locais', s: 'c18-e' }
      ]
    }
  }
});
