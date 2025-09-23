"use client";
import React, { useState } from "react";
import ProductCard, { type Product } from "../product_card/productCard";
import styles from "./productsSection.module.scss";
import { FaBoxOpen } from "react-icons/fa";

interface ProductsSectionProps {
  products: Product[];
  title?: string;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  title = "Products",
}) => {
  const [visibleCount, setVisibleCount] = useState(8);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const hasMore = visibleCount < products.length;
  const visibleProducts = products.slice(0, visibleCount);

  return (
    <section className={styles.productsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          {title}
          <span className={styles.productsCount}>
            ({products.length} products)
          </span>
        </h2>
      </div>

      {products.length === 0 ? (
        <div className={styles.emptyState}>
          <FaBoxOpen className={styles.emptyIcon} />
          <h3 className={styles.emptyTitle}>No products found</h3>
          <p className={styles.emptyText}>
            Try adjusting your filters or search terms
          </p>
        </div>
      ) : (
        <>
          <div className={styles.productsGrid}>
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {hasMore && (
            <div className={styles.loadMore}>
              <button className={styles.loadMoreButton} onClick={loadMore}>
                Load More Products ({products.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default ProductsSection;
