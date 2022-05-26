//@ts-check
import React from 'react';
import { 
    Button,
    Link
} from '@mui/material';

export default function ItemCount({finish}) {
    return (
        <Link href={`/cart`} color="inherit" underline="none">
            <Button
                variant="outlined"
                onClick={()=>finish()}
            >
                Terminar Compra 
            </Button>
        </Link> 
    )
}