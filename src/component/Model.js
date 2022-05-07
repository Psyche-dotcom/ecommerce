import { NavigateNext } from "@mui/icons-material";
import { NavigateBefore } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import { Fade, Box, Modal, Backdrop } from "@mui/material";
import React, { useState } from "react";
import { ProductImage } from "./data";
const Model = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);
  const [index, setIndex] = useState(0);
  const { imageBG, id } = ProductImage[index];

  const checkNumber = (number) => {
    if (number > ProductImage.length - 1) {
      return 0;
    }
    if (number < 0) {
      return ProductImage.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "transparent",
    border: "none",
    outline: "none",
    p: 4,
  };
  const BgImage = () => {
    return (
      <div>
        <img
          src={imageBG}
          key={id}
          alt="bg-img"
          className="img-BG"
          style={{
            width: "100%",
          }}
        />
      </div>
    );
  };

  const SmallImage = () => {
    return ProductImage.map(({ image, id }) => {
      return (
        <img
          src={image}
          key={id}
          alt="bg-img"
          className="img-BG"
          style={{
            width: "22.8%",
          }}
        />
      );
    });
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Close
                style={{
                  alignSelf: "flex-end",
                  marginRight: "22px",
                  marginBottom: "8px",
                  color: "white",
                }}
                onClick={handleClose}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <NavigateBefore
                  onClick={prevPerson}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <BgImage />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "10px",
                    }}
                  >
                    <SmallImage />
                  </div>
                </div>
                <NavigateNext
                  onClick={nextPerson}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Model;
