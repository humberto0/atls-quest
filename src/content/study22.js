/* Fase 1 guiada — Capítulo 22: Trauma penetrante */
window.ATLS_STUDY = Object.assign(window.ATLS_STUDY || {}, {
  22: {
    checks: {
      'c22-a': { keys: [
        'O ATLS 11 criou capítulo próprio para trauma penetrante: arma branca, arma de fogo e empalamento',
        'Diferença do contuso: a lesão segue uma trajetória; estimar por onde o objeto passou indica as estruturas em risco',
        'A avaliação é guiada pelo mecanismo e pela trajetória provável, não pelo tamanho da ferida na pele',
        'Ferida pequena pode esconder lesão vascular grave, e o projétil pode mudar de direção dentro do corpo',
        'A prioridade continua sendo o xABCDE, com controle da hemorragia primeiro',
        'Novo no ATLS 11: exame e diagrama das feridas, zonas cervicais revisadas, escore ABC e transferência precoce'
      ] },
      'c22-b': { keys: [
        'Exposição completa: procurar feridas no dorso, axilas, períneo, couro cabeludo e dobras',
        'Uma ferida esquecida nas costas muda a trajetória e as cavidades em risco',
        'Diagramar e descrever as feridas (localização, tamanho, aspecto)',
        'Não afirmar "entrada" ou "saída" na documentação: a distinção é difícil, frequentemente errada e tem consequências legais',
        'Estimar a trajetória: uma ferida acima e outra abaixo do diafragma implicam risco em tórax e abdome',
        'Número ímpar de orifícios sugere projétil retido; localizar com RX para entender a trajetória',
        'Exemplo: dois orifícios no abdome e um no dorso = três orifícios, provável projétil retido; RX para localizar e reconstruir o trajeto'
      ] },
      'c22-c': { keys: [
        'Não retirar o objeto empalado na sala de emergência',
        'O objeto pode estar tamponando um vaso lesado; ao retirar, o sangramento contido pode ficar incontrolável longe dos recursos',
        'Estabilizar o objeto com curativo volumoso para que não se mova, porque o movimento aumenta a lesão',
        'Não girar o objeto nem explorar a ferida para "ver a profundidade"',
        'A remoção é feita no centro cirúrgico, com controle vascular proximal e distal disponível',
        'O mesmo raciocínio vale para qualquer objeto cravado: estabilizar e levar ao centro cirúrgico'
      ] },
      'c22-d': { keys: [
        'O pescoço concentra via aérea, grandes vasos, esôfago e medula em pouco espaço',
        'Zona I: da clavícula à cricoide (vasos da base, ápice pulmonar, traqueia, esôfago)',
        'Zona II: da cricoide ao ângulo da mandíbula',
        'Zona III: acima do ângulo da mandíbula (carótida distal, faringe)',
        'No ATLS 11, as zonas indicam estruturas em risco e não são indicação automática de cirurgia; a decisão depende da clínica',
        'Sinais duros → cirurgia: sangramento ativo/pulsátil, hematoma expansivo, frêmito/sopro, choque, ar saindo pela ferida, via aérea comprometida',
        'Sem sinais duros e estável → angio-TC para guiar a conduta',
        'Ferida que viola o platisma é considerada penetrante',
        'Não explorar a ferida cervical às cegas no PS: pode desfazer um coágulo e desencadear sangramento'
      ] },
      'c22-e': { keys: [
        'Escore ABC: mecanismo penetrante, PAS ≤90, FC ≥120 e FAST positivo, 1 ponto cada',
        'Escore ABC ≥2 ativa o protocolo de transfusão maciça, cedo, antes de o paciente colapsar',
        'Hipotensão permissiva até o controle do sangramento: pressão alta demais desloca coágulos frágeis',
        'Sangue em vez de cristaloide, que dilui fatores e piora a coagulopatia',
        'Arma branca no abdome do paciente estável: manejo não operatório seletivo possível em centro com recursos (exame seriado, TC)',
        'Peritonite, evisceração ou instabilidade → laparotomia',
        'Transferência precoce quando o hospital não tem recurso definitivo, sem atrasar com exames que não mudam a conduta',
        'Exemplo: tiro no tórax, PAS 85, FC 128, FAST negativo → escore ABC 3 (penetrante + PAS + FC): ativar o protocolo já',
        'Restrição de movimento da coluna de rotina não é recomendada no penetrante sem déficit: atrasa e não traz benefício'
      ] },
      'c22-prova': { keys: [
        'Instável, peritonite ou evisceração = cirurgia; estável sem esses sinais = investigar',
        'Arma de fogo no abdome anterior com trajeto que viola o peritônio: laparotomia na maioria dos casos',
        'Arma branca na parede anterior, estável, sem peritonite: exploração local; sem violação da fáscia posterior/peritônio = alta; com violação = observação com exame seriado (ou laparoscopia/TC)',
        'Evisceração indica laparotomia: cobrir com compressa úmida estéril e não reintroduzir na emergência',
        'Ferimento na transição toracoabdominal (abaixo do 4º EIC anterior/mamilo): pensar em diafragma e abdome; laparoscopia é boa opção no estável',
        'Ferimento cardíaco/tamponamento: tríade de Beck e FAST com líquido pericárdico; conduta é toracotomia/esternotomia, e a pericardiocentese é só ponte',
        'Toracotomia de reanimação: mais indicada no penetrante torácico com parada testemunhada ou recente',
        'Pescoço: sinais duros = cirurgia; estável sem sinais duros = angiotomografia, independentemente da zona',
        'Antes x agora: provas antigas pediam conduta por zona (zona II = explorar sempre); hoje a conduta segue os sinais',
        'Escore ABC ≥2 ativa transfusão maciça; ácido tranexâmico até 3 h',
        'Pegadinha: retirar a faca "para avaliar a profundidade" na emergência'
      ] }
    },

    case: {
      title: 'Facada no abdome com faca cravada',
      intro: 'Homem, 28 anos, esfaqueado durante uma briga. Chega com uma faca cravada no flanco esquerdo e uma segunda ferida pequena no dorso, percebida só ao rolar o paciente. Consciente, pálido e sudoreico.',
      vitals: { PA: '86×52', FC: '124', FR: '24', SatO2: '96%', Glasgow: '15' },
      steps: [
        {
          prompt: 'Qual o escore ABC deste paciente e o que ele indica?',
          options: [
            { t: '1 ponto: só o mecanismo penetrante; não ativar transfusão maciça', fb: 'PAS ≤90 e FC ≥120 também pontuam.', s: 'c22-e' },
            { t: '3 pontos (penetrante, PAS ≤90, FC ≥120): ativar o protocolo de transfusão maciça já', ok: true, fb: 'Penetrante + PAS 86 + FC 124 = 3; com ≥2, ative o protocolo cedo, antes do colapso. O FAST ainda pode somar.', s: 'c22-e' },
            { t: 'Esperar o FAST para calcular o escore', fb: 'Com 3 pontos já presentes, o escore está ≥2 sem precisar do FAST.', s: 'c22-e' },
            { t: '2 pontos: iniciar 2 L de cristaloide antes do sangue', fb: 'O escore é 3, e a reposição deve ser com sangue, não com cristaloide.', s: 'c22-e' }
          ]
        },
        {
          prompt: 'Um colega quer retirar a faca para avaliar a profundidade da ferida. Qual a conduta com o objeto?',
          options: [
            { t: 'Retirar devagar, com compressão logo em seguida', fb: 'A faca pode estar tamponando um vaso; retirar longe do centro cirúrgico pode causar sangramento incontrolável.', s: 'c22-c' },
            { t: 'Girar a faca para avaliar a direção do trajeto', fb: 'Movimentar o objeto aumenta a lesão.', s: 'c22-c' },
            { t: 'Explorar a ferida com o dedo ao lado da lâmina', fb: 'Não se explora a ferida para "ver a profundidade" na emergência.', s: 'c22-c' },
            { t: 'Manter a faca, estabilizá-la com curativo volumoso e retirá-la no centro cirúrgico com controle vascular', ok: true, fb: 'Objeto empalado é retirado no centro cirúrgico, com controle vascular proximal e distal.', s: 'c22-c' }
          ]
        },
        {
          prompt: 'Como documentar as duas feridas no prontuário?',
          options: [
            { t: '"Ferida de entrada no flanco e de saída no dorso"', fb: 'Não se afirma entrada ou saída: a distinção é difícil, muitas vezes errada e tem consequências legais.', s: 'c22-b' },
            { t: 'Diagramar e descrever cada ferida (localização, tamanho e aspecto), sem classificar como entrada ou saída', ok: true, fb: 'Descreva e diagrame; a trajetória estimada orienta as cavidades em risco.', s: 'c22-b' },
            { t: 'Registrar só a ferida com a faca, que é a principal', fb: 'A ferida do dorso muda a trajetória e as estruturas em risco; tudo deve ser documentado.', s: 'c22-b' },
            { t: 'Esperar o laudo do IML para documentar', fb: 'A documentação clínica é feita no atendimento, por diagrama e descrição.', s: 'c22-b' }
          ]
        },
        {
          prompt: 'A equipe sugere colar cervical e prancha rígida antes de seguir. O paciente não tem déficit neurológico. O que fazer?',
          options: [
            { t: 'Colocar colar e prancha por precaução', fb: 'No penetrante sem déficit, a restrição de rotina atrasa o atendimento e não traz benefício.', s: 'c22-e' },
            { t: 'Não fazer restrição de coluna de rotina e seguir com o atendimento e a transfusão', ok: true, fb: 'Restrição de movimento da coluna de rotina não é recomendada no penetrante sem déficit.', s: 'c22-e' },
            { t: 'Pedir TC de coluna antes de seguir', fb: 'Paciente instável não vai à TC; isso só atrasa o controle do sangramento.', s: 'c22-e' },
            { t: 'Colocar apenas o colar cervical', fb: 'Não há indicação de restrição de rotina no penetrante sem déficit.', s: 'c22-e' }
          ]
        },
        {
          prompt: 'Após o primeiro hemoderivado, PA 84×50 e FC 128. Qual meta pressórica até o controle do sangramento?',
          vitals: { PA: '84×50', FC: '128' },
          options: [
            { t: 'Normalizar a PA rapidamente com cristaloide', fb: 'Pressão alta demais desloca coágulos frágeis, e cristaloide dilui fatores da coagulação.', s: 'c22-e' },
            { t: 'Hipotensão permissiva com sangue até o controle cirúrgico do sangramento', ok: true, fb: 'Até o controle do sangramento, hipotensão permissiva; repor com sangue, não cristaloide.', s: 'c22-e' },
            { t: 'Vasopressor em dose alta para PAS acima de 140 mmHg', fb: 'Elevar a pressão antes de controlar o sangramento desloca coágulos.', s: 'c22-e' },
            { t: 'Suspender a reposição até a cirurgia', fb: 'O paciente está em choque: hipotensão permissiva não é suspender a reposição.', s: 'c22-e' }
          ]
        },
        {
          prompt: 'O hospital não tem cirurgião disponível nas próximas horas. Qual a conduta?',
          options: [
            { t: 'Fazer TC de abdome e tórax antes de transferir', fb: 'Não atrasar a transferência com exames que não mudam a conduta.', s: 'c22-e' },
            { t: 'Observar com exame seriado até o cirurgião chegar', fb: 'O paciente está instável com objeto empalado; observar não é seguro sem recurso definitivo.', s: 'c22-prova' },
            { t: 'Transferência precoce para o centro de trauma, mantendo a faca estabilizada e a reposição com sangue', ok: true, fb: 'Quando o hospital não tem recurso definitivo, a transferência é precoce e não espera exames desnecessários.', s: 'c22-e' },
            { t: 'Retirar a faca antes do transporte, para não deslocar no caminho', fb: 'A faca deve ser estabilizada e retirada só no centro cirúrgico.', s: 'c22-c' }
          ]
        }
      ]
    },

    handoff: {
      prompt: 'Passe o caso para o centro de trauma que vai receber o paciente, no formato S-xABCDE-BAR. Escreva com suas palavras, sem olhar o prontuário.',
      keys: [
        { t: 'Situação: homem de 28 anos com facada, faca cravada no flanco esquerdo e segunda ferida no dorso', s: 'c22-b' },
        { t: 'x: faca mantida e estabilizada com curativo volumoso; retirada só no centro cirúrgico', s: 'c22-c' },
        { t: 'C: choque, escore ABC 3, protocolo de transfusão maciça ativado, hipotensão permissiva com sangue', s: 'c22-e' },
        { t: 'Feridas diagramadas e descritas, sem classificar entrada e saída; trajetória estimada', s: 'c22-b' },
        { t: 'Sem restrição de coluna de rotina (penetrante sem déficit)', s: 'c22-e' },
        { t: 'Ácido tranexâmico até 3 h do trauma', s: 'c22-prova' },
        { t: 'Recomendação: laparotomia/controle do sangramento; transferência precoce sem exames que não mudam a conduta', s: 'c22-e' }
      ]
    }
  }
});
