const data = (name) => {
  let mails = name.toLowerCase().replaceAll(" ", "_");
  return {
    nome: name,
    email: `${mails}` + "@trybe.com",
  };
};

const newEmployees = (informData) => {
  const employees = {
    id1: informData("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: informData("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: informData("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(data));
