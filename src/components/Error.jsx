//@ts-check
import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function Error({msg}) {

    return (
        <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ width:"100vw",height: "80vh"}}
        >
            <Grid item>
                <img alt="icono error" src="/error.png"  style={{width:"20vw"}}/>
            </Grid>
            <Grid item>
                <Typography gutterBottom variant="h4" component="div">
                    {msg ? msg : "Error en la solicitud de la página"}
                </Typography>
            </Grid>
        </Grid>
  );
}