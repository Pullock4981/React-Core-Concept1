import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className="task">
      <h3>Products: {products.length}</h3>
      {
        products.map(product=><Product product={product}></Product>)
      }
    </div>
  );
};

export default ProductList;
