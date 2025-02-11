import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main className="max-w-screen-xl min-h-screen px-4 mx-auto sm:py-6 2xl:max-w-screen-2xl font-primary">
          <Outlet />
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
