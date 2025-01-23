import { Outlet } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl min-h-screen px-4 mx-auto sm:py-6 2xl:max-w-screen-2xl font-primary">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
