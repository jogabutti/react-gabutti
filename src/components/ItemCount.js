//@ts-check
import React, {useState} from 'react';
import { 
    ButtonGroup,
    Button
} from '@mui/material';
import TerminarCompra from './TerminarCompra'

export default function ItemCount({stock, initial, onAdd, state, addItems, item}) {
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
  
    const finish = ()=>{
        addItems({...item,"quantity": cantidad})
    }
    return (
        <>
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
            }
        </>
  );
}