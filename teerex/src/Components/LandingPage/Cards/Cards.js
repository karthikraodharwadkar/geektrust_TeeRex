import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSnackbar } from "notistack";
import "./Cards.css";

export default function Cards({
  searchFilter,
  colorFilter,
  genderFilter,
  priceFilter,
  typeFilter,
  data,
  cart,
  setCart,
}) {
  const [currentData, setCurrentData] = useState([]);

  const { enqueueSnackbar } = useSnackbar();
  const fetchFilters = (
    searchFilter,
    colorFilter,
    genderFilter,
    priceFilter,
    typeFilter
  ) => {
    let updatedData = [...currentData];

    if (colorFilter.length) {
      updatedData = updatedData.filter((item) =>
        colorFilter.includes(item.color)
      );
    }
    if (genderFilter.length) {
      updatedData = updatedData.filter((item) =>
        genderFilter.includes(item.gender)
      );
    }
    if (typeFilter.length) {
      updatedData = updatedData.filter((item) =>
        typeFilter.includes(item.type)
      );
    }
    if (priceFilter.length) {
      updatedData = updatedData.filter((product) => {
        let found = false;
        priceFilter.forEach((item) => {
          let low = item.split("-")[0];
          let high = item.split("-")[1];
          if (Number(product.price) >= low && Number(product.price) <= high) {
            found = true;
          }
        });
        return found;
      });
    }

    if (searchFilter.length) {
      updatedData = updatedData.filter((item) => {
        return (
          item.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
          item.color.toLowerCase().includes(searchFilter.toLowerCase()) ||
          item.type.toLowerCase().includes(searchFilter.toLowerCase())
        );
      });
    }
    return updatedData;
  };

  const displayData = fetchFilters(
    searchFilter,
    colorFilter,
    genderFilter,
    priceFilter,
    typeFilter
  );

  const handleAddToCart = (data) => {
    let exist = cart.find((item) => item.id === data.id);
    if (exist) {
      enqueueSnackbar("Item Already In Cart", { variant: "warning" });
    } else {
      setCart([...cart, { ...data, qty: 1, quantity: data.quantity - 1 }]);
    }
  };
  useEffect(() => {
    setCurrentData(data);
  }, [displayData]);

  return (
    <>
      <div className="cards-container">
        {displayData.length === 0 ? (
          <h3 style={{ textAlign: "center" }}>No Products Found</h3>
        ) : (
          <>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {displayData.map((item, index) => {
                  return (
                    <Grid item xs={12} s={12} md={4} key={index}>
                      <div className="grid-card">
                        <div className="card-img">
                          <img
                            src={item.imageURL}
                            alt={item.name}
                            style={{
                              width: "220px",
                              height: "200px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                        <div className="card-name">
                          <div>{item.name}</div>
                        </div>
                        <div className="card-details">
                          <div className="item-price">Rs {item.price}</div>
                          <div className="addToCart">
                            <button
                              className="addToCartBtn"
                              onClick={() => handleAddToCart(item)}
                            >
                              Add To Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </>
        )}
      </div>
    </>
  );
}
