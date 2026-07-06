const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularNivel(XP) {
  if (XP >= 1 && XP <= 1000) {
    return "Ferro";
  } else if (XP >= 1001 && XP <= 2000) {
    return "Bronze";
  } else if (XP >= 2001 && XP <= 5000) {
    return "Prata";
  } else if (XP >= 5001 && XP <= 7000) {
    return "Ouro";
  } else if (XP >= 7001 && XP <= 8000) {
    return "Platina";
  } else if (XP >= 8001 && XP <= 9000) {
    return "Ascendente";
  } else if (XP >= 9001 && XP <= 10000) {
    return "Imortal";
  } else {
    return "Radiante";
  }
}

rl.question("Qual é o nome do seu herói? ", function(nomePersonagem) {
  let XP = Math.floor(Math.random() * 10000) + 1;

  let rank = calcularNivel(XP);

  console.log(`O herói ${nomePersonagem} está no rank ${rank} `);
  rl.close();
});



////Se XP for menor do que 1.000 = Ferro
///////Se XP for entre 1.001 e 2.000 = Bronze
///////Se XP for entre 2.001 e 5.000 = Prata
///////Se XP for entre 5.001 e 7.000 = Ouro
///////Se XP for entre 7.001 e 8.000 = Platina
///////Se XP for entre 8.001 e 9.000 = Ascendente
///////Se XP for entre 9.001 e 10.000= Imortal
///////Se XP for maior ou igual a 10.001 = Radiante