import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import cardBg from "../assets/Experience.png";
import { experiences } from "../config/config";

const Experience = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        px: 2,
        py: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Responsive Container */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 500,
            fontSize: { xs: "28px", md: "40px" },
            letterSpacing: "2%",
            fontFamily: "Preahvihear",
            color: "#FFFFFF",
            textAlign: { xs: "center", md: "left" },
            mb: 4,
          }}
        >
          Work Experience
        </Typography>

        {/* Grid container */}
        <Grid
          container
          spacing={4}
          sx={{ justifyContent: { xs: "center", md: "flex-start" } }}
        >
          {experiences?.map((exp, index) => (
            <Grid
              item
              xs={12}
              md="auto"
              key={index}
              sx={{
                width: { xs: "100%", md: "45%" },
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  backgroundImage: `url(${exp.bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "#fff",
                  borderRadius: 4,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                  backdropFilter: "blur(4px)",
                  backgroundColor: "rgba(17, 7, 31, 0.6)",
                  p: 2,
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 500,
                      fontSize: "23px",
                      fontFamily: "Poppins",
                      color: "#FFFFFF",
                      textAlign: "left",
                      mb: 1,
                    }}
                  >
                    {exp.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      fontSize: "12px",
                      fontFamily: "Poppins",
                      color: "#FFFFFF",
                      textAlign: "left",
                      mb: 1,
                    }}
                  >
                    {exp.duration}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      fontSize: "10px",
                      fontFamily: "Poppins",
                      color: "#FFFFFF",
                      textAlign: "left",
                      mb: 1,
                    }}
                  >
                    {exp.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Experience;
