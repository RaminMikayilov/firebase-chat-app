import { ActiveUserProvider } from "./context/ActiveUserContext";
import { AuthProvider } from "./context/AuthContext";
import Router from "./router";

function App() {
  return (
    <AuthProvider>
      <ActiveUserProvider>
        <div className="bg-cblue h-[100vh] text-white flex justify-center items-center">
          <Router />
        </div>
      </ActiveUserProvider>
    </AuthProvider>
  );
}

export default App;
