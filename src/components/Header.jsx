
import React from 'react';
import { CATEGORIES } from '../data';

const Header = ({ navigateTo, cartCount }) => (
    <header style={styles.header}>
        <div style={styles.headerTop}>
            <span>Fast Shipping Across India | COD Available</span>
        </div>
        <nav style={styles.nav}>
            <div style={styles.navSection}>
                {CATEGORIES.map(category => (
                    <button key={category} style={styles.navButton} onClick={() => navigateTo('category', category)}>
                        {category}
                    </button>
                ))}
            </div>
            <h1 style={styles.logo} onClick={() => navigateTo('home')}>F1-SPEEDWEAR</h1>
            <div style={{...styles.navSection, justifyContent: 'flex-end'}}>
                <button style={styles.navButton}>Account</button>
                <button style={styles.navButton} onClick={() => navigateTo('cart')}>
                    Cart ({cartCount})
                </button>
            </div>
        </nav>
    </header>
);

const styles = {
    header: { position: 'sticky', top: 0, zIndex: 100, backgroundColor: 'rgba(20, 20, 20, 0.8)', backdropFilter: 'blur(10px)' },
    headerTop: { backgroundColor: '#e84118', color: 'white', textAlign: 'center', padding: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' },
    nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', borderBottom: '1px solid #333' },
    navSection: { display: 'flex', alignItems: 'center', gap: '1.5rem', flex: 1 },
    logo: { fontSize: '1.8rem', fontWeight: '900', color: 'white', cursor: 'pointer', letterSpacing: '1px' },
    navButton: { background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold', transition: 'color 0.2s', textTransform: 'uppercase' },
};

export default Header;