import styles from "./todoitem.module.css";

export default function ({ item, toDos, settoDos }) {
  function handleDelete(item) {
    // console.log("Delete button is clicked for item", item);
    settoDos(toDos.filter((toDo) => toDo !== item)); //Deletes the todo list
  }
  function handleClick(name) {
    const newArray = toDos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    settoDos(newArray);
    // console.log(toDos);
  }

  const markComplete = item.done ? styles.markComplete : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <div>
          <span className={markComplete} onClick={() => handleClick(item.name)}>
            {" "}
            {item.name}{" "}
          </span>
          <span>
            <button
              onClick={() => handleDelete(item)}
              className={styles.cancelButton}
            >
              X
            </button>
          </span>
        </div>

        <hr className={styles.line} />
      </div>
    </div>
  );
}
