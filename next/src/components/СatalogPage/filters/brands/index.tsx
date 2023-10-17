'use client'
import { Radio } from 'antd'
import React from 'react'



//Временно захардкодил

// const brands : {value: string, name: string}[] = [{value: 'Samsung', name:'Samsung'},{value: 'Apple', name:'Apple'},{value:'OnePlus', name:'OnePlus'},{value: 'Honor', name:'Honor'}, {value: 'Google', name: 'Google'} ]



interface Props {
    setBrand: React.Dispatch<React.SetStateAction<string>>,
    value: string,
    brand: string,
    brands: {
        id: number,
        attributes: {
          name: string
          createdAt: string
          updatedAt: string
          publishedAt: string
        }
      }[]
}

const Brands: React.FC<Props> = ({setBrand, value, brand, brands}) => {


    return (
        <Radio.Group value={brand || value} defaultValue={'all'} onChange={(e)=>setBrand(e.target.value)} buttonStyle="solid">
            <Radio.Button value='all' >Все</Radio.Button>
            {brands?.map((item)=> {
                return  <Radio.Button key={item.id} value={item.attributes.name} >{item.attributes.name}</Radio.Button>
            })}

      </Radio.Group>
    )
}

export default Brands
