 
import React, {useState, useContext, useEffect} from 'react';
import { 
    ButtonGroup,
    Button,
    Box
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import TerminarCompra from './TerminarCompra';
import { CartContext } from '../context/CartContext';

export default function ItemCount({ initial, onAdd, state, item, quantityInCart}) {
    const {addItems}= useContext(CartContext)
    let history = useNavigate();
    const [cantidad, setCantidad] = useState(initial)

    useEffect(() => {
        setCantidad(initial)
    }, [initial])
    
    const sumar =()=>{
        console.log('first', cantidad,"+", quantityInCart,"<=",item.stock)
        if (cantidad+quantityInCart<=item.stock){
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
        addItems({...item,"quantity": cantidad })
        onAdd()
    }

    return (
        <Box sx={{width:"60%", margin:"5%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            {state ?
                <TerminarCompra finish={finish} />
            :
                <>
                    <ButtonGroup disableElevation variant="contained" size="large">
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
                                disabled={cantidad+quantityInCart === item.stock}
                                onClick={()=>{sumar() }}
                            >
                                +
                            </Button>
                    </ButtonGroup>
                    <Button 
                        disabled={cantidad-quantityInCart === 0 || cantidad+quantityInCart>item.stock}
                        onClick={()=>{agregarCarrito(cantidad)}}
                        variant="outlined"
                        sx={{margin:"2%"}}
                    >
                        Agregar al carrito
                    </Button>
                </>
            }
        </Box>
  );
}