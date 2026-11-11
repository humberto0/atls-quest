/* Fase 1 guiada (prontuário completo → com suas palavras → caso → passagem de plantão) — Capítulo 11 */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  11: {
    checks: {
      'c11-a': {
        keys: [
          'A criança não é um adulto pequeno: anatomia e fisiologia mudam o padrão de lesão e a apresentação do choque',
          'Cabeça grande e occipício proeminente: em decúbito o pescoço flete e pode obstruir a via aérea; um coxim sob o tronco alinha a via aérea',
          'Língua grande, laringe mais alta e anterior e traqueia curta: visualização difícil e tubo facilmente seletivo para um brônquio',
          'Esqueleto mais complacente: os ossos dobram em vez de quebrar e transmitem energia aos órgãos',
          'Por isso há lesão interna sem fratura, como contusão pulmonar sem fratura de costela',
          'Grande superfície corporal para o peso: perde calor e entra em hipotermia rapidamente',
          'Grande reserva fisiológica: taquicardia e vasoconstrição mantêm a PA até uma perda volêmica grande',
          'Hipotensão é sinal tardio e indica colapso próximo; criança com PA normal pode estar em choque',
          'Sinais a observar: FC, enchimento capilar, temperatura das extremidades e nível de consciência'
        ]
      },
      'c11-b': {
        keys: [
          'Erros de tamanho de material são causa clássica de falha na via aérea pediátrica',
          'Equipamento por idade ou peso, com fita de comprimento (ex.: Broselow), que indica tubos, lâminas e doses sem cálculo',
          'Atropina como pré-tratamento na SRI do lactente: tônus vagal alto e risco de bradicardia com a laringoscopia e alguns fármacos',
          'Cricotireoidostomia cirúrgica desencorajada em lactentes e crianças pequenas',
          'Motivo: a membrana cricotireóidea é minúscula e a cartilagem cricoide, essencial para sustentar a via aérea, é facilmente lesada',
          'Cricotireoidostomia por agulha é o resgate nessa idade',
          'A agulha dá apenas oxigenação de curto prazo: a expiração é inadequada e o CO2 se acumula; é ponte até via aérea definitiva'
        ]
      },
      'c11-c': {
        keys: [
          'Volume sanguíneo da criança: cerca de 80 mL/kg; uma perda pequena para o adulto pode ser enorme para a criança',
          'Acesso periférico; se falhar em poucos minutos, intraósseo, rápido e confiável em qualquer idade',
          'No choque hemorrágico: hemoderivados em alíquotas de 10 mL/kg (concentrado de hemácias ou sangue)',
          'Minimizar cristaloide: dilui fatores de coagulação e não transporta oxigênio',
          'Reavaliar após cada alíquota: FC, perfusão e consciência mostram a resposta',
          'Diurese alvo: lactente 2 mL/kg/h; criança 1 mL/kg/h',
          'Exemplo: criança de 20 kg recebe 200 mL de concentrado (10 mL/kg); se seguir instável, nova alíquota e acionar a cirurgia',
          'Novo no ATLS 11: ressuscitação pediátrica com hemoderivados em alíquotas de 10 mL/kg'
        ]
      },
      'c11-d': {
        keys: [
          'TCE é a principal causa de morte por trauma na infância',
          'A radiação de exames desnecessários traz risco: a criança é mais sensível e tem mais anos de vida para desenvolver câncer',
          'O lactente pode ficar hipotenso por sangramento intracraniano isolado, porque fontanela aberta e suturas não fundidas acomodam muito sangue',
          'Regras de decisão (ex.: PECARN) identificam crianças de baixo risco que podem dispensar TC',
          'Lesões de baço e fígado em criança estável: em geral manejo não operatório',
          'O manejo não operatório exige centro com cirurgião pediátrico, UTI e banco de sangue',
          'Preservar o baço é importante contra infecções',
          'Evitar hiperventilação desnecessária, que reduz o fluxo cerebral'
        ]
      },
      'c11-e': {
        keys: [
          'Parte das lesões em crianças é intencional, e o médico de trauma pode ser a única chance de proteção',
          'História incompatível com a lesão ou com o desenvolvimento (ex.: lactente que "rolou" e fraturou o fêmur)',
          'Atraso na procura de atendimento e relatos discrepantes entre cuidadores',
          'Lesões em diferentes estágios de cicatrização (hematomas de cores diferentes, calos ósseos)',
          'Fraturas de costelas posteriores (compressão do tórax com as mãos) e fraturas metafisárias (tração e torção)',
          'Queimaduras em padrão: imersão em luva/meia com borda nítida e marcas de cigarro',
          'Hematoma subdural com hemorragia retiniana no lactente sugere trauma por sacudida',
          'Obrigação de notificar e de proteger a criança, sem devolvê-la a ambiente de risco antes da avaliação'
        ]
      },
      'c11-prova': {
        keys: [
          'Hipotensão é sinal tardio: a criança compensa até perder cerca de 30% da volemia; taquicardia, enchimento capilar lento e alteração de consciência são precoces',
          'PAS mínima aceitável em maiores de 1 ano: aproximadamente 70 + 2 × idade (anos) mmHg',
          'Choque hemorrágico: hemoderivados em alíquotas de 10 mL/kg; provas antigas cobravam bolus de cristaloide de 20 mL/kg',
          'Acesso: se o periférico falhar, intraósseo (tíbia proximal) logo',
          'Via aérea: coxim sob os ombros, laringe anterior e cefálica, traqueia curta com risco de intubação seletiva',
          'Cricotireoidostomia cirúrgica desencorajada no lactente e na criança pequena; por agulha oxigena só por pouco tempo',
          'Fita de Broselow para doses e tamanhos de material',
          'Tórax complacente: contusão pulmonar sem fratura é comum; fratura de costela na criança indica energia grande',
          'Baço e fígado em criança estável: manejo não operatório em centro com cirurgião disponível',
          'Maus-tratos: história incompatível, atraso, lesões em estágios diferentes, costelas posteriores, metafisárias, queimadura em imersão; notificar',
          'Diurese alvo: lactente 2 mL/kg/h, criança 1 mL/kg/h; aquecer, porque perde calor rápido',
          'Criança com PA normal e FC 160 após trauma não está estável: está compensando um choque'
        ]
      }
    },

    case: {
      title: 'Criança atropelada em frente à escola',
      intro: 'Menina de 6 anos, 20 kg, atropelada por carro em baixa velocidade. Chora, tem escoriação no flanco esquerdo e marca de pneu no abdome. Está pálida, com extremidades frias.',
      vitals: { PA: '98×60', FC: '152', FR: '30', SatO2: '97%', Glasgow: '15' },
      steps: [
        {
          prompt: 'O residente comenta: "A pressão está normal, ela está estável". Como você interpreta?',
          options: [
            { t: 'Concordo: PA normal afasta choque', fb: 'Na criança a hipotensão é tardia. FC 152, palidez e extremidades frias indicam choque compensado.', s: 'c11-a' },
            { t: 'Ela está em choque compensado: taquicardia, extremidades frias e palidez são sinais precoces', ok: true, fb: 'A criança mantém a PA com taquicardia e vasoconstrição até perder cerca de 30% da volemia. Quando a PA cai, o colapso está próximo.', s: 'c11-a' },
            { t: 'A taquicardia é só choro e dor; dar analgesia e observar', fb: 'Atribuir a taquicardia ao choro com extremidades frias e marca de pneu é erro perigoso.', s: 'c11-prova' },
            { t: 'Calcular a PAS mínima e, como está acima de 82, liberar para casa', fb: 'A PAS mínima (70 + 2 × idade = 82) é um limite de hipotensão, não um critério de estabilidade.', s: 'c11-prova' }
          ]
        },
        {
          prompt: 'Duas tentativas de acesso periférico falharam em 3 minutos. O que fazer?',
          options: [
            { t: 'Continuar tentando o periférico por mais 15 minutos', fb: 'Se o periférico falhar em poucos minutos, não se perde mais tempo.', s: 'c11-c' },
            { t: 'Dissecção venosa como primeira alternativa', fb: 'O intraósseo é mais rápido e confiável em qualquer idade.', s: 'c11-c' },
            { t: 'Acesso intraósseo na tíbia proximal', ok: true, fb: 'Falhou o periférico em poucos minutos: intraósseo, rápido e confiável.', s: 'c11-c' },
            { t: 'Aguardar a cirurgia para acesso central no centro cirúrgico', fb: 'Atraso inaceitável em criança chocada.', s: 'c11-c' }
          ]
        },
        {
          prompt: 'Acesso obtido. Qual a reposição inicial pelo ATLS 11?',
          options: [
            { t: 'Bolus de 20 mL/kg de cristaloide (400 mL) e repetir até 3 vezes', fb: 'Essa era a conduta antiga. O ATLS 11 minimiza cristaloide, que dilui fatores e não transporta oxigênio.', s: 'c11-prova' },
            { t: '200 mL de concentrado de hemácias (10 mL/kg) e reavaliar', ok: true, fb: 'No choque hemorrágico pediátrico, hemoderivados em alíquotas de 10 mL/kg, reavaliando FC, perfusão e consciência após cada uma.', s: 'c11-c' },
            { t: '1 L de soro fisiológico rápido', fb: 'Volume de adulto e de cristaloide: diluição e piora da coagulopatia.', s: 'c11-c' },
            { t: 'Nenhum volume até a TC', fb: 'Criança em choque precisa de reposição agora.', s: 'c11-c' }
          ]
        },
        {
          prompt: 'Após duas alíquotas, FC 112, extremidades aquecidas e consciência normal. A TC mostra laceração esplênica sem extravasamento ativo. Conduta?',
          vitals: { PA: '104×64', FC: '112' },
          options: [
            { t: 'Esplenectomia imediata de rotina', fb: 'Na criança estável, o baço costuma ser tratado sem cirurgia, preservando sua função contra infecções.', s: 'c11-d' },
            { t: 'Alta com orientações, já que estabilizou', fb: 'Manejo não operatório exige observação em centro com estrutura, não alta.', s: 'c11-d' },
            { t: 'Laparotomia exploradora porque houve choque', fb: 'Respondeu à reposição e está estável: o manejo não operatório é o padrão nesse cenário.', s: 'c11-d' },
            { t: 'Manejo não operatório em centro com cirurgião pediátrico, UTI e banco de sangue', ok: true, fb: 'Criança estável com lesão esplênica: manejo não operatório onde haja cirurgião pediátrico, UTI e banco de sangue se precisar.', s: 'c11-d' }
          ]
        },
        {
          prompt: 'Horas depois ela fica sonolenta e precisa de intubação. Como preparar o material e a indução?',
          vitals: { Glasgow: '8', FC: '118' },
          options: [
            { t: 'Material e doses pela fita de comprimento (Broselow) e coxim sob o tronco para alinhar a via aérea', ok: true, fb: 'A fita indica tubos, lâminas e doses sem cálculo no estresse, e o coxim compensa o occipício proeminente. A atropina de rotina fica reservada ao lactente.', s: 'c11-b' },
            { t: 'Material de adulto, que é o que está montado', fb: 'Erro de tamanho de material é causa clássica de falha na via aérea pediátrica.', s: 'c11-b' },
            { t: 'Coxim sob a cabeça para fletir o pescoço', fb: 'O occipício já flete o pescoço. O coxim vai sob o tronco, para alinhar.', s: 'c11-a' },
            { t: 'Hiperventilar após a intubação para proteger o cérebro', fb: 'Evite hiperventilação desnecessária, que reduz o fluxo cerebral.', s: 'c11-d' }
          ]
        },
        {
          prompt: 'Num outro leito, um lactente de 4 meses chega com fratura de fêmur. A mãe diz que ele "rolou do sofá" e procurou atendimento 2 dias depois. O RX mostra também calos ósseos em costelas posteriores.',
          options: [
            { t: 'Acidente doméstico comum: imobilizar e dar alta', fb: 'Lactente de 4 meses que "rolou" e fraturou o fêmur, com atraso e calos em costelas posteriores, é altamente suspeito de maus-tratos.', s: 'c11-e' },
            { t: 'Suspeitar de maus-tratos, documentar, notificar e garantir a proteção da criança antes da alta', ok: true, fb: 'História incompatível com o desenvolvimento, atraso na procura e fraturas em estágios diferentes de costelas posteriores: notificação obrigatória e proteção.', s: 'c11-e' },
            { t: 'Confrontar a mãe e só notificar se ela confessar', fb: 'A notificação é baseada na suspeita, não em confissão.', s: 'c11-e' },
            { t: 'Pedir apenas cálcio e vitamina D por suspeita de doença óssea', fb: 'O padrão de lesões e a história apontam para maus-tratos, que precisam ser investigados e notificados.', s: 'c11-e' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Passe o caso da menina para a equipe da cirurgia pediátrica no formato S-xABCDE-BAR. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Situação: menina de 6 anos, 20 kg, atropelada, com marca de pneu no abdome e lesão esplênica', s: 'c11-d' },
        { t: 'Chegou em choque compensado: PA normal, FC 152, palidez e extremidades frias', s: 'c11-a' },
        { t: 'C: acesso intraósseo após falha do periférico', s: 'c11-c' },
        { t: 'C: duas alíquotas de 10 mL/kg de concentrado de hemácias, com resposta (FC 112, perfusão normal)', s: 'c11-c' },
        { t: 'Laceração esplênica sem extravasamento: manejo não operatório com cirurgião pediátrico, UTI e banco de sangue', s: 'c11-d' },
        { t: 'A e D: piora neurológica com GCS 8 e intubação com material pela fita de comprimento e coxim sob o tronco', s: 'c11-b' },
        { t: 'E: prevenir hipotermia, porque a criança perde calor rápido', s: 'c11-a' },
        { t: 'Recomendação: metas de diurese de 1 mL/kg/h, reavaliações seriadas e evitar hiperventilação', s: 'c11-c' }
      ]
    }
  }
});
