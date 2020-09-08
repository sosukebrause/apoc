import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUserContext } from "./context/UserContext";

export default ({ component: Component, ...rest }) => {
  const { userData, isAuthLoading } = useUserContext();
  console.log("isAuthLoading", isAuthLoading);
  //console.log(userData)
  if (isAuthLoading) return <p> Loading page... </p>;
  return (
    <Route
      {...rest}
      render={(props) =>
        userData.user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};
