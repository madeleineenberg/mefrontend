import React, { useState, useEffect } from 'react';
import WpKit from '../data/WpKit';

export default function Footer() {
  const [footerList, setFooterList] = useState(null);
  const wpKit = new WpKit();

  useEffect(() => {
    wpKit
      .getFooter(197)
      .then((res) => res.json())
      .then((data) => {
        setFooterList(data);
      }); // eslint-disable-next-line
  }, []);

  return (
    <footer>
      {footerList && (
        <div className='f-text-wrapper'>
          <h4>{footerList.title}</h4>
          <a href={`mailto:${footerList.email}`}>{footerList.email}</a>
          <p>{footerList.phone}</p>
          <div className='f-social-wrapper'>
            {footerList.icon_1 ? (
              <a href={footerList.icon_1.social_link.url}>
                <i className={`icon-${footerList.icon_1.icon_name}`} />
              </a>
            ) : (
              ''
            )}
            {footerList.icon_2 ? (
              <a href={footerList.icon_2.social_link.url}>
                <i className={`icon-${footerList.icon_2.icon_name}`} />
              </a>
            ) : (
              ''
            )}
            {footerList.icon_3 ? (
              <a href={footerList.icon_3.social_link.url}>
                <i className={`icon-${footerList.icon_3.icon_name}`} />
              </a>
            ) : (
              ''
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
