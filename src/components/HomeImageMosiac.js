import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function HomeImageMosiac() {
  return (
    <ImageList
      className="d-flex justify-content-center"
      sx={{ overflowX: "hidden" }}
    >
      <Box>
        <ImageListItem>
          <img
            src="./ravioli.jpg"
            alt="ravioli"
            style={{
              height: "300px",
              width: "300px",
              borderRadius: "10px",
              marginBottom: "5px",
            }}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="./chicken.jpg"
            alt="chicken and carrots"
            style={{ height: "300px", width: "300px", borderRadius: "10px" }}
          />
        </ImageListItem>
      </Box>
      <ImageListItem>
        <img
          src="./MTKClogo.jpg"
          alt="MTKC logo"
          style={{ height: "600px", width: "600px", borderRadius: "10px" }}
        />
      </ImageListItem>
      <Box>
        <ImageListItem>
          <img
            src="./riceball.jpg"
            alt="riceballs"
            style={{
              height: "300px",
              width: "300px",
              borderRadius: "10px",
              marginBottom: "5px",
            }}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="./knots.jpg"
            alt="garlic knots"
            style={{ height: "300px", width: "300px", borderRadius: "10px" }}
          />
        </ImageListItem>
      </Box>
    </ImageList>
  );
}

const itemData = [
  {
    img: "./ravioli.jpg",
    title: "Bed",
  },
  {
    img: "./knots.jpg",
    title: "Books",
  },
  {
    img: "./MTKClogo.jpg",
    title: "Kitchen",
  },

  {
    img: "./chicken.jpg",
    title: "Blinds",
  },
  {
    img: "./riceball.jpg",
    title: "Chairs",
  },
];
