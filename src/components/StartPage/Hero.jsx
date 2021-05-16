import React from 'react';
import { motion } from 'framer-motion';

//Renderar ut HERO på STARTSIDAN

export default function Hero({
  props: { hero_image, hero_illustration, image_text, side_text, hero_title },
}) {
  return (
    <header>
      <div className='wrapper'>
        <h1 className='startpage-title'>{hero_title}</h1>
      </div>
      <motion.p
        className='hero-side-text has-scroll-dragging'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        {side_text}
      </motion.p>

      <div className='hero-image_wrapper' data-scroll-section>
        {hero_image ? (
          <motion.img
            src={hero_image.url}
            alt={hero_image.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        ) : (
          ' '
        )}
        <p
          data-scroll
          data-scroll-delay='0.05'
          data-scroll-speed='0.09'
          data-scroll-position='top'
        >
          {image_text}
        </p>
      </div>

      <div className='hero-illustration-wrapper' data-scroll-section>
        <img
          src={hero_illustration.url}
          alt={hero_illustration.alt}
          data-scroll
          data-scroll-delay='0.05'
          data-scroll-speed='3'
        />
      </div>
    </header>
  );
}
