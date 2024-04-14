import { useUsers } from "../contexts/useUsers";
import Button from "./Button";
import ReusableList from "./ReusableList";
import UserInfo from "./UserInfo";

function UserDetails() {
  const { oneUser, getPost, allPosts, getAlbum, allAlbums } = useUsers();
  const { id } = oneUser;

  return (
    <div className="app">
      <UserInfo />
      <ReusableList list={allPosts} />
      <Button event={() => getPost(id)}>See Post</Button>
      <ReusableList list={allAlbums} />
      <Button event={() => getAlbum(id)}>See Album</Button>
    </div>
  );
}

export default UserDetails;
