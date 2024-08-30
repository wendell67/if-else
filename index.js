console.log(`Trabalhando com condicionais`);

console.log(`Estilos oferecidos:`)

const listaDeDestinos = new Array(
 `Kyoto`,
  `Shenzen`,
  `Tokyo`,
  `Bali`
);

const idadeComprador = 18;
const menorAcompanhado = true;

if(idadeComprador < 18 && menorAcompanhado ==true){
  console.log(`Comprador menor de idade, não podemos vender as passagens`);
} 
 if (menorAcompanhado == true) {
  console.log(`O menor encontra-se acomapanhado, então ele pode realizar a viagem`)
  console.log(`Qual a forma de pagamento?`);
  console.log(`Boa viagem!`)
}

else {
  console.log(`Qual seu destino?`);
  console.log(listaDeDestino[1]);
}

