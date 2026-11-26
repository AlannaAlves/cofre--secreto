let senhaForte = [7, 3, 5];

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
                tela.style.color = "green";

            } else {

                tela.innerHTML = "🔒 Senha incorreta! Você acertou " 
                + acertos + " de 3 números.";

                tela.style.color = "red";
            }

            break;


        
        case "dica":

           
            if (senhaForte[0] % 2 === 0) {

                tela.innerHTML = "💡 Dica: o primeiro número da senha é PAR!";

            } else {

                tela.innerHTML = "💡 Dica: o primeiro número da senha é ÍMPAR!";
            }

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
