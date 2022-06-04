// @ts-nocheck
import React, { useContext, useState } from "react";
import {Button, TextField, Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { CartContext } from "../../context/CartContext";


export default function Checkout({total, generar}) {
    const { cart} = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        name: "",
        email: "",
        emailConfirmacion:"",
        phone: 0,
    });
    const order = {
        buyer,
        item: cart,
        total,
    }

    const handleChange = (e) => {
      e.preventDefault();
      setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
      e.preventDefault(); 
        // Validar que no haya campos vacios
        if (buyer.name !== "" && buyer.phone !== "" && buyer.email !== "" && buyer.email === buyer.emailConfirmacion ) {
            generar(order)
		} else {
            //aca poner error de campos incompletos
		}
    };
  return (
    <Card elevation={3} sx={{width: "40vw", height:"40vh", borderRadius:"20px",margin:"2%", padding:"2%"}}>
        <CardContent  sx={{paddingBottom:0,height:"75%",width:"90%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
            <CardContent  sx={{padding:0, display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <Typography gutterBottom variant="h4" component="div">
                    CHECKOUT
                </Typography>
            </CardContent>
            <Box  sx={{padding:"0% 3% 0%", display:"flex", flexDirection:"column", justifyContent:"end", alignItems:"end"}}> 
                <form onSubmit={handleSubmit}>
                    <Grid container
                        display="flex"
                        direction="row"
                        justifyContent="space-around"
                        autoComplete="off"
                        spacing={3}
                        >
                        <Grid item xs={6}>
                            <TextField
                                fullWidth   
                                required
                                helperText={buyer.name.trim() === "" && "El nombre no puede estar vacio" }
                                label="Nombre"
                                onChange={handleChange}
                                value={buyer.name}
                                name="name"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                label="Teléfono"
                                onChange={handleChange}
                                value={buyer.phone}
                                name="phone"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                helperText={buyer.email.trim() === "" && "El correo no puede estar vacio" }
                                label="Email"
                                onChange={handleChange}
                                value={buyer.email}
                                name="email"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                required
                                helperText={buyer.emailConfirmacion.trim() === "" && "El correo no puede estar vacio" }
                                label="Confirmación Email "
                                onChange={handleChange}
                                value={buyer.emailConfirmacion}
                                name="emailConfirmacion"
                            />
                        </Grid>
                        <Button
                            disabled={buyer.email !== buyer.emailConfirmacion}
                            type="submit"
                            variant="contained"
                            onSubmit={handleSubmit}
                            sx={{
                                display: "flex",
                                margin: "auto",
                                mt: 4,
                                mb: 4,
                                fontSize: 16,
                                alignItems: "justify-end",
                            }}
                        >
                            COMPRAR
                        </Button>
                    </Grid>
                </form>
            </Box>
        </CardContent>
    </Card>
  );
}
