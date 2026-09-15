import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState(() => {
        // Load from local storage if needed
        const saved = localStorage.getItem('grocery-wishlist');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('grocery-wishlist', JSON.stringify(wishlistItems));
    }, [wishlistItems]);

    const addToWishlist = (product) => {
        const exists = wishlistItems.find(item => item.id === product.id);
        if (!exists) {
            toast.success(`${product.name} added to wishlist!`, {
                icon: '❤️',
                style: {
                    border: '1px solid #f87171',
                    padding: '16px',
                    color: '#b91c1c',
                },
                iconTheme: {
                    primary: '#ef4444',
                    secondary: '#FFFAEE',
                },
            });
            setWishlistItems(prev => [...prev, product]);
        }
    };

    const removeFromWishlist = (productId) => {
        setWishlistItems(prev => prev.filter(item => item.id !== productId));
    };

    const toggleWishlist = (product) => {
        const exists = wishlistItems.find(item => item.id === product.id);
        if (exists) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const isInWishlist = (productId) => {
        return wishlistItems.some(item => item.id === productId);
    };

    return (
        <WishlistContext.Provider value={{
            wishlistItems,
            addToWishlist,
            removeFromWishlist,
            toggleWishlist,
            isInWishlist,
            wishlistCount: wishlistItems.length
        }}>
            {children}
        </WishlistContext.Provider>
    );
};
