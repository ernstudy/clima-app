import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export default function WeatherForm({ loadInfo, error }) {
  const [city, setCity] = useState("");

  const hundleChange = (e) => {
    const value = e.target.value;
    setCity(value);
  };

  const HundleSubmit = (e) => {
    e.preventDefault();
    loadInfo(city);
    setCity("");
  };

  return (
    <Box component="form" autoComplete="off" onSubmit={HundleSubmit}>
      <TextField
        id="outlined-basic"
        label="Ciudad"
        variant="outlined"
        fullWidth
        onChange={hundleChange}
        value={city}
        sx={{ mb: 1.5 }}
        error={error.error}
        helperText={error.message}
      />
      <Button component="button" variant="contained" type="submit" fullWidth>
        Buscar
      </Button>
    </Box>
  );
}
