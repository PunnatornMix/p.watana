import React from "react";
import useWindowSize from "../../useWindowSize/useWindowSize";

function ProductNav({ id, children, character }) {
  const { width } = useWindowSize();
  const className = width >= 1024 ? "productList" : "productListMb";

  const lang = localStorage.getItem("i18nextLng");

  return children ? (
    <div id={id} className={`${className} ProductNav`}>
      <h3 className="text-red uppercase">{character}</h3>

      <a href="/product-item" className="hover:font-medium">
        {children}
      </a>
    </div>
  ) : (
    ""
  );
}

export default ProductNav;
