import CardItem from "./CartItem";

const Cart = ({ cartItems, onClickTrash  }) => {
    return <>
        <h2 className="mb-5 text-4xl font-bold  dark:text-white">Cart</h2>
        <ul className="space-y-5">
            {cartItems.map((cartItem)=>(
                <li key={cartItem.product.id}>
                    <CardItem item={cartItem} onClickTrash={onClickTrash}/>
                </li>
            ))}
        </ul>
    </>;
}
 
export default Cart;