
import React from 'react';

const ProductPage = ({ navigateTo, addToCart, selectedProduct }) => {
    if (!selectedProduct) {
        return (
            <div style={styles.page}>
                <h2>Product not found</h2>
                <button onClick={() => navigateTo('home')}>Back to Home</button>
            </div>
        );
    }
    return (
        <div style={styles.page}>
            <div style={styles.productDetailContainer}>
                <div style={styles.productDetailImageContainer}>
                    <img src={selectedProduct.imageUrl} alt={selectedProduct.name} style={styles.productDetailImage} />
                </div>
                <div style={styles.productDetailInfo}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{selectedProduct.name}</h2>
                    <p style={{ fontSize: '2rem', color: '#e84118', marginBottom: '1.5rem' }}>₹{selectedProduct.price.toLocaleString('en-IN')}</p>
                    <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>{selectedProduct.description}</p>
                    <button style={{ ...styles.button, ...styles.primaryButton, padding: '15px 30px', width: '100%' }} onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

const styles = {
    page: { width: '100%' },
    productDetailContainer: { display: 'flex', gap: '3rem', background: '#222', padding: '3rem', borderRadius: '15px' },
    productDetailImageContainer: { flex: 2 },
    productDetailImage: { width: '100%', borderRadius: '10px' },
    productDetailInfo: { flex: 3 },
    button: { background: '#555', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' },
    primaryButton: { background: '#e84118' },
};

export default ProductPage;