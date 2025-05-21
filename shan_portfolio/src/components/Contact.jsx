import React from "react";
import { Box, Typography, Link } from "@mui/material";
import linkedinLogo from "../assets/In.png";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // center horizontally
          alignItems: "center", // center vertically if needed
          backgroundColor: "#11071F",
          padding: "2rem",
          color: "#FFFFFF",
        }}
      >
        {/* Content box with limited width */}
        <Box
          sx={{
            maxWidth: "600px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // left align text inside this box
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            align="left"
            gutterBottom
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "25px",
              lineHeight: "auto",
              letterSpacing: "2%",
              fontFamily: "Preahvihear",
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            Contact
          </Typography>

          {/* Content */}
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              textTransform: "none",
              fontWeight: 500,
              fontSize: "15px",
              lineHeight: "auto",
              letterSpacing: "2%",
              fontFamily: "Preahvihear",
              color: "#FFFFFF",
              textAlign: "left",
            }}
          >
            I'm currently looking to join a company that values building
            impactful and efficient software solutions. If you have an
            opportunity or a project in mind, let's connect.
          </Typography>

          {/* Email and LinkedIn link in one line */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1, // spacing between email and icon
              mt: 1,
            }}
          >
            <Link
              href="mailto:shanmuganathan479@gmail.com"
              underline="hover"
              sx={{
                textTransform: "none",
                fontWeight: 500,
                fontSize: "15px",
                lineHeight: "auto",
                letterSpacing: "2%",
                fontFamily: "Preahvihear",
                color: "#FFFFFF",
                textAlign: "left",
              }}
            >
              shanmuganathan479@gmail.com
            </Link>
          </Box>
          <Link
            href="https://www.linkedin.com/in/shan-mg/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "inline-block" }}
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              style={{ width: 20, height: 20 }}
            />
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
