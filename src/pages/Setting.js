import Navbar from "../Components/Navbar";
import UserList from "../Components/UserList";
import Loader from "../Components/Loader";
import { useUsers } from "../contexts/useUsers";
import UserDetails from "./../Components/UserDetails";
function Setting() {
  const { oneUser } = useUsers();
  return (
    <>
      <Navbar />
      <div className="mainBox">
        <UserList />
        {oneUser.name ? <UserDetails /> : <Loader />}
      </div>
    </>
  );
}

export default Setting;
