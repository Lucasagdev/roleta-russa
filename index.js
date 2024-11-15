// Sorteia a posição da bala
const numeroDeCamaras = 6;
const posicaoDaBala = Math.floor(Math.random() * numeroDeCamaras) + 1;

// Função que executa ao clicar em um botão
function puxarGatilho(escolha) {
    const resultadoDiv = document.getElementById("result");
    if (escolha === posicaoDaBala) {
        resultadoDiv.innerHTML = "💥 Bang! Você perdeu!";
        resultadoDiv.className = "result danger";
    } else {
        resultadoDiv.innerHTML = "🔫 Clique! Você está seguro.";
        resultadoDiv.className = "result safe";
    }
}

function tentarNovamente() {
    window.location.reload()
}