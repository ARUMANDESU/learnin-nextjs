import React from "react";
import { GetStaticProps } from "next";
import { IPost } from "../../models/models";

const Post = ({ post }: { post: IPost }) => {
    return (
        <>
            <h2>
                {post.id} {post.title}
            </h2>
            <p>{post.body}</p>
        </>
    );
};
export default Post;

export const getStaticProps: GetStaticProps<
    { post: IPost },
    { postId: string }
> = async (context) => {
    const params = context.params!;
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${params.postId}`
    );
    const data = await response.json();

    if (!data.id) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            post: data,
        },
    };
};

export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = (await response.json()) as IPost[];

    const paths = data.slice(0, 3).map((post) => {
        return {
            params: { postId: `${post.id}` },
        };
    });

    return {
        paths,
        fallback: "blocking",
    };
};
