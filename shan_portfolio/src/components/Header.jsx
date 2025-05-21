import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { navItems } from "../config/config";
import logo from "../assets/Logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function ResponsiveNavbar({ activeSection, onNavClick }) {
  const theme = useTheme();
  // Detect if screen is small (sm breakpoint or less)
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md")); // 'sm' = 600px by default

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "#1A0B2E",
        color: "#FFFFFF",
        width: "100%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingY: 1,
          gap: 15,
          height: "100%",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: isSmallScreen ? "15%" : 0,
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ p: 0 }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                height: "30px",
                width: "30px",
                userSelect: "none",
                display: "block",
              }}
            />
          </IconButton>
        </Box>

        {/* Empty spacer */}
        <Box sx={{ width: "250px" }} />

        {/* Navigation Items - hide on small screens */}
        {!isSmallScreen && (
          <Box sx={{ display: "flex", gap: 4.5, alignItems: "center" }}>
            {navItems?.map((item) => (
              <Button
                key={item}
                color="inherit"
                onClick={() => onNavClick(item)} // Call parent click handler
                sx={{
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: "15px",
                  lineHeight: "auto",
                  letterSpacing: "2%",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: activeSection === item ? "#7127BA" : "#FFFFFF", // Highlight active
                  borderBottom:
                    activeSection === item ? "2px solid #7127BA" : "none",
                  borderRadius: 0,
                  transition: "color 0.3s ease, border-bottom 0.3s ease", // Smooth transition
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
