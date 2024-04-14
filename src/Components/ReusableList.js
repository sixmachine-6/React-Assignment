import ReusableListItem from "./ReusableListItem";
import styles from "./ReusableList.module.css";
function ReusableList({ list }) {
  return (
    <ul className={styles.list}>
      {list &&
        list.map((item) => <ReusableListItem item={item} key={item.id} />)}
    </ul>
  );
}

export default ReusableList;
