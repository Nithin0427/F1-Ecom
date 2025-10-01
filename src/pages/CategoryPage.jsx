
import React from 'react';
import { PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

const CategoryPage = ({ navigateTo, selectedCategory }) => {
    const filteredProducts = PRODUCTS.filter(p => p.category === selectedCategory);
    
    return (
        <div style={styles.page}>
            <h2 style={styles.sectionTitle}>{selectedCategory} Collection</h2>
            <div style={styles.grid}>
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} navigateTo={navigateTo} />
                    ))
                ) : (
                    <p>No products found in this category.</p>
                )}
            </div>
        </div>
    );
};

const styles = {
    page: { width: '100%' },
    sectionTitle: { fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' },
};

export default CategoryPage;