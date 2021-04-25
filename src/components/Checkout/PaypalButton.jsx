import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/use-cart';

export default function PaypalButton({ total, getShipping, setShowModal }) {
  const { cartGroupedByItems, totalPrice, emptyCart } = useCart();
  const [error, setError] = useState(null);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'Matilda Eidelof shop',
                amount: {
                  currency_code: 'SEK',
                  value: total,
                  breakdown: {
                    item_total: {
                      currency_code: 'SEK',
                      value: totalPrice,
                    },
                    shipping: {
                      currency_code: 'SEK',
                      value: parseFloat(getShipping()),
                    },
                  },
                },
                items: cartGroupedByItems.map((product) => ({
                  unit_amount: {
                    currency_code: 'SEK',
                    value: '' + product.price * product.quantity,
                  },
                  quantity: '' + product.quantity,
                  name: product.title,
                })),
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setShowModal(true);
          emptyCart();
          console.log('ORDER', order);
        },
        onError: (err) => {
          setError(err);
          console.error('ERROR', err);
        },
      })
      .render('#paypal-container');
  }, [cartGroupedByItems]);

  if (error) {
    return (
      <div>
        <p> Error inprocessing the payment. Please try again</p>
      </div>
    );
  }

  return <div id='paypal-container'></div>;
}
