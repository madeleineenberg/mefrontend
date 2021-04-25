import React from 'react';
import { motion } from 'framer-motion';

export default function AboutImage({ image }) {
  return (
    <div className='a_image-wrapper'>
      {image ? (
        <motion.img
          src={image.url}
          alt={image.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
      ) : (
        ' '
      )}
    </div>
  );
}
