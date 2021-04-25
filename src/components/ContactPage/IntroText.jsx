import React from 'react';
import xss from 'xss';
import { motion } from 'framer-motion';

export default function IntroText({ props: { intro_text, email } }) {
  const content = intro_text;
  const mail = `mailto:${email}`;
  return (
    <motion.div
      className='c-intro_text-wrapper'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div
        className='c-intro_text'
        dangerouslySetInnerHTML={{ __html: xss(content) }}
      ></div>

      <a href={mail}>{email}</a>
    </motion.div>
  );
}
