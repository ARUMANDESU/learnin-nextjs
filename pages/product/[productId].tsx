import React from "react";
import { useRouter } from "next/router";

const ProductId = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return <h1>Details about product: {productId}</h1>;
};

export default ProductId;
