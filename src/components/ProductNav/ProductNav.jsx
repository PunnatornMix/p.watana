import React from "react";
import useWindowSize from "../../useWindowSize/useWindowSize";

function ProductNav({ children }) {
  const { width } = useWindowSize();
  const className = width >= 1024 ? "productList" : "productListMb";

  return <div className={`${className}`}>{children}</div>;
}

export default ProductNav;
