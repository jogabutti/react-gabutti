 
import React from 'react';
import { 
    Button,
    Grid
} from '@mui/material';

export default function ItemCount({finish}) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Button
                variant="outlined"
                onClick={()=>finish("home")}
            >
                Seguir Comprando
            </Button>
            <Button
                variant="contained"
                onClick={()=>finish("finish")}
            >
                Ir al carrito
            </Button>
        </Grid>
    )
}