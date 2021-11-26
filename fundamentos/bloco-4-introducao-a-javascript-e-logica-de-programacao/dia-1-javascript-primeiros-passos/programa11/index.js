const salarioBruto = 3000.0;

let salarioLiquido;
let inss;
let ir;

switch (true) {
  case salarioBruto <= 1556.94:
    inss = (salarioBruto / 100) * 8;
    console.log(inss);
    break;
  case salarioBruto >= 1556.95 && salarioBruto <= 2594.92:
    inss = (salarioBruto / 100) * 9;
    console.log(inss);
    break;
  case salarioBruto >= 2594.92 && salarioBruto <= 5189.82:
    inss = (salarioBruto / 100) * 11;
    console.log(inss);
    break;
  case salarioBruto > 5189.83:
    if ((salarioBruto / 100) * 11 <= 570) {
      inss = (salarioBruto / 100) * 11;
    } else {
      inss = 570;
    }
    console.log(inss);
    break;
  default:
    console.log("algo deu errado");
    break;
}

switch (true) {
  case salarioBruto <= 1903.98:
    ir = 0;
    console.log(ir);
    break;
  case salarioBruto >= 1903.99 && salarioBruto <= 2826.65:
    ir = (salarioBruto / 100) * 7.5 - 142.8;
    console.log(ir);
    break;
  case salarioBruto >= 2826.66 && salarioBruto <= 3751.05:
    ir = (salarioBruto / 100) * 15 - 354.8;
    console.log(ir);
    break;
  case salarioBruto >= 3751.06 && salarioBruto <= 4664.68:
    ir = (salarioBruto / 100) * 22.5 - 636.13;
    console.log(ir);
    break;
  case salarioBruto > 4664.68:
    ir = (salarioBruto / 100) * 27.5 - 869.36;
    console.log(ir);
    break;
  default:
    console.log("algo deu errado no calculo do ir");
    break;
}

salarioLiquido = salarioBruto - inss - ir;
console.log(salarioLiquido);
