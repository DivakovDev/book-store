import { Outlet } from "react-router-dom";
import './App.css'
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <main className='max-w-screen-xl min-h-screen px-4 py-6 mx-auto 2xl:max-w-screen-2xl font-primary'>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
