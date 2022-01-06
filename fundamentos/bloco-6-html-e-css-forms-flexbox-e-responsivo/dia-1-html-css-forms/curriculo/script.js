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

const validate = new window.JustValidate("#myform");
const sendButton = document.getElementById("send");
function handleSubmit(event) {
  // event.preventDefault();

  validate
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Insira seu nome",
      },
      {
        rule: "maxLength",
        value: 40,
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Insira seu e-mail!",
      },
      {
        rule: "email",
        errorMessage: "Email inválido!",
      },
      {
        rule: "maxLength",
        value: 50,
      },
    ])
    .addField("#cpf", [
      {
        rule: "required",
        errorMessage: "Insira seu CPF",
      },
      {
        rule: "maxLength",
        value: 11,
      },
    ]);
}

sendButton.addEventListener("click", handleSubmit);

const clearButton = document.getElementById("clear");
function handleClear() {
  const name = document.getElementById("name");
  name.value = null;

  const email = document.getElementById("email");
  email.value = null;

  const cpf = document.getElementById("cpf");
  cpf.value = null;

  const endereco = document.getElementById("endereco");
  endereco.value = null;

  const cidade = document.getElementById("cidade");
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

  var radio = document.querySelector("input[type=radio][name=moradia]:checked");
  radio.checked = false;
}

clearButton.addEventListener("click", handleClear);
