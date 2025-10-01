
import React from 'react';

const ProductCard = ({ product, navigateTo }) => (
    <div style={styles.productCard} onClick={() => navigateTo('product', product)}>
        <div style={styles.productImageContainer}>
            <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
        </div>
        <div style={styles.productInfo}>
            <h3 style={{ margin: '0.5rem 0', fontSize: '1.1rem' }}>{product.name}</h3>
            <p style={{ color: '#e84118', margin: '0', fontWeight: 'bold' }}>₹{product.price.toLocaleString('en-IN')}</p>
        </div>
    </div>
);

const styles = {
    productCard: { background: '#222', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' },
    productImageContainer: { height: '350px', backgroundColor: '#333' },
    productImage: { width: '100%', height: '100%', objectFit: 'cover' },
    productInfo: { padding: '1rem', textAlign: 'center' },
};

export default ProductCard; 