import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [result, setResult] = useState([]);

  const users = [
    { firstName: "John", lastName: "Doe", age: 25 },
    { firstName: "Jane", lastName: "Doe", age: 30 },
    { firstName: "Jack", lastName: "Doe", age: 35 },
    { firstName: "Jill", lastName: "Doe", age: 40 },
    { firstName: "Joe", lastName: "Doe", age: 45 },
  ];
  const results = users.map((user) => user.firstName);
  const sameName = users.filter((u) => u.firstName === "Jane");

  const numbers = [1, 2, 3, 4, 5];
  const all = numbers.reduce((total, cruuent) => {
    return total + cruuent;
  });
  const error = [
    { fatal: "veery bad error", baderror: "bad error" },
    { fatals: "veery bad error" },
    { fatal: "veery bad error" },
    { auuu: "veery bad error uuuuuu" },
    { fataaaa: " fatafata" },
  ];
  const testObj = {
    a: 1,
    b: 2,
    c: "2",
    s: 2,
    asdasdasdasd: "asdasdasdad",
  };

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
      <div
        className="text-2xl bg-gray-100 h-10 w-auto "
        onClick={() => console.log("div clicked")}
      >
        {results.map((s, index) => (
          <h1
            className="text-2xl text-red-500 bg-green-200 p-2 rounded-xl"
            key={index}
          >
            {s}
          </h1>
        ))}
        {all}
      </div>
    </div>
  );
};

export default Home;
