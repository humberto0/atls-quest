# ATLS Quest · Plantão do Trauma

Jogo de estudo em pixel art sobre os **24 capítulos do ATLS® 11ª edição** (American College of Surgeons, 2025). Inspirado no [Dermato Quest](https://moreiralacid.github.io/medcid-plano-de-estudos/dermato-quest/).

Protagonistas: **Élida** e **Humberto**. Mentora: Dra. Aurora.

## Como funciona

O mapa segue as três seções do manual. Cada capítulo tem três fases:

1. **Active Recall** — texto de estudo e 8 perguntas para responder com suas palavras, com gabarito e "Achar no texto".
2. **Flashcards** — 10 cartões; cada um precisa de 3 acertos seguidos.
3. **Chefão** — 8 questões de múltipla escolha com barra de vida, combo e golpe crítico.

Extras: chefão final "A Hora de Ouro" (20 questões de todos os capítulos) e simulado de 40 questões com resultado por capítulo (meta de 80%).

O progresso fica salvo no navegador (`localStorage`).

## Estrutura

```
src/
  content/part1..4.js   conteúdo dos capítulos 1–6, 7–12, 13–18, 19–24
  art/*.webp            personagens, chefões e cenários
  game.js               motor do jogo
  base.css, theme.css   estilos
  head.html, body.html  marcação
scripts/
  build.py              monta o index.html autocontido
  validate_content.js   valida a estrutura do conteúdo
docs/content-spec.md    formato e regras do conteúdo
index.html              jogo pronto (gerado; servido pelo GitHub Pages)
```

## Desenvolvimento

```bash
node scripts/validate_content.js   # confere o conteúdo
python3 scripts/build.py           # gera index.html
```

Depois de mudar qualquer arquivo em `src/`, rode o build e faça commit do `index.html` junto.

## Aviso

Material de estudo baseado no ATLS® 11ª ed. e em resumos públicos das mudanças. Não substitui o manual oficial. ATLS® é marca registrada do American College of Surgeons. Arte gerada com IA.
