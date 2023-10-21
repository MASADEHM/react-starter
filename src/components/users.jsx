import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { userService } from "../services/users.service";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    userService().then((d) => {
      console.log("set users");
      console.log(d);
      setUsers(d.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1>welcome to users</h1>
      {isLoading && <Spinner />}
      <ul>
        {users.map((d) => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
    </>
  );
};
export default Users;
