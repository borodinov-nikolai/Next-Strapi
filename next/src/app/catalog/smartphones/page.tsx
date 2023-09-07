import ProductCard from '@/components/catalogPage/productCard'
import React from 'react'
import styles from './Smartpones.module.scss'
import axios from 'axios'
import PaginationDevices from '@/components/catalogPage/pagination'
import { Col, Row } from 'antd'
import Filters from '@/components/catalogPage/filters'
import qs from 'qs'



const getDevices = async (props:any) => {
  const query = qs.stringify(props)
  const res = await axios.get(`http://localhost:1337/api/devices?${query}&populate=*`)
  return res.data
}


const Smartphones = async ({searchParams}:any) => {
    const brand = searchParams['filters[brand][name]']
    const sort = searchParams['sort[0]']


  const devices = await getDevices(searchParams);


  interface Device {
    id: number,
    attributes: {
      name: string,
      price: number,
      image: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    },



  }

  return (
      <div className='container '>
    <div className={styles.root}>
          <div className={styles.filters} >
          <Filters sortValue={sort} brandValue={brand}/>
          </div>


        <Row className={styles.cardHolder} gutter={[0, 50]}>
        {
            devices.data.map((device: Device) => {
              return (<Col xs={24} sm={12} md={6} lg={6} xl={6} >
                <div className={styles.card}>
                  <ProductCard key={device.id} name={device.attributes.name} price={device.attributes.price} image={device.attributes.image.data.attributes.url} />
                </div>
              </Col>)
            })
          }
        </Row>
          
      {/* </div> */}

        <div className={styles.pagination}>
          <PaginationDevices />
        </div>
      </div>
    </div>
  )
}

export default Smartphones