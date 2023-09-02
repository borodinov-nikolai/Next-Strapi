'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { addCartItem } from '@/redux/slices/cartSlice'
import Image from 'next/image'



interface Props  {
    id: number,
    name: string,
    img: string,
    price: number
}




const ProductCard: React.FC<Props> = ({name, img, price}) => {
const dispatch = useAppDispatch()
const {cartItems} = useAppSelector((state)=> state.cart)

2

  return (
    <div className="card" style={{width: "18rem"}}>

      <Image src={img ? 'http://localhost:1337'+ img : 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80'} width={400} height={600} style={{height: "300px", width: "auto" , padding: '20px' }}  className="card-img-top" alt="..."/>

  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{price}</p>
    <button onClick={()=>{dispatch(addCartItem({name, price, img}));console.log(cartItems)}} className="btn btn-primary">В корзину</button>
  </div>
</div>
  )
}

export default ProductCard