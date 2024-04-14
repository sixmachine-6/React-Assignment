import styles from "./ReusableList.module.css";
function ReusableListItem({ item }) {
  return (
    <li className={styles.listItems}>
      <h3>"{item.title}"</h3>
      <p>{item.body ? item.body : ""}</p>
    </li>
  );
}

export default ReusableListItem;
