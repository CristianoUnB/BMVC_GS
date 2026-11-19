<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gerenciador de Sala - Menu Principal</title>
    <link rel="stylesheet" type="text/css" href="/static/css/menu.css?v=2">
</head>
<body>

    <div class="caixa">
        <h1>Gerenciador de Sala</h1>
        <h2>Menu Principal</h2>
        <p>
            Esta página é a versão web do meu gerenciador de sala.
            O objetivo dela é ajudar o professor a matricular alunos,
            lançar notas e ver o relatório da turma.
        </p>
        <p class="turma">Turma 8º A - Professor Carlos Souza (Matemática)</p>
    </div>

    <div class="caixa">
        <h3>Escolha uma opção:</h3>
        <div class="menu">
            <button id="botao-matricular">Matricular aluno</button>
            <button id="botao-nota">Lançar nota</button>
            <button id="botao-relatorio">Relatório da turma</button>
            <button id="botao-remover">Remover aluno</button>
        </div>
    </div>

    <div class="caixa secao" id="matricular">
        <h3>Matricular aluno</h3>
        <input type="text" id="nome-aluno" placeholder="Nome do aluno">
        <input type="text" id="matricula-aluno" placeholder="Matrícula">
        <br>
        <button id="botao-salvar-aluno">Matricular</button>
        <p class="mensagem" id="mensagem-matricular"></p>
    </div>

    <div class="caixa secao" id="nota">
        <h3>Lançar nota</h3>
        <select id="lista-nota"></select>
        <input type="number" id="valor-nota" placeholder="Nota de 0 a 10" min="0" max="10" step="0.5">
        <br>
        <button id="botao-salvar-nota">Lançar</button>
        <p class="mensagem" id="mensagem-nota"></p>
    </div>

    <div class="caixa secao" id="relatorio">
        <h3>Relatório da turma</h3>
        <p id="texto-relatorio"></p>
    </div>

    <div class="caixa secao" id="remover">
        <h3>Remover aluno</h3>
        <select id="lista-remover"></select>
        <br>
        <button id="botao-salvar-remocao">Remover</button>
        <p class="mensagem" id="mensagem-remover"></p>
    </div>

    <script src="/static/js/menu.js?v=2"></script>
</body>
</html>
