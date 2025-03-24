"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../features/cartSlice";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  oldPrice: number | null;
  description: string;
  rating: number;
  code: string;
  brand: string;
  discount: string;
  category: string;
}

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = subtotal * 0.3;

  const total = subtotal + shipping;

  return (
    <div>
      <Header />
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <img
              src="cart-empty.png"
              alt="Empty Cart"
              className="cart-empty-image"
            />
            <h3 className="heading heading--3">Your cart is empty</h3>
            <Link href={`/products`}>
              <button className="cart-empty-button">Start Shopping</button>
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img
                    src={`/${item.img}`}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <div className="cart-item-info">
                    <h2 className="heading heading-sub--3">{item.name}</h2>
                    <p className="label cart-item-price">${item.price}</p>
                  </div>
                  <div className="quantity-container">
                    <button
                      className="quantity-btn decrease"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <p className="quantity">{item.quantity}</p>
                    <button
                      className="quantity-btn increase"
                      onClick={() =>
                        handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-item-total">
                    ${item.price * item.quantity}
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    -
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-checkout-container">
              <div className="cart-checkout">
                <div className="cart-checkout-line cart-checkout-total-sub">
                  <p className="paragraph paragraph--bold">Subtotal:</p>
                  <p className="label label--bold">${subtotal.toFixed(2)}</p>
                </div>

                <hr />
                <div className="cart-checkout-line cart-checkout-total">
                  <p className="paragraph paragraph--bold">Total:</p>
                  <p className="label label--bold">${total.toFixed(2)}</p>
                </div>
                <hr />

                <div className="cart-checkout-line cart-checkout-shipping">
                  <p className="paragraph paragraph--small">Shipping:</p>
                  <p className="label label--small">${shipping.toFixed(2)}</p>
                </div>

                <button className="cart-checkout-payment">
                  Proceed to checkout
                </button>
              </div>
              <button className="cart-clear-button" onClick={handleClearCart}>
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
