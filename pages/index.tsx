import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    console.log("Placing your order");
    /*
     router.push("/product"); //programmatically navigate
    */
    router.replace("/product"); //replaces current history
  };
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
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default Home;
