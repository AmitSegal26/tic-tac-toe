import { Button, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";

const Page404 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <Container maxWidth="xl">
      <Typography color="error" component="h1" variant="h2" sx={{ m: 2 }}>
        404 - Page Not Found!
      </Typography>
      <hr />
      <Typography color="ochre" component="h2" variant="h3" sx={{ p: 3 }}>
        We are terribly sorry, but it seems that the page you were looking for
        does not exist.
      </Typography>
      <Button onClick={handleClick}>
        Click here in order to return to home page
      </Button>
    </Container>
  );
};

export default Page404;
