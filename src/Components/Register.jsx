import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../Assets/Firebase";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { Link } from "react-router";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
    <div className="w-screen h-screen flex items-start justify-center ">
      <form
        onSubmit={handleSubmit}
        className="flex max-w-2xl flex-col gap-4 w-[40%] shadow-xl p-4"
      >
        <h2 className="text-4xl">Create new Admin</h2>
        <div className="max-w-2xl">
          <div className="mb-2 block">
            <Label htmlFor="username3" value="Username" />
          </div>
          <TextInput
            id="username3"
            placeholder="Bonnie Green"
            addon=""
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            placeholder="name@flowbite.com"
            required
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput id="password2" type="password" required shadow />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="repeat-password" value="Repeat password" />
          </div>
          <TextInput id="repeat-password" type="password" required shadow />
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Your message" />
          </div>
          <Textarea
            id="comment"
            placeholder="Leave a comment..."
            required
            rows={4}
          />
        </div>

        <Button
          className="flex justify-center items-center text-black"
          type="submit"
        >
          Register new account
        </Button>
      </form>
    </div>
  );
};

export default Register;
