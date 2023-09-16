import { getDevice} from '@/services/serverApi'
import { Metadata } from 'next'
import styles from './Device.module.scss'
import ImageViewer from '@/components/DevicePage/imageViewer'
import Rating from '@/components/DevicePage/rating'
import {StarFilled} from '@ant-design/icons'


export const metadata: Metadata = {
  title: 'Страница девайса'
}

const Device = async ({params}:{params:{type: string, id: number}}) => {

    const data = await getDevice(params.id) 
  
   
    const device = data?.data?.attributes
    const deviceID = data?.data?.id
    const deviceRating : {attributes:{value:number}}[] = device?.ratings?.data
    
    const rating = deviceRating.reduce((sum, item)=> sum + item.attributes.value, 0)/deviceRating.length
  
   
  return (
    <div className="container">
        <div  className={styles.root} >
          <ImageViewer className={styles.imageViewer} device = {device}/>
         
        <h2 className={styles.name} >{device.name}</h2>
        <div className={styles.description} >{device.description}</div>
<div className={styles.rating}>
  <div>Рейтинг товара: {+rating.toFixed(1) || 0} <StarFilled /> на основе {deviceRating.length} оценок</div>
Оцените товар: <Rating deviceID={deviceID} />
</div>
        <div className={styles.price} > Цена: {device.price}р</div>
      </div>
      </div>
  )
}


export default Device