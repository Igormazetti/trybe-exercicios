const wakeUp = () => {
  return "Acordando!";
};

const coffeeBreak = () => {
  return "Bora tomar café!!";
};

const goToSleep = () => {
  return "Partiu dormir!!";
};

const doingThings = (action) => {
  const whatToDo = action();
  console.log(whatToDo);
};

doingThings(goToSleep);
