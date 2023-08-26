import Image from "next/image"
import styles from'./Carousel.module.scss'

const Carousel = () => {
  return (
    <>
<div id="carouselExampleAutoplaying"  className={styles.root + " carousel slide"} data-bs-ride="carousel">

<div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>

    <div className="carousel-inner" style={{"width": "100%",  'height': "580px " }}>
      <div className={styles.img + " carousel-item active "} >
        <Image src="https://images.unsplash.com/photo-1691512935129-5ab21146a1bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=100" fill quality={80} className="d-block w-100" alt="..."/>
      </div>
        <div className={styles.img + " carousel-item"}>
      <Image src="https://images.unsplash.com/photo-1589271755419-b813a577ad42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2409&q=100" fill  quality={80} className="d-block w-100" alt="..."/>
      </div>
      <div className={styles.img + " carousel-item"} >
      <Image src="https://images.unsplash.com/photo-1598493139154-003650639153?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2382&q=100" fill quality={80} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Предыдущий</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Следующий</span>
    </button>
  </div>
    </>
    
  )
}

export default Carousel