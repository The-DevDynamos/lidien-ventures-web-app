"use client";

import React from "react";
import { FaStar, FaSun } from "react-icons/fa";
import styles from "./productCard.module.scss";
import { GrCart } from "react-icons/gr";
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

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <FaStar key={i} className={`${styles.star} ${styles.filled}`} />
        );
      } else {
        stars.push(
          <FaStar key={i} className={`${styles.star} ${styles.empty}`} />
        );
      }
    }

    return stars;
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
    <div className={styles.productCard}>
      <div className={styles.cardHeader}>
        <div className={styles.headerContent}>
          <h4 className={styles.cardTitle}>{product.title}</h4>
          <FaSun className={styles.icon} aria-hidden="true" />
        </div>
        <div className={styles.ratingContainer}>
          <div className={styles.stars}>{renderStars(product.rating)}</div>
          <span className={styles.ratingText}>
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      <img
        src={product.image}
        alt={product.title}
        className={styles.cardImage}
      />

      <div className={styles.cardContent}>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.features}>
          {product.features.slice(0, 3).map((feature, index) => (
            <span key={index} className={styles.featureTag}>
              {feature}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.cardFooter}>
        <div className={styles.priceContainer}>
          <div className={styles.price}>
            <span className={styles.kesSymbol}>KSh</span>
            <span className={styles.kesPrice}>
              {formatKenyanPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className={styles.discount}>
                -{calculateDiscount(product.price, product.originalPrice)}%
              </span>
            )}
          </div>
          {product.originalPrice && product.originalPrice > product.price && (
            <div className={styles.originalPrice}>
              <span>KSh</span>
              <span>{formatKenyanPrice(product.originalPrice)}</span>
            </div>
          )}
        </div>
        <button
          className={styles.addButton}
          onClick={() => addToCart(cartItem)}
        >
          <span>
            <GrCart />
          </span>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
