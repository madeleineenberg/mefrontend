import React from 'react';
import { motion } from 'framer-motion';

export default function Modal({ setShowModal }) {
  const handleOnClick = (e) => {
    if (e.target.classList.contains('back')) {
      setShowModal(false);
    }
  };
  return (
    <motion.div
      className='back'
      onClick={handleOnClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className='message'>
        <p> Thanks for making the purchase! </p>
        <i className='icon-angellist' />
        <button onClick={() => setShowModal(false)}>
          <i className='icon-cancel' />
        </button>
      </div>
    </motion.div>
  );
}
