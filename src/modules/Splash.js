import React from "react";
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { ImageList } from '@mui/material';
import SplashImages from "../SplashImages";

export default function Splash() {
  return (
    <>
      <div className="jumbotron jumbotron-fluid" style={{height: 300}}>
        <div className="container">
          <h1 className="display-4">Tacoma's Best Blonding Services</h1>
          <p className="lead">
            I am currently working in the proctor district located in the north end of Tacoma. I use the industries top brands like KEVIN MURPHY to bring out your hairs best potential so you can look and feel your best!
          </p>
        </div>
      </div>
      <Card sx={{ maxWidth: 3000, bgcolor:'#212529' }}>
        <CardMedia
          component="img"
          height="140"
          src="./images/MainPFP.jpg"
          alt="Stylist Headshot"
          sx={{height: 600}}
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
