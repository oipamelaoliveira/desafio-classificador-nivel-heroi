let heroi = "João";
let pontos = 0;
let nivel = "";

while (pontos <= 11000) {
  if (pontos < 1000) {
    nivel = "Ferro";
  } else if (pontos <= 2000) {
    nivel = "Bronze";
  } else if (pontos <= 5000) {
    nivel = "Prata";
  } else if (pontos <= 7000) {
    nivel = "Ouro";
  } else if (pontos <= 8000) {
    nivel = "Platina";
  } else if (pontos <= 9000) {
    nivel = "Ascendente";
  } else if (pontos <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(
    "O Herói " +
      heroi +
      " tem " +
      pontos +
      " pontos de XP e está no nível " +
      nivel
  );
  pontos += 1001;
}