import { getComments, getDevice} from '@/services/serverApi'
import { Metadata } from 'next'
import styles from './Device.module.scss'
import ImageViewer from '@/components/DevicePage/imageViewer'
import Rating from '@/components/DevicePage/rating'
import {StarFilled} from '@ant-design/icons'
import ToCartBtn from '@/components/СatalogPage/ProductCard/toCartBtn'
import Comments from '@/components/DevicePage/Сomments'




export const metadata: Metadata = {
  title: 'Страница девайса'
}

const Device = async ({params}:{params:{type: string, id: number}}) => {
   
    const data = await getDevice(params.id) 
    const comments = await getComments(params.id)

    
    const device = data?.data?.attributes
    const deviceID = data?.data?.id
    const deviceRating : {attributes:{value:number}}[] = device?.ratings?.data
    const image = device?.image?.data[0]?.attributes.url
    
    const rating = deviceRating.reduce((sum, item)=> sum + item.attributes.value, 0)/deviceRating.length
  
  
  return (
    <div className="container">
        <div  className={styles.root} >
          <div className={styles.imageHolder}> 
            <ImageViewer className={styles.imageViewer} device = {device}/>
            <div className={styles.rating}>
              <div>Рейтинг товара: {+rating.toFixed(1) || 0} <StarFilled className={styles.icon} /> на основе {deviceRating.length} оценок</div>
            <Rating  deviceID={deviceID} />
            </div>
          </div>
          <div className={styles.comments}><Comments comments={comments?.data} deviceID={deviceID}/></div>
        <h2 className={styles.name} >{device.name}</h2>
        <div className={styles.description} >{device.description}</div>

        <div className={styles.price} > Цена: {device.price}р</div>
        <ToCartBtn  item={{name:device.name, price:device.price, id:deviceID, image}} />
      </div>
      </div>
  )
}


export default Device