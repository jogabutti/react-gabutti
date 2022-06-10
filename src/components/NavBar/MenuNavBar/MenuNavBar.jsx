 
import React from 'react';
import {NavLink} from 'react-router-dom'

export default function MenuNavBar({title}) {
  return (
    <NavLink to={`/categorias/${title.toLowerCase()}`} style={{textDecoration:"none", color:"white", padding:"1%"}}>
      {title}
    </NavLink>
  );
}