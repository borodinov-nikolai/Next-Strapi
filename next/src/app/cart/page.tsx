'use client'
import { useAppSelector } from "@/redux/hooks"





const Cart = () => {
const {cartItems} = useAppSelector((state)=>state.cart)
console.log(cartItems)

  return (
    <div>Cart</div>
  )
}

export default Cart