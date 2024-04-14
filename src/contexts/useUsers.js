import { createContext, useContext, useEffect, useState } from "react";

const userContext = createContext();

function UserProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);
  const [oneUser, setOneUser] = useState({});
  const [allPosts, setAllPosts] = useState([]);
  const [allAlbums, setAllAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchAllUsers() {
      try {
        setIsLoading(!isLoading);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        console.log(data);
        setAllUsers(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchAllUsers();
  }, []);

  async function getOneUser(id) {
    try {
      // if (!id) return;
      console.log(id);
      if (!id) return;
      console.log(id);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await res.json();
      console.log(data);
      setOneUser(data);
    } catch (err) {
      console.log(err.message);
    }
  }
  async function getPost(id) {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/posts`
      );
      const data = await res.json();
      console.log(data);
      setAllPosts(data);
    } catch (err) {
      console.log(err.message);
    }
  }
  async function getAlbum(id) {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}/albums`
      );
      const data = await res.json();
      console.log(data);
      setAllAlbums(data);
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <userContext.Provider
      value={{
        allUsers,
        getOneUser,
        oneUser,
        getPost,
        allPosts,
        setAllPosts,
        getAlbum,
        allAlbums,
        setAllAlbums,
        isLoading,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

function useUsers() {
  const context = useContext(userContext);
  return context;
}

export { UserProvider, useUsers };
