import { Close } from "@mui/icons-material";
import { Typography, Box, SwipeableDrawer } from "@mui/material";
import React from "react";

const DrawerMenu = ({ draw, setDraw }) => {
  return (
    <>
      <SwipeableDrawer anchor={"left"} open={draw}>
        <Box
          p={3}
          pr={8}
          width={"50%"}
          sx={{
            // marginTop: "20px",

            display: "flex",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <Close onClick={() => setDraw(false)} />
          <Typography variant="li">Collections</Typography>
          <Typography variant="li">Men</Typography>
          <Typography variant="li">Women</Typography>
          <Typography variant="li">About</Typography>
          <Typography variant="li">Contact</Typography>
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default DrawerMenu;
