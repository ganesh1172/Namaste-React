import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import EmptyCart from "../Images/empty-cart.jpg";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-4xl font-bold text-center">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartItems?.length === 0 ? (
          <div>
            <img className="w-fit mx-auto" src={EmptyCart} alt="Emtpy Cart" />
            <h1 className="text-red-500 text-center text-2xl font-semibold">
              {" "}
              Cart is empty. Add Items to the cart!
            </h1>
          </div>
        ) : (
          <div>
            <button
              className="px-2 py-1 m-2 bg-black text-white text-base font-semibold  rounded-2xl hover:bg-red-200 hover:text-blue-800"
              onClick={handleClearCart}
            >
              Clear Cart 🗑️
            </button>
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
