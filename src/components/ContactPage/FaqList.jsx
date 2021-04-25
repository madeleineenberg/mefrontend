import React, { useState, useEffect, Fragment } from 'react';
import WpKit from '../../data/WpKit';
import FaqListItem from './FaqListItem';

export default function FaqList() {
  const [faqList, setFaqList] = useState(null);
  const wpKit = new WpKit();

  //Hämtar FAQ via API
  useEffect(() => {
    wpKit
      .getFaq()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFaqList(data);
      }); // eslint-disable-next-line
  }, []);

  return (
    <div className='c-faq-container'>
      {faqList &&
        faqList.map((faq, i) => {
          return (
            <Fragment>
              <FaqListItem
                heading={faq.heading}
                text={faq.info_text}
                id={faq.id}
              />
            </Fragment>
          );
        })}
    </div>
  );
}
