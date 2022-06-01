//@ts-check
import React, {useState, useContext} from 'react';
import { 
    ButtonGroup,
    Button,
    Box
} from '@mui/material';
import { useNavigate } from "react-router-dom";
import TerminarCompra from './TerminarCompra';
import { CartContext } from '../context/CartContext';

export default function ItemCount({ initial, onAdd, state, item}) {
    const {/* removeItems, */ addItems/* , clear */}= useContext(CartContext)
    let history = useNavigate();
    const [cantidad, setCantidad] = useState(initial)

    const sumar =()=>{
        if (cantidad<=item.stock){
            setCantidad(cantidad+1)
        }
    }

    const restar =()=>{
        if (cantidad>0){
            setCantidad(cantidad-1)
        }
    }
    
    const finish = (option)=>{
        if (option === "finish"){
            history("/cart");
        } 
        if ( option === "home"){
            history("/");
        }
    }

    const agregarCarrito = (cantidad)=>{
        addItems({...item,"quantity": cantidad})
        onAdd()
    }
    return (
        <Box sx={{width:"60%", margin:"5%", display:"flex", direction:"column", justifyContent:"left", alignItems:"left"}}>
            {state ?
                <TerminarCompra finish={finish} />
            :
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
                                disabled={cantidad===item.stock}
                                onClick={()=>{sumar() }}
                            >
                                +
                            </Button>
                    </ButtonGroup>
                    <Button 
                        disabled={cantidad===0 || cantidad===item.stock}
                        onClick={()=>{agregarCarrito(cantidad)}}
                    >
                        Agregar al carrito
                    </Button>
                </>
            }
        </Box>
  );
}