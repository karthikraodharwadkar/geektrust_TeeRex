import React from "react";
import TextField from "@mui/material/TextField";
import "./SearchBar.css"

export default function SearchBar({ searchFilter, handleSearchFilterValue }) {

  return (
    <div className="searchbar-container">
      <TextField
        id="outlined-basic"
        placeholder="Search by name,color or type"
        variant="outlined"
        fullWidth
        value={searchFilter}
        onChange={handleSearchFilterValue}
      />
    </div>
  );
}
