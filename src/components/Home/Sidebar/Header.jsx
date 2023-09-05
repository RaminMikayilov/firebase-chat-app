import { auth } from "../../../firebase";
import Avatar from "../Avatar";
import { signOut } from "firebase/auth";
import { AuthContext } from "../../../context/AuthContext";
import { useContext } from "react";

const Header = () => {
  const { currentUser } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("logged out");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-between gap-2 px-3 py-4">
      <div className="flex gap-2 items-center">
        <Avatar />
        <h2 className="font-extrabold">{currentUser.displayName}</h2>
      </div>
      <button
        onClick={handleLogout}
        className="bg-blue-500 text-white px-3 py-1 rounded-md"
      >
        logout
      </button>
    </div>
  );
};

export default Header;
