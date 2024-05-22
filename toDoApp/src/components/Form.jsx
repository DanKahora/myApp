import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ toDos, settoDos }) {
  // const [toDo, settoDo] = useState("");
  const [toDo, settoDo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    settoDos([...toDos, toDo]); // ... called javaScript spread ensure the already existing list is retained
    settoDo({ name: "", done: false }); // clears the input field
  }
  return (
    <div className={styles.inputContainer}>
      {/* {toDos.map((item) => (
        <h3>{item}</h3>
      ))} */}
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            type="text"
            placeholder="Enter todo item"
            onChange={(e) => settoDo({ name: e.target.value, done: false })}
            value={toDo.name}
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
