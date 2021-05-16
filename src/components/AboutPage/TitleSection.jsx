import React from 'react';

//Använder data-scroll för att få scrolling-effekter på titel.

export default function TitleSection() {
  return (
    <section className='title-section is-inview' data-scroll-section>
      <span class='a-header_title_line'>
        <span
          className='a-h1'
          data-scroll
          data-scroll-speed='3'
          data-scroll-position='top'
          data-scroll-delay='0.05'
        >
          A
        </span>
        <span
          className='a-h1'
          data-scroll
          data-scroll-speed='5'
          data-scroll-position='top'
          data-scroll-delay='0.05'
        >
          B
        </span>
        <span
          className='a-h1'
          data-scroll
          data-scroll-speed='2'
          data-scroll-position='top'
          data-scroll-delay='0.05'
        >
          O
        </span>
        <span
          className='a-h1'
          data-scroll
          data-scroll-speed='4'
          data-scroll-position='top'
          data-scroll-delay='0.05'
        >
          U
        </span>
        <span
          className='a-h1'
          data-scroll
          data-scroll-speed='3'
          data-scroll-position='top'
          data-scroll-delay='0.05'
        >
          T
        </span>
        <span
          className='a-h1'
          data-scroll
          data-scroll-speed='5'
          data-scroll-position='top'
          data-scroll-delay='0.05'
        >
          .
        </span>
      </span>
    </section>
  );
}
