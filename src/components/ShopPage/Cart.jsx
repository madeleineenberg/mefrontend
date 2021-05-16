import React from 'react';
import { useCart } from '../../contexts/use-cart';
import { Link } from 'react-router-dom';

export default function Cart({ setIsOpen }) {
  //hämtar alla funktioner från context API, med usereducer hook
  const {
    addItem,
    removeItem,
    cartGroupedByItems,
    countItemsInCart,
    totalPrice,
    emptyCart,
  } = useCart();

  return (
    <div className='cart'>
      {cartGroupedByItems.length > 0 ? (
        cartGroupedByItems.map((product, index) => {
          return (
            <div className='cart-item' key={index}>
              <div className='cart-item__image-wrapper'>
                <img src={product.image.url} alt={product.image.alt} />
              </div>
              <div className='cart-item__content'>
                <h3>{product.title}</h3>
                <p>{product.price} SEK</p>
                {countItemsInCart(product.id) < product.stock ? (
                  ' '
                ) : (
                  <p className='outofstock'> out of stock</p>
                )}
                <div className='cart-item__buttons'>
                  <button onClick={() => removeItem(product.id)}>-</button>
                  <button>{countItemsInCart(product.id)}</button>
                  {countItemsInCart(product.id) < product.stock ? (
                    <button onClick={() => addItem(product.id)}>+</button>
                  ) : (
                    <button disabled={true}> </button>
                  )}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p> Your Cart is Empty </p>
      )}
      <button className='empty-cart' onClick={() => emptyCart()}>
        empty cart
      </button>
      <div className='cart-checkout-container'>
        <Link to='/checkout' onClick={() => setIsOpen(false)}>
          Checkout <i className='icon-cc-paypal' />
        </Link>
        <span className='total'>{totalPrice} SEK</span>
      </div>
    </div>
  );
}
