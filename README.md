# Painéis

## 🎓 `painel-academico.html` — Controle da faculdade até a formatura

Aplicativo de **arquivo único**: basta abrir o arquivo no navegador (duplo clique) — não precisa
instalar nada, não precisa de internet e nenhum dado sai do seu computador.

**O que tem dentro**

| Tela | Para que serve |
|---|---|
| **Visão geral** | O que é hoje, o que atrasou, contagem regressiva das provas, carga das próximas semanas e gráficos de situação |
| **Calendário** | Mês / semana / agenda. Clique em um dia para ver as aulas e marcar compromissos |
| **Tarefas** | Lista agrupada por prazo ou quadro (kanban) com arrastar e soltar; filtros por status, prioridade e disciplina |
| **Horários** | Grade semanal montada automaticamente a partir das aulas das disciplinas |
| **Disciplinas** | Professor, código, carga horária, cor, aulas, avaliações com peso e faltas |
| **Notas & faltas** | Média ponderada, **quanto você precisa tirar no que falta para passar** e margem de faltas |
| **Formatura** | Progresso do curso, histórico por período, média acumulada e contagem regressiva do canudo |
| **Foco & estudos** | Pomodoro com registro automático das horas por disciplina, sequência de dias e estatísticas |
| **Arquivos** | Todos os PDFs, fotos e trabalhos anexados nas tarefas, em um só lugar |
| **Ajustes** | Alertas, tema, backup, exportação e dados de exemplo |

**Cada tarefa tem** tipo, disciplina, prioridade (baixa → urgente), status (pendente, em andamento,
aguardando, concluída, cancelada — atrasada é calculada sozinha), data e hora, local, descrição,
checklist, observações datadas, anexos (PDF, imagem, Word, Excel…), repetição (diária, semanal,
quinzenal, mensal, dias úteis) e **lembretes múltiplos** (de 5 minutos a 2 semanas antes) que ainda
podem **insistir** numa frequência escolhida até você concluir.

**Atalhos**: `Ctrl+K` adição rápida · `N` nova tarefa · `/` buscar · `1`–`9` trocar de tela · `Esc` fechar.

**Adição rápida** — escreva na barra do topo e pressione Enter:

```
Prova de Cálculo @calc 12/09 19:00 !urgente #prova
```

`@` disciplina · `!` prioridade · `#` tipo · data (`12/09`, `hoje`, `amanhã`, `sexta`, `+3d`) · hora (`19:00`, `19h`).

**Importante:** os dados ficam salvos no navegador (IndexedDB) do computador onde você abrir o
arquivo. Use **Ajustes › Baixar backup** de vez em quando — o `.json` guarda até os anexos e pode ser
restaurado em outra máquina. Dá também para exportar a agenda em `.ics` (Google Agenda, Outlook,
Apple Calendar) e as tarefas em `.csv`.

Os alertas do navegador chegam enquanto a página estiver aberta (pode ficar em segundo plano) —
vale deixar a aba fixada.

---

## 🏗️ `controle acabamento` — Painel interativo de andares (obras)

Dashboard de acompanhamento de acabamento por andar/torre.
