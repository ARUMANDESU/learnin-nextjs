import React from "react";
import { IPost } from "../../models/models";
import Link from "next/link";

const PostsList = ({ posts }: { posts: IPost[] }) => {
    return (
        <>
            <h1>List of posts</h1>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        {" "}
                        <Link
                            href={`posts/${post.id}`}
                            passHref
                            prefetch={false}
                        >
                            <h2>
                                {post.id} {post.title}
                            </h2>
                        </Link>
                        <hr />
                    </div>
                );
            })}
        </>
    );
};
export default PostsList;

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return {
        props: { posts: data },
    };
};
