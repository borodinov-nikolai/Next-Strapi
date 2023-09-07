'use client'
import { Button, Radio } from 'antd'
import React from 'react'



const brands : {value: string, name: string}[] = [{value: 'all', name:'Все'},{value: 'Samsung', name:'Samsung'},{value: 'Apple', name:'Apple'},{value:'OnePlus', name:'OnePlus'},{value: 'Honor', name:'Honor'}, ]


interface Props {
    setBrand: React.Dispatch<React.SetStateAction<string>>,
    value: string

}

const Brands = ({setBrand, value}:Props) => {



    return (
        <Radio.Group defaultValue={value ? value : 'all'} onChange={(e)=>setBrand(e.target.value)} buttonStyle="solid">
            {brands.map((brand)=> {
                return  <Radio.Button key={brand.name} value={brand.value} >{brand.name}</Radio.Button>
            })}
      </Radio.Group>
    )
}

export default Brands