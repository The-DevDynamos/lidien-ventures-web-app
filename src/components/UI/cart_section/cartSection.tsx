import React from "react";
import {
  FaShoppingCart,
  FaBox,
  FaPlus,
  FaMinus,
  FaTrash,
} from "react-icons/fa";
import styles from "./cartSection.module.scss";

export interface CartItem {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

interface CartSectionProps {
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onContinueShopping: () => void;
  onCheckout: () => void;
  isSideCart: boolean;
}

const CartSection: React.FC<CartSectionProps> = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onContinueShopping,
  onCheckout,
  isSideCart,
}) => {
  const formatKenyanPrice = (amount: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleQuantityChange = (itemId: string, change: number) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      const newQuantity = item.quantity + change;
      if (newQuantity > 0) {
        onUpdateQuantity(itemId, newQuantity);
      } else {
        // If quantity becomes 0 or negative, remove the item
        onRemoveItem(itemId);
      }
    }
  };

  const handleRemoveItem = (itemId: string) => {
    onRemoveItem(itemId);
  };

  if (cartItems.length === 0) {
    return (
      <div className={styles.cartSection}>
        {!isSideCart && (
          <div>
            <h3 className={styles.cartTitle}>
              <FaShoppingCart />
              Shopping Cart
            </h3>
          </div>
        )}
        <div className={styles.emptyCart}>
          <FaBox className={styles.emptyCartIcon} />
          <p className={styles.emptyCartText}>Your cart is empty</p>
          <button
            className={styles.continueShopping}
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cartSection}>
      {!isSideCart && (
        <div>
          <h3 className={styles.cartTitle}>
            <FaShoppingCart />
            Shopping Cart ({cartItems.length})
          </h3>
        </div>
      )}

      <div className={styles.cartItems}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.cartItem}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.itemImage}
            />
            <div className={styles.itemDetails}>
              <h4 className={styles.itemName}>{item.title}</h4>
              <div className={styles.itemPrice}>
                {formatKenyanPrice(item.price)}
              </div>
              <div className={styles.itemQuantity}>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  <FaMinus size={10} />
                </button>
                <span className={styles.quantityDisplay}>{item.quantity}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  <FaPlus size={10} />
                </button>
              </div>
            </div>
            <button
              className={styles.removeButton}
              onClick={() => handleRemoveItem(item.id)}
              title="Remove item"
            >
              <FaTrash size={14} />
            </button>
          </div>
        ))}
      </div>

      <div className={styles.cartSummary}>
        <div className={styles.subtotal}>
          <span className={styles.subtotalLabel}>Subtotal:</span>
          <span className={styles.subtotalAmount}>
            {formatKenyanPrice(calculateSubtotal())}
          </span>
        </div>
        <button className={styles.checkoutButton} onClick={onCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSection;
