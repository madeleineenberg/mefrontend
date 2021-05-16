import React from 'react';
import xss from 'xss';
import { useCart } from '../../contexts/use-cart';

export default function Product({ product }) {
  const { addItem, countItemsInCart, removeItem, stockValue } = useCart();
  //hämtar alla funktioner från context API, med usereducer hook

  const productValue = () => {
    const value = stockValue(product.stock, product.id);
    return value;
  };

  return (
    <li className='product'>
      <div
        className={
          productValue() > 0
            ? 'product-image-wrapper'
            : 'product-image-wrapper sold-out'
        }
      >
        <img src={product.image.url} alt={product.image.alt} />
      </div>
      <div className='product-content'>
        <h3>{product.title}</h3>
        <p className='price'>{product.price} SEK</p>
        {productValue() > 0 ? (
          <p className='stock instock'> In Stock </p>
        ) : (
          <p className='stock outofstock'>{productValue()}</p>
        )}
        <div
          className='product-content__description'
          dangerouslySetInnerHTML={{ __html: xss(product.description) }}
        ></div>
        <div className='product-buttons'>
          {countItemsInCart(product.id) > 0 ? (
            <button className='remove' onClick={() => removeItem(product.id)}>
              Remove
            </button>
          ) : (
            <div />
          )}
          {productValue() > 0 ? (
            <button className='add' onClick={() => addItem(product.id)}>
              Add to Cart({countItemsInCart(product.id)})
            </button>
          ) : (
            <button className='add disabled' disabled={true}>
              Items in Cart({countItemsInCart(product.id)})
            </button>
          )}
        </div>
      </div>
    </li>
  );
}
