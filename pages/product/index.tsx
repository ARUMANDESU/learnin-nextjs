import React from "react";
import Link from "next/link";

const Index = ({ productId = 100 }: { productId: number }) => {
  return (
    <>
      <Link
        href="/"
        /* takes in only one child! like <a></a> . if you pass children/multiple components between <Link></Link> it will throw you an error*/
      >
        <a>
          <h1>HomePage</h1>
        </a>
      </Link>
      <Link href="/product/1">
        <a>
          <h2>Product 1</h2>
        </a>
      </Link>
      <Link href="/product/2">
        <a>
          <h2>Product 2</h2>
        </a>
      </Link>
      <Link
        href="/product/3"
        replace /*"replace" prob, replaces current history state instead of add new url in this tag  */
      >
        <a>
          <h2>Product 3</h2>
        </a>
      </Link>
      <Link href={`/product/${productId}`}>
        <a>
          <h2>Product {productId}</h2>
        </a>
      </Link>
    </>
  );
};
export default Index;
