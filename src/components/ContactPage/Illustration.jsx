import React from 'react';

export default function Illustration({ props: { illustration } }) {
  return (
    <div className='c-illustration-container' data-scroll-section>
      <div className='c-illustration-wrapper'>
        {illustration ? (
          <img
            src={illustration.url}
            alt={illustration.alt}
            data-scroll
            data-scroll-speed='2'
            data-scroll-position='top'
            data-scroll-delay='0.05'
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
