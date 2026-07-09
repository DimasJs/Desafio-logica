let vitorias = Math.floor(Math.random() * 120) + 1;

function calcularRank(vitorias) {
  if (vitorias <= 10) {
    return "Ferro";
  } else if (vitorias <= 20) {
    return "Bronze";
  } else if (vitorias <= 50) {
    return "Prata";
  } else if (vitorias <= 80) {
    return "Ouro";
  } else if (vitorias <= 90) {
    return "Diamante";
  } else if (vitorias <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

let nivel = calcularRank(vitorias);

console.log("O herói tem saldo de: " + vitorias + " e está no nível " + nivel);