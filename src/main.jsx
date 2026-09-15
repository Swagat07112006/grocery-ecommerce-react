import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './contexts/ProductContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { WishlistProvider } from './contexts/WishlistContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductProvider>
      <WishlistProvider>
        <CartProvider>
          <App />
          <Toaster position="bottom-right" />
        </CartProvider>
      </WishlistProvider>
    </ProductProvider>
  </StrictMode>,
)