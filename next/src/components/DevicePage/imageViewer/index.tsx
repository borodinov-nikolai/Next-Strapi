'use client'
import { Image } from 'antd'
import styles from './ImageViewer.module.scss'
import React from 'react'


const ImageViewer: React.FC<any> = ({device}) => {
   const [viewedImage, setViewedImage] = React.useState<number>(0);

   
console.log()
  return (
   <div className={styles.root} >
     <div className={styles.imagePreview} >{device.image.data.map((image:{id: number,attributes: {url:string},}, i:number)=> {
            return <img className={i === viewedImage? styles.selectedPreviewImage: styles.previewImage} key={image.id} onClick={()=>setViewedImage(i) }  width={100} src={`http://localhost:1337${image.attributes.url}`} alt="" />
          })}</div>
        <div className={styles.image}>
          <Image height={400} src={`http://localhost:1337${device.image.data[viewedImage].attributes.url}`} />
        </div>
   </div>
  )
}

export default ImageViewer