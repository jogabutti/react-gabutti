 
import React, {useContext, useEffect, useState}from 'react';
import {Box} from '@mui/material';
import {CartContext} from '../../context/CartContext';
import {generateOrder, updateStock} from '../../server/Querys';
import Cart from '../Cart/Cart';
import CartEmpty from '../Cart/CartEmpty';
import CartTotal from '../Cart/CartTotal';
import CheckoutExitoso from './CheckoutExitoso';
import Checkout from './Checkout';
import Loading from '../Loading';
import Error from '../Error';

export default function CartContainer() {
    const {cart, clear, deleteCart, totalCart} = useContext(CartContext)
    const [total, setTotal]=useState(0)
    const [desc, setDescuento]=useState(0.1)
    const [checkout, setCheckout] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const subtotal=() =>{
      setTotal(totalCart())
      if (cart.length>3){
        setDescuento(0.3)
      }else {
        setDescuento(0.1)
      }
    }
  
    useEffect(() => { 
      subtotal()
      //eslint-disable-next-line react-hooks/exhaustive-deps
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
        <CartEmpty />
      :
        (loading ? 
          <Loading/>
          :
          error ? 
            <Error msg={"Error en al procesar la compra, vuelva a intentarlo"} />
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
                    <Box sx={{ width: "50%", height:"30%"}} >
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