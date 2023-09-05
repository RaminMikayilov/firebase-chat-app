import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white text-blue-600 p-5 rounded-lg max-w-[90%] w-[500px] shadow-lg">
      <h1 className="text-2xl font-bold mb-5">Chat App Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
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
          Login
        </button>
      </form>

      <p className="mt-5 text-center">
        Don{`'`}t have an account?{" "}
        <Link to="/register" className="text-blue-600 font-bold">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;
