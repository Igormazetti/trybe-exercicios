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

  const name = document.getElementById("text-input");
  if (name.value.length > 40 || name.value.length === 0) {
    alert("Nome inválido");
  }
}
sendButton.addEventListener("click", handleSubmit);

const clearButton = document.getElementById("clear");
function handleClear() {
  const name = document.getElementById("text-input");
  name.value = null;
  const email = document.getElementById("email-input");
  email.value = null;
  const cpf = document.getElementById("cpf-input");
  cpf.value = null;
  const endereco = document.getElementById("endereço-input");
  endereco.value = null;
  const cidade = document.getElementById("cidade-input");
  cidade.value = null;
  const resumo = document.getElementById("resume");
  resumo.value = null;

  let estados = document.getElementById("list");
  estados.value = null;

  const cargo = document.getElementById("cargo-input");
  cargo.value = null;
  const descricao = document.getElementById("cargo-description");
  descricao.value = null;

  const data = document.getElementById("data");
  data.value = null;
}

clearButton.addEventListener("click", handleClear);
