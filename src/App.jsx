
import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [cartItems, setCartItems] = useState([]);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const navigateTo = (page, data = null) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
        if (page === 'category') setCurrentCategory(data);
        if (page === 'product') setSelectedProduct(data);
    };

    const addToCart = (product, quantity = 1) => {
        setCartItems(prev => {
            const exist = prev.find(item => item.id === product.id);
            if (exist) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item);
            }
            return [...prev, { ...product, quantity }];
        });
        alert(`${product.name} added to cart!`);
    };

    const updateQuantity = (id, newQuantity) => {
        setCartItems(prev => {
            if (newQuantity <= 0) return prev.filter(item => item.id !== id);
            return prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item);
        });
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home': return <HomePage navigateTo={navigateTo} />;
            case 'category': return <CategoryPage navigateTo={navigateTo} selectedCategory={currentCategory} />;
            case 'product': return <ProductPage navigateTo={navigateTo} addToCart={addToCart} selectedProduct={selectedProduct} />;
            case 'cart': return <CartPage cartItems={cartItems} updateQuantity={updateQuantity} navigateTo={navigateTo} />;
            default: return <HomePage navigateTo={navigateTo} />;
        }
    };

    return (
        <div style={styles.appContainer}>
            <Header navigateTo={navigateTo} cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)} />
            <main style={styles.mainContent}>{renderPage()}</main>
            <Footer />
        </div>
    );
}

const styles = {
    appContainer: { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
    mainContent: { flex: 1, width: '100%', maxWidth: '1600px', margin: '0 auto', padding: '2rem' },
};

export default App;