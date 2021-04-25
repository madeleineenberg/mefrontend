import React from 'react';
import { motion } from 'framer-motion';

export default function Modal({ selectedImg, setSelectedImg }) {
  const handleOnClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className='backdrop'
      onClick={handleOnClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img src={selectedImg} alt='large pic' />
    </motion.div>
  );
}
