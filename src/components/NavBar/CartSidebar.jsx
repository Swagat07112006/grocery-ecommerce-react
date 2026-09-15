import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { X, Trash2, Plus, Minus, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Buttons/Button';
import { Link } from 'react-router-dom';

const CartSidebar = () => {
    const {
        isCartOpen,
        toggleCart,
        cartItems,
        removeFromCart,
        updateQuantity,
        cartTotal
    } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="text-gray-600" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
                                    <div className="text-6xl">🛒</div>
                                    <p className="text-lg">Your cart is empty</p>
                                    <Button content="Start Shopping" className="mt-4" onClick={toggleCart} />
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        key={item.id}
                                        className="flex gap-4 items-center bg-gray-50 p-3 rounded-2xl"
                                    >
                                        <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center p-2 shadow-sm">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-800 line-clamp-1">{item.name}</h3>
                                            <p className="text-orange-500 font-bold">${item.price.toFixed(2)}</p>

                                            <div className="flex items-center gap-3 mt-2 bg-white w-fit rounded-lg shadow-sm">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="p-1 hover:bg-gray-100 rounded-l-lg transition-colors"
                                                >
                                                    <Minus size={16} />
                                                </button>
                                                <span className="font-medium w-6 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="p-1 hover:bg-gray-100 rounded-r-lg transition-colors"
                                                >
                                                    <Plus size={16} />
                                                </button>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id, item.name)}
                                            className="p-2 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="border-t border-gray-100 p-6 bg-gray-50">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-gray-500 font-medium">Subtotal</span>
                                    <span className="text-2xl font-bold text-gray-800">${cartTotal.toFixed(2)}</span>
                                </div>
                                <Link to="/checkout" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-0.5" onClick={toggleCart}>
                                    <CreditCard size={20} />
                                    Proceed to Checkout
                                </Link>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
