#!/usr/bin/env python3
"""Gera a versão 'corpo da página' do app para publicar como Artifact.

O Artifact injeta seu próprio <!doctype>/<head>/<body>, então aqui só extraímos
o trecho entre os marcadores de index.html. Uso:

    python3 tools/build-artifact.py [saida.html]
"""
import re, sys, pathlib

SRC = pathlib.Path(__file__).resolve().parent.parent / "index.html"
OUT = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else "artifact.html")

html = SRC.read_text(encoding="utf-8")

def slice_between(a, b):
    m = re.search(re.escape(a) + r"(.*?)" + re.escape(b), html, re.S)
    if not m:
        sys.exit("marcador ausente em index.html: " + a)
    return m.group(1).strip()

head = slice_between("<!--#A_START-->", "<!--#A_HEAD_END-->")
body = slice_between("<!--#A_BODY_START-->", "<!--#A_END-->")

OUT.write_text(head + "\n\n" + body + "\n", encoding="utf-8")
print(f"{OUT} — {OUT.stat().st_size} bytes")
