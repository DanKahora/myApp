import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [toDos, settoDos] = useState([]);
  const completedToDoes = toDos.filter(
    (completedTasks) => completedTasks.done
  ).length;
  const totalToDos = toDos.length;
  return (
    <div>
      <Form toDos={toDos} settoDos={settoDos} />
      <TodoList toDos={toDos} settoDos={settoDos} />
      <Footer completedToDoes={completedToDoes} totalToDos={totalToDos} />
    </div>
  );
}
