import Category from "./Components/Category";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div>
      <CartProvider>
        <Category />
      </CartProvider>
    </div>
  );
}

export default App;
