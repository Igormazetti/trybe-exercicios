function handleStates() {
  const listEstados = [
    "Acre",
    "Alagoas",
    "Amapá",
    "Amazonas",
    "Bahia",
    "Ceará",
    "Distrito Federal",
    "Espírito Santo",
    "Goiás",
    "Maranhão",
    "Mato Grosso",
    "Mato Grosso do Sul",
    "Minas Gerais",
    "Pará",
    "Paraíba",
    "Paraná",
    "Pernambuco",
    "Piauí",
    "Rio de Janeiro",
    "Rio Grande do Norte",
    "Rio Grande do Sul",
    "Rondônia",
    "Roraima",
    "Santa Catarina",
    "São Paulo",
    "Sergipe",
    "Tocantins",
  ];

  let stateList = document.getElementById("list");

  for (let i = 0; i < listEstados.length; i += 1) {
    let newOption = document.createElement("option");
    newOption.innerText = listEstados[i];
    newOption.value = listEstados[i];
    stateList.appendChild(newOption);
  }
}

handleStates();

const sendButton = document.getElementById("send");
function handleSubmit(event) {
  event.preventDefault();
  const curriculo = document.createElement("div");
}
sendButton.addEventListener("click", handleSubmit);
