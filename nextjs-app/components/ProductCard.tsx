import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  finalPrice: number;
  discountPercentage: number;
  isNewArrival: boolean;
  isBestSeller: boolean;
  isFlashSale: boolean;
  inStock: boolean;
  // rating: number;
  // reviewCount: number;
}

const ProductCard: React.FC<{ product: Product, isWishlisted?: boolean }> = ({ product, isWishlisted = false }) => {
  const {
    id,
    name,
    imageUrl,
    price,
    finalPrice,
    discountPercentage,
    isNewArrival,
    isBestSeller,
    isFlashSale,
    inStock,
  } = product;

  return (
    <div className="card product-card h-100 border-0 shadow-sm overflow-hidden position-relative">
      <Link href={`/product/${id}`} className="stretched-link z-1"></Link>

      <div className="position-relative bg-light">
        <Image
          src={imageUrl || '/img/product-placeholder.jpg'}
          className="card-img-top object-fit-cover"
          alt={name}
          width={180}
          height={180}
          style={{ height: '180px' }}
        />

        {/* Status Badges */}
        <div className="position-absolute top-0 start-0 p-2 d-flex flex-column gap-1 z-2">
          {isFlashSale && (
            <span className="badge bg-warning text-dark shadow-sm"><i className="fas fa-bolt me-1"></i> Flash Sale</span>
          )}
          {isNewArrival && !isFlashSale && (
            <span className="badge bg-info text-white shadow-sm">New Arrival</span>
          )}
          {isBestSeller && !isFlashSale && !isNewArrival && (
            <span className="badge bg-primary text-white shadow-sm">Best Seller</span>
          )}
          {discountPercentage > 0 && (
            <span className="badge bg-danger shadow-sm">-{Math.round(discountPercentage)}%</span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          className="btn btn-white btn-sm rounded-circle shadow-sm position-absolute top-0 end-0 m-2 z-2 add-to-wishlist-btn"
          data-product-id={id}
          aria-label="Add to wishlist"
          style={{ width: '32px', height: '32px', padding: '0' }}>
          <i className={`${isWishlisted ? 'fas' : 'far'} fa-heart ${isWishlisted ? 'text-danger' : 'text-muted'}`}></i>
        </button>
      </div>

      <div className="card-body p-3 d-flex flex-column">
        <h6 className="card-title mb-2 text-dark small fw-bold" style={{ height: '2.4em', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
          {name}
        </h6>

        {/* Price and Cart Row */}
        <div className="mt-auto">
          <div className="d-flex align-items-center justify-content-between g-2">
            <div className="d-flex flex-column">
              <span className="text-danger fw-bold fs-5">{finalPrice.toFixed(2)} DA</span>
              {price > finalPrice && (
                <span className="text-muted text-decoration-line-through small" style={{ fontSize: '0.7rem' }}>
                  {price.toFixed(2)} DA
                </span>
              )}
            </div>
            <button
              className="btn btn-danger btn-sm rounded-3 shadow-sm z-2 add-to-cart-btn"
              data-product-id={id}
              disabled={!inStock}
              aria-label="Add to cart"
              style={{ width: '30px', height: '30px', padding: '0' }}>
              <i className="fas fa-shopping-cart fa-xs"></i>
            </button>
          </div>

          {/* Stock Status */}
          <div className={`mt-2 small ${inStock ? 'text-success' : 'text-danger'} fw-bold`} style={{ fontSize: '0.7rem' }}>
            <i className={`fas ${inStock ? 'fa-check-circle' : 'fa-times-circle'} me-1`}></i>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
