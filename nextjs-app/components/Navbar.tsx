import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky-top" style={{ zIndex: 1030 }}>
      {/* Top Bar */}
      <div className="bg-dark text-white py-1 d-none d-md-block" style={{ fontSize: '0.7rem' }}>
        <div className="container-xxl d-flex justify-content-between align-items-center">
          <div className="d-flex gap-4">
            <span><i className="fas fa-map-marker-alt me-1"></i> Fast Delivery</span>
            <span><i className="fas fa-shield-alt me-1"></i> Secure Payment</span>
            <span><i className="fas fa-exchange-alt me-1"></i> Easy Returns</span>
          </div>
          <div>
            <Link href="/contact" className="text-white text-decoration-none"><i className="fas fa-headset me-1"></i> Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-3 border-bottom border-danger border-3" style={{ boxShadow: '0 8px 0 #252525ff' }}>
        <div className="container-xxl">
          <div className="row align-items-center g-2 justify-content-between">
            {/* Mobile Menu Toggle */}
            <div className="col-auto d-lg-none">
              <button className="btn btn-outline-dark border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                <i className="fas fa-bars fs-4"></i>
              </button>
            </div>

            {/* Desktop Categories Dropdown */}
            <div className="col-auto d-none d-lg-block">
              <div className="dropdown">
                <button className="btn btn-outline-dark border-0 py-1 px-2 d-flex align-items-center justify-content-center" type="button" id="categoryDropdown" data-bs-toggle="dropdown" aria-expanded="false" title="Categories">
                  <i className="fas fa-bars"></i>
                </button>
                {/* Dropdown menu will be populated dynamically later */}
                <ul className="dropdown-menu shadow border-0 py-0" aria-labelledby="categoryDropdown" style={{ minWidth: '250px' }}>
                  <li><a className="dropdown-item" href="#">Electronics</a></li>
                  <li><a className="dropdown-item" href="#">Computers</a></li>
                  <li><a className="dropdown-item" href="#">Gaming</a></li>
                </ul>
              </div>
            </div>

            {/* Logo */}
            <div className="col-auto">
              <Link href="/" className="text-decoration-none h4 mb-0 fw-bold">
                  <span style={{ color: '#6c757d', fontSize: '24px' }}>Qwen</span><span style={{ color: '#dc3545', fontSize: '24px' }}>Shop</span>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="col-lg-5">
              <form action="/search" method="GET" className="input-group">
                <input type="text" name="q" className="form-control border-danger border-2 py-1 px-3" placeholder="Search products..." />
                <button className="btn btn-danger py-1 px-4" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>

            {/* Header Actions */}
            <div className="col-auto">
              <div className="d-flex align-items-center gap-1 gap-md-3">
                <Link href="/compare" className="btn btn-light border-0 bg-transparent text-secondary d-flex flex-column align-items-center p-1" style={{ fontSize: '0.7rem' }}>
                  <div className="position-relative">
                    <i className="fas fa-balance-scale mb-1" style={{ fontSize: '0.9rem' }}></i>
                    <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.6rem', marginTop: '-2px', marginLeft: '-2px' }}>0</span>
                  </div>
                  <span className="d-none d-xl-inline">Compare</span>
                </Link>

                <Link href="/wishlist" className="btn btn-light border-0 bg-transparent text-secondary d-flex flex-column align-items-center p-1" style={{ fontSize: '0.7rem' }}>
                  <div className="position-relative">
                    <i className="fas fa-heart mb-1" style={{ fontSize: '0.9rem' }}></i>
                    <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.6rem', marginTop: '-2px', marginLeft: '-2px' }}>0</span>
                  </div>
                  <span className="d-none d-xl-inline">Wishlist</span>
                </Link>

                <Link href="/cart" className="btn btn-light border-0 bg-transparent text-secondary d-flex flex-column align-items-center p-1" style={{ fontSize: '0.7rem' }}>
                  <div className="position-relative">
                    <i className="fas fa-shopping-cart mb-1" style={{ fontSize: '0.9rem' }}></i>
                    <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.6rem', marginTop: '-2px', marginLeft: '-2px' }}>0</span>
                  </div>
                  <span className="d-none d-xl-inline">Cart</span>
                </Link>

                <Link href="/login" className="btn btn-light border-0 bg-transparent text-secondary d-flex flex-column align-items-center p-1" title="Sign In" style={{ fontSize: '0.7rem' }}>
                  <i className="fas fa-sign-in-alt mb-1" style={{ fontSize: '0.9rem' }}></i>
                  <span className="d-none d-xl-inline">Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
