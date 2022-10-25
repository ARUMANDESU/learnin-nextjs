import React from "react";
import { IUser } from "../models/models";
import User from "../components/User";

const UsersList = ({ users }: { users: IUser[] }) => {
    return (
        <>
            <h1>Users</h1>
            {users.map((user) => {
                return (
                    <div key={user.id}>
                        <User user={user} />
                    </div>
                );
            })}
        </>
    );
};
export default UsersList;

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return { props: { users: data } };
};
