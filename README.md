# Ronda de Acabamento

App de campo para registrar defeitos de acabamento na obra: você acha um problema,
escolhe a aba (Forros, Pintura, Pisos…), preenche torre/bloco/pavimento/apartamento,
anexa foto e escreve a observação. Depois filtra por aba e vê tudo que está pendente.

Feito para uso no iPhone: página única, funciona offline e pode ser instalada na
tela de início como se fosse um aplicativo.

## Arquivos

| Arquivo | Para que serve |
|---|---|
| `index.html` | O app inteiro — layout, lógica e armazenamento |
| `manifest.webmanifest` | Faz o iPhone tratar como app ao adicionar à tela de início |
| `sw.js` | Cache para o app abrir sem sinal dentro da obra |
| `icon-*.png` | Ícone da tela de início |
| `tools/build-artifact.py` | Gera a versão do app para publicar como Artifact |
| `controle acabamento` | Painel de andares que já existia no repositório (não foi alterado) |

## Colocar no iPhone

1. No GitHub: **Settings → Pages → Source: Deploy from a branch**, escolha a branch
   e a pasta `/ (root)`, e salve.
2. Aguarde um ou dois minutos e abra o endereço que o GitHub mostrar
   (`https://<usuário>.github.io/<repositório>/`) no **Safari** do iPhone.
3. Toque no botão **Compartilhar** → **Adicionar à Tela de Início**.

A partir daí ele abre em tela cheia, sem barra do navegador, e funciona sem internet.

> O botão **Adicionar à Tela de Início** só existe no Safari. Se abrir pelo Chrome
> do iPhone, o app funciona, mas não instala.

## Onde ficam os dados

Tudo é gravado **no próprio aparelho**, dentro do navegador: os registros em
`localStorage` e as fotos em `IndexedDB` (cada foto é reduzida para ~1600 px antes
de gravar, com uma miniatura separada para a lista).

Isso tem duas consequências que valem saber:

- **Nada sai do celular.** Não há servidor, conta ou sincronização. Ninguém mais vê
  os registros, e eles não aparecem em outro aparelho.
- **O iOS pode limpar esses dados.** O Safari apaga dados de sites que ficam muito
  tempo sem uso, e "Limpar Histórico e Dados" apaga na hora. Instalar na tela de
  início reduz bastante esse risco, mas não elimina.

Por isso, use **Menu → Baixar backup** de vez em quando. Ele gera um `.json` com os
registros e as fotos, que você salva em Arquivos ou iCloud e recarrega depois em
**Restaurar backup** — inclusive num celular novo.

Precisa de vários celulares vendo a mesma lista? Aí não dá para ser só o aparelho:
seria preciso um banco de dados (Supabase, Firebase ou similar). Dá para acrescentar
depois sem jogar fora o que está aqui.

## Ajustar à sua obra

- **Menu → Abas de defeito**: criar, renomear e excluir categorias.
- **Menu → Torres e blocos**: mudar o nome da obra, as torres, os blocos e os
  pavimentos. Vem preenchido com as 9 torres e 18 blocos do painel de andares.
- **Menu → Exportar planilha (CSV)**: só os dados, para abrir no Excel.
- Botão de impressora no topo: gera um relatório com fotos a partir do filtro que
  estiver ativo. No iPhone, dá para salvar como PDF pela tela de compartilhamento.

## Publicar como Artifact

```bash
python3 tools/build-artifact.py artifact.html
```

O script extrai o trecho entre os marcadores `<!--#A_START-->` e `<!--#A_END-->` de
`index.html`, porque o Artifact injeta o próprio `<head>`/`<body>`. Nessa versão não
existe service worker nem instalação na tela de início — é uma prévia para abrir e testar.
