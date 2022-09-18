import React from "react";
import "./productInfo.css";
interface Product {
  image: string;
  title: string;
  subtitle: string;
  tags: string[];
}
interface ProductProps {
  product: Product;
}
export default (props: ProductProps) => {
  const { image, title, subtitle, tags } = props.product;
  return (
    <div className="productInfo">
      <img src={image} alt="productImage" />
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="tags">
        {tags &&
          tags.map((e, i) => (
            <div className="tag" key={i}>
              {e}
            </div>
          ))}
      </div>
    </div>
  );
};
