import React from "react";
import { IUser } from "../models";

const UsersList = ({ users }: { users: IUser[] }) => {
  return (
    <>
      <h1>Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
};
export default UsersList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return { props: { users: data } };
}
