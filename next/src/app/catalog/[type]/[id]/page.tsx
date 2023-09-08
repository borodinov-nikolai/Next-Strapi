import { getDevice } from '@/utils/serverApi'
import styles from './Device.module.scss'



const Device = async ({params}:{params:{type: string, id: number}}) => {

    const device = await getDevice(params.id) 

    console.log(device.data.attributes.name)
  return (
    <div className={styles.root} >{device.data.attributes.name}</div>
  )
}

export default Device