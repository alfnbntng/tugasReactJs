import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="posisi">
      <nav class="navbar bg-dark text-white fixed-top">
        <div class="container-fluid">
          <a
            class="navbar-brand text-white"
            href="#"
            style={{
              fontFamily:
                " 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
            }}
          >
            Argosy BookStore
          </a>
          <button
            class="navbar-toggler"
            type="button"
            style={{ backgroundColor: "white" }}
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header text-white bg-warning">
              <h5
                class="offcanvas-title"
                id="offcanvasNavbarLabel"
                style={{
                  fontFamily:
                    " 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
                }}
              >
                Argosy BookStore
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/aboute"
                    class="nav-link active"
                    aria-current="page"
                  >
                    about
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    to="/contact"
                    class="nav-link active"
                    aria-current="page"
                  >
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
