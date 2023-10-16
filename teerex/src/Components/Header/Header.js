import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header({ cart, onPage }) {
  const navigate = useNavigate();
  return (
    <div className="header-container">
      <div className="left-container">
        <div className="logo" onClick={() => navigate("/")}>
          TeeRex
        </div>
      </div>
      <div className="right-container">
        {onPage === "home" ? (
          <>
            <div
              onClick={() => navigate("/")}
              style={{
                boxShadow: "0px 0px 5px 5px lightcyan",
                backgroundColor: "white",
              }}
            >
              Products
            </div>
            <div onClick={() => navigate("/cart")}>
              <BsCart4 />
              <sup>{cart.length}</sup>
            </div>
          </>
        ) : (
          <>
            <div onClick={() => navigate("/")}>Products</div>
            <div
              onClick={() => navigate("/cart")}
              style={{
                boxShadow: "0px 0px 5px 5px lightcyan",
                backgroundColor: "white",
              }}
            >
              <BsCart4 />
              <sup>{cart.length}</sup>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
