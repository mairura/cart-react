import React, { useState } from "react";
import { useCart } from "react-use-cart";
import Categories from "./Categories";
import Cart from "./Cart";

const Category = () => {
  const { addItem } = useCart();

  const [data, setData] = useState(Categories);

  const filterResult = (catItem) => {
    const result = Categories.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  return (
    <>
      <h1 className='text-center text-info'>Let's Shop</h1>
      <div className='container-fluid mx-2'>
        <div className='row mt-5 mx-2'>
          <div className='col-md-3'>
            <button
              className='btn btn-warning w-100 my-2'
              onClick={() => setData(Categories)}
            >
              All products
            </button>
            <button
              className='btn btn-warning w-100 my-2'
              onClick={() => filterResult("Men")}
            >
              Men
            </button>
            <button
              className='btn btn-warning w-100 my-2'
              onClick={() => filterResult("Women")}
            >
              Women
            </button>
            <button
              className='btn btn-warning w-100 my-2'
              onClick={() => filterResult("Kids")}
            >
              Kids
            </button>
            <button
              className='btn btn-warning w-100 my-2'
              onClick={() => filterResult("Utensils")}
            >
              Utensils
            </button>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              {data.map((values) => {
                const { id, price, image, title } = values;
                return (
                  <>
                    <div className='col-md-4 my-2' key={id}>
                      <div className='card'>
                        <img src={image} className='card-img-top' alt='...' />
                        <div className='card-body'>
                          <h5 className='card-title'>{title}</h5>
                          <p>Price: Ksh {price}</p>
                          <p className='card-text'>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                          <button
                            className='btn btn-dark'
                            onClick={() => addItem(values)}
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className='col-md-3'>
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
