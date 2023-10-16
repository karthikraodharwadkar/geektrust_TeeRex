import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Grid from "@mui/material/Grid";
import { useSnackbar } from "notistack";
import "./Cart.css";

export default function Cart({ cart, setCart }) {
  const [bill, setBill] = useState(0);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum = sum + item.price * item.qty;
    });
    setBill(sum);
  }, [cart]);

  const handleDelete = (data) => {
    let updatedCart = cart.filter((item) => item.id !== data.id);
    setCart(updatedCart);
  };

  const handleDecrease = (data) => {
    let exist = cart.find((item) => item.id === data.id);
    if (exist) {
      let updatedCart = cart.map((item) =>
        item.id === data.id
          ? { ...exist, qty: exist.qty - 1, quantity: exist.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    }
    if (exist.qty === 1) {
      let updatedCart = cart.filter((item) => item.id !== data.id);
      setCart(updatedCart);
    }
  };

  const handleIncrease = (data) => {
    let exist = cart.find((item) => item.id === data.id);
    if (exist.quantity === 0) {
      enqueueSnackbar("maximum order quantity exceeded", { variant: "error" });
    } else if (exist) {
      let updatedCart = cart.map((item) =>
        item.id === data.id
          ? { ...exist, qty: exist.qty + 1, quantity: exist.quantity - 1 }
          : item
      );
      setCart(updatedCart);
    }
  };
  return (
    <>
      <div className="cart-header">
        <Header cart={cart} />
      </div>

      {cart.length === 0 ? (
        <h3 className="empty-cart">Cart is Empty</h3>
      ) : (
        <>
          <div className="cart-container">
            <Grid container spacing={2}>
              {cart.map((item, index) => {
                return (
                  <Grid item xs={12} sm={12} md={12} key={index}>
                    <div className="grid-cart-container">
                      <div className="cart-img">
                        <img
                          src={item.imageURL}
                          alt={item.name}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="cart-item-details">
                        <p>{item.name}</p>
                        <p>Rs {item.price * item.qty}</p>
                      </div>
                      <div className="cart-item-qty">
                        <button
                          className="cart-id-btn"
                          onClick={() => handleDecrease(item)}
                        >
                          -
                        </button>
                        Qty:{item.qty}
                        <button
                          className="cart-id-btn"
                          onClick={() => handleIncrease(item)}
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          className="cart-delete-btn"
                          onClick={() => handleDelete(item)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
        </>
      )}
      <div className="cart-total-amount">Total Amount Rs.{bill}</div>
    </>
  );
}
