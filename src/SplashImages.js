import { ImageListItem } from "@mui/material";
import React from "react";

export default function SplashImages() {

  let images = ['./images/splashImages/1x1b1.jpg', './images/splashImages/1x1b2.jpg','./images/splashImages/1x1b3.jpg','./images/splashImages/blonde1.jpg','./images/splashImages/blonde2.jpg'];
  
  return(
    <>
     {images.map((item) => (
      <ImageListItem key={item}>
        <img
          src={`${item}?w=161&fit=crop&auto=format`}
          srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
          alt={item}
          loading="lazy"
        />
      </ImageListItem>
    ))}
    </>
  )
}
