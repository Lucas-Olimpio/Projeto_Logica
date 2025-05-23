let nome = prompt("Digite o nome do herói:");

let xp;
do {
  xp = Number(prompt("Digite a quantidade de XP do herói (somente números positivos):"));
} while (isNaN(xp) || xp < 0);  

let nivel = "";

switch (true) {
  case (xp < 1000):
    nivel = "Ferro";
    break;

  case (xp >= 1001 && xp <= 2000):
    nivel = "Bronze";
    break;

  case (xp >= 2001 && xp <= 5000):
    nivel = "Prata";
    break;

  case (xp >= 5001 && xp <= 7000): 
    nivel = "Ouro"; 
    break;

  case (xp >= 7001 && xp <= 8000):  
    nivel = "Platina";
    break;

  case (xp >= 8001 && xp <= 9000):
    nivel = "Ascendente";
    break;              

  case (xp >= 9001 && xp <= 10000):
    nivel = "Imortal";
    break;

  case (xp >= 10001):
    nivel = "Radiante";
    break;

  default:
    nivel = "XP inválido";
}

console.log("O herói " + nome + " está no nível " + nivel + "!");
