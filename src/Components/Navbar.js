import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
function Navbar() {
  return (
    <nav className={styles.nav}>
      <div>
        <i class="bx bx-detail"></i>
        <Link to="/settings">
          <i class="bx bx-cog"></i>
        </Link>
        <i class="bx bx-bone"></i>
        <i class="bx bx-error-circle"></i>
      </div>
      <div>
        <h3>MULTIBOT</h3>
      </div>
      <div>
        <input type="number" />
        <input type="number" />
        <i class="bx bx-fast-forward"></i>
      </div>
    </nav>
  );
}

export default Navbar;
