
import React from 'react';
import {Typography, Button, Grid} from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import {NavLink} from 'react-router-dom';

export default function CartEmpty() {

  return (
    <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{marginTop:"5%"}}
    >
        <RemoveShoppingCartIcon style={{fontSize:"12vw", color:"#1B262C"}}/>
        <Typography gutterBottom variant="h2" component="div"> 
            Tu carrito está vacío
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
            ¿No sabés qué comprar? ¡Miles de productos te esperan!
        </Typography> 
        <NavLink to={`/`} style={{color:"inherit", textDecoration:"none", margin:"2%"}}>
            <Button variant="contained" size="large" >
                Ver productos
            </Button>
        </NavLink>
    </Grid>
  )}