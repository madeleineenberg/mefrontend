import React from 'react';
import xss from 'xss';

export default function ImageSection({ props: { bottom_section } }) {
  const info = bottom_section.paragraph;
  return (
    <section className='a-image-section'>
      <div className='a-image-section_image1-wrapper'>
        {bottom_section.image1 ? (
          <img
            src={bottom_section.image1.url}
            alt={bottom_section.image1.alt}
          />
        ) : (
          ' '
        )}
      </div>
      <div
        className='a-image-section_paragraph'
        dangerouslySetInnerHTML={{ __html: xss(info) }}
      ></div>
      <div>
        <div className='a-image-section_illustration-wrapper'>
          {bottom_section.illustration ? (
            <img
              src={bottom_section.illustration.url}
              alt={bottom_section.illustration.alt}
            />
          ) : (
            ''
          )}
        </div>
      </div>
      <div className='a-image-section_image2-wrapper'>
        {bottom_section.image2 ? (
          <img
            src={bottom_section.image2.url}
            alt={bottom_section.image2.alt}
          />
        ) : (
          ''
        )}
      </div>
    </section>
  );
}
