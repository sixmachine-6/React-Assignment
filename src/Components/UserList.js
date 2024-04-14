import User from "./User";
import { useUsers } from "../contexts/useUsers";
import styles from "./UserList.module.css";
import Loader from "./Loader";
import LoadData from "./LoadData";
function UserList() {
  const { allUsers, isLoading } = useUsers();
  // console.log(allUsers);
  return (
    <ul className={styles.userList}>
      {!isLoading ? (
        allUsers.map((user) => <User user={user} key={user.id} />)
      ) : (
        <LoadData />
      )}
    </ul>
  );
}

export default UserList;
