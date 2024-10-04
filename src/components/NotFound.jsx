import { Box, Typography } from "@mui/material";
import React from "react";

export default function NotFound() {
  return (
    <Box sx={{ textAlign: "center", mt: 3 }}>
      <Typography component="h5" variant="h4">
        Ciudad no encontrada 🙄
      </Typography>
    </Box>
  );
}
