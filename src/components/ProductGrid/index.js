import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class ProductGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => this.setState({ products: data }))
            .catch(error => console.error('Error fetching products:', error));
    }

    render() {
        const { products } = this.state;

        return (
            <div className="product-grid">
                {products.map(product => (
                    <Link key={product.id} to={`/product/${product.id}`} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <div>
                            <h3 className="product-title">{product.title}</h3>
                            <p className="product-price">${product.price}</p>
                        </div>
                    </Link>
                ))}
            </div>
        );
    }
}

export default ProductGrid;
