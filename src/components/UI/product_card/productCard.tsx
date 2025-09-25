"use client";

import React, { useState } from "react";
import { FaStar, FaSun, FaShoppingCart } from "react-icons/fa";
import { RiFlashlightFill } from "react-icons/ri";
import styles from "./productCard.module.scss";
import { CartItem } from "../cart_section/cartSection";
import { useDispatch } from "react-redux";
import { addItem } from "@/store/cart/cart";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  features: string[];
  category: string;
  isEcoFriendly?: boolean;
  isBestSeller?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cartItem: Omit<CartItem, "id" | "quantity"> = {
    productId: product.id,
    title: product.title,
    price: product.price,
    image: product.image,
    category: product.category,
  };

  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`${styles.star} ${
          i < Math.floor(rating) ? styles.filled : styles.empty
        }`}
      />
    ));
  };

  const calculateDiscount = (price: number, originalPrice: number) => {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  };

  const formatKenyanPrice = (amount: number) => {
    return new Intl.NumberFormat("en-KE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const addToCart = (item: Omit<CartItem, "id" | "quantity">) => {
    dispatch(addItem(item));
  };

  return (
    <div
      className={styles.productCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with badges */}
      <div className={styles.cardHeader}>
        <div className={styles.badgeContainer}>
          {product.isBestSeller && (
            <span className={`${styles.badge} ${styles.bestSeller}`}>
              ⭐ Best Seller
            </span>
          )}
          {product.isEcoFriendly && (
            <span className={`${styles.badge} ${styles.ecoFriendly}`}>
              🌱 Eco-Friendly
            </span>
          )}
          {product.originalPrice && product.originalPrice > product.price && (
            <span className={`${styles.badge} ${styles.discountBadge}`}>
              -{calculateDiscount(product.price, product.originalPrice)}%
            </span>
          )}
        </div>

        <div className={styles.headerContent}>
          <h4 className={styles.cardTitle}>{product.title}</h4>
          <RiFlashlightFill className={styles.icon} aria-hidden="true" />
        </div>

        <div className={styles.ratingContainer}>
          <div className={styles.stars}>{renderStars(product.rating)}</div>
          <span className={styles.ratingText}>
            {product.rating} ({product.reviewCount})
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.title}
          className={`${styles.cardImage} styles.loaded 
           ${isHovered ? styles.zoomed : ""}`}
        />

        {/* Quick View Overlay */}
        <div
          className={`${styles.quickView} ${isHovered ? styles.visible : ""}`}
        >
          <button className={styles.quickViewBtn}>Quick View</button>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.cardContent}>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.features}>
          {product.features.slice(0, 3).map((feature, index) => (
            <span key={index} className={styles.featureTag}>
              <span className={styles.featureDot}>•</span>
              {feature}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className={styles.cardFooter}>
        <div className={styles.priceContainer}>
          <div className={styles.price}>
            <span className={styles.kesSymbol}>KES</span>
            <span className={styles.kesPrice}>
              {formatKenyanPrice(product.price)}
            </span>
          </div>

          {product.originalPrice && product.originalPrice > product.price && (
            <div className={styles.originalPrice}>
              <span>Was </span>
              <span>KES {formatKenyanPrice(product.originalPrice)}</span>
            </div>
          )}

          <div className={styles.savingsNote}>
            Includes installation & warranty
          </div>
        </div>

        <button
          className={`${styles.addButton} ${isHovered ? styles.hovered : ""}`}
          onClick={() => addToCart(cartItem)}
        >
          <FaShoppingCart className={styles.cartIcon} />
          <span>Add to Cart</span>
          <div className={styles.buttonOverlay}></div>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
