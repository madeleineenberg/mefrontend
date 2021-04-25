import React from 'react';

export default function InfoTitle({ props: { heading } }) {
  return (
    <div className='c-heading-wrapper'>
      <h2 className='c-heading'>{heading}</h2>
      <hr />
    </div>
  );
}
