// @ts-nocheck
import React from 'react';
import {Typography, Button, Grid} from '@mui/material';
import {NavLink} from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Cart() {

  return (
    <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
    >
        <img alt="icono next" src="/cart.png"  style={{width:"10vw"}}/>
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