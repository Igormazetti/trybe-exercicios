import "./App.css";

const Task = (value) => {
  return <li>{value}</li>;
};

const arr = ["Beber Água", "Academia", "Estudar", "Lavar a casa"];

function App() {
  return arr.map((tarefa) => {
    return Task(tarefa);
  });
}

export default App;
