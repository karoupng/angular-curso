#  Resumo do Aprendizado de Angular & Node.js

Este repositório contém as minhas anotações e o entendimento prático/histórico sobre o desenvolvimento com Angular e a infraestrutura que viabiliza o ecossistema JavaScript moderno.

---

## Guia de Estudo: Prática e Conceitos

### Pré-requisitos para Rodar o Angular
Para rodar o Angular, é preciso:
* **Node.js**
* **Angular CLI** (*Command Line Interface* / Interface de Linha de Comando)
* **VS Code**

### Fundamentos do Node.js e NPM

* **Node.js:** A máquina passa a ser um servidor e faz requisições *HTTP* (Protocolo de Transferência de Hipertexto). Ele executa código *JavaScript* na máquina; antigamente, apenas os navegadores rodavam *JavaScript*.
* **Ryan Dahl:** Pegou a *Engine* (Motor) V8 do Google Chrome e a tornou local para rodar na máquina.
* **NPM (*Node Package Manager*):** Tem a função de gerenciar pacotes, cuidando da gestão de dependências. Ele consome códigos prontos já criados por alguém. O NPM só funciona em conjunto com o Node.js.
  * **Criador do NPM:** Isaac Schlueter.
* **Pasta `node_modules`:** Possui as minhas dependências e seus pacotes (considerados também as dependências delas).

#### Divisão de Dependências no Desenvolvimento

| Tipo de Dependência | Descrição |
| :--- | :--- |
| **Dependencies** | Códigos que vão para a produção. |
| **Dev Dependencies** | Apenas utilizados na IDE (*Integrated Development Environment* / Ambiente de Desenvolvimento Integrado). |

---

### O Ecossistema Angular e o Fluxo de Compilação

* **Angular CLI:** *Command Line Interface* (Interface de Linha de Comando).
* **Ng Serve:** Realiza o *build* (construção do projeto); o navegador pega o servidor local para rodar o `index.html`.
* **Compiler:** Compilação. Transforma o código Angular em HTML, CSS e JavaScript.

>  **Observação Crucial:** O navegador não entende Angular, apenas JavaScript, HTML e CSS. Por isso, o compilador converte todo o Angular em JS, HTML e CSS.

####  A Analogia da Receita de Bolo
* **Ingredientes:** Todo o código Angular.
* **Confeiteiro:** Bibliotecas no Angular + Angular CLI. O Angular CLI dita as ações, por isso é um "confeiteiro".
* **Loja e Cozinha:** Seria o Node.js : mistura os ingredientes e mostra pronto para alguém consumir. O Node.js traz todas as funcionalidades para executar o pacote em JavaScript.
* **Consumo:** `localhost:4200`

---

##  Linha do Tempo: A História do Node.js
*Baseado no documentário "Node.js: An Origin Story"*

### 🔹 2008: O Ponto de Partida e o Motor V8
* **O Cenário:** O *JavaScript* era considerado lento. Antigamente, o navegador lia frase por frase (interpretação).
* **A Mudança:** Em 2008, a Google lançou o Chrome com o motor V8. O V8 traduz tudo de uma vez e escreve uma versão em binário antes da execução.
* **A Tecnologia:** O V8 utiliza uma técnica chamada **JIT Compilation** (*Just-In-Time Compilation* / Compilação em Tempo de Execução).

### 🔹 O Nascimento do Node.js
* **A Sacada de Ryan Dahl:** Ryan pegou o V8 e adicionou ferramentas que o navegador até então não tinha, como a capacidade de ler arquivos do disco rígido ou se comunicar com o banco de dados.
* **Revolução de Arquitetura:** Antes do Node, os servidores eram "Bloqueantes" atendiam apenas um cliente por vez. O Node introduziu o **Non-Blocking I/O** (*Input/Output* Não Bloqueante), um modelo de sistema que não precisa esperar uma tarefa terminar para ler a próxima (como na leitura de arquivos, por exemplo).
* **Impacto no Mercado:** Ajudou na escalabilidade de grandes empresas. 
  * *Vantagens:* Redução de máquinas (casos onde caiu de 15 para 2 máquinas), sistemas 2x mais rápidos e alta capacidade para lidar com muito mais usuários simultâneos.

### 🔹 Crise de Crescimento e a Era Joyent
* **A Venda:** Em um momento da história, o Node estava em "Compilação Cruzada + máquina virtual rodando". Ryan vendeu a empresa para a **Joyent**.
* **Liderança de Isaac:** Isaac (criador do NPM) ficou como líder por um bom tempo. Algum tempo depois, Isaac saiu da empresa e ela ficou sob o comando de **Fontaine**.
* **A Chegada do Jenkins:** Fontaine colocou todo o projeto dentro do **Jenkins**. O Node era difícil de atualizar pois rodava em muitos sistemas diferentes, tornando impossível a compilação cruzada (criar o programa para vários sistemas a partir de um só).
* **A Solução via CI:** O Jenkins trouxe a *Continuous Integration* (Integração Contínua). Ele funcionava como um robô inspetor de qualidade, analisando as versões dos programadores para construir o Node.js em todos os Sistemas Operacionais existentes através de milhares de testes.

### 🔹 O Conflito e a Vitória da Comunidade Dev
* **Centralização:** Fontaine tinha uma forma diferente de liderar, o que não compactuava com a cultura da empresa do Node.js em seu auge. O Node.js deixou de ser código aberto para se tornar corporativo.
* **A Reação dos Devs:** A comunidade não gostou nada; o Node.js começou a ficar obsoleto. Eles queriam fazer uma bifurcação para "devolver à comunidade". Tiveram a grandiosa ideia de fazer um **Fork** (bifurcação do projeto original) para que eles mesmos atualizassem e contribuíssem com o projeto.
* **A Resolução:** Fontaine não gostou nada e pensou até em processar, mas o Node.js nasceu código aberto e ele não tinha poder sobre isso. Depois de muita luta contra o novo líder Fontaine que atuava como **BDFL** (*Benevolent Dictator For Life* / Ditador Benevolente Vitalício) , a comunidade Dev venceu. Fontaine teve que integrar a versão atualizada dos desenvolvedores como a versão oficial do Node.js.
