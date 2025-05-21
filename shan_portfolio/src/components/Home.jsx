import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import yourImage from "../assets/Me.png"; // Your main image here
import gradientImage from "../assets/Gradient.png"; // Gradient image
import arrowImage from "../assets/Arrow.png"; // Arrow image

const Home = () => {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        height: "85vh",
        position: "relative",
      }} // Important: relative positioning
      alignItems="center"
      justifyContent="center"
    >
      {/* Left Side - Image */}
      <Grid
        // item
        xs={12}
        md={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={0}
      >
        <Box
          sx={{
            width: 350,
            height: 385,
            backgroundImage: `url(${gradientImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "50% /100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "#11071F",
            overflow: "hidden",
            position: "relative",
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: 1,
            },
            "&::before": {
              background: `
        linear-gradient(to right, rgba(17,7,31,0.6), transparent 20%, transparent 80%, rgba(17,7,31,0.6)),
        linear-gradient(to bottom, rgba(17,7,31,0.6), transparent 20%, transparent 80%, rgba(17,7,31,0.6))
      `,
              top: 0,
              left: 0,
              filter: "blur(10px)",
            },
            "&::after": {
              display: "none",
            },
          }}
        >
          <img
            src={yourImage}
            alt="My Image"
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "contain",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Grid>

      {/* Right Side - Text */}
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          height: 400,
          px: 2,
          flexDirection: "column",
        }}
        spacing={0}
      >
        <Box
          sx={{
            mb: 8,
            width: "100%",
            maxWidth: 400,
            position: "relative",
            top: "-10px",
          }}
        >
          <Box
            component="h1"
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: { xs: "18px", md: "20px" },
              letterSpacing: "2%",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            Hello! I Am{" "}
            <Box
              component="span"
              sx={{ color: "#7127BA", fontWeight: "600", marginLeft: "1%" }}
            >
              Shanmuganathan
            </Box>
          </Box>
        </Box>

        <Box sx={{ mb: -1, width: "100%", maxWidth: 400 }}>
          <Box
            component="p"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "15px", md: "17px" },
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            A Full Stack Developer who
          </Box>
        </Box>

        <Box sx={{ width: "100%", maxWidth: 600, mb: -3 }}>
          <Box
            component="p"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "32px", md: "50px" },
              fontFamily: "Preahvihear",
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            Turns ideas into
          </Box>
        </Box>

        <Box sx={{ width: "100%", maxWidth: 400 }}>
          <Box
            component="p"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "32px", md: "50px" },
              fontFamily: "Preahvihear",
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            digital{" "}
            <Box component="span" sx={{ color: "#7127BA" }}>
              reality...
            </Box>
          </Box>
        </Box>

        <Box sx={{ width: "100%", maxWidth: 700 }}>
          <Box
            component="p"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "11px", md: "12px" },
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#FFFFFF",
            }}
          >
            Because if the product doesn’t perform, what else matters?
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Home;
