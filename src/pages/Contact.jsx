import React, { useState, useEffect, Fragment } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { GooSpinner } from 'react-spinners-kit';
import WpKit from '../data/WpKit';

//components
import Illustration from '../components/ContactPage/Illustration';
import IntroText from '../components/ContactPage/IntroText';
import InfoTitle from '../components/ContactPage/InfoTitle';
import FaqList from '../components/ContactPage/FaqList';
import Footer from '../components/Footer';

export default function Contact() {
  const [wpContent, setWpContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const wpKit = new WpKit();

  useEffect(() => {
    wpKit
      .getPage(87)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.acf);
        setWpContent(data.acf);
        setLoading(false);
      }); // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (loading) return;
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('.contactpage'),
      smooth: true,
      repeat: true,
      lerp: 0.1,
      class: 'is-inview',
      reloadOnContextChange: true,
      offset: 0,
      direction: 'vertical',
      scrollbarClass: 'c-scrollbar',
      scrollingClass: 'has-scroll-scrolling',
      draggingClass: 'has-scroll-dragging',
      smoothClass: 'has-scroll-smooth',
      initClass: 'has-scroll-init',
      firefoxMultiplier: 50,
      touchMultiplier: 2,
    });
  }, [loading]);

  return (
    <Fragment>
      <div className='spinner-wrapper'>
        <GooSpinner size={65} color='#e8a938' loading={loading} />
      </div>
      {wpContent && (
        <section className='contactpage'>
          <div className='c-intro-container'>
            <Illustration props={wpContent} />
            <IntroText props={wpContent} />
          </div>
          <InfoTitle props={wpContent} />
          <FaqList />
          <Footer />
        </section>
      )}
    </Fragment>
  );
}
