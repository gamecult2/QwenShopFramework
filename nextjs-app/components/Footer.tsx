import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container-xxl pb-4 border-bottom border-secondary">
        <div className="row g-4">
          {/* Customer Service */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="fw-bold mb-4 text-uppercase small" style={{ letterSpacing: '1px' }}>Customer Service</h5>
            <ul className="nav flex-column gap-2 p-0">
              <li className="nav-item"><Link href="/contact" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">Contact Us</Link></li>
              <li className="nav-item"><Link href="/faq" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">FAQ</Link></li>
              <li className="nav-item"><Link href="/returns" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">Return Policy</Link></li>
              <li className="nav-item"><Link href="/shipping" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">Shipping Policy</Link></li>
              <li className="nav-item"><Link href="/support" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">Support Center</Link></li>
            </ul>
          </div>

          {/* About Us */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="fw-bold mb-4 text-uppercase small" style={{ letterSpacing: '1px' }}>About Us</h5>
            <ul className="nav flex-column gap-2 p-0">
              <li className="nav-item"><Link href="/about" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">About Us</Link></li>
              <li className="nav-item"><Link href="/careers" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">Careers</Link></li>
              <li className="nav-item"><Link href="/terms" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">Terms & Conditions</Link></li>
              <li className="nav-item"><Link href="/privacy" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">Privacy Policy</Link></li>
              <li className="nav-item"><Link href="/sitemap" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">Sitemap</Link></li>
            </ul>
          </div>

          {/* My Account */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="fw-bold mb-4 text-uppercase small" style={{ letterSpacing: '1px' }}>My Account</h5>
            <ul className="nav flex-column gap-2 p-0">
              <li className="nav-item"><Link href="/account" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">My Account</Link></li>
              <li className="nav-item"><Link href="/orders" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">Order History</Link></li>
              <li className="nav-item"><Link href="/wishlist" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">Wishlist</Link></li>
              <li className="nav-item"><Link href="/addresses" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">Saved Addresses</Link></li>
              <li className="nav-item"><Link href="/notifications" className="nav-link p-0 text-white-50 text-decoration-none opacity-75">Notifications</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="fw-bold mb-4 text-uppercase small" style={{ letterSpacing: '1px' }}>Newsletter</h5>
            <p className="text-white-50 mb-4">Subscribe to our newsletter to get the latest updates.</p>
            <form className="newsletter-form input-group mb-4">
              <input type="email" name="newsletter_email" className="form-control bg-dark border-secondary text-white py-2 px-3 shadow-none rounded-0" placeholder="Enter your email" required />
              <button className="btn btn-danger py-2 px-3 rounded-0 fw-bold" type="submit">Subscribe</button>
            </form>
            <div className="d-flex gap-3">
              <a href="#" className="text-white-50 fs-5 transition-all opacity-75"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-white-50 fs-5 transition-all opacity-75"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white-50 fs-5 transition-all opacity-75"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white-50 fs-5 transition-all opacity-75"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Payment & Copyright */}
      <div className="container-xxl pt-4">
        <div className="row align-items-center g-3">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-white-50 mb-0 small">&copy; {new Date().getFullYear()} <span className="text-white fw-bold">QwenShop</span>. All rights reserved. Designed for Algeria.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end gap-3 text-white-50 small">
              <span>Accepted Payments:</span>
              <i className="fas fa-money-bill-wave fs-4" title="Cash on Delivery"></i>
              <i className="fas fa-university fs-4" title="Bank Transfer"></i>
              <span className="fw-bold border border-secondary px-2 py-0 rounded bg-secondary text-white small">BaridiMob</span>
              <span className="fw-bold border border-secondary px-2 py-0 rounded bg-secondary text-white small">Edahabia</span>
              <span className="fw-bold border border-secondary px-2 py-0 rounded bg-secondary text-white small">CIB</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
