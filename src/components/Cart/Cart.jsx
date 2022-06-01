// @ts-nocheck
import React, {useContext, useEffect, useState} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box} from '@mui/material';
import { CartContext } from '../../context/CartContext';
import CartVacio from '../CartVacio'
import CartBody from './CartBody'

export default function Cart() {
  const {cart} = useContext(CartContext)
  const [total, setTotal]=useState(0)
  const [desc, setDescuento]=useState(0.1)

  const subtotal=(items) =>{
    setTotal(items.map(item =>item.quantity*item.precio).reduce((sum, i) => sum + i, 0))
    if (items.precio>50000){
      setDescuento(0.2)
    }
  }

  useEffect(() => { 
    subtotal(cart)
  }, [cart]) 

  return (
    <>
    {cart.length>0 ? 
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="spanning table">
          <TableHead>
            <TableRow>
                <TableCell align="center" colSpan={4}>
                  Detalle
                </TableCell>
                <TableCell align="right"/>
            </TableRow>
            <TableRow>
                <TableCell align="left" />
                <TableCell>Descripción</TableCell>
                <TableCell align="center">Cantidad</TableCell>
                <TableCell align="center">Suma Total</TableCell>
                <TableCell align="center"> Opciones</TableCell>
            </TableRow>
          </TableHead>
          <CartBody/>
          <TableBody>
            <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="center">{total}</TableCell>
                <TableCell align="left"/>
            </TableRow>
            <TableRow>
                <TableCell >{ `Descuento  ${desc * 100} %`}</TableCell>
                <TableCell align="center">{desc * total}</TableCell>
                <TableCell align="left"/>
            </TableRow>
            <TableRow>
                <TableCell colSpan={1}/>
                <TableCell >Total</TableCell>
                <TableCell align="center">{total-total*desc}</TableCell>
                <TableCell align="left"/>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      :
      <Box sx={{ width:"100vw",height: "80vh",  display:"flex", direction:"row", justifyContent:"center", alignItems:"center"}}> 
        <CartVacio/>
      </Box> 
    }
    </>
      );
}