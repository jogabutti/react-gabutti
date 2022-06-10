
import React from "react";
import {Card, Typography, Grid, Button} from '@mui/material';
import {NavLink} from 'react-router-dom';
export default function CheckoutExitoso({checkout}) {

  return (
    <Card elevation={3} sx={{width: "40vw", height:"38vh", borderRadius:"20px"}}>
            <Grid container
                display="flex"
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                spacing={3}
                sx={{padding:"5%"}}
            >
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h3" component="div">
                        CHECKOUT
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography gutterBottom variant="h4" component="div" color="green" textAlign={"center"}>
                        Pedido realizado con éxito
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h5" textAlign={"center"}>
                       {"El n° de su pedido es: "+ checkout}
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <NavLink to={`/`} style={{color:"inherit", textDecoration:"none", margin:"2%"}}>
                        <Button variant="contained" size="large" >
                            Volver al inicio
                        </Button>
                    </NavLink>
                </Grid>
            </Grid>
    </Card>
  );
}
