import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          ></a>
          <span class="text-muted">
            © 2024 Toamto Food Deliver Company Pvt Ltd , India
          </span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="#"></a>
            <FaFacebook />
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <FaInstagram />
            </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#">
              <FaXTwitter />
            </a>
          </li>
          <li class="ms-3">
            <a
              class="text-muted"
              href="https://in.linkedin.com/in/dhavalpuri-goswami-119548221"
            >
              <IoLogoLinkedin />
            </a>
          </li>
        </ul>
      </footer>
      <div className="text-muted">
        <a class="text-muted" href="https://github.com/DhavalpuriGoswami">
          Designed by Dhaval Goswami - Github
        </a>
      </div>
    </div>
  );
};

export default Footer;
