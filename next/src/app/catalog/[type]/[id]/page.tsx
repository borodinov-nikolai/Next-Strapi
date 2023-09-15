import { getDevice } from '@/services/serverApi'
import { Metadata } from 'next'
import { Image } from 'antd'
import styles from './Device.module.scss'
import ImageViewer from '@/components/DevicePage/imageViewer'

export const metadata: Metadata = {
  title: 'Страница девайса'
}

const Device = async ({params}:{params:{type: string, id: number}}) => {

    const data = await getDevice(params.id) 
   
    const device = data?.data?.attributes
    console.log(device?.description)
   
  return (
    <div className="container">
        <div  className={styles.root} >
          <ImageViewer className={styles.imageViewer} device = {device}/>
         
        <h2 className={styles.name} >{device.name}</h2>
        <div className={styles.description} >{device.description}</div>
        <div className={styles.price} > Цена: {device.price}р</div>
      </div>
      </div>
  )
}

export default Device