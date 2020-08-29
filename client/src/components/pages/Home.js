import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Form from "./card/Form";

import UserContext from "../context/UserContext";

const Home = () => {
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
      )}
    </div>
  );
};

export default Home;
