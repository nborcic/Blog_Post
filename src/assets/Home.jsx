import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center text-4xl">
      <h1 className="text-6xl">Welcome to Home Page</h1>
      <h1>Home and Blog site with details are in progress</h1>
      <Link
        to="/calendar"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl p-4"
      >
        Explore calendar options
      </Link>
    </div>
  );
};

export default Home;
