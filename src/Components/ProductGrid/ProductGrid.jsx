/* eslint-disable react/prop-types */
import "./productGrid.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid({ data }) {
  return (
    <div className="product-grid-container">
      {data.map((item, i) => (
        <ProductCard key={i} data={item} />
      ))}
    </div>
  );
}

export default ProductGrid;
  