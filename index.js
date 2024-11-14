function roletaRussa() {
    const numeroDeCamaras = 6;
    const posicaoDaBala = Math.floor(Math.random() * numeroDeCamaras) + 1;

    const tentativa = prompt(`Escolha um número entre 1 e ${numeroDeCamaras}:`);

    if (parseInt(tentativa) === posicaoDaBala) {
        alert("Bang! Você perdeu!");
    } else {
        alert("Clique! Você está seguro... desta vez.");
    }
}

roletaRussa();
