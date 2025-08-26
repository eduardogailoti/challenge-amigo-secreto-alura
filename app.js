let amigos = [];
let sorteioFeito = false; // flag para saber se já houve sorteio

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim(); 
    const lista = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar!");
        return;
    }
    
    if (sorteioFeito) {
        amigos = [];
        lista.innerHTML = "";
        resultado.innerHTML = "";
        sorteioFeito = false;
    }

    amigos.push(nome);
    
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);

    input.value = ""; 
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; 

    if (amigos.length === 0) {
        alert("Nenhum nome foi adicionado. Digite ao menos um nome!");
        return;
    }

    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado foi: ${sorteado}`;
    resultado.appendChild(li);

    sorteioFeito = true;
}
