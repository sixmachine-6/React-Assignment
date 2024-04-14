import Map from "../Components/Map";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import styles from "./../Components/HomePage.module.css";
function HomePage() {
  return (
    <>
      <Navbar />
      <div className={styles.app}>
        <Map />
        <Sidebar />
      </div>
    </>
  );
}

export default HomePage;
