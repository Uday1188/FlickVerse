import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <section className="text-center mb-5">
        <h1 className="display-3 fw-bold brand-text">FlickVerse 🎬</h1>
        <p className="lead fs-5 text-muted">Your gateway to the world of cinema. Discover. Explore. Enjoy.</p>
      </section>

      <section 
        className="p-4 rounded shadow-sm"
        style={{
          background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
          border: "1px solid rgba(0,0,0,0.1)"
        }}
      >
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images4.alphacoders.com/605/60574.jpg"
              alt="Featured Movie"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <h2 className="fw-bold" style={{ color: "#667eea" }}>Featured: The Dark Knight</h2>
            <p className="fs-5 text-muted">When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.</p>
            <ul className="list-unstyled text-muted">
              <li>⭐ 9.0 IMDb</li>
              <li>🎭 Christian Bale, Heath Ledger</li>
              <li>🕒 2h 32m</li>
            </ul>
            <Link to="/movie/2">
              <button className="btn btn-gradient px-4 mt-2">See Details</button>
            </Link>
          </div>
        </div>
      </section>

      <style>
        {`
          .brand-text {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          
          .btn-gradient {
            background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            transition: all 0.3s ease;
          }
          
          .btn-gradient:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(118, 75, 162, 0.3);
          }
          
          .btn-outline-gradient {
            border: 1px solid #667eea;
            color: #667eea;
            transition: all 0.3s ease;
          }
          
          .btn-outline-gradient:hover {
            background: linear-gradient(90deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
            transform: translateY(-2px);
          }
        `}
      </style>
    </div>
  );
};

export default Home;