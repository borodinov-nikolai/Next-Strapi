'use client'
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';


const Carousels = () => {
  return (
    <>
<Container >
  <Carousel slide={false} >
        <Carousel.Item>
          <Image src='https://images.unsplash.com/photo-1602330041000-4b8119482edf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2060&q=80' width={1280} height={500} alt='img' />
          <Carousel.Caption>
            <h3 className='animate__animated animate__bounceInRight'>First slide label</h3>
            <p className='animate__animated animate__bounceInRight'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image src='https://images.unsplash.com/photo-1598512199776-e0747530204a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2059&q=80' width={1280} height={500} alt='img' />
  
          <Carousel.Caption>
            <h3  className='animate__animated animate__bounceInRight' >Second slide label</h3>
            <p className='animate__animated animate__bounceInRight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image src='https://images.unsplash.com/photo-1620466093449-207a11cf5b72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80' width={1280} height={500} alt='img' />
  
          <Carousel.Caption>
            <h3 className='animate__animated animate__bounceInRight'>Third slide label</h3>
            <p className='animate__animated animate__bounceInRight'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
</Container>
    </>
    
  )
}

export default Carousels