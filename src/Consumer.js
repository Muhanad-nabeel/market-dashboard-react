import { MyContext, ArrContext, Mark } from "./Context";
import { useContext } from "react";
export default function Consumer() {
  const users = useContext(MyContext);
  const arr = useContext(ArrContext);
  const mark = useContext(Mark);

  return (
    <div>
      <h1>Consumer Component</h1>
      <p>User: {users}</p>

      <h3>Array Values</h3>
      <p>Name: {arr.name}</p>
      <p>Age: {arr.age}</p>
      <p>Email: {arr.email}</p>

      <h3>Mark Values</h3>
      <ul>
        {mark.map((item, index) => {
          return <li key={index}>{item.symbol}</li>;
        })}
      </ul>
    </div>
  );
}
