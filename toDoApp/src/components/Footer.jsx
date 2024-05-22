import styles from "./footer.module.css";

export default function Footer({ completedToDoes, totalToDos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total tasks count: {totalToDos}</span>
      <span className={styles.item}>
        Completed tasks count: {completedToDoes}
      </span>
    </div>
  );
}
