import React, { useEffect, Fragment } from 'react';
import Product from './Product';
import WpKit from '../../data/WpKit';
import { useCart } from '../../contexts/use-cart';

export default function ProductList() {
  const wpKit = new WpKit();
  const { seedProducts, products } = useCart();

  useEffect(() => {
    wpKit
      .getProducts()
      .then((res) => res.json())
      .then((data) => {
        seedProducts(data);
      }); // eslint-disable-next-line
  }, []);
  return (
    <ul className='product-list'>
      {products && (
        <Fragment>
          {products.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
        </Fragment>
      )}
    </ul>
  );
}
