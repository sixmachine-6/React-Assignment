import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useUsers } from "../contexts/useUsers";
import styles from "./UserInfo.module.css";

function UserInfo() {
  const { oneUser } = useUsers();
  console.log(oneUser.address.geo);
  return (
    <div className={styles.infoBox}>
      <div className={styles.info}>
        <h2>{oneUser.name}</h2>
        <p>
          <img className={styles.img} src="user.png" alt="user" />
          <span>{oneUser.username}</span>
        </p>
        <p>
          <img className={styles.img} src="gmail.png" alt="email" />
          <span>{oneUser.email}</span>
        </p>
        <p>
          <img className={styles.img} src="location-pin.png" alt="location" />
          <span>
            {oneUser.address.street},
            <span style={{ fontWeight: 550 }}>{oneUser.address.city}</span>
          </span>
        </p>
        <p>
          <img className={styles.img} src="telephone.png" alt="phone" />
          <span>{oneUser.phone}</span>
        </p>
        <p>
          <img className={styles.img} src="buildings.png" alt="building" />
          <span>
            {oneUser.company.name}
            {/* {oneUser.company.bs} */}
          </span>
        </p>
        <p style={{ fontStyle: "italic" }}>"{oneUser.company.catchPhrase}"</p>
        <p>{oneUser.website}</p>
      </div>
      <div className={styles.mapContainer}>
        <MapContainer
          center={[0, 40]}
          zoom={7}
          scrollWheelZoom={false}
          className={styles.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <Marker position={[0, 40]}>
            <Popup>User Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default UserInfo;
