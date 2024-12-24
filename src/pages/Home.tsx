import React from "react";
import PortraitCard from "../components/Card/PortraitCard";
import { Container, Typography } from "@mui/material";

const Home: React.FC = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        fontFamily={"Lora"}
        color="inherit"
        fontWeight={700}
      >
        Swift UI
      </Typography>
      <PortraitCard />
    </Container>
  );
};

export default Home;
