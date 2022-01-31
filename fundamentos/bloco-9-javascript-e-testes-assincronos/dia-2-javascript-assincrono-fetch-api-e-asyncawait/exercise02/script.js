const fetchCrypto = async () => {
  const API_URL = "https://api.coincap.io/v2/assets";

  const result = await fetch(API_URL)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => error.toString());

  console.log(result);
  return result;
};

const handleCrypto = async () => {
  const coins = await fetchCrypto();

  const list = document.getElementById("cryptoContainer");

  coins
    .filter((moeda) => moeda.rank <= 10)
    .forEach((coin) => {
      const createLi = document.createElement("li");
      const price = Number(coin.priceUsd);

      createLi.innerText = `${coin.name}: ${price.toFixed(2)}`;
      list.appendChild(createLi);
    });
};

window.onload = () => handleCrypto();
