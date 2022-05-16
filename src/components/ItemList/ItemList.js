//ts-check
import React from 'react';
import Grid from '@mui/material/Grid';
import Item from '../Item/Item';

export default function ItemList({items}) {

  const onAdd=(cantidad)=>{
    alert("Compro: " + cantidad)
  }

  return (
    <Grid container 
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={3}
    >
        {items.map(item=> 
            <Grid item key={item.id}>     
                <Item stock={10} initial={1} onAdd={onAdd} item={item} />
            </Grid>
        )}
    </Grid>
  );
}