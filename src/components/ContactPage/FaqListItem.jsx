import React, { useState, Fragment } from 'react';
import SlideToggleContent from './SlideToggleContent';
import xss from 'xss';

export default function FaqListItem({ heading, text }) {
  const [isVisible, setIsVisible] = useState(false);
  const content = text;

  //renderar ut varje FAQ, med title och text
  return (
    <Fragment>
      {heading && (
        <Fragment>
          <div
            onClick={() => setIsVisible(!isVisible)}
            className={
              isVisible
                ? 'c-faq_heading-wrapper visible'
                : 'c-faq_heading-wrapper'
            }
          >
            <h3 className='c-faq_heading'>{heading}</h3>
            <span onClick={() => setIsVisible(!isVisible)}>
              {isVisible ? (
                <i className='icon-up-dir' />
              ) : (
                <i className='icon-down-dir' />
              )}
            </span>
          </div>
          <SlideToggleContent isVisible={isVisible}>
            <div
              className='c-faq-text'
              dangerouslySetInnerHTML={{ __html: xss(content) }}
            ></div>
          </SlideToggleContent>
          <hr />
        </Fragment>
      )}
    </Fragment>
  );
}
