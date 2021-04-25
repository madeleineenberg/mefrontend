import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/use-cart';
import PayPalButton from '../components/Checkout/PaypalButton';
import SuccessModal from '../components/Checkout/SuccessModal';

export default function Checkout() {
  const { cartGroupedByItems, totalPrice } = useCart();
  const [total, setTotal] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const getShipping = () => {
    if (totalPrice >= 1000) {
      return '0';
    }
    if (totalPrice < 1000) {
      return '69';
    }
  };

  const getTotalPrice = () => {
    const value = totalPrice + parseFloat(getShipping());
    return setTotal(value);
  };

  useEffect(() => {
    getTotalPrice();
  }, [cartGroupedByItems]);

  return (
    <section className='checkout-page'>
      <h1>Checkout</h1>
      <p className='checkout-text'>Free shipping on orders over 1000 SEK</p>
      {cartGroupedByItems.length !== 0 ? (
        <div>
          {cartGroupedByItems.map((product, index) => {
            return (
              <div className='checkout-item' key={index}>
                <div className='checkout-item__image-wrapper'>
                  <img src={product.image.url} alt={product.image.alt} />
                </div>
                <div className='checkout-item__quantity'>
                  <p>
                    {product.quantity} X {product.price}
                  </p>
                </div>
                <div className='checkout-item__title'>
                  <p>{product.title}</p>
                </div>
              </div>
            );
          })}
          <div className='checkout-total'>
            <div>
              <span>Subtotal:</span>
              <span> {totalPrice} SEK</span>
            </div>
            <div>
              <span>Shipping:</span>
              <span> FREE/69 SEK </span>
            </div>
            <hr />
            <div>
              <span>Shipping:</span>
              <span> {getShipping()} SEK </span>
            </div>
            <div>
              <span>Totalprice:</span>
              <span> {total && total} SEK</span>
            </div>
          </div>
          {total && (
            <PayPalButton
              total={total}
              getShipping={getShipping}
              setShowModal={setShowModal}
            />
          )}
        </div>
      ) : (
        <div>Your cart is empty</div>
      )}
      <Link className='close-btn' to='/shop'>
        Close
      </Link>
      {showModal && <SuccessModal setShowModal={setShowModal} />}
    </section>
  );
}
