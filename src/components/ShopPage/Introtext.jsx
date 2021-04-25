import React, { Fragment } from 'react';
import xss from 'xss';

export default function Introtext({ props: { intro_text } }) {
  return (
    <Fragment>
      <div
        className='s-intro-text'
        dangerouslySetInnerHTML={{ __html: xss(intro_text) }}
      ></div>
    </Fragment>
  );
}
