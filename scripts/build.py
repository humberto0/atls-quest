#!/usr/bin/env python3
"""Monta o jogo num único index.html autocontido (conteúdo, arte e código embutidos).

Uso: python3 scripts/build.py
Saída: index.html na raiz do repositório (servido pelo GitHub Pages).
"""
import base64
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
CONTENT_PARTS = [SRC / "content" / f"part{i}.js" for i in range(1, 5)]
SIM_PARTS = [SRC / "content" / f"sim{i}.js" for i in range(1, 5)]
STUDY_PARTS = sorted((SRC / "content").glob("study*.js"))
SKILL_PARTS = sorted((SRC / "content").glob("skills_*.js"))


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def build_art_script() -> str:
    art = {
        image.stem: "data:image/webp;base64," + base64.b64encode(image.read_bytes()).decode()
        for image in sorted((SRC / "art").rglob("*.webp"))
    }
    return "window.ART=" + json.dumps(art) + ";"


def ensure_no_closing_script(name: str, code: str) -> None:
    if "</script" in code.lower():
        raise ValueError(f"{name} contém </script> e quebraria o HTML embutido")


def build() -> Path:
    content = "\n".join(read_text(part) for part in CONTENT_PARTS + [p for p in SIM_PARTS if p.exists()] + STUDY_PARTS + SKILL_PARTS)
    game = read_text(SRC / "game.js")
    ensure_no_closing_script("conteúdo", content)
    ensure_no_closing_script("game.js", game)

    css = read_text(SRC / "style.css")
    html = (
        f"{read_text(SRC / 'head.html')}<style>{css}</style>\n</head>\n<body>\n"
        f"{read_text(SRC / 'body.html')}\n"
        f"<script>{content}</script>\n<script>{build_art_script()}</script>\n<script>{game}</script>\n"
        "</body>\n</html>\n"
    )
    output = ROOT / "index.html"
    output.write_text(html, encoding="utf-8")
    return output


if __name__ == "__main__":
    out = build()
    print(f"ok: {out.relative_to(ROOT)} ({out.stat().st_size / 1024:.0f} KB)")
