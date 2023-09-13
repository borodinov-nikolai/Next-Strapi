import { getDevice } from '@/utils/serverApi'
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
    <div className={styles.root} >
      <Image className={styles.image} width={400}  src={`http://localhost:1337${device.image.data.attributes.url}`} />
      <div>{device.name}</div>
      <div>{device.price}р</div>
      <div className={styles.description} >{device.description}</div>
      </div>
  )
}

export default Device