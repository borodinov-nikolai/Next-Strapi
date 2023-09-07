import styles from './Home.module.scss'
import CarouselAnt from '@/components/mainPage/carousel';
import Client from '@/components/client';





export default function Home() {
  return (
  
    <main className={styles.root}>
      
        <Client/>
          <CarouselAnt/>
   
    </main>
  
  )
}
