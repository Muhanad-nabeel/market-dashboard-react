import { useState, useEffect } from "react";

function Data() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        users.map((user) => {
          return (
            <div>
              <h1>USERS</h1>
              <h3>{user.title}</h3>
              <h2>{user.body} </h2>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Data;
