import React, { Fragment } from 'react';

import xss from 'xss';

export default function AboutInfo({ props: { work } }) {
  const desc1 = work.desc_part_1;
  const desc2 = work.desc_part_2;
  return (
    <Fragment>
      <div className='w-info-section'>
        <div className='w-info_description-wrapper'>
          <div
            className='w-info_description-part1'
            dangerouslySetInnerHTML={{ __html: xss(desc1) }}
          ></div>
          <div
            className='w-info_description-part2'
            dangerouslySetInnerHTML={{ __html: xss(desc2) }}
          ></div>
        </div>

        <h1 className='w-info_title'>
          {work.title}
          <img
            src={work.title_illustration.url}
            alt={work.title_illustration.alt}
          />
        </h1>
      </div>
    </Fragment>
  );
}
