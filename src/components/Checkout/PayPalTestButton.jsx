import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/use-cart';
export default function PaypalButton() {
  const { cartGroupedByItems, totalPrice, emptyCart } = useCart();
  const [paidFor, setPaidFor] = useState(false);
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
                  value: totalPrice,
                  breakdown: {
                    item_total: {
                      currency_code: 'SEK',
                      value: totalPrice,
                    },
                  },
                },
                items: [
                  {
                    unit_amount: {
                      currency_code: 'SEK',
                      value: '300',
                    },
                    quantity: '1',
                    name: 'Seed Vase',
                  },
                  {
                    unit_amount: {
                      currency_code: 'SEK',
                      value: '250',
                    },
                    quantity: '1',
                    name: 'Belly Mug',
                  },
                ],
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
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

  if (paidFor) {
    return (
      <div>
        <p> Thanks for making the purchase! </p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p> Error inprocessing the payment. Please try again</p>
      </div>
    );
  }

  return <div id='paypal-container'></div>;
}
