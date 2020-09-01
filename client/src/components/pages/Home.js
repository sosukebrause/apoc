import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Form from "../card/AuthPost";
import Danger from "../Danger";
import Search from "./Search";

import { UserProvider, useUserContext } from "../context/UserContext";

const Home = () => {
  const { userData } = useUserContext();
  console.log(userData);
  return (
    <div className="page">
      {!userData.user ? (
        <>
        
        </>
      ) : (
        <>
    <h3>Welcome {userData.user.displayName}</h3>
        <Search/>
        <Danger/>
          <Form inputName={"todoText"} />
        </>
      )}
    </div>
  );
};

export default Home;
