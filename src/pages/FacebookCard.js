import React from "react";
import { Card, Container, Box } from "@mui/material";
import FacebookCardHeader from "../components/FacebookCard/FacebookCardHeader";
import FacebookCardBody from "../components/FacebookCard/FacebookCardBody";
const FacebookCard = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ margin: "20px auto" }}>
        <Card sx={{ maxWidth: 500 }} elevation={1}>
          <FacebookCardHeader />
          <FacebookCardBody/>
        </Card>
      </Box>
    </Container>
  );
};

export default React.memo(FacebookCard);
