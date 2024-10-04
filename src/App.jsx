import React from "react";
import WeatherApp from "./components/WeatherApp";
import { Container } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="xs">
      <WeatherApp />
    </Container>
  );
}
