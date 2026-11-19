// menu.js

// lista com os alunos da turma (cada aluno tem nome, matrícula e notas)
let alunos = [];


// ---------- Funções de apoio ----------

function mediaDoAluno(aluno) {
    if (aluno.notas.length == 0) {
        return 0;
    }
    let soma = 0;
    for (let i = 0; i < aluno.notas.length; i++) {
        soma = soma + aluno.notas[i];
    }
    return Math.round(soma / aluno.notas.length * 100) / 100;
}

function situacaoDoAluno(aluno) {
    if (aluno.notas.length == 0) {
        return "Sem notas";
    }
    if (mediaDoAluno(aluno) >= 5) {
        return "Aprovado";
    }
    return "Reprovado";
}

// coloca os nomes dos alunos nas duas listas de escolha
function atualizarListas() {
    let listaNota = document.getElementById("lista-nota");
    let listaRemover = document.getElementById("lista-remover");
    listaNota.innerHTML = "";
    listaRemover.innerHTML = "";

    for (let i = 0; i < alunos.length; i++) {
        listaNota.innerHTML += "<option value='" + i + "'>" + alunos[i].nome + "</option>";
        listaRemover.innerHTML += "<option value='" + i + "'>" + alunos[i].nome + "</option>";
    }
}

function gerarRelatorio() {
    let texto = "Turma 8º A - Carlos Souza\n";
    let somaDasMedias = 0;

    for (let i = 0; i < alunos.length; i++) {
        let media = mediaDoAluno(alunos[i]);
        texto += alunos[i].nome + ": média " + media + " (" + situacaoDoAluno(alunos[i]) + ")\n";
        somaDasMedias = somaDasMedias + media;
    }

    let mediaDaTurma = 0;
    if (alunos.length > 0) {
        mediaDaTurma = Math.round(somaDasMedias / alunos.length * 100) / 100;
    }
    texto += "Média da turma: " + mediaDaTurma;

    document.getElementById("texto-relatorio").innerText = texto;
}


// ---------- Menu: mostra uma seção e esconde as outras ----------

function mostrar(id) {
    document.getElementById("matricular").style.display = "none";
    document.getElementById("nota").style.display = "none";
    document.getElementById("relatorio").style.display = "none";
    document.getElementById("remover").style.display = "none";

    document.getElementById(id).style.display = "block";
}

document.getElementById("botao-matricular").onclick = function () {
    mostrar("matricular");
};

document.getElementById("botao-nota").onclick = function () {
    mostrar("nota");
};

document.getElementById("botao-relatorio").onclick = function () {
    gerarRelatorio();
    mostrar("relatorio");
};

document.getElementById("botao-remover").onclick = function () {
    mostrar("remover");
};


// ---------- Matricular aluno ----------

document.getElementById("botao-salvar-aluno").onclick = function () {
    let nome = document.getElementById("nome-aluno").value.trim();
    let matricula = document.getElementById("matricula-aluno").value.trim();
    let mensagem = document.getElementById("mensagem-matricular");

    if (nome == "") {
        mensagem.innerText = "O nome não pode ser vazio.";
        return;
    }

    for (let i = 0; i < alunos.length; i++) {
        if (alunos[i].matricula == matricula) {
            mensagem.innerText = alunos[i].nome + " já está na turma.";
            return;
        }
    }

    alunos.push({ nome: nome, matricula: matricula, notas: [] });
    atualizarListas();
    mensagem.innerText = nome + " foi matriculado!";
    document.getElementById("nome-aluno").value = "";
    document.getElementById("matricula-aluno").value = "";
};


// ---------- Lançar nota ----------

document.getElementById("botao-salvar-nota").onclick = function () {
    let mensagem = document.getElementById("mensagem-nota");
    let posicao = document.getElementById("lista-nota").value;
    let texto = document.getElementById("valor-nota").value;

    if (alunos.length == 0) {
        mensagem.innerText = "Matricule um aluno primeiro.";
        return;
    }

    let nota = Number(texto);
    if (texto == "" || nota < 0 || nota > 10) {
        mensagem.innerText = "A nota deve estar entre 0 e 10.";
        return;
    }

    alunos[posicao].notas.push(nota);
    mensagem.innerText = "Nota " + nota + " lançada para " + alunos[posicao].nome + ".";
    document.getElementById("valor-nota").value = "";
};


// ---------- Remover aluno ----------

document.getElementById("botao-salvar-remocao").onclick = function () {
    let mensagem = document.getElementById("mensagem-remover");
    let posicao = document.getElementById("lista-remover").value;

    if (alunos.length == 0) {
        mensagem.innerText = "Não há alunos na turma.";
        return;
    }

    let nome = alunos[posicao].nome;
    alunos.splice(posicao, 1);
    atualizarListas();
    mensagem.innerText = nome + " foi removido da turma.";
};
