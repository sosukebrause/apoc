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

  //useEffect is having a "side effect" outside of the global scope
  //useEfect with empty array
  useEffect(() => {
    // this will automatically trigger when the app starts; cannot have useEffect as async therefore creating the following async method within
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        try {
          const userRes = await Axios.get("http://localhost:5000/users/", {
            headers: { "x-auth-token": token },
          });
          setUserData({
            token,
            user: userRes.data,
          });
        } catch (err) {
          console.log(err);
        }
      }
    };

    checkLoggedIn();
  }, []);

  return (
    // userProvider is now wrapping all logic for handling our state, updating state, and pushing out different values to all of our children and components.

    <UserContext.Provider value={{ userData, setUserData }} {...props} />
  );
}

const useUserContext = () => useContext(UserContext);

/*
function useUserContext() {
  return useContext(UserContext);
}
*/

export { useUserContext, UserProvider };
