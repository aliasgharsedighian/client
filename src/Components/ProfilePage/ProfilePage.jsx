import { useState } from "react";
import "./ProfilePage.css";
import Axios from "axios";
import { useParams } from "react-router-dom";

const ProfilePage = () => {
  let { username } = useParams();

  return <div>profile {username}</div>;
};

export default ProfilePage;
