
import React from 'react';
const CartPage = ({ cartItems, updateQuantity }) => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div style={styles.page}>
            <div style={styles.formContainer}>
                <h2 style={styles.sectionTitle}>Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <p style={{textAlign: 'center'}}>Your cart is empty.</p>
                ) : (
                    <div>
                        {cartItems.map(item => (
                            <div key={item.id} style={styles.cartItem}>
                                <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: '100px', borderRadius: '8px', objectFit: 'cover' }} />
                                <div style={{ flex: 1, marginLeft: '1rem' }}>
                                    <h4 style={{margin: '0 0 0.5rem 0'}}>{item.name}</h4>
                                    <p style={{margin: 0, color: '#aaa'}}>₹{item.price.toLocaleString('en-IN')}</p>
                                </div>
                                <div style={styles.quantityControl}>
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <p style={{ width: '120px', textAlign: 'right', fontSize: '1.1rem' }}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                            </div>
                        ))}
                        <div style={styles.cartTotal}>
                            <h3>Subtotal: ₹{subtotal.toLocaleString('en-IN')}</h3>
                            <button style={{ ...styles.button, ...styles.primaryButton }}>Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const styles = {
    page: { width: '100%' },
    sectionTitle: { fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' },
    formContainer: { maxWidth: '800px', margin: '2rem auto', background: '#222', padding: '2rem', borderRadius: '15px' },
    cartItem: { display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem 0', borderBottom: '1px solid #444' },
    quantityControl: { display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid #555', borderRadius: '5px' },
    cartTotal: { marginTop: '2rem', textAlign: 'right', fontSize: '1.5rem', fontWeight: 'bold' },
    button: { background: '#555', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' },
    primaryButton: { background: '#e84118' },
};

export default CartPage;