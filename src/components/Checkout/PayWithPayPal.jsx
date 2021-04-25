import React, { useState, useEffect, useRef } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

import { useCart } from '../../contexts/use-cart';

export default function PayWithPayPal() {
  const { cartGroupedByItems, totalPrice, emptyCart } = useCart();
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  const getPurchaseUnits = () => {
    const createOrder = {
      purchase_units: [
        {
          description: 'Matilda Eidelof Shop',
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
    };
    return createOrder;
  };

  console.log(getPurchaseUnits());

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

  return (
    <div>
      {cartGroupedByItems && (
        <PayPalButton
          createOrder={(data, actions) => {
            return actions.order.create(getPurchaseUnits());
          }}
          onApprove={(data, actions) => {
            // Capture the funds from the transaction
            return actions.order.capture().then(function (details) {
              // Show a success message to your buyer
              emptyCart();
              setPaidFor(true);
              alert(
                'Transaction completed by ' + details.payer.name.given_name
              );
            });
          }}
          onError={(err) => {
            setError(err);
            console.error('ERROR', err);
          }}
          options={{
            clientId:
              'AUAe2ZCJIONRHWBDvWsQvi_ta6yaJxif8dbsjIANk2Lg8Ml8iwg44Hb5808Jp95bVjUEAPtewggqIRXQ',
            currency: 'SEK',
          }}
        />
      )}
    </div>
  );
}
