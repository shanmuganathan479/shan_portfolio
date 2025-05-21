import React from "react";
import { Grid, Box, Typography, Paper } from "@mui/material";
import gradientImage from "../assets/Gradient.png";
import ProjectImage from "../assets/Screenshot 2022-09-20 at 11.44 1.png";
import Rectangle from "../assets/Rectangle 1.png";
import Cursor from "../assets/icon-park-solid_click.png";

const Project = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 4,
      }}
    >
      <Grid
        container
        spacing={6}
        alignItems="center"
        justifyContent="center"
        maxWidth="lg"
      >
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Box textAlign="center">
            <Typography
              variant="h6"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                fontSize: "16px",
                letterSpacing: "2%",
                fontFamily: "Poppins",
                color: "#9857D3",
                textAlign: "left",
              }}
            >
              Featured Project
            </Typography>
            <Typography
              variant="h4"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                fontSize: "34px",
                letterSpacing: "2%",
                fontFamily: "Poppins",
                color: "#CCD6F6",
                textAlign: "left",
              }}
            >
              Form Builder
            </Typography>

            <Paper
              elevation={6}
              sx={{
                display: "inline-block",
                backgroundImage: `url(${Rectangle})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 4,
                p: 3,
                color: "#fff",
                textAlign: "left",
                maxWidth: "600px",
                marginTop: "5%",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "18px",
                  letterSpacing: "2%",
                  fontFamily: "Poppins",
                  color: "#CCD6F6",
                  textAlign: "left",
                }}
              >
                A powerful drag-and-drop form builder tool that helps you create
                custom forms quickly and easily. Built using React, Material UI,
                and Redux for smooth state management and user interaction.
              </Typography>
            </Paper>

            {/* Two same cursor images */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 3,
                justifyContent: "flex-start",
              }}
            >
              <Box
                component="img"
                src={Cursor}
                alt="Cursor 1"
                sx={{ width: 40, height: 40 }}
              />
              <Box
                component="img"
                src={Cursor}
                alt="Cursor 2"
                sx={{
                  width: 40,
                  height: 40,
                  transform: "rotate(-20deg)", // optional variation
                }}
              />
            </Box>
          </Box>
        </Grid>

        {/* Right Side */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: { xs: "65vw", sm: "55vw", md: "35vw" },
              height: { xs: "70vw", sm: "65vw", md: "45vw" },
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
            <Box
              component="img"
              src={ProjectImage}
              alt="Form Builder Screenshot"
              sx={{
                width: "90%",
                height: "auto",
                borderRadius: 4,
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Project;
