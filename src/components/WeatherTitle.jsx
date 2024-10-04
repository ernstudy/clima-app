import { Typography } from "@mui/material";
import React from "react";

export default function WeatherTitle() {
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        sx={{ textAlign: "center", mt: "1rem", fontWeight: "300" }}
        gutterBottom
      >
        Weather App
      </Typography>
    </div>
  );
}
