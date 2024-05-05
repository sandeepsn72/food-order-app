import Header from "./components/Header";
import Meals from "./components/Meals";
import { CartContextProvider } from "./components/store/CartContext";
import { UserProgressContextProvider } from "./components/store/UserProgressContext.jsx";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />;
        <Meals />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
