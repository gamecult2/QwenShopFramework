import React from 'react';
import ProductCard from '@/components/ProductCard';

const HomePage = () => {
  // Dummy data for products
  const products = [
    { id: 1, name: 'Product 1', imageUrl: '/img/product-placeholder.jpg', price: 100, finalPrice: 80, discountPercentage: 20, isNewArrival: true, isBestSeller: false, isFlashSale: false, inStock: true },
    { id: 2, name: 'Product 2', imageUrl: '/img/product-placeholder.jpg', price: 120, finalPrice: 120, discountPercentage: 0, isNewArrival: false, isBestSeller: true, isFlashSale: false, inStock: true },
    { id: 3, name: 'Product 3', imageUrl: '/img/product-placeholder.jpg', price: 80, finalPrice: 80, discountPercentage: 0, isNewArrival: false, isBestSeller: false, isFlashSale: true, inStock: false },
    { id: 4, name: 'Product 4', imageUrl: '/img/product-placeholder.jpg', price: 150, finalPrice: 135, discountPercentage: 10, isNewArrival: false, isBestSeller: false, isFlashSale: false, inStock: true },
    { id: 5, name: 'Product 5', imageUrl: '/img/product-placeholder.jpg', price: 200, finalPrice: 200, discountPercentage: 0, isNewArrival: true, isBestSeller: false, isFlashSale: false, inStock: true },
    { id: 6, name: 'Product 6', imageUrl: '/img/product-placeholder.jpg', price: 90, finalPrice: 90, discountPercentage: 0, isNewArrival: false, isBestSeller: false, isFlashSale: false, inStock: true },
  ];

  return (
    <div className="container-xxl">
      {/* Hero Banner Section */}
      <div className="row g-2 mb-4">
        <div className="col-lg-3 d-none d-lg-block">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Categories</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Electronics</li>
                <li className="list-group-item">Computers</li>
                <li className="list-group-item">Gaming</li>
                <li className="list-group-item">Home Appliances</li>
                <li className="list-group-item">Mobile Phones</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="card h-100 bg-dark text-white">
            <div className="card-body d-flex align-items-center justify-content-center">
              <div>
                <h1 className="display-4 fw-bold">Welcome to QwenShop</h1>
                <p className="lead">Discover premium electronics and accessories</p>
                <a href="/products" className="btn btn-danger btn-lg">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flash Sales Section */}
      <section className="mb-4">
        <h2 className="mb-3"><i className="fas fa-bolt text-danger me-2"></i> Flash Sales</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">
          {products.map(product => (
            <div className="col" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="mb-4">
        <h2 className="mb-3"><i className="fas fa-fire text-danger me-2"></i> Best Sellers</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">
          {products.slice(0, 6).map(product => (
            <div className="col" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="mb-4">
        <h2 className="mb-3"><i className="fas fa-star text-warning me-2"></i> New Arrivals</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 g-3">
          {products.filter(p => p.isNewArrival).map(product => (
            <div className="col" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
