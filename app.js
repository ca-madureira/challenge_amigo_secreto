//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let resultado = document.getElementById("resultado");

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value;

  if (nome === "") {
    alert("digite um nome valido");
    return;
  }

  amigos.push(nome);
  let li = document.createElement("li");

  amigos.map((item) => {
    li.textContent = item;
  });

  let lista = document.getElementById("listaAmigos").appendChild(li);
}

function sortearAmigo() {
  let nomeEscolhido = parseInt(Math.random() * amigos.length + 1);
  let li = document.createElement("li");
  li.textContent = amigos[nomeEscolhido];
  resultado.appendChild(li);
}
