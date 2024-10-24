

const Product = ({product}) => {
    return (
        <div className="student">
            <p>Product ID: {product.Product_Id}</p>
            <h3>Product name: {product.Product_Name}</h3>
            <p>Product Details: {product.Product_Details}</p>
        </div>
    );
};

export default Product;