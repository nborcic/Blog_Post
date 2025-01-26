import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default App;
