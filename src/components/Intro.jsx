import React from "react";
import { Box, Typography } from "@mui/material";

const Intro = () => {
  return (
    <Box
      sx={{
        minHeight: { xs: "auto", md: "35vh" },
        px: { xs: 2, md: 0 },
        pt: { xs: 8, md: 8 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: { xs: "center", md: "center" }, // Center text everywhere
      }}
    >
      {/* Heading */}
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
          fontSize: { xs: "28px", md: "45px" },
          letterSpacing: "2%",
          fontFamily: "Preahvihear",
          color: "#FFFFFF",
          mb: 1,
        }}
      >
        I'm a Software Engineer.
      </Typography>

      {/* Subheading with link */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          fontSize: { xs: "14px", md: "19px" },
          letterSpacing: "2%",
          fontFamily: "Preahvihear",
          color: "#FFFFFF",
          mb: 2,
        }}
      >
        Currently, I'm a Software Engineer at{" "}
        <Box
          component="a"
          href="https://www.indiumsoftware.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#1877F2",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Indium
        </Box>
        .
      </Typography>

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          fontWeight: 200,
          fontSize: { xs: "13px", md: "15px" },
          lineHeight: "1.5",
          letterSpacing: "2%",
          fontFamily: "Preahvihear",
          color: "#FFFFFF",
          maxWidth: "570px",
        }}
      >
        A passionate Full Stack Developer with hands-on experience in building
        robust and scalable web applications. I craft efficient and maintainable
        solutions that seamlessly blend user experience and technical precision.
      </Typography>
    </Box>
  );
};

export default Intro;
