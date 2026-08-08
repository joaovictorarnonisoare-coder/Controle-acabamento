# Painéis

## 🎓 `index.html` — Controle da faculdade até a formatura

App **de arquivo único**, offline e sem dependências externas. Funciona no computador e no
**iPhone/Android**, onde pode ser instalado na tela de início como um aplicativo de verdade.

### 📱 Como usar no iPhone

1. **Publique o painel** (uma vez só): no GitHub, vá em **Settings › Pages › Source: “Deploy from a
   branch”**, escolha a branch `claude/academic-control-dashboard-twbcfn` (ou `main`, depois de
   fazer o merge) e a pasta `/ (root)`. Salve e espere ~1 minuto.
   O endereço fica: `https://joaovictorarnonisoare-coder.github.io/Controle-acabamento/`
2. **Abra esse endereço no Safari** do iPhone (precisa ser o Safari).
3. Toque em **Compartilhar ⤴︎ › Adicionar à Tela de Início › Adicionar**.
4. Pronto: ícone próprio, tela cheia, **funciona sem internet** e os dados ficam guardados no aparelho.

> Sem publicar no GitHub Pages também dá para abrir o arquivo pelo app **Arquivos**, mas aí o Safari
> limita o armazenamento — a instalação pela web é o caminho recomendado.

**Alertas no celular.** Enquanto o painel estiver aberto, os avisos chegam normalmente (com som e
notificação). Como o iOS congela o que está em segundo plano, para lembretes que tocam **com o app
fechado** use **Ajustes › Enviar agenda para o Calendário** — cada prova/entrega vira um evento no
Calendário do iPhone levando junto os lembretes escolhidos (1 semana antes, 1 dia antes, 1 hora
antes…). Tarefas individuais também têm “Enviar ao Calendário” no menu **⋮**.

### O que tem dentro

| Tela | Para que serve |
|---|---|
| **Visão geral** | O que é hoje, o que atrasou, contagem regressiva das provas, carga das próximas semanas e gráficos |
| **Calendário** | Mês / semana / agenda. Toque em um dia para ver as aulas e marcar compromissos |
| **Tarefas** | Lista agrupada por prazo ou quadro (kanban); filtros por status, prioridade e disciplina |
| **Horários** | Grade semanal montada automaticamente a partir das aulas das disciplinas |
| **Disciplinas** | Professor, código, carga horária, cor, aulas, avaliações com peso e faltas |
| **Notas & faltas** | Média ponderada, **quanto você precisa tirar no que falta para passar** e margem de faltas |
| **Formatura** | Progresso do curso, histórico por período, média acumulada e contagem regressiva do canudo |
| **Foco & estudos** | Pomodoro com registro automático das horas por disciplina (continua correndo com o app fechado) |
| **Arquivos** | Todos os PDFs, fotos e trabalhos anexados nas tarefas, em um só lugar |
| **Ajustes** | Alertas, tema, instalação no celular, backup e exportações |

**Cada tarefa tem** tipo, disciplina, prioridade (baixa → urgente), status (pendente, em andamento,
aguardando, concluída, cancelada — atrasada é calculada sozinha), data e hora, local, descrição,
checklist, observações datadas, anexos (PDF, imagem, Word, Excel… e **foto tirada na hora** pelo
celular), repetição (diária, semanal, quinzenal, mensal, dias úteis) e **lembretes múltiplos** que
podem **insistir** numa frequência escolhida até você concluir.

**Adição rápida** — escreva na barra do topo e pressione Enter:

```
Prova de Cálculo @calc 12/09 19:00 !urgente #prova
```

`@` disciplina · `!` prioridade · `#` tipo · data (`12/09`, `hoje`, `amanhã`, `sexta`, `+3d`) · hora (`19:00`, `19h`).

**Atalhos (computador)**: `Ctrl+K` adição rápida · `N` nova tarefa · `/` buscar · `1`–`9` trocar de tela · `Esc` fechar.

### Backup — importante

Os dados ficam **no aparelho**, nunca na internet. Use **Ajustes › Baixar backup** de vez em quando:
o `.json` guarda até os anexos e restaura tudo em outro aparelho (no iPhone, a folha de
compartilhamento permite salvar em Arquivos/iCloud). Também dá para exportar a agenda em `.ics` e as
tarefas em `.csv`.

### Arquivos do app

`index.html` (o painel inteiro) · `manifest.webmanifest` e `sw.js` (instalação e funcionamento
offline) · `icon-*.png`, `favicon.svg` (ícones).

---

## 🏗️ `controle acabamento` — Painel interativo de andares (obras)

Dashboard de acompanhamento de acabamento por andar/torre.
