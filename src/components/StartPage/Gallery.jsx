import React from 'react';
import { HashLink } from 'react-router-hash-link';

//Renderar ut SECTION GALLERY på STARTSIDAN

export default function Gallery({ props: { gallery, gallery_title } }) {
  return (
    <section className='startpage-gallery'>
      <div className='gallery-grid'>
        <span>{gallery_title}</span>
        <div className='gallery-grid_img-wrapper image1-wrapper'>
          {gallery.image1 ? (
            <img src={gallery.image1.url} alt={gallery.image1.alt} />
          ) : (
            ''
          )}
          <HashLink smooth to={`/portfolio#${gallery.image1_button_text}`}>
            <button>{gallery.image1_button_text}</button>
          </HashLink>
        </div>
        <div className='gallery-grid_img-wrapper image2-wrapper'>
          {gallery.image2 ? (
            <img src={gallery.image2.url} alt={gallery.image2.alt} />
          ) : (
            ''
          )}
        </div>
        <div className='gallery-grid_img-wrapper image3-wrapper'>
          {gallery.image3 ? (
            <img src={gallery.image3.url} alt={gallery.image3.alt} />
          ) : (
            ''
          )}
        </div>
        <div className='gallery-grid_img-wrapper illustration-wrapper'>
          {gallery.gallery_illustration ? (
            <img
              src={gallery.gallery_illustration.url}
              alt={gallery.gallery_illustration.alt}
            />
          ) : (
            ''
          )}
        </div>
        <div className='gallery-grid_img-wrapper image4-wrapper'>
          {gallery.image_4 ? (
            <img src={gallery.image_4.url} alt={gallery.image_4.alt} />
          ) : (
            ''
          )}

          <HashLink smooth to={`/portfolio#${gallery.image4_button_text}`}>
            <button>{gallery.image4_button_text}</button>
          </HashLink>
        </div>
      </div>
    </section>
  );
}
