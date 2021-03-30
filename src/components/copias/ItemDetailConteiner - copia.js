import React, {useState, useEffect} from 'react'
import ItemDetail from './ItemDetail'


const getItems = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
            title:"un Item",
            price: 25.5,
            description: "Un muy lindo item ",
            img:""

        })},2000)
    })
}

export const ItemDetailContainer = () =>  {
    const [item, setItem] = useState(null)
    useEffect(() => {
        getItems().then((res)=> setItem(res))
        return;
    }, [])

     return <ItemDetail item={item} />
    }
    
export default ItemDetailContainer;