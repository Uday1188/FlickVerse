// import React from "react";
// import "./Card.css";
// import { NavLink } from "react-router-dom";

// const Card = ({ curMovie }) => {
//   const { poster, title, id } = curMovie;

//   return (
//     <div className="movie-card card h-100 border-0 shadow rounded-4 overflow-hidden" 
//          style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
//       <div className="movie-img-container">
//         <img src={poster} alt={title} className="movie-img" />
//       </div>

//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title fw-bold" style={{ color: "#667eea" }}>{title}</h5>
//         {/* <p className="mb-1">
//           🎬 <span className="text-secondary">Released:</span>{" "}
//           <strong>{year}</strong>
//         </p> */}
//         {/* <p className="text-warning fw-semibold mb-2">
//           ⭐ Rating: {rating ?? "N/A"}
//         </p> */}

//         {/* <div className="mt-auto">
//           <h6 className="text-secondary fw-semibold mb-1">🎭 Cast:</h6>
//           <ul className="ps-3 mb-0">
//             {cast.map((actor, idx) => (
//               <li key={idx} className="text-light small">
//                 {actor}
//               </li>
//             ))}
//           </ul>
//         </div> */}
//         <NavLink to={`/movie/${id}`}>
//           <button className="btn btn-gradient mt-3 fw-semibold">Watch Now</button>
//         </NavLink>
//       </div>

//       <style>
//         {`
//           .btn-gradient {
//             background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
//             color: white;
//             border: none;
//             transition: all 0.3s ease;
//           }
          
//           .btn-gradient:hover {
//             transform: translateY(-2px);
//             box-shadow: 0 4px 15px rgba(118, 75, 162, 0.3);
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Card;


import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = ({ curMovie }) => {
  const { poster, title, id } = curMovie;

  return (
    <div className="movie-card card h-100 border-0 shadow rounded-4 overflow-hidden" 
         style={{ background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)" }}>
      <div className="movie-img-container">
        <img src={poster} alt={title} className="movie-img" />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold" style={{ color: "#667eea" }}>{title}</h5>
        <NavLink to={`/movie/${id}`}>
          <button className="btn btn-gradient mt-3 fw-semibold">Watch Now</button>
        </NavLink>
      </div>

      <style>
        {`
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
        `}
      </style>
    </div>
  );
};

export default Card;