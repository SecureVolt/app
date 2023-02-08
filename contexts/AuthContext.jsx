import { useContext, useState, createContext, useEffect } from "react";

const AuthContext = createContext({ isLoggedIn: false });

export const AuthContextProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // const login = async (email, password) => {
  //     try {
  //         const response = await fetch("/api/auth/login", {
  //             method: "POST",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //             body: JSON.stringify({
  //                 email,
  //                 password,
  //             }),
  //         });
  //     } catch (error) {
  //         setError(error);
  //     }
  // };

  // const dispatchAPI = async (type, options) => {
  //     switch (type) {
  //         case "LOGIN":
  //             return await login(options.email, options.password);
  //         case "REGISTER":
  //             return await register(
  //                 options.email,
  //                 options.password,
  //                 options.additionalData
  //             );
  //         case "LOGOUT":
  //             return await logout();
  //         default:
  //             throw new Error("Invalid dispatchAPI type");
  //     }
  // };

  return (
    <AuthContext.Provider
      value={{
        // user,
        // setUser,
        isLoggedIn,
        setIsLoggedIn,
        // isLoading,
        // setIsLoading,
        // error,
        // setError,
        // dispatchAPI,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Context must be used within a context provider");
  return context;
};
