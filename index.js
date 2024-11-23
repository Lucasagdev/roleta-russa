const numeroDeCamaras = 6;
const posicaoDaBala = Math.floor(Math.random() * numeroDeCamaras) + 1;

function puxarGatilho(escolha, event) {
    const resultadoDiv = document.getElementById("result");
    const button = event.target;

    button.classList.add("selected");

    // Exibe o resultado
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