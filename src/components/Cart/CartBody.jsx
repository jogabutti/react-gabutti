// @ts-nocheck
import React, {useContext, useEffect, useState} from 'react';
import {TableBody, TableCell, TableRow, Avatar, IconButton, Paper} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/CartContext';
import ButtonCount from './../NavBar/ButtonCount/ButtonCount';


export default function Cart() {
    const {cart, clear} = useContext(CartContext)
    const [state, setState] = useState(cart)

    useEffect(() => {
        setState(cart)
    }, [cart])

    return (
        <TableBody component={Paper}>
            {state.map((row) => (
                <TableRow key={row.id && row.quantity }>
                    <TableCell align="left"> 
                        <Avatar alt="imagen compra silla" src={row.image} variant="rounded" sx={{ width: "6vw", height: "12vh", objectFit:'contain' }}  />
                    </TableCell>
                    <TableCell>
                        {row.title}
                    </TableCell>
                    <TableCell align="center">
                        <ButtonCount cantidad={row.quantity} item={row}/>
                    </TableCell>
                    <TableCell align="center">
                        {"$ "+row.precio*row.quantity}
                    </TableCell>
                    <TableCell align="center"> 
                    <IconButton>
                        <DeleteIcon fontSize="medium" color='disabled' onClick={()=>clear(row.id)}/>
                    </IconButton>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
);}