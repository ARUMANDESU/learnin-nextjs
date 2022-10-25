import Link from "next/link";
import React from "react";

const Home = () => {
    return (
        <div>
            <h1>Next js home page</h1>
            <Link href="/users">
                <a>
                    <p>Users</p>
                </a>
            </Link>
            <Link href="/posts">
                <a>Posts</a>
            </Link>
        </div>
    );
};

export default Home;
