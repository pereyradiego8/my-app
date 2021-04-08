import React, { useState, useContext } from 'react'
import {ItemCount} from './ItemCount'
import {Link} from 'react-router-dom'
import { CartContext } from "../context/cartContext";

export default function ItemDetail({ item }) {
    const [count, setCount] = useState(0)

    const {addItem, cart} = useContext(CartContext);

    const addHandler = (contador)=>{
        console.log('Se agregó un item', contador)
        addItem(item, contador)
        setCount(contador)
    }
 
    return <>
            <img src={item?.img} alt=""/>
            <h2>{item?.title}</h2>
            <p>{item?.description}</p>
            <div>${item?.price}</div>

            { count === 0 ?
            <ItemCount stock="10" initial="1" onAdd={addHandler} />
                :
            <Link to = '/cart'>
            <button type="button" class="btn btn-success">Terminar mi compra</button>
            </Link>
            }
  </>;
   
  }