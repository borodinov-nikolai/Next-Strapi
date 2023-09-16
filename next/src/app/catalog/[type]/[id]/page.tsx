import { getDevice} from '@/services/serverApi'
import { Metadata } from 'next'
import styles from './Device.module.scss'
import ImageViewer from '@/components/DevicePage/imageViewer'
import DeviceRating from '@/components/СatalogPage/ProductCard/deviceRating'
import Rating from '@/components/DevicePage/rating'
import {StarFilled} from '@ant-design/icons'


export const metadata: Metadata = {
  title: 'Страница девайса'
}

const Device = async ({params}:{params:{type: string, id: number}}) => {

    const data = await getDevice(params.id) 
  
   
    const device = data?.data?.attributes
    const deviceID = data?.data?.id


   
  return (
    <div className="container">
        <div  className={styles.root} >
          <ImageViewer className={styles.imageViewer} device = {device}/>
         
        <h2 className={styles.name} >{device.name}</h2>
        <div className={styles.description} >{device.description}</div>
<div className={styles.rating}>
  <div>Рейтинг товара: 4,7 <StarFilled /> на основе 500 оценок</div>
Оцените товар: <Rating deviceID={deviceID} />
</div>
        <div className={styles.price} > Цена: {device.price}р</div>
      </div>
      </div>
  )
}


export default Device