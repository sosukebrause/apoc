import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import UserContext from "../context/UserContext";
import Form from "../feed/Form";

import Danger from "../Danger";

const divStyle = {
  marginLeft: '60px',
};



export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
        <>
          <h1>Welcome {userData.user.displayName}</h1>
          <Form inputName={"todoText"} />
        </>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link>

        </>
      ) : (<>
         <h3>Welcome {userData.user.displayName}</h3>
         <Danger/>
         <Search/>
         
         </>
      )}
    </div>
  );
}
