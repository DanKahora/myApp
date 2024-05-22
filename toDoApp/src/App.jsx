import { useState } from "react";
import Todo from "./components/Todo";
import Header from "./components/Header";
import "./app.module.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <Todo></Todo>
    </div>
  );
}

export default App;
