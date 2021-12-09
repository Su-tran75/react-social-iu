import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "61a5db664f7346581d689b1d",
    username: "leo",
    email: "leo@gmail.com",
    password: "$2b$10$X0MqpZ4qkYvw5sDqOMvEQOAhYKGJilS/Qmja6B5FgEaCrg3ioPbiK",
    profilePicture: "person/10.jpeg",
    coverPicture: "",
    followers: ["61a5d81160f9aa22a5366423"],
    isAdmin: false,
    createdAt: { $date: { $numberLong: "1638259558213" } },
    updatedAt: { $date: { $numberLong: "1638267200138" } },
    __v: { $numberInt: "0" },
    followings: ["61a5d81160f9aa22a5366423"],
    desc: "The Goat",
    city: "Paris",
    from: "Barcelona",
    relationship: "2",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
