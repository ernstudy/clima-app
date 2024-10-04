import { Box, Typography } from "@mui/material";
import React from "react";

export default function WeatherData({ weather }) {
  return (
    <>
      {weather.city && (
        <>
          <Box sx={{ textAlign: "center" }}>
            <Typography component="h2" variant="h6">
              {weather.city}, {weather.country}
            </Typography>
            <Box
              component="img"
              alt={weather.consitionText}
              src={weather.icon}
              sx={{ margin: "0 auto", width: "100px" }}
            />
            <Typography component="h3" variant="h2">
              {weather.temp}
            </Typography>
            <Typography variant="h6" component="h4">
              {weather.conditionText}
            </Typography>
          </Box>
        </>
      )}
    </>
  );
}
