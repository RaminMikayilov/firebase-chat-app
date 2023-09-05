import { AuthProvider } from "./context/AuthContext";
import Router from "./router";

function App() {
  return (
    <AuthProvider>
      <div className="bg-cblue h-[100vh] text-white flex justify-center items-center">
        <Router />
      </div>
    </AuthProvider>
  );
}

export default App;
