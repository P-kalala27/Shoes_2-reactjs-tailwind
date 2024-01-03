/* eslint-disable react/prop-types */
import CartItem from "./CartItem"


const Cart = ({cartItems}) => {
  return (
    <div>
        <h2 className="text-4xl font-bold mb-5">Cart</h2>
        <ul className="space-y-5">
            {
                cartItems.map((cartItem)=> <li key={cartItem.product.id}>
                    <CartItem items={cartItem} />
                 </li>)
            }
        </ul>
    </div>
  )
}

export default Cart