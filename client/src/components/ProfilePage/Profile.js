import Axios from "axios";
import React, { useState, useEffect } from "react";
import API from "../../utils/API"

const Profile = () => {

  const [profileInfo, setProfileInfo] = useState({});
  const [edit, setEdit] = useState(false);
  const [editLast, setEditLast] = useState(false);


  useEffect(() => {
    const loadProfileInfo = async () => {
      try {
        const myProfile = await Axios({
          url: "/users/profile",
          method: "GET",
          headers: { "x-auth-token": localStorage.getItem("auth-token") }
        });
        console.log(myProfile)
        setProfileInfo(myProfile.data.user);
      } catch (err) {
        console.log(err.response)
        // err.response.data.msg && setError(err.response.data.msg);
      }
    }
    loadProfileInfo();
  }, []);

  const changeToEdit = (attr) => {
    switch (attr) {
      case "displayName":
        return setEdit(!edit)

      case "lastName":
        return setEditLast(!editLast)
      default:
        return;
    }
  }

  const handleChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  const saveChange = async (e) => {
    let attr = e.target.name;
    try {
      await API.editProfile(attr, e.target.value)
      changeToEdit(attr);
    } catch (err) {
      console.log(err)
      changeToEdit(attr);
    }
  
  }


  return (
    <div>
      <p>{profileInfo.profilePic}</p>
      {edit ? <input value={profileInfo.displayName} name="displayName" onChange={handleChange} onBlur={saveChange} /> : <p onClick={()=>changeToEdit("displayName")}>Display Name: {profileInfo.displayName}</p>}
      {editLast ? <input value={profileInfo.lastName} name="lastName" onChange={handleChange} onBlur={saveChange} /> : <p onClick={()=>changeToEdit("lastName")}>Last Name: {profileInfo.lastName}</p>}
      <p>First Name: {profileInfo.firstName || "type to insert"}</p>
      <p>Last Name:{profileInfo.lastName}</p>
      <p>Email: {profileInfo.email}</p>

    </div>
  )
}

export default Profile

