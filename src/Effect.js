import { useState, useEffect } from "react";

const Effect = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [value]);

  return (
    <>
      <p> increment : {value}</p>
      <button onClick={() => setValue(value + 1)}> click </button>
    </>
  );
};

export default Effect;
