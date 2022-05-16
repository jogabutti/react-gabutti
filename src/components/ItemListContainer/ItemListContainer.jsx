import React, {useEffect, useState} from 'react';
import ItemList from '../ItemList/ItemList';
import {  Typography } from '@mui/material'
import {data} from '../../data/data'

export default function ItemListContainer({greeting}) {
  const [productos, setProductos]= useState([])
  const [loading, setLoading]= useState(true)
  const [error, setError]= useState("")

  useEffect(() => {
      setLoading(true);
      const productosPromise = new Promise ((res, rej)=>{
          setTimeout(()=>{
           res(data)
          }, 2000);
        })
      productosPromise.then(res => { 
          setLoading(false)
          setProductos(data)
        }, rej =>{
          setLoading(false)
          setError("Error 404")
        }).finally(()=> {setLoading(false)})
  }, [])

  return (
    <>
      {loading ? 
         <p> CARGANDO ...</p>
         :
         error ? 
            <p> {error}</p>
          :
            <>
              <Typography variant="h4" color="text.secondary" align="center">
                {greeting}
              </Typography>
              <ItemList items={productos} />
            </>
      }
    </>
  );
}