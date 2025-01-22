import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;