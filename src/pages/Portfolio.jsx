import React, { useState, useEffect, Fragment } from 'react';
import { GooSpinner } from 'react-spinners-kit';
import WpKit from '../data/WpKit';
import PortfolioTitle from '../components/PortfolioPage/PortfolioTitle';
import ImageGrid from '../components/PortfolioPage/ImageGrid';
import Modal from '../components/PortfolioPage/Modal';
import Footer from '../components/Footer';

export default function Portfolio() {
  const [imageList, setImageList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImg, setSelectedImg] = useState(null);
  const wpKit = new WpKit();

  useEffect(() => {
    wpKit
      .getPortfolio()
      .then((res) => res.json())
      .then((data) => {
        setImageList(data);
        setLoading(false);
      }); // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className='spinner-wrapper'>
        <GooSpinner size={65} color='#e8a938' loading={loading} />
      </div>
      {imageList && (
        <div className='portfoliopage'>
          <PortfolioTitle />

          <ImageGrid imageList={imageList} setSelectedImg={setSelectedImg} />

          {selectedImg && (
            <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
          <Footer />
        </div>
      )}
    </Fragment>
  );
}
