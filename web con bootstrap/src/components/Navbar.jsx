import React from "react";
import logo from "../img/logo.jpg";

function MyNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-sm">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" width="150px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Summer Pack
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Register
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sing In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MyNavbar;

// import React, { useState } from "react";
// import logo from "../img/logo.jpg";

// function MyNavbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
//       <div className="container">
//         <a className="navbar-brand" href="#">
//           <img src={logo} alt="logo" width="150px" />
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Summer Pack
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Register
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Sing In
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default MyNavbar;
