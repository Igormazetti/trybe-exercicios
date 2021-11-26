const peça = "Any";

const peçaFinal = peça.toLowerCase();

switch (peçaFinal) {
  case "bishop":
    console.log("diagonals");
    break;
  case "king":
    console.log("strait");
    break;
  case "queen":
    console.log("any move");
    break;
  default:
    console.log("Ops, invalid piece!");
    break;
}
