import { getDevice } from '@/utils/serverApi'
import styles from './Device.module.scss'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Страница девайса'
}

const Device = async ({params}:{params:{type: string, id: number}}) => {

    const device = await getDevice(params.id) 

  return (
    <div className={styles.root} >{device.data.attributes.name}</div>
  )
}

export default Device