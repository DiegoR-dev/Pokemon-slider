
const btnAvancar = document.querySelector(".btn-avancar");
const btnVoltar = document.querySelector(".btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;
 
function esconderCardSelect(){
    const cardSelect = document.querySelector(".selecionado");
    cardSelect.classList.remove("selecionado");
}

function cardselecionado(){
    cartoes[cartaoAtual].classList.add('selecionado');
    console.log(cartaoAtual)
}

btnAvancar.addEventListener("click",function(){
    console.log("cartao atual", cartaoAtual)
    console.log("cartoes", cartoes.length - 1)
    if(cartaoAtual === cartoes.length -1) return

                esconderCardSelect()

                cartaoAtual++;
                cardselecionado()
                
                
            });
     
            btnVoltar.addEventListener("click",function(){
                if(cartaoAtual === 0) return

                esconderCardSelect()
                        
                            cartaoAtual--;
                            cardselecionado()       
                        });
            
