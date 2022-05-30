//@ts-check
import React from 'react';
import { Grid, Typography } from '@mui/material';

export default function Error() {

    return (
        <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ width:"100vw",height: "80vh"}}
        >
            <Grid item>
                <img alt="icono error" src="/error.png"  style={{width:"30vw"}}/>
            </Grid>
            <Grid item>
                <Typography gutterBottom variant="h4" component="div">
                    Error en la solicitud de la página
                </Typography>
            </Grid>
        </Grid>
  );
}