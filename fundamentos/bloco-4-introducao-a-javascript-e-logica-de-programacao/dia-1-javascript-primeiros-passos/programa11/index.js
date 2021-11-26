const salarioBruto = 2000.53;

let salarioLiquido;

switch (salarioBruto) {
  case salarioBruto <= 1556.94:
    salarioLiquido = (salarioBruto / 100) * 8;
    console.log(salarioLiquido);
    break;
  case salarioBruto >= 1556.95 && salarioBruto <= 2594.92:
    salarioLiquido = (salarioBruto / 100) * 9;
    console.log(salarioLiquido);
    break;
  case salarioBruto >= 2594.92 && salarioBruto <= 5189.82:
    salarioLiquido = (salarioBruto / 100) * 11;
    console.log(salarioLiquido);
    break;
  case salarioBruto > 5189.83:
    if ((salarioBruto / 100) * 11 <= 570) {
      salarioLiquido = (salarioBruto / 100) * 11;
    } else {
      salarioLiquido = 570;
    }
    console.log(salarioLiquido);
    break;
  default:
    console.log("algo deu errado");
    break;
}
