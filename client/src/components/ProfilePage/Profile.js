import Axios from "axios";
import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { InputLabel, Container } from '@material-ui/core';
import { Card } from '@material-ui/core';
import { borders } from '@material-ui/system';
import ThemeProvider from "../ThemeProvider";
import Fire from "./images/fire.png";
import Skull from "./images/skull.png";
import Error from "./images/error.png";
import Covid from "./images/coronavirus.png";
import Virus from "./images/virus (1).png";
import "./Profile.css"

const Profile = () => {

  const [profileInfo, setProfileInfo] = useState({});
  const [edit, setEdit] = useState(false);
  const [editLast, setEditLast] = useState(false);
  const [editFirst, setEditFirst] = useState(false);
  const [editLocation, setEditLocation] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editImage, setEditImage] = useState("");

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
      case "firstName":
        return setEditFirst(!editFirst)
        case "location":
          return setEditLocation(!editLocation)
          case "phone":
            return setEditPhone(!editPhone)
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

  const changeImage = () => {

  }


  return (
    <div>
     
      <Container >
  <div style = {{ display: "flex", justifyContent: "center"}}>
  <Card id ="profileCard" style = {{height: "600px", maginTop: "20px", width: "500px",  marginTop: "60px"}}>
  <div style = {{display: "flex", justifyContent: "center"}}>
        <img src={Fire} id="profileImage" alt="not working" onClick = {changeImage}/>
      </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p style={{ marginRight: "10px" }}>Display Name:</p>
          {edit ? <input value={profileInfo.displayName} name="displayName" onChange={handleChange} onBlur={saveChange} /> :
          <InputLabel placeholder={profileInfo.displayName} onClick={() => changeToEdit("displayName")}> {profileInfo.displayName}</InputLabel>}
        </div>

      
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p style={{ marginRight: "10px" }}>First Name:</p>
          {editFirst ? <input value={profileInfo.firstName} name="firstName" onChange={handleChange} onBlur={saveChange} /> :
          <InputLabel onClick={() => changeToEdit("firstName")}> {profileInfo.firstName}</InputLabel>}
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p style={{ marginRight: "10px" }}>Last Name:</p>
          {editLast ? <input value={profileInfo.lastName} name="lastName" onChange={handleChange} onBlur={saveChange} /> :
          <InputLabel placeholder="Type Last Name" onClick={() => changeToEdit("lastName")}>{profileInfo.lastName}</InputLabel>}
        </div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p style={{ marginRight: "10px" }}>Location:</p>
          {editLocation ? <input value={profileInfo.location} name="location" onChange={handleChange} onBlur={saveChange} /> :
          <InputLabel placeholder="Type Last Name" onClick={() => changeToEdit("location")}>{profileInfo.location}</InputLabel>}
        </div>
      
 <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
 <p>Email: {profileInfo.email}</p>
 </div>
  </Card>
  </div>

</Container>
   

   
    </div>
  )
}

export default Profile

