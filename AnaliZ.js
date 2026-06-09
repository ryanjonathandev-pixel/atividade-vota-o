function analisar() {
    let option = document.getElementById("cidade").value;

    switch (option) {

        case "1":
            alert("Você ainda não pode votar!");
            break;

        case "2":
            let resposta = confirm(
                "Você é apto a votar, mas não é obrigatório. Deseja votar?"
            );

            if (resposta) {
                window.open("escolha_seu_candidato.html");
            }

            break;

        case "3":
            alert("Você é apto a votar, e o voto é obrigatório!");
            window.open("escolha_seu_candidato.html");
            break;

        case "4":
            alert("Você pode votar, mas não é obrigatório.");
            window.open("escolha_seu_candidato.html");
            break;

        default:
            alert("Selecione uma opção válida.");
    }
}
