'use client'
import { Button, Radio } from 'antd'
import React from 'react'



const brands : {value: string, name: string}[] = [{value: 'all', name:'Все'},{value: 'Samsung', name:'Samsung'},{value: 'Apple', name:'Apple'},{value:'OnePlus', name:'OnePlus'},{value: 'Honor', name:'Honor'}, {value: 'Google', name: 'Google'} ]



interface Props {
    setBrand: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    brand: string

}

const Brands = ({setBrand, value, brand}:Props) => {


    return (
        <Radio.Group value={brand || value} defaultValue={'all'} onChange={(e)=>setBrand(e.target.value)} buttonStyle="solid">
            {brands.map((brand)=> {
                return  <Radio.Button key={brand.name} value={brand.value} >{brand.name}</Radio.Button>
            })}

      </Radio.Group>
    )
}

export default Brands