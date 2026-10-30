import { createContext, useState } from "react";
import Dash from "./Dash";

export const MyContext = createContext(null);
export const ArrContext = createContext(null);
export const Mark = createContext(null);

export default function Context() {
  const [users, setUsers] = useState("Muhanad");
  const [arr, setArr] = useState({
    name: "Muhanad",
    age: 25,
    email: "muhanad@example.com",
  });
  const [mark, setMark] = useState([
    {
      symbol: "AAPL",
    },
    {
      symbol: "GOOGL",
    },
    {
      symbol: "facebook",
    },
  ]);

  return (
    <div>
      <MyContext.Provider value={users}>
        <ArrContext.Provider value={arr}>
          <Mark.Provider value={mark}>
            <Dash />
          </Mark.Provider>
        </ArrContext.Provider>
      </MyContext.Provider>
    </div>
  );
}
