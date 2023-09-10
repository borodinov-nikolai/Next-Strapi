import ProductCard from '@/components/СatalogPage/ProductCard'
import React from 'react'
import styles from './Smartpones.module.scss'
import PaginationDevices from '@/components/СatalogPage/pagination'
import { Col, Row } from 'antd'
import Filters from '@/components/СatalogPage/filters'
import { getDevices } from '@/utils/serverApi'
import ClientCardWrapper from '@/components/СatalogPage/ProductCard/clientCardWrapper'
import { Metadata } from 'next'



export const metadata : Metadata = {
  title: 'Каталог'
}

const Smartphones = async ({searchParams}:any) => {
    let brand = searchParams['filters[brand][name]']
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
          <Filters pagination={devices?.meta.pagination} sortValue={sort} brandValue={brand}/>
          </div>


        <Row className={styles.cardHolder} gutter={[0, 50]}>
        {
          !devices? 'ошибка загрузки' : devices.data.map((device: Device) => {
            return (<Col xs={24} sm={12} md={6} lg={6} xl={6} >
                <div className={styles.card}>
                <ClientCardWrapper id={device.id} >
                  <ProductCard key={device.id}  id={device.id} name={device.attributes.name} price={device.attributes.price} image={device.attributes.image.data.attributes.url} />
                </ClientCardWrapper>
                </div>
              </Col>)
            })
          }
        </Row>
          
      {/* </div> */}

        <div className={styles.pagination}>
          <PaginationDevices pagination = {devices?.meta.pagination} />
        </div>
      </div>
    </div>
  )
}

export default Smartphones