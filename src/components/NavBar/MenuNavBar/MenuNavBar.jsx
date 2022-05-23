//@ts-check
import React from 'react';
import {Link} from '@mui/material'

export default function MenuNavBar({title}) {

  return (
    <Link
        href={`/categorias/${title.toLowerCase()}`} 
        color="inherit" 
        underline="none"
        id="basic-button"
        sx={{color:"white", padding:"1%"}}
      >
        {title}
    </Link>
  );
}