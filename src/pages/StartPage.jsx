import React, { useState, useEffect, Fragment } from 'react';
import { GooSpinner } from 'react-spinners-kit';
import LocomotiveScroll from 'locomotive-scroll';

//components
import Hero from '../components/StartPage/Hero';
import Section from '../components/StartPage/Section';
import Gallery from '../components/StartPage/Gallery';

//Data
import WpKit from '../data/WpKit';
import Footer from '../components/Footer';

export default function StartPage() {
  const [wpContent, setWpContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const wpKit = new WpKit();

  //Hämtar data från WP REST API
  //Använder class för att skicka med specifikt id för sidan som ska hämtas
  useEffect(() => {
    wpKit
      .getPage(5)
      .then((res) => res.json())
      .then((data) => {
        setWpContent(data.acf);
        setLoading(false);
      }); // eslint-disable-next-line
  }, []);

  //initierar mjuk scrollning, och andra effekter efter att datan har laddat.
  // från biblioteket Locomotive Scroll.
  useEffect(() => {
    if (loading) return;
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector('.startpage'),
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
        <section className='startpage'>
          <Hero props={wpContent} />
          <Section props={wpContent} />
          <Gallery props={wpContent} />
          <Footer />
        </section>
      )}
    </Fragment>
  );
}
