import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({ toDos, settoDos }) {
  const sortedToDos = toDos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedToDos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          toDos={toDos}
          settoDos={settoDos}
        />
      ))}
    </div>
  );
}
