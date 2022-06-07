// @ts-nocheck
import React, { useContext, useState, useEffect } from "react";
import {Button, TextField, Card, CardContent, Typography, Box, Grid } from '@mui/material';
import { CartContext } from "../../context/CartContext";


export default function Checkout({total, generar}) {
    const { cart} = useContext(CartContext);
    const [camposVacios, setCamposVacios] = useState(true)
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

    useEffect(() => {
      setCamposVacios(buyer.name === "" || buyer.phone === 0 || buyer.email === "" || buyer.emailConfirmacion === "")
    }, [buyer])
    
    const handleChange = (e) => {
      e.preventDefault();
      setBuyer({ ...buyer, [e.target.name]: e.target.value });
    };
    

    const handleSubmit = (e) => {
      e.preventDefault(); 
        // Validar que no haya campos vacios
        if (!camposVacios) {
            generar(order)
		}
    };
    
  return (
    <Card elevation={3} sx={{width: "40vw", height:camposVacios ? "33vh" : "30vh", borderRadius:"20px",margin:"2%", padding:"2%"}}>
        <CardContent  sx={{paddingBottom:0,height:"75%",width:"95%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
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
                            {
                                buyer.email !== buyer.emailConfirmacion &&
                                    <Typography gutterBottom variant="subtitle" component="div" color="red">
                                        Los emails no coinciden
                                    </Typography>
                            }
                        </Grid>
                        <Button
                            disabled={buyer.email !== buyer.emailConfirmacion || camposVacios}
                            type="submit"
                            variant="contained"
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
