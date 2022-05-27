//@ts-check
import React, {useContext} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CartContext } from '../../context/CartContext';

const TAX_RATE = 0.07;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceSubtotal = subtotal(rows);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function Cart() {
    const {cart} = useContext(CartContext)

    console.log("CRT", cart)
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
            <TableRow>
                <TableCell align="center" colSpan={3}>
                Detalle
                </TableCell>
                <TableCell align="right">Precio</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Descripción</TableCell>
                <TableCell align="right">Precio.</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Suma</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {cart.map((row) => (
                <TableRow key={row.id}>
                <TableCell>{row.description}</TableCell>
                <TableCell align="right">{row.precio}</TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{ccyFormat(row.precio*row.quantity)}</TableCell>
                </TableRow>
            ))}

            <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell colSpan={2}>Total</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
    );
}