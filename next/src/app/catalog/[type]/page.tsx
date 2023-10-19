import ProductCard from '@/components/СatalogPage/ProductCard'
import React from 'react'
import styles from './Smartpones.module.scss'
import PaginationDevices from '@/components/СatalogPage/pagination'
import Filters from '@/components/СatalogPage/filters'
import { getBrands, getDevices } from '@/services/serverApi'
import ClientCardWrapper from '@/components/СatalogPage/ProductCard/clientCardWrapper'
import { Metadata } from 'next'
import Link from 'next/link'




export const metadata: Metadata = {
  title: 'Каталог'
}

const Smartphones = async ({ searchParams, params }: { searchParams: Record<string, string>, params: { type: string } }) => {
  let brand = searchParams['filters[brand][name]']
  const sort = searchParams['sort[0]']
  const type = params.type
  console.log(searchParams)

  const devices = await getDevices(searchParams, type);
  const brands = await getBrands(type);


  type Device = {
    id: number,
    attributes: {
      name: string,
      price: number,
      image: {
        data: {
          attributes: {
            url: string
          }
        }[]
      },
      ratings: {
        data: {
          attributes: {
            value: number
          }
        }[]
      }

    },
  }






  return (
    <div className='container '>
      <div className={styles.root}>

        <div>
          <Link rel="stylesheet" href="https://digiseller.market/asp/pay_wm.asp?id_d=3918373&ai=1227454">купить</Link>
        </div>

        <div className={styles.filters} >
          <Filters brands={brands} pagination={devices?.meta.pagination} sortValue={sort} brandValue={brand} />
        </div>


        <div className={styles.grid} >



          {
            !devices ? 'ошибка загрузки' : devices?.data.map((device: Device) => {
              return (
                <div className={styles.card}>
                  <div className="digiseller-buy-standalone" data-id="3918373" data-ai="1227454" data-img="1" data-img-size="180" data-name="1" data-price="1" data-owner="1" data-no-price="0"></div>
                  <ClientCardWrapper id={device.id} >
                    <ProductCard key={device.id} id={device.id} name={device.attributes.name} price={device.attributes.price} image={device.attributes.image.data[0].attributes.url} rating={device.attributes.ratings.data} />
                  </ClientCardWrapper>
                </div>
              )
            })
          }

        </div>



        <div className={styles.pagination}>
          <PaginationDevices pagination={devices?.meta.pagination} />
        </div>
      </div>
    </div>
  )
}

export default Smartphones