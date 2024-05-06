import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button.jsx";
import CartContext from "./store/CartContext.jsx";
import UserProgressContext from "./store/UserProgressContext.jsx";
export default function Header() {
  const cartCtx = useContext(CartContext);
  useContext(UserProgressContext);
  console.log(cartCtx);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Monu logo side business" />
        <h1>Monu's momo corner</h1>
      </div>
      <nav>
        <Button textOnly>Cart({totalCartItems})</Button>
      </nav>
    </header>
  );
}
