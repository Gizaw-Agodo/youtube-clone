import React from "react";
import { Stack, Paper, IconButton } from "@mui/material";
import {Search as SearchIcon } from "@mui/icons-material"
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
function Navbar() {
  return (
    <Stack
      direction="row"
      p={1}
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link style={{ display: "flex", alignItems: "center" }}>
        <img src="https://i.ibb.co/s9Qys2j/logo.png" alt="" height={40} />
      </Link>
      <Paper
        component="form"
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          mr: { sm: 5 },
        }}
      >
        <input
          className="search-bar"
          placeholder="search..."
          value=""
          onChange={() => {}}
        />
        <IconButton sx={{ p: "5px", color: "red" }}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Stack>
  );
}

export default Navbar;
