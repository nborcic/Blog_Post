import { Outlet } from "react-router-dom";
import Navbar from "./assets/Navbar";

const App = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
