import { useUsers } from "../contexts/useUsers";
import styles from "./UserList.module.css";
function User({ user }) {
  const { getOneUser, setAllPosts, setAllAlbums } = useUsers();

  // console.log(userID);

  return (
    <li
      onClick={() => {
        getOneUser(user.id);
        setAllPosts([]);
        setAllAlbums([]);
      }}
      className={styles.userItem}
    >
      <img className={styles.profile} src="profile.png" alt="profile" />
      <div className={styles.infoBox}>
        <h3>{user.name}</h3>
        <p>
          <img className={styles.img} src="user.png" alt="user" />
          <span>{user.username}</span>
        </p>
        <p>
          <img className={styles.img} src="gmail.png" alt="email" />
          <span>{user.email}</span>
        </p>
        <p>
          <img className={styles.img} src="telephone.png" alt="phone" />
          <span>{user.phone}</span>
        </p>
        <p>
          <span>{user.company.name}</span>
        </p>
      </div>
      <div className={styles.locationBox}>
        <div className={styles.location}>
          <img className={styles.img} src="location-pin.png" alt="location" />
          <p>
            <p style={{ fontWeight: "bold" }}>{user.address.geo.lat}</p>
            lat
          </p>
        </div>
        <div className={styles.location}>
          <img className={styles.img} src="location-pin.png" alt="location" />
          <p>
            <p style={{ fontWeight: "bold" }}>{user.address.geo.lng}</p>lng
          </p>
        </div>
      </div>
    </li>
  );
}

export default User;
