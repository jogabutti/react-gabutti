//@ts-check
import React, {useContext, useEffect, useState}from 'react';
import {Box} from '@mui/material';
import {CartContext} from '../../context/CartContext';
import {generateOrder, updateStock} from '../../server/querys';
import Cart from '../Cart/Cart'
import CartVacio from '../Cart/CartVacio'
import CartTotal from '../Cart/CartTotal'
import CheckoutExitoso from './CheckoutExitoso';
import Checkout from './Checkout';
import Loading from '../Loading';
import Error from '../Error';

export default function CartContainer() {
    const {cart, clear, deleteCart} = useContext(CartContext)
    const [total, setTotal]=useState(0)
    const [desc, setDescuento]=useState(0.1)
    const [checkout, setCheckout] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const subtotal=(items) =>{
      setTotal(items.map(item =>item.quantity*item.precio).reduce((sum, i) => sum + i, 0))
      if (items.precio>50000){
        setDescuento(0.2)
      }
    }
  
    useEffect(() => { 
      subtotal(cart)
    }, [cart]) 
  
    const generar = (order)=>{
      generateOrder(order)
				.then((res) => {
          setCheckout(res.id)
          setLoading(false)
				})
				.then(() => cart.forEach((item) => updateStock(item.id, item.quantity)))
				.then(() => deleteCart())
				.catch((error)=>{
          setError(true)
          setLoading(false)
        })
    }

    return (
      <>
      {cart.length === 0 && !checkout ?
        <CartVacio />
      :
        (loading ? 
          <Loading/>
          :
          error ? 
            <Error />
          :
          
            checkout ? 
              <Box sx={{
                  padding:"2%", 
                  margin:"2%", 
                  display:"flex",
                  flexDirection:"row",
                  justifyContent:"center"
              }}>
                <CheckoutExitoso checkout={checkout}/> 
              </Box>
              :
                <Box sx={{
                    padding:"2%",
                    width:"90vw", 
                    height:"80vh", 
                    margin:"2%", 
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-around"
                }}>
                    <Box >
                        {cart.map((row) => (
                            <Cart key={row.id} row={row} clear={clear}/>
                        ))}
                    </Box>
                    <Box>
                        <CartTotal desc={desc}  total={total}/>
                        <Checkout total={total} generar={generar} />
                    </Box>
                </Box>
        )}
    </>
  );
}