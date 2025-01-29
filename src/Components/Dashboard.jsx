import React, { useEffect, useState } from "react";
import { auth } from "./Firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./Firebase";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  const user = auth.currentUser;

  const fetchProfile = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }
      const docRef = doc(db, "users", user.uid);
      const ourData = await getDoc(docRef);
      if (ourData.exists()) {
        setProfile(ourData.data());
      } else {
        console.log("No such document!");
      }
    });
  };
  const onLogout = async () => {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <>
      <div className="flex h-100vh w-100vw">
        {profile ? (
          <div>
            <h1 className="text-blue-500 text-4xl">Dashboard</h1>
            <h1 className="text-blue-500 text-2xl">
              Welcome user {profile.fname}
            </h1>

            <p className="text-green-500 text-2xl">
              Email address: {profile.email}
            </p>
            <p className="text-green-500 text-2xl">
              Last Name: {profile.lname}
            </p>
            <button className="text-red-500 " onClick={onLogout}>
              Logout
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
     
    </>
  );
};

export default Dashboard;
