import React from "react";
import { IUser } from "../models/models";

const User = ({ user }: { user: IUser }) => {
  return (
    <>
      <p>{user.name} </p>
        <p>{user.email}   {user.address.city}</p>
    </>
  );
};
export default User;
