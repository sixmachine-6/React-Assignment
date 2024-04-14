import styles from "./HomePage.module.css";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div>
        <h4>Quick</h4>
        <h4>Message</h4>
        <h4>Action</h4>
        <h4>Statics</h4>
      </div>
    </div>
  );
}

export default Sidebar;
