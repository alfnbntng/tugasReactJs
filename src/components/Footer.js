import React from "react";

function Footer() {
  return (
    <div>
      <footer
        class="bg-dark text-center text-white
"
      >
        {/* Grid container */}
        <div class="container p-4 pb-0">
          {/* Section: Social media */}
          <section class="mb-4">
            {/* Facebook */}
            <a
              class="btn text-white btn-floating m-1"
              href="#!"
              role="button"
              style={{ backgroundColor: "darkblue" }}
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            {/* Twitter */}
            <a
              class="btn text-white btn-floating m-1"
              href="#!"
              role="button"
              style={{ backgroundColor: "deepskyblue" }}
            >
              <i class="fab fa-twitter"></i>
            </a>

            {/* Google */}
            <a
              class="btn text-white btn-floating m-1"
              href="#!"
              role="button"
              style={{ backgroundColor: "green" }}
            >
              <i class="fab fa-google"></i>
            </a>

            {/* Instagram */}
            <a
              class="btn text-white btn-floating m-1"
              href="#!"
              role="button"
              style={{ backgroundColor: "purple" }}
            >
              <i class="fab fa-instagram"></i>
            </a>

            {/* Linkedin */}
            <a
              class="btn text-white btn-floating m-1"
              href="#!"
              role="button"
              style={{ backgroundColor: "dodgerblue" }}
            >
              <i class="fab fa-linkedin-in"></i>
            </a>
            {/* Github */}
            <a
              class="btn text-white btn-floating m-1"
              href="#!"
              role="button"
              style={{ backgroundColor: "black" }}
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}

        <div class="text-center p-3 bg-dark bg-gradient">
          {/* © 2020 Copyright: */}
          <a
            class="text-white"
            href="https://www.argosybooks.com
"
          >
            www.argosybookstore.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
