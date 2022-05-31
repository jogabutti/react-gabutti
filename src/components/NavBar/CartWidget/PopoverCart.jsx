import * as React from 'react';
import Popover from '@mui/material/Popover';
import CartBody from '../../Cart/CartBody';

export default function PopoverCart({anchorEl, open, handleClose, id}) {

  return (
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <CartBody/>
      </Popover>
  );
}