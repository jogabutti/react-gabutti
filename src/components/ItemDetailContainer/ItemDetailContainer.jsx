//@ts-check
import React, {useEffect, useState} from 'react';
import {data} from '../../data/data'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../Loading'

export default function ItemDetailContainer() {
  const {id} = useParams()
  const [producto, setProducto]= useState([])
  const [loading, setLoading]= useState(true)
  const [error, setError]= useState("")

  useEffect(() => {
      setLoading(true);
      const productoPromise = new Promise ((res, rej)=>{
        setTimeout(()=>{
          const myData = id ? data.find(prod => prod.id === id) : data
          res(myData)
        }, 2000);
      })
      productoPromise.then(res => { 
        setLoading(false)
        setProducto(res)
      }, rej =>{
        setLoading(false)
        setError("Error 404")
      }).finally(()=> {setLoading(false)})
  }, [id])

  return (
    <>
      {loading ? 
          <Loading/>
         :
         error ? 
            <p> {error}</p>
          :
            <ItemDetail item={producto} />
      }
    </>
  );
}