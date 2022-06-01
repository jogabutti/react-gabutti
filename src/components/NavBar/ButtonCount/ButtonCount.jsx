//@ts-check
import React from 'react';
import { 
    ButtonGroup,
    Button
} from '@mui/material';
import {useContext} from 'react';
import {CartContext} from '../../../context/CartContext';
import { useState } from 'react';

export default function ButtonCount({ cantidad, item}) {
    const {buttonsCheckout} = useContext(CartContext)
    const [qty, setQty]=useState(cantidad)
    
    const sumar =()=>{
        if (qty<=item.stock){
            buttonsCheckout({...item,"quantity": (qty+1)})
            setQty(qty+1)
        }
    }

    const restar =()=>{
        if (qty>0){
            buttonsCheckout({...item,"quantity": (qty-1)})
            setQty(qty-1)
        }
    }

    return (
        <ButtonGroup disableElevation variant="contained" >
                <Button 
                    onClick={()=>{restar() }}
                    disabled={qty===0}
                >
                    -
                </Button>
                <Button 
                    variant="text"
                    sx={{cursor: "default", mouseOver:'none'}}
                    
                >
                    {qty}
                </Button>
                <Button 
                    disabled={qty===item.stock}
                    onClick={()=>{sumar() }}
                >
                    +
                </Button>
        </ButtonGroup>
  );
}