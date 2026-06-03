function analisar() {
let Option = document.getElementById("cidade").value;


    switch (Option) {

        case "1":
            alert("Novo dms!");
            break;
        case "2":
            let reposta = confirm("Você é apto á votar, mas não é obrigatório! deseja votar?");
              if (resposta) {
              window.open("escolha_seu_candidato.html");
              else {
              return 0;}
            window.open("escolha_seu_candidato.html");
            break;
        case "3":
            alert("Você é apto á votar, e é obrigatório!");
            window.open("escolha_seu_candidato.html");
            break;
        case "4":
            alert("Parabens! Você esta livre pra não se preocupar com o voto!");
            window.open("escolha_seu_candidato.html");
            break;
    }
}