import { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const localData = localStorage.getItem('cartItems');
        return localData ? JSON.parse(localData) : [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            toast.success(`Increased ${product.name} quantity`);
            setCartItems(prevItems => prevItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            toast.success(`Added ${product.name} to cart`);
            setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId, productName) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
        toast.error(`Removed ${productName} from cart`);
    };

    const updateQuantity = (productId, amount) => {
        setCartItems(prevItems =>
            prevItems.map(item => {
                if (item.id === productId) {
                    const newQuantity = Math.max(1, item.quantity + amount);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            })
        );
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    }

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            cartTotal,
            itemCount,
            isCartOpen,
            toggleCart,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
