import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import Filters from "../Filters/Filters";
import "./FilterIcon.css";

export default function FilterIcon({
  colorFilter,
  genderFilter,
  priceFilter,
  typeFilter,
  handleColorFilter,
  handleGenderFilter,
  handlePriceFilter,
  handleTypeFilter,
}) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
    <div className="filter-icon-container">
      <div className="filter-icon" onClick={handleToggle}>
        <FiFilter />
      </div>
      {toggle === true ? (
        <div className="filter-icon-dropdown">
          <Filters
            colorFilter={colorFilter}
            genderFilter={genderFilter}
            priceFilter={priceFilter}
            typeFilter={typeFilter}
            handleColorFilter={handleColorFilter}
            handleGenderFilter={handleGenderFilter}
            handlePriceFilter={handlePriceFilter}
            handleTypeFilter={handleTypeFilter}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
    </>
  );
}
