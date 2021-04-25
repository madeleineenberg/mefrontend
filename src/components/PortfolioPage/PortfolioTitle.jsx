import React from 'react';
import { motion } from 'framer-motion';

export default function PortfolioTitle() {
  return (
    <motion.div
      className='p-title-wrapper'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <h2 className='p-title'>Portfolio.</h2>
    </motion.div>
  );
}
