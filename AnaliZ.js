function analisar() {
let idade = Number(document.getElementById("candidate1").value);
let Option;

if (idade < 16 && idade > 0) 
    {
   
        Option = 1;
} 

else if (idade >= 16 && idade < 18)
     {
   
        Option = 2;
} 

else if (idade >= 18 && idade < 70)
     {
    
        Option = 3;
} 

else if (idade >= 70 && idade < 150)
     {
   
        Option = 4;
}

else {
    alert("Idade inválida!");
}

    switch (Option) {

        case 1:
            alert("Novo dms!");
            break;
        case 2:
            alert("Você é apto á votar, mas não é obrigatório!");
            window.open("escolha_seu_candidato.html");
            break;
        case 3:
            alert("Você é apto á votar, e é obrigatório!");
            window.open("escolha_seu_candidato.html");
            break;
        case 4:
            alert("Parabens! Você esta livre pra não se preocupar com o voto!");
            window.open("escolha_seu_candidato.html");
            break;
    }
}