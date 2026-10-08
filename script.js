let saldo = 1000;

function sacar() {

    const valor = Number(
        document.getElementById("saque").value
    );

    const resultado =
        document.getElementById("resultado");

    resultado.innerHTML = "";

    if (valor <= 0) {
        resultado.innerHTML =
        "<div class='erro'>Digite um valor válido.</div>";
        return;
    }

    if (valor > saldo) {
        resultado.innerHTML =
        "<div class='erro'>Saldo insuficiente.</div>";
        return;
    }

    const notas = [100, 50, 20, 10, 5, 2];

    let restante = valor;

    let texto =
    "<h3 class='titulo-resultado'>Notas entregues</h3>";

    for (let i = 0; i < notas.length; i++) {

        let quantidade =
            Math.floor(restante / notas[i]);

        if (quantidade > 0) {

            texto +=
            "<div class='nota'>" +
            quantidade +
            " nota(s) de R$ " +
            notas[i] +
            "</div>";

            restante =
            restante % notas[i];
        }
    }

    if (restante !== 0) {

        resultado.innerHTML =
        "<div class='erro'>Não é possível sacar esse valor com as notas disponíveis.</div>";

        return;
    }

    saldo -= valor;

    document.getElementById("saldo")
        .innerHTML =
        "R$ " + saldo.toFixed(2).replace(".", ",");

    texto +=
    "<div class='sucesso'>✓ Saque realizado com sucesso!</div>";

    resultado.innerHTML = texto;
}