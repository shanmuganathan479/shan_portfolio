import React from "react";
import { Box, Typography } from "@mui/material";

import ReactIcon from "../assets/skills/react.svg";
import JSIcon from "../assets/skills/JS.svg";
import ReduxIcon from "../assets/skills/redux.svg";
import TypeIcon from "../assets/skills/Typecript.svg";
import HtmlIcon from "../assets/skills/html-icon.svg";
import CSSIcon from "../assets/skills/CSs.svg";
import NodeIcon from "../assets/skills/Node.svg";
import ExpressIcon from "../assets/skills/Express.svg";
import MongoIcon from "../assets/skills/Mongo.svg";
import MUIIcon from "../assets/skills/mui.svg";

import BigGradient from "../assets/animation/Gradient.png";
import SmallGradient from "../assets/animation/SmallGradient.png";
import MyPortfolioLogo from "../assets/animation/PFLogo.png";
import RingImage from "../assets/animation/Ring.png";

const skillIcons = [
  ReactIcon,
  JSIcon,
  ReduxIcon,
  TypeIcon,
  HtmlIcon,
  CSSIcon,
  MUIIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
];

const SkillsGrid = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 2,
      }}
    >
      {/* Text Block */}
      <Box
        sx={{
          mb: 4,
          textAlign: "center",
          fontFamily: "Preahvihear",
          maxWidth: 900,
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: {
              xs: "20px", // small screen (mobile)
              sm: "26px", // small to medium screen
              md: "33px", // medium and up (default)
            },
            letterSpacing: "2%",
            fontFamily: "Preahvihear",
            color: "#FFFFFF",
          }}
        >
          I build dynamic and responsive web applications
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "13px",
            letterSpacing: "2%",
            fontFamily: "Preahvihear",
            color: "#FFFFFF",
          }}
        >
          by leveraging the full{" "}
          <Box component="span" sx={{ color: "#1877F2", fontWeight: "700" }}>
            MERN
          </Box>{" "}
          stack, focusing on delivering intuitive interfaces and reliable
          backend services.
        </Typography>
      </Box>

      {/* Skills Icon Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(60px, 1fr))",
          gap: 9,
          justifyItems: "center",
          alignItems: "center",
          maxWidth: 600,
          width: "100%",
          mt: "3%",
        }}
      >
        {skillIcons.map((src, idx) => (
          <Box
            key={idx}
            sx={{
              bgcolor: "#2f2f2f",
              borderRadius: "50%",
              width: 60,
              height: 60,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
            }}
          >
            <Box
              component="img"
              src={src}
              alt="skill icon"
              sx={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Box>
        ))}
      </Box>

      {/* Gradient Section with 3 Ring Images */}
      <Box
        sx={{
          mt: "5%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          width: { xs: 300, sm: 350, md: 400 },
          height: { xs: 300, sm: 350, md: 400 },
        }}
      >
        {/* Ring Image 1 - largest ring */}
        <Box
          component="img"
          src={RingImage}
          alt="Ring 1"
          sx={{
            position: "absolute",
            width: { xs: 300, sm: 400, md: 580 },
            height: { xs: 300, sm: 400, md: 580 },
            objectFit: "contain",
            zIndex: 1,
          }}
        />

        {/* Ring Image 2 - medium ring */}
        <Box
          component="img"
          src={RingImage}
          alt="Ring 2"
          sx={{
            position: "absolute",
            width: { xs: 200, sm: 300, md: 400 },
            height: { xs: 200, sm: 300, md: 400 },
            objectFit: "contain",
            zIndex: 2,
          }}
        />

        {/* Ring Image 3 - smallest ring */}
        <Box
          component="img"
          src={RingImage}
          alt="Ring 3"
          sx={{
            position: "absolute",
            width: { xs: 150, sm: 200, md: 270 },
            height: { xs: 150, sm: 200, md: 270 },
            objectFit: "contain",
            zIndex: 3,
          }}
        />

        {/* Outer Big Gradient */}
        <Box
          sx={{
            backgroundImage: `url(${BigGradient})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: { xs: 250, sm: 300, md: 350 },
            height: { xs: 150, sm: 180, md: 200 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "60% / 100%",
            position: "relative",
            zIndex: 4,
          }}
        >
          {/* Inner Small Gradient */}
          <Box
            sx={{
              backgroundImage: `url(${SmallGradient})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: { xs: 70, sm: 85, md: 100 },
              height: { xs: 70, sm: 85, md: 100 },
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Portfolio Logo */}
            <Box
              component="img"
              src={MyPortfolioLogo}
              alt="My Portfolio Logo"
              sx={{
                width: { xs: 35, sm: 45, md: 50 },
                height: { xs: 35, sm: 45, md: 50 },
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SkillsGrid;
