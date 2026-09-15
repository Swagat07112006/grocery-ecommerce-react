import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../Buttons/Button';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, cartTotal, setCartItems, toggleCart, setIsCartOpen } = useCart();
    const navigate = useNavigate();

    // Ensure cart is closed when arriving at checkout
    React.useEffect(() => {
        setIsCartOpen(false);
    }, [setIsCartOpen]);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        toast.success("Order Placed Successfully! 🎉");
        // Clear cart and redirect to home after 2 seconds
        setTimeout(() => {
            navigate('/');
            // Reload page to clear local storage if setCartItems isn't exposed (or we can just expose clearing cart)
            localStorage.removeItem('cartItems');
            window.location.reload();
        }, 2000);
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
                <h2 className="text-3xl font-bold mb-4">Your Cart is Empty</h2>
                <Button content="Go Back to Shop" onClick={() => navigate('/')} />
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Col - Form */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-8"
            >
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Truck className="text-orange-500" />
                        Shipping Information
                    </h2>
                    <form className="space-y-4" onSubmit={handlePlaceOrder} id="checkout-form">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">First Name</label>
                                <input required type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Last Name</label>
                                <input required type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-1">Address</label>
                            <input required type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="123 Main St" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2">
                                <label className="block text-sm font-medium mb-1">City</label>
                                <input required type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="New York" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">ZIP</label>
                                <input required type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="10001" />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <CreditCard className="text-orange-500" />
                        Payment Details
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">Card Number</label>
                            <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Expiry Date</label>
                                <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="MM/YY" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">CVC</label>
                                <input type="text" className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="123" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Col - Summary */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gray-50 p-8 rounded-2xl h-fit border border-gray-200 sticky top-28"
            >
                <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm">
                            <div className="flex gap-3 items-center">
                                <img src={item.image} alt={item.name} className="w-12 h-12 object-contain bg-gray-50 rounded p-1" />
                                <div>
                                    <p className="font-semibold text-sm">{item.name}</p>
                                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                </div>
                            </div>
                            <p className="font-bold text-orange-500">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                    <div className="flex justify-between text-gray-600">
                        <span>Subtotal</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <span>Shipping</span>
                        <span className="text-green-500 font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold pt-4 border-t border-gray-200">
                        <span>Total</span>
                        <span>${cartTotal.toFixed(2)}</span>
                    </div>
                </div>

                <div className="mt-8 space-y-4">
                    <button
                        type="submit"
                        form="checkout-form"
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all flex justify-center items-center gap-2 transform hover:-translate-y-0.5"
                    >
                        <ShieldCheck size={20} />
                        Place Order • ${cartTotal.toFixed(2)}
                    </button>
                    <p className="text-xs text-center text-gray-500 flex items-center justify-center gap-1">
                        <ShieldCheck size={14} /> Secured and Encrypted Checkout
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Checkout;
