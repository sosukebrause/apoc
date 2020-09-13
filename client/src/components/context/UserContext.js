import Axios from "axios";
import React, { useContext, useState, useEffect } from "react";

// export default createContext(null);

//Needs to perform function to check if thre is token (user logged in in previous session); if so user is logged in in the context
const UserContext = React.createContext();

//Here we have the UserProvider which is responsible for creating state, updating state and persistuing the checked login value down into the children
function UserProvider({ ...props }) {
  //copied from app.js lines 22-53
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  const [isAuthLoading, setAuthLoading] = useState(true);
  //useEffect is having a "side effect" outside of the global scope
  //useEfect with empty array
  useEffect(() => {
    // this will automatically trigger when the app starts; cannot have useEffect as async therefore creating the following async method within
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (!token) {
        localStorage.setItem("auth-token", "");
        setAuthLoading(false);
        return;
      }
      Axios.post("/users/tokenIsValid", null, {
        headers: { "x-auth-token": token },
      })
        .then(async (tokenRes) => {
          if (!tokenRes.data) return setAuthLoading(false);
          if (tokenRes.data) {
            try {
              const userRes = await Axios.get("/users/", {
                headers: { "x-auth-token": token },
              });
              setUserData({
                token,
                user: userRes.data.user,
              });
            } catch (err) {
              console.log(err);
            } finally {
              setAuthLoading(false);
            }
          }
        })
        .catch((err) => {
          console.log("tokenValid err", err);
          setAuthLoading(false);
        });
    };
    checkLoggedIn();
  }, []);
  return (
    // userProvider is now wrapping all logic for handling our state, updating state, and pushing out different values to all of our children and components.
    <UserContext.Provider
      value={{ userData, setUserData, isAuthLoading }}
      {...props}
    />
  );
}
const useUserContext = () => useContext(UserContext);
/*
function useUserContext() {
  return useContext(UserContext);
}
*/
export { useUserContext, UserProvider };
