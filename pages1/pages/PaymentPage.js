// src/pages/Payment.js
import React from "react";
import "./PaymentPage.css";

function PaymentPage() {
  return (
    <div className="payment-page">
      <div className="payment-section">
        <div className="payment-details">
          <h2>Bank Details</h2>

          <h3>Domestic Donations:</h3>
          <p><strong>Name:</strong> Vidyadhanam & Annadhanam Trust</p>
          <p><strong>Bank:</strong> Canara Bank</p>
          <p><strong>Branch:</strong> St. Mary's Road, Chennai 600018</p>
          <p><strong>A/c No.:</strong> 1287101014668</p>
          <p><strong>IFSC Code:</strong> CNRB0001287</p>

          <div className="divider"></div>

          <h3>Overseas Donations (FCRA Approved Account):</h3>
          <p><strong>Name:</strong> Vidyadhanam & Annadhanam Trust</p>
          <p><strong>Bank:</strong> State Bank of India</p>
          <p><strong>Branch:</strong> New Delhi Main Branch, New Delhi 110001</p>
          <p><strong>A/c No.:</strong> 40108524163</p>
          <p><strong>IFSC Code:</strong> SBIN0000691</p>
          <p><strong>SWIFT:</strong> SBININBB104</p>
        </div>

        <div className="qr-section">
          <img src="/qr.png" alt="QR Code" />
        </div>
      </div>

      <div className="contact-info">
        <span><i className="fas fa-envelope"></i> vat.trustee@gmail.com</span>
        <span><i className="fas fa-phone"></i> +91 9380718914</span>
      </div>
    </div>
  );
}

export default PaymentPage;
