import React, { useState, useEffect } from "react";
import '../style/index.css';

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); 
                const response = await fetch('https://fakestoreapi.com/products');
                const json = await response.json();
                setProducts(json); 
                setLoading(false); 
                console.log(json);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false); 
            }
        };

        fetchData(); 

    }, []);

    return (
        <div className="products-container">
            <h1>Products</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="product-grid">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} />
                            <div className="product-details">
                                <h3>{product.title}</h3>
                                <p>Category: {product.category}</p>
                                <p>Price: ${product.price}</p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
