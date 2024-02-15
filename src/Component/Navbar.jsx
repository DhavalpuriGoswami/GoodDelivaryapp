import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import { VscSignIn } from "react-icons/vsc";
import { ImCart } from "react-icons/im";
import Modal from '../Modal';
import AddCart from "../Pages/AddCart";
const Navbar = () => {
  const [cartView, setCartView] = useState(false);
  let navigate = useNavigate();
  const loadCart = () => {
    setCartView(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.setItem("islogin", false);
    navigate("/login");
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-warning position-sticky"
        Style={{
          boxShadow: "0px 10px 20px black",
          filter: "blur(20)",
          position: "fixed",
          zIndex: "10",
          width: "100%",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">
            <IoFastFoodOutline /> Tomato Food
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item ">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
                {localStorage.getItem("token") ? (
                  <li className="nav-item ">
                    <Link
                      className="nav-link active fs-5"
                      aria-current="page"
                      to="myorders"
                    >
                      My Orders
                    </Link>
                  </li>
                ) : (
                  <></>
                )}
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login <VscSignIn />
                </Link>

                <Link className="btn bg-white text-success mx-1" to="/signup">
                  Sign UP
                </Link>
              </div>
            ) : (
              <>
                <div
                  className="btn bg-white text-info mx-2 "
                  onClick={loadCart}
                >
                  <ImCart />
                </div>
                {cartView ? <Modal onClose={() => setCartView(false)}><AddCart></AddCart></Modal> : ""}
                <div
                  className="btn bg-white text-danger mx-2 "
                  onClick={handleLogout}
                >
                  <VscSignOut />
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
