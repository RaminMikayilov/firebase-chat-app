import { useContext, useState } from "react";
import Profile from "./Profile";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import { AuthContext } from "../../../context/AuthContext";

const Searchbar = () => {
  const [user, setUser] = useState();
  const [search, setSearch] = useState("");
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async (e) => {
    e.preventDefault();

    const querySnapshot = await getDocs(
      query(
        collection(db, "users"),
        where("name", "==", search.trim()),
        where("name", "!=", currentUser.displayName)
      )
    );
    querySnapshot.forEach((doc) => {
      setUser(doc.data());
    });
  };

  return (
    <form onSubmit={handleSearch} className="border-y-2 border-blue-300">
      <input
        type="text"
        placeholder="Search users..."
        className="w-full px-3 py-2 bg-transparent placeholder:text-cblue outline-none focus:border-blue-600 duration-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* search results */}
      {user && (
        <div className="px-2 py-3 space-y-3">
          <Profile key={user?.id} name={user?.name} />
        </div>
      )}
    </form>
  );
};

export default Searchbar;
