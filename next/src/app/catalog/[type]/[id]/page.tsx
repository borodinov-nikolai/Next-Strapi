import { getDevice } from '@/services/serverApi'
import { Metadata } from 'next'
import { Image } from 'antd'
import styles from './Device.module.scss'

export const metadata: Metadata = {
  title: 'Страница девайса'
}

const Device = async ({params}:{params:{type: string, id: number}}) => {

    const data = await getDevice(params.id) 
   
    const device = data.data.attributes
    console.log(device.description)
  return (
    <div className="container">
        <div  className={styles.root} >
        <div className={styles.image}>
          <Image height={400} src={`http://localhost:1337${device.image.data.attributes.url}`} />
        </div>
        <h2 className={styles.name} >{device.name}</h2>
        <div className={styles.description} >{device.description}</div>
        <div className={styles.price} > Цена: {device.price}р</div>
      </div>
      </div>
  )
}

export default Device