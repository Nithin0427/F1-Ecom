
import React from 'react';
import { HERO_IMAGE, PRODUCTS, CATEGORIES } from '../data';
import ProductCard from '../components/ProductCard';

const HomePage = ({ navigateTo }) => (
    <div style={styles.page}>
        <section style={{...styles.hero, backgroundImage: `url(${HERO_IMAGE})`}}>
            <div style={styles.heroOverlay}></div>
            <div style={styles.heroContent}>
                <h2 style={styles.heroTitle}>THE 2025 COLLECTION</h2>
                <p style={styles.heroSubtitle}>Wear Your Passion. Official Teamwear & Fan Apparel.</p>
                <button style={styles.heroButton} onClick={() => navigateTo('category', 'Tees')}>Shop New Arrivals</button>
            </div>
        </section>

        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Shop by Category</h2>
            <div style={styles.categoryGrid}>
                {CATEGORIES.map(category => (
                    <div key={category} style={styles.categoryCard} onClick={() => navigateTo('category', category)}>
                        <div style={styles.categoryNameOverlay}>{category}</div>
                    </div>
                ))}
            </div>
        </section>

        <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Featured Products</h2>
            <div style={styles.grid}>
                {PRODUCTS.slice(0, 4).map(product => (
                    <ProductCard key={product.id} product={product} navigateTo={navigateTo} />
                ))}
            </div>
        </section>
    </div>
);

const styles = {
    page: { width: '100%' },
    hero: { position: 'relative', height: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', color: 'white', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '15px', overflow: 'hidden' },
    heroOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' },
    heroContent: { position: 'relative', zIndex: 1 },
    heroTitle: { fontSize: '4rem', fontWeight: '900', margin: 0, textShadow: '2px 2px 10px rgba(0,0,0,0.7)' },
    heroSubtitle: { fontSize: '1.5rem', margin: '1rem 0 2rem 0' },
    heroButton: { background: '#e84118', color: 'white', border: 'none', padding: '1rem 2.5rem', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer', fontWeight: 'bold', transition: 'background-color 0.2s' },
    section: { margin: '4rem 0' },
    sectionTitle: { fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' },
    categoryGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' },
    categoryCard: { position: 'relative', height: '350px', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    categoryNameOverlay: { position: 'relative', zIndex: 1, fontSize: '2rem', fontWeight: 'bold', color: 'white', textShadow: '1px 1px 5px black' },
};

export default HomePage;