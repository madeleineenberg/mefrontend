import React, { Fragment } from 'react';

import xss from 'xss';
import AboutImage from './AboutImage';

export default function AboutInfo({ props: { about, top_image } }) {
  const bio = about.info;
  const desc = about.description;
  return (
    <Fragment>
      <div className='a-info-section'>
        <h1 className='a-info_title'>
          {about.title}
          <img
            src={about.title_illustration.url}
            alt={about.title_illustration.alt}
          />
        </h1>
        <AboutImage image={top_image} />
      </div>

      <div className='a-info_description-wrapper'>
        <div
          className='a-info_description-bio'
          dangerouslySetInnerHTML={{ __html: xss(bio) }}
        ></div>
        <div
          className='a-info_description-text'
          dangerouslySetInnerHTML={{ __html: xss(desc) }}
        ></div>
      </div>
    </Fragment>
  );
}
