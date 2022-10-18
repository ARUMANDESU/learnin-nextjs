import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Link href="/">
        <a>
          <h1>HomePage</h1>
        </a>
      </Link>
      <Link href="/blog">
        <a>
          <h1>Blog</h1>
        </a>
      </Link>
      <Link href="/product">
        <a>
          <h1>Products</h1>
        </a>
      </Link>
      <Link href="/docs">
        <a>
          <h1>docs</h1>
        </a>
      </Link>
    </div>
  );
};

export default Home;
