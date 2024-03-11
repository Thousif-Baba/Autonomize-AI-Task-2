import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class ProductDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: null,
        };
    }

    fetchProductDetails(productId) {
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(response => response.json())
            .then(data => this.setState({ product: data }))
            .catch(error => console.error('Error fetching product details:', error));
    }

    componentDidMount() {
        const { match } = this.props;
        const productId = match.params.productId;
        this.fetchProductDetails(productId);
    }

    render() {
        const { product } = this.state;

        return (
            <div className="product-details">
                {product !== null ? (
                    <>
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-price"><strong>Price:</strong> ${product.price}</p>
                        <p className="product-category"><strong>Category:</strong> {product.category}</p>
                        <p className="product-description"><strong>Description:</strong> {product.description}</p>
                        <img src={product.image} alt={product.title} className="product-image" />
                        <Link to="/" className="back-link">Back</Link>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}

export default ProductDetailsPage;
