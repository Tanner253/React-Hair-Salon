import React from "react";
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { ImageList } from '@mui/material';
import SplashImages from "../SplashImages";

export default function Splash() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Tacoma's Best Blonding Services</h1>
          <p className="lead">
            I am currently working in the proctor district located in the north end of Tacoma. I use the industries top brands like KEVIN MURPHY to bring out your hairs best potential so you can look and feel your best!
          </p>
        </div>
      </div>
      {/* <Carousel className="w-100">
          <Carousel.Item>
            <img
              className="d-block w-100 img-responsive center-block"
              src="./images/MainPFP.jpg"
              alt="Marian Anderson"
            />
            <Carousel.Caption>
              <h3>Marian</h3>
              <p>Professional Hair Stylist</p>
              <p>Passionate about making you look and feel your best.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}

      <Card sx={{ maxWidth: 4000, bgcolor:'#212529' }}>
        <CardMedia
          component="img"
          height="140"
          src="./images/MainPFP.jpg"
          alt="green iguana"
          sx={{height: 500}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="white">
            <h3>Marian</h3>
          </Typography>
          <Typography variant="body2" color="white">
            <p>Professional Hair Stylist <br/>
            Passionate about making you look and feel your best.</p>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Book an Appointment</Button>
          <Button size="small">Contact Me</Button>
        </CardActions>
      </Card>
      <ImageList className="w-100 mt-5" variant="quilted" children="ImageListItem" >
        <SplashImages />
      </ImageList>

    </>
  );
}
