import React from 'react';
import Button from '@mui/material/Button';

export default function MenuNavBar({title, options}) {

  return (
    <div>
      <Button
        id="basic-button"
        //onClick={handleClick}
        style={{color:"white"}}
      >
        {title}
      </Button>
    </div>
  );
}