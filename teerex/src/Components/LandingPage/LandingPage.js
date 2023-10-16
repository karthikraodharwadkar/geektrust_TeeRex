import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header";
import SearchBar from "./SearchBar/SearchBar";
import { config } from "../../config";
import Filters from "./Filters/Filters";
import Cards from "./Cards/Cards";
import "./LandingPage.css";
import FilterIcon from "./FilterIcon/FilterIcon";

export default function LandingPage({ cart, setCart }) {
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");
  const [colorFilter, setColorFilter] = useState([]);
  const [genderFilter, setGenderFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [typeFilter, setTypeFilter] = useState([]);

  const fetchData = async () => {
    let result = await axios.get(`${config.backendEndpoint}`);
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchFilterValue = (event) => {
    setSearchFilter(event.target.value);
  };

  const handleColorFilter = (event) => {
    let isChecked = event.target.checked;
    if (isChecked) {
      setColorFilter((prevState) => [...prevState, event.target.value]);
    } else {
      setColorFilter((prevState) =>
        prevState.filter((item) => item !== event.target.value)
      );
    }
  };

  const handleGenderFilter = (event) => {
    let isChecked = event.target.checked;
    if (isChecked) {
      setGenderFilter((prevState) => [...prevState, event.target.value]);
    } else {
      setGenderFilter((prevState) =>
        prevState.filter((item) => item !== event.target.value)
      );
    }
  };

  const handlePriceFilter = (event) => {
    let isChecked = event.target.checked;
    if (isChecked) {
      setPriceFilter((prevState) => [...prevState, event.target.value]);
    } else {
      setPriceFilter((prevState) =>
        prevState.filter((item) => item !== event.target.value)
      );
    }
  };

  const handleTypeFilter = (event) => {
    let isChecked = event.target.checked;
    if (isChecked) {
      setTypeFilter((prevState) => [...prevState, event.target.value]);
    } else {
      setTypeFilter((prevState) =>
        prevState.filter((item) => item !== event.target.value)
      );
    }
  };

  return (
    <>
      <Header cart={cart} onPage="home" />
      <div className="landingPage-container">
        <div className="landingPage-leftContainer">
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
        <div className="landingPage-rightContainer">
          <SearchBar
            searchFilter={searchFilter}
            handleSearchFilterValue={handleSearchFilterValue}
          />
          <div className="filter-icon">
            <FilterIcon
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
          <Cards
            searchFilter={searchFilter}
            colorFilter={colorFilter}
            genderFilter={genderFilter}
            priceFilter={priceFilter}
            typeFilter={typeFilter}
            data={data}
            cart={cart}
            setCart={setCart}
          />
        </div>
      </div>
    </>
  );
}
