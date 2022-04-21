import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  if (isEmpty) return <h1 className='text-center'>Your cart is empty</h1>;

  return (
    <>
      <section className='container mx-0'>
        <div className='row'>
          <h5>
            Cart ({totalUniqueItems}) Total-Items: ({totalItems})
          </h5>
          <ul className='list-group list-group-flush'>
            {items.map((item) => (
              <li key={item.id} className='list-group-item'>
                <img
                  src={item.image}
                  style={{ height: "5rem", width: "6rem" }}
                  alt='...'
                />
                <h5>Ksh {item.price}</h5>
                <h6>Quantity ({item.quantity})</h6>
                <button
                  className='btn btn-info m-2'
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  className='btn btn-info m-2'
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className='btn btn-danger m-2'
                  onClick={() => removeItem(item.id)}
                >
                  Remove Item
                </button>
              </li>
            ))}
          </ul>
          <div className='col-auto ms-auto'>
            <h4>Total: {cartTotal}</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
