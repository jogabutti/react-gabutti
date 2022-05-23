//@ts-check
import React from 'react';
import { 
    Button,
    Link
} from '@mui/material';

export default function ItemCount() {
    return (
        <Link href={`/cart`} color="inherit" underline="none">
            <Button
                variant="outlined"
            >
                Terminar Compra
            </Button>
        </Link>
    )
}