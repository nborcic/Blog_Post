import { Link } from "react-router-dom";
const ErrorElement = () => {
  return (
    <>
      <div className="text-red-500 text-center text-2xl">
        <h1 className="text-red-500 text-center text-8xl pb-10">ERROR</h1>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl p-4 px-10"
          to="/"
        >
          Save yourself go Home
        </Link>
      </div>
    </>
  );
};

export default ErrorElement;
