import React from "react";
import "./Filters.css";

export default function Filters({
  colorFilter,
  genderFilter,
  priceFilter,
  typeFilter,
  handleColorFilter,
  handleGenderFilter,
  handlePriceFilter,
  handleTypeFilter,
}) {
  const colors = ["Red", "Blue", "Green"];
  const gender = ["Men", "Women"];
  const prices = ["0-250", "251-450", "451-1000"];
  const types = ["Polo", "Hoodie", "Basic"];

  return (
    <div className="filters-container">
      <div className="color-container">
        <div className="filter-items">Colour</div>
        {colors.map((item, index) => {
          return (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  value={item}
                  onChange={handleColorFilter}
                  checked={colorFilter.includes(item)}
                />
                {item}
              </label>
            </div>
          );
        })}
      </div>

      <div className="gender-container">
        <div className="filter-items">Gender</div>
        {gender.map((item, index) => {
          return (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  value={item}
                  onChange={handleGenderFilter}
                  checked={genderFilter.includes(item)}
                />
                {item}
              </label>
            </div>
          );
        })}
      </div>

      <div className="price-container">
        <div className="filter-items">Price(Rs)</div>
        {prices.map((item, index) => {
          return (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  value={item}
                  onChange={handlePriceFilter}
                  checked={priceFilter.includes(item)}
                />
                {item}
              </label>
            </div>
          );
        })}
      </div>

      <div className="type-container">
        <div className="filter-items">Type</div>
        {types.map((item, index) => {
          return (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  value={item}
                  checked={typeFilter.includes(item)}
                  onChange={handleTypeFilter}
                />
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
