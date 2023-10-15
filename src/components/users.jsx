import React, { useEffect, useState } from "react";
import UsersService from "../services/users.service";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    UsersService().then((d) => {
      setUsers(d.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1>welcome to users</h1>
      {isLoading && <h3>Loading</h3>}
      <ul>
        {users.map((d) => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
    </>
  );
};
export default Users;
