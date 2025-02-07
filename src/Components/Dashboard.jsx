import React, { useEffect, useState } from "react";
import { auth, admin } from "../Assets/Firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Assets/Firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Assets/AuthProvider";
import { List, Avatar } from "flowbite-react";
const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const { authLoading } = useAuth();
  const navigate = useNavigate();

  if (authLoading) {
    return <Spinner />;
  }
  const fetchProfile = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (!user) {
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
    <div className="h-100vh w-100vw dark:bg-gray-200">
      <div className="flex h-100vh w-100vw ">
        {profile && (
          <div>
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

            {profile ? (
              <List
                unstyled
                className="mt-4 divide-y divide-gray-200 dark:divide-gray-700"
              >
                <h2 className="mt-4 mb-2">List of all Admins</h2>
                <List.Item className="pb-3 sm:pb-4">
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <Avatar
                      img="/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                      rounded
                      size="sm"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {profile.fname}
                      </p>
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        {profile.lname}
                      </p>
                    </div>
                    <div className="flex items-center dark:text-white">
                      <p>ID start: &nbsp; </p>{" "}
                      {auth.currentUser.uid.slice(1, 10)}
                      {auth.currentUser.emailVerified ? "Verified" : "Not Verified"}
                    </div>
                  </div>
                </List.Item>
              </List>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
