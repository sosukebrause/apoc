import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../card/AuthPost";
import Danger from "../Danger";
import Search from "./Search";
import { useUserContext } from "../context/UserContext";

const data = [
  { argument: 1, value: 10 },
  { argument: 2, value: 20 },
  { argument: 3, value: 30 },
];

const Home = () => {
  const [covdData, setCovdData] = useState([]);
  const { userData } = useUserContext();
  console.log(userData);
  return (
    <div className="page">
      {!userData.user ? (
        <></>
      ) : (
        <>
          <h3>Welcome {userData.user.displayName}</h3>
          <Search />
          <Danger />
          <Form inputName={"todoText"} />
        </>
      )}
    </div>
  );
};
export default Home;
