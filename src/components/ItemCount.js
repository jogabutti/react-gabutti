//@ts-check
import React, {useState} from 'react';
import { 
    ButtonGroup,
    Button
} from '@mui/material';

export default function ItemCount({stock, initial, onAdd}) {
    const [cantidad, setCantidad] = useState(initial)

    const sumar =()=>{
        if (cantidad<=stock){
            setCantidad(cantidad+1)
        }
    }
    const restar =()=>{
        if (cantidad>0){
            setCantidad(cantidad-1)
        }
    }
  
    return (
        <>
            <ButtonGroup disableElevation variant="contained" >
                <Button 
                    onClick={()=>{restar() }}
                    disabled={cantidad===0}
                >
                    -
                </Button>
                <Button 
                    variant="text"
                    sx={{cursor: "default", mouseOver:'none'}}
                    
                >
                    {cantidad}
                </Button>
                <Button 
                    disabled={cantidad===stock}
                    onClick={()=>{sumar() }}
                >
                    +
                </Button>
            </ButtonGroup>
            <Button 
                disabled={cantidad===0 || cantidad===stock}
                onClick={()=>{onAdd(cantidad)}}
            >
                Agregar al carrito
            </Button>
        </>
  );
}