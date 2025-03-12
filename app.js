//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Implemente uma função para adicionar amigos
// Desenvolva uma função que permita ao usuário inserir um nome no campo de texto e adicioná-lo à lista de amigos criada anteriormente.
// Tarefas específicas:
// Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
// Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
// Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
// Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
// Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
// let amigos = [];

// function adicionarAmigo() {
//     let nomeDigitado = document.querySelector('input').value;
//     if ( nomeDigitado == '') {
//         alert ('Por favor, insira um nome');
//     } else {
//     amigos.push (nomeDigitado);
//     console.log ("Lista de amigos:", amigos);
//     console.log("Total de amigos: ", amigos.length);
//     limparCampo();
//     listarAmigos();
//     }
// }   

// function listarAmigos() {
//     let lista = document.querySelector('#listaAmigos'); 
//     let conteudoLista = '';

//     for (let i = 0; i < amigos.length; i++) {
//         conteudoLista += `<li>${amigos[i]}</li>`; 
//     }

//     lista.innerHTML = conteudoLista;
// }


// function sortearAmigo() {
//     let numeroAleatorio = parseInt(Math.random() * amigos.length);
//     console.log(`Número sorteado: ${numeroAleatorio} - Amigo escolhido: ${amigos[numeroAleatorio]}`);
// }

// function limparCampo() {
//     input = document.querySelector('input');
//     input.value = '';
// }

let amigos = [];

function adicionarAmigo() {
    let nomeDigitado = document.querySelector('#amigo').value;
    if (nomeDigitado === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    amigos.push(nomeDigitado);
    listarAmigos();
    limparCampo();
}

function listarAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';
    let conteudoLista = ''; // Variável inicializada vazia
    for (let i = 0; i < amigos.length; i++) {
        conteudoLista = conteudoLista + `<li>${amigos[i]}</li>`; // Concatenação direta
    }
    lista.innerHTML = conteudoLista;
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione pelo menos um amigo antes de sortear.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
    document.getElementById('resultado').innerHTML = `<li>${amigoSorteado}</li>`;
}

function limparCampo() {
    document.querySelector('#amigo').value = '';
}
