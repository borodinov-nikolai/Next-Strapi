import React from 'react'
import styles from './catalog.module.scss'
import Image, { StaticImageData } from 'next/image'
import smartphone from '../../public/icons/smartphone.png'
import pad from '../../public/icons/pad.png'
import laptop from '../../public/icons/laptop.png'
import tv from '../../public/icons/tv.png'
import gamepad from '../../public/icons/gamepad.png'
import all from '../../public/icons/all.png'
import Link from 'next/link'




type Items =
  {title: string,
  img: StaticImageData,

  href: string
}[]


const items: Items = [{ title: 'Смартфоны', img: smartphone, href: '/catalog/smartphones'}, { title: 'Планшеты', img: pad, href: '/catalog/pads' }, 
{ title: 'Ноутбуки', img: laptop, href: '/catalog/smartphones' }, { title: 'Телевизоры', img: tv, href: '/catalog/smartphones' },
 { title: 'Игровые консоли', img: gamepad, href: '/catalog/smartphones' }, { title:'Все', img: all, href: '/catalog/smartphones'}]



const Catalog = () => {
  return (
    <div className={styles.root} >
      <div className='container'>
        <div className={styles.menu} >
    {
      items.map(({title, img, href})=> {
        return (
          <Link className={styles.item} key={title} href={href}>
          
            <div className={styles.item_title}>
              {title}
            </div>
            <div>
              <Image src={img} className={styles.item_image} width={400} height={400} alt='smartphone'></Image>
              <svg  ></svg>
            </div>
                
          </Link>
        )
      })
    }
         
        </div>
      </div>
    </div>
  )
}

export default Catalog