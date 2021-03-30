import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";

const getItems = (id) => {
    return  new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            title:"un Item",
            price: 25.5,
            description: "Un muy lindo item  con ID: " + id,
            img:""
        })},2000)
    
    
    })
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const {itemId} = useParams()

    useEffect(() => {
        getItems(itemId).then((res)=> setItem(res))
        return;
    }, [itemId])

     return <> {itemId}
     <ItemDetail item={item} /></>
    }