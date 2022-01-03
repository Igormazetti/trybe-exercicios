let moradores = {
  blocoUm: [
    {
      nome: "Luiza",
      sobrenome: "Guimarães",
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: "William",
      sobrenome: "Albuquerque",
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: "Murilo",
      sobrenome: "Ferraz",
      andar: 8,
      apartamento: 804,
    },
    {
      nome: "Zoey",
      sobrenome: "Brooks",
      andar: 1,
      apartamento: 101,
    },
  ],
};

const blocoUm = moradores.blocoUm;
const blocoDois = moradores.blocoDois;

for (prop of blocoDois) {
  console.log(
    "O morador do bloco 2 de nome " +
      prop.nome +
      " mora no " +
      prop.andar +
      ", apartamento " +
      prop.apartamento
  );
}

for (info of blocoUm) {
  console.log(info.nome + " " + info.sobrenome);
}

for (info of blocoDois) {
  console.log(info.nome + " " + info.sobrenome);
}
