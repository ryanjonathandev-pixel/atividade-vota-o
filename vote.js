function nananinanao() {
    let numero = Number(document.getElementById("numero").value);

    if (numero !== 80) {
        alert("Vote consciente, vote no C.O.R.E.!");
        return; 
    }

    let resposta = confirm(
            "Obrigado pelo voto. Deeja saber mais sobre as nossas promessas de campanha?"
            );

            if (resposta) {
                window.open("https://www.youtube.com/@xN1cknamel");
            }
}
