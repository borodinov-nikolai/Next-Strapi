import ProductCard from '@/components/catalogPage/productCard'
import React from 'react'
import styles from './Smartpones.module.scss'
import axios from 'axios'
import PaginationDevices from '@/components/catalogPage/pagination'
import { Button, Col, Row } from 'antd'
import Filters from '@/components/catalogPage/filters'



const getDevices = async () => {
  const res = await axios.get('http://localhost:1337/api/devices?populate=*')
  return res.data
}


const Smartphones = async () => {

  const devices = await getDevices();


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
          <Filters/>
          </div>


        <Row className={styles.cardHolder} gutter={[0, 50]}>
        {
            devices.data.map((device: Device) => {
              return (<Col xs={24} sm={12} md={8} lg={6} xl={4} >
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