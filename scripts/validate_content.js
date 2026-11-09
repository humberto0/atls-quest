// Valida a estrutura do conteúdo dos 24 capítulos.
// Uso: node scripts/validate_content.js
const path = require('path');
global.window = {};
const fs = require('fs');
for (let i = 1; i <= 4; i++) {
  require(path.join(__dirname, '..', 'src', 'content', `part${i}.js`));
  const sim = path.join(__dirname, '..', 'src', 'content', `sim${i}.js`);
  if (fs.existsSync(sim)) require(sim);
}

const chapters = window.ATLS;
const errors = [];
for (const c of chapters) {
  if (c.text.length < 4) errors.push(`cap ${c.n}: menos de 4 seções`);
  if (c.recall.length < 8) errors.push(`cap ${c.n}: menos de 8 perguntas de recall`);
  if (c.cards.length < 10) errors.push(`cap ${c.n}: menos de 10 flashcards`);
  if (c.battle.length < 8) errors.push(`cap ${c.n}: menos de 8 questões de chefão`);
  for (const b of c.battle) if (b.o.length !== 4 || b.c < 0 || b.c > 3) errors.push(`cap ${c.n}: questão inválida "${b.q.slice(0, 40)}"`);
  for (const r of c.recall) if (!c.text.find(s => s.id === r.s)) errors.push(`cap ${c.n}: recall aponta para seção inexistente ${r.s}`);
}
const simulado = window.ATLS_SIM || [];
for (const q of simulado) {
  if (!chapters.find(c => c.n === q.n)) errors.push(`simulado: capítulo inexistente ${q.n}`);
  if (q.o.length !== 4 || q.c < 0 || q.c > 3) errors.push(`simulado cap ${q.n}: questão inválida "${q.q.slice(0, 40)}"`);
}
const numbers = chapters.map(c => c.n).sort((a, b) => a - b);
if (numbers.join() !== Array.from({ length: 24 }, (_, i) => i + 1).join()) errors.push('capítulos não cobrem 1–24');

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`ok: ${chapters.length} capítulos válidos, ${simulado.length} questões no simulado`);
