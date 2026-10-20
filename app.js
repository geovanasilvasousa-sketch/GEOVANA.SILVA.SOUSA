alert("bem vindos ao jogo secreto");
let numeroMaximo = 5000; 
let numeroSecreto = Math.floor (Math.random () * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
 chute = prompt(`escolha um numero de 1 a ${numeroMaximo})`);

 if (chute == numeroSecreto) { 
 alert("Isso ai! você descobriu o número secreto" + numeroSecreto + " com " + tentativas + "tentativas!");
}else { 
  if (chute numeroSecreto) {
   alert("O número secreto é menor que " + chute + ". Tente novamente!");
} else {
  alert("O número secreto é maior que " + chute + ". Tente novamente!");
   }
  tentativas++;
  }
}
let palavraTentativas = tentativas > 1 ? " tentativa " : "tentativa";
alert (" isso ai ! voce acertou o numero secreto" + numeroSecreto + " com " + tentativas + palavratentativas)
//if (tentativas > 1 ) (
//alert (" isso ai !  voce acertou o numero secreto" + numerosecreto + " com " + tentativas + tentativas)
  