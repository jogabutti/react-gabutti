import React from 'react';
import ItemCount from '../ItemCount';
import {  Typography } from '@mui/material'


export default function ItemListContainer({greeting}) {

  const onAdd=(cantidad)=>{
    alert("Compro: " + cantidad)
  }

  return (
    <>
        <Typography variant="h4" color="text.secondary" align="center">
        {greeting}
        </Typography>
        <ItemCount 
          stock={10} 
          initial={1} 
          onAdd={onAdd} 
        />
    </>
  );
}