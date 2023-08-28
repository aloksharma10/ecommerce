import { useState } from "react";

const { UserContext } = require("./UserContext");
export const UserState = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
