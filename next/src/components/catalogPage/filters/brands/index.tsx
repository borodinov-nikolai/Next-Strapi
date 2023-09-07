'use client'
import { Button } from 'antd'
import React from 'react'



const brands : {id:number, name: string}[] = [{id: 0, name:'Все'},{id: 1, name:'Samsung'},{id: 1, name:'Apple'},{id: 1, name:'OnePlus'},{id: 1, name:'Honor'}, ]


const Brands = () => {
   const [active, setActive] = React.useState<number>(0)


    return (
        <div style={{display: 'flex', gap: '10px'}}>
           {brands.map((brand)=> {
                 return <Button key={brand.id} >{brand.name}</Button>
           })}
        </div>
    )
}

export default Brands