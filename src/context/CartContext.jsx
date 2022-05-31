//@ts-check
import React, {createContext, useState} from 'react';

// @ts-ignore
export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])
    
    const buttonsCheckout = (item) =>{
       
        if (isInCart(item.id)){ 
            const newCart = cart.reduce((acc, prod)=>{
                if (item.id !== prod.id){
                    return acc.concat(prod)
                } else {
                    return acc.concat({ ...prod, quantity: item.quantity})
                }
            }, [])
            setCart(newCart)
            return
        }
        const newCart = cart.concat(item)
        setCart(newCart)
        return 
    }
    
    const removeItems = (id)=>{
        const foundItem = cart.find((carr)=>carr.id === id)
        if (foundItem){
            if (foundItem.cantidad===1){
                clear(id)
            } else {
                foundItem.cantidad = foundItem.cantidad -1
                setCart([...cart])
            }
        }
    }

    const clear = (id)=>{
        const newCart = cart.filter((producto=>producto.id !== id))
        setCart(newCart)
    }

    const isInCart = (id)=>{
        return cart.find((carr)=>carr.id===id)!==undefined
    }

    const addItems = (item)=>{
        if (isInCart(item.id)){ 
            const newCart = cart.reduce((acc, prod)=>{
                if (item.id !== prod.id){
                    return acc.concat(prod)
                } else {
                    return acc.concat({ ...prod, quantity: prod.quantity + item.quantity})
                }
            }, [])
            setCart(newCart)
            return
        }
        const newCart = cart.concat(item)
        setCart(newCart)
        return 
    }

    const totalInCart = ()=> {
        return cart.reduce((acc, item)=>{
            return acc = acc + item.quantity
        }, 0)
    }


    return (
        <CartContext.Provider value={{cart, removeItems, addItems, clear, isInCart, totalInCart, buttonsCheckout}}>
            {children}
        </CartContext.Provider>  
    );
};