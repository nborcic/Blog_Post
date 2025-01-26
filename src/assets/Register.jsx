import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./Firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the required fields are not empty
    if (!email || !password || !fname || !lname) {
      toast.error("Please fill all fields!", { position: "bottom-center" });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        const myCollection = doc(db, "users", user.uid);
        await setDoc(myCollection, {
          fname: fname,
          lname: lname,
          email: email,
        });
      }

      console.log("Registration successful!");
      navigate("/login");
      toast.success("Registration successful!", {
        position: "top-center",
      });
    } catch (error) {
      console.error(error.message);
      setError(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fname">First Name:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lname">Last Name:</label>
        <input
          type="text"
          id="lname"
          name="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Register</button>
      {error ? <p className="text-red-500 flex-wrap">{error}</p> : ""}
    </form>
  );
};

export default Register;
