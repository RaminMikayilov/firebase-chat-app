import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
      });

      await setDoc(doc(db, "users", user.uid), {
        id: user.uid,
        name: name,
        email: email,
      });

      console.log("user", user);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white text-blue-600 p-5 rounded-lg max-w-[90%] w-[500px] shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Chat App Signup</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-3">Name</label>
        <input
          className="border border-gray-400 p-2 rounded-lg mb-3"
          type="text"
          placeholder="your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label className="mb-3">Email</label>
        <input
          className="border border-gray-400 p-2 rounded-lg mb-3"
          type="email"
          placeholder="your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="mb-3">Password</label>
        <input
          className="border border-gray-400 p-2 rounded-lg mb-3"
          type="password"
          placeholder="your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-blue-600 text-white py-2 rounded-lg">
          Signup
        </button>
      </form>

      <p className="mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-bold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
