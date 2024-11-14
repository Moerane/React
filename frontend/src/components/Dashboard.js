// src/components/Dashboard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductBarChart from './ProductBarChart';

const Dashboard = ({ products }) => {
  const navigate = useNavigate();

  const formatPrice = (price) => {
    const numericPrice = parseFloat(price);
    return isNaN(numericPrice) ? 'N/A' : numericPrice.toFixed(2);
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken'); // Change this according to your storage method
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <div className="container">
       <h1>WINGS CAFE </h1>
      <header className="header">
        <nav className="navigation">
        <ul>
          <Link to="/products">Product Management</Link>
          <Link to="/users">User Management</Link>
          <button onClick={handleLogout}>Logout</button>
          </ul>
        </nav>
      </header>

      <section style={{ marginTop: '20px' }}>
        <h3>Products Added</h3>
        {products.length === 0 ? (
          <p>No products have been added yet.</p>
        ) : (
          <div>
            <ProductBarChart products={products} /> {/* Render the ProductBarChart */}
            <table style={{ width: '50%', borderCollapse: 'collapse', marginTop: '15px' }}>
              <thead>
                <tr>
                  <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f4f4f4' }}>Name</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f4f4f4' }}>Description</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f4f4f4' }}>Price</th>
                  <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f4f4f4' }}>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.name}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.description}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>M{formatPrice(product.price)}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  
  );
};

export default Dashboard;