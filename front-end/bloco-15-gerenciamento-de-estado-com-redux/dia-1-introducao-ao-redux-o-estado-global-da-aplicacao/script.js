const NEXT_COLOR = "NEXT_COLOR";
const PREVIOUS_COLOR = "PREVIOUS_COLOR";

const changeNextColor = () => ({
  type: NEXT_COLOR,
});
const changePreviousColor = () => ({
  type: PREVIOUS_COLOR,
});

const nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", () => {
  store.dispatch(changeNextColor());
});

const previousBtn = document.getElementById("previous");
previousBtn.addEventListener("click", () => {
  store.dispatch(changePreviousColor());
});

const meuReducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case NEXT_COLOR:
      return {
        ...state,
        index: (state.index + 1) % state.colors.length,
      };
    case PREVIOUS_COLOR:
      return {
        ...state,
        index: state.index >= 1 ? state.index - 1 : state.index,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(meuReducer);

store.subscribe(() => {
  const estados = store.getState();
  const color = document.getElementById("value");
  color.innerHTML = estados.colors[estados.index];
  const container = document.getElementById("container");
  container.style.backgroundColor = estados.colors[estados.index];
});
