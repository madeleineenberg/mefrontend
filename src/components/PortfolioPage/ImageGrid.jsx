import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

export default function ImageGrid({ imageList, setSelectedImg }) {
  //denna komponent renderar ut en grid sektion i portfolion
  //man kan välja max 8 bilder, med fyra olika utseenden i admin
  //varje sektion har ett id, vilket gör att man kan välja om griden ska vara
  //highlight:ad på startsidan. Varje div är också en motion-div
  //vilket innebär att varje bild fade:ar in på sidan på olika tider

  return (
    <Fragment>
      {imageList &&
        imageList.map((image) => {
          return (
            <div
              className={image.class}
              key={image.id}
              id={image.grid.grid_title}
            >
              <motion.div
                className='grid-title'
                id={image.grid.grid_title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p>{image.grid.grid_title}</p>
              </motion.div>
              {image.grid.image_1 ? (
                <motion.div
                  className='image-wrapper'
                  onClick={() => setSelectedImg(image.grid.image_1.url)}
                  layout
                  whileHover={{ opacity: 1 }}
                >
                  <motion.img
                    src={image.grid.image_1.url}
                    alt={image.grid.image_1.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                </motion.div>
              ) : (
                ' '
              )}
              {image.grid.image_2 ? (
                <motion.div
                  className='image-wrapper'
                  onClick={() => setSelectedImg(image.grid.image_2.url)}
                  layout
                  whileHover={{ opacity: 1 }}
                >
                  <motion.img
                    src={image.grid.image_2.url}
                    alt={image.grid.image_2.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  />
                </motion.div>
              ) : (
                ' '
              )}
              {image.grid.image_3 ? (
                <motion.div
                  className='image-wrapper'
                  onClick={() => setSelectedImg(image.grid.image_3.url)}
                  layout
                  whileHover={{ opacity: 1 }}
                >
                  <motion.img
                    src={image.grid.image_3.url}
                    alt={image.grid.image_3.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  />
                </motion.div>
              ) : (
                ' '
              )}
              {image.grid.image_4 ? (
                <motion.div
                  className='image-wrapper'
                  onClick={() => setSelectedImg(image.grid.image_4.url)}
                  layout
                  whileHover={{ opacity: 1 }}
                >
                  <motion.img
                    src={image.grid.image_4.url}
                    alt={image.grid.image_4.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                </motion.div>
              ) : (
                ' '
              )}
              {image.grid.image_5 ? (
                <motion.div
                  className='image-wrapper'
                  onClick={() => setSelectedImg(image.grid.image_5.url)}
                  layout
                  whileHover={{ opacity: 1 }}
                >
                  <motion.img
                    src={image.grid.image_5.url}
                    alt={image.grid.image_5.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                </motion.div>
              ) : (
                ' '
              )}
              {image.grid.image_6 ? (
                <motion.div
                  className='image-wrapper'
                  onClick={() => setSelectedImg(image.grid.image_6.url)}
                  layout
                  whileHover={{ opacity: 1 }}
                >
                  <motion.img
                    src={image.grid.image_6.url}
                    alt={image.grid.image_6.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  />
                </motion.div>
              ) : (
                ' '
              )}
              {image.grid.image_7 ? (
                <motion.div
                  className='image-wrapper'
                  onClick={() => setSelectedImg(image.grid.image_7.url)}
                  layout
                  whileHover={{ opacity: 1 }}
                >
                  <motion.img
                    src={image.grid.image_7.url}
                    alt={image.grid.image_7.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  />
                </motion.div>
              ) : (
                ' '
              )}
              {image.grid.image_8 ? (
                <motion.div
                  className='image-wrapper'
                  onClick={() => setSelectedImg(image.grid.image_8.url)}
                  layout
                  whileHover={{ opacity: 1 }}
                >
                  <motion.img
                    src={image.grid.image_8.url}
                    alt={image.grid.image_8.alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  />
                </motion.div>
              ) : (
                ''
              )}
            </div>
          );
        })}
    </Fragment>
  );
}
