 
import React from 'react';
import {Grid, Typography, Button} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import {NavLink} from 'react-router-dom';

export default function Error({msg}) {

    return (
        <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ width:"100vw",height: "80vh", gap:"5vh"}}
        >
            <Grid item>
                <ErrorIcon  style={{fontSize:"15vw", color:"#1B262C"}}/>
            </Grid>
            <Grid item>
                <Typography gutterBottom variant="h4" component="div">
                    {msg ? msg : "Error en la solicitud de la página"}
                </Typography>
            </Grid>
            <Grid item>
                <NavLink to={`/`} style={{color:"inherit", textDecoration:"none"}}>
                    <Button variant="contained" size="large" >
                        Volver a productos
                    </Button>
                </NavLink>
            </Grid>
        </Grid>
  );
}