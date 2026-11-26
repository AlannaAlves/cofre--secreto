

let senhaForte = [4, 8, 3];


let cofreAberto = false;



function executarAcao(acao) {

    let tela = document.getElementById("mensagem");

    switch (acao) {

        
        case "jogar":

           
            let palpite = [];

            
            for (let i = 0; i < senhaForte.length; i++) {

                let numero = parseInt(
                    document.getElementById("num" + i).value
                );

                palpite.push(numero);
            }

            
            if (palpite.some(numero => isNaN(numero))) {
                tela.innerHTML = "⚠️ Digite os três números!";
                tela.style.color = "orange";
                return;
            }

           
            let acertos = 0;

           
            for (let i = 0; i < senhaForte.length; i++) {

                if (palpite[i] === senhaForte[i]) {
                    acertos++;
                }
            }

            if (acertos === senhaForte.length) {
                cofreAberto = true;
            } else {
                cofreAberto = false;
            }

            
            if (cofreAberto === true) {

                tela.innerHTML = "🔓 PARABÉNS! COFRE ABERTO!";
                tela.style.color = "#28a745";

            } else {

                tela.innerHTML = "🔒 Senha incorreta! Você acertou "
                    + acertos + " de 3 números.";

                tela.style.color = "#ff4d4d";
            }

            break;


        case "dica":

            let resultado = "";
            let soma = 0;

            
            for (let i = 0; i < senhaForte.length; i++) {

                soma += senhaForte[i];

                if (senhaForte[i] % 2 === 0) {

                    resultado += "Número " + (i + 1) + ": PAR. ";

                } else {

                    resultado += "Número " + (i + 1) + ": ÍMPAR. ";
                }
            }

            
            tela.innerHTML = "💡 DICA: " + resultado +
                "<br>🧮 A soma dos números da senha é: " + soma;

            tela.style.color = "#f39c12";

            break;


        
        case "limpar":

            
            for (let i = 0; i < senhaForte.length; i++) {

                document.getElementById("num" + i).value = "";
            }

            
            cofreAberto = false;

            
            tela.innerHTML = "Aguardando tentativa...";
            tela.style.color = "white";

            break;

    }
}

