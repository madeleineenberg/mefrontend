import React, { Fragment, useState, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Logo from '../assets/logo.png';
import useOnClickOutside from 'use-onclickoutside';
import { useCart } from '../contexts/use-cart';
import Cart from './ShopPage/Cart';

export default function Navigation(page) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  //Funktion för att kunna klicka bort varukorgen utanför
  useOnClickOutside(modalRef, () => {
    if (isOpen === true) setIsOpen(false);
  });

  const { cart } = useCart();

  //Skapar en anpassad menulänk med gul prick under
  const MenuLink = ({ page }) => {
    const title = page.toUpperCase();

    return (
      <NavLink
        to={`${page}`}
        className='navlink-title'
        activeClassName='navlink-dot-active'
      >
        {title}
        <div className='navlink-dot'>·</div>
      </NavLink>
    );
  };

  return (
    <Fragment>
      <nav className='navigation'>
        <div className='naviagation-logo'>
          <div className='navigation-logo_wrapper'>
            <Link to='/'>
              <img src={Logo} alt='logo' />
            </Link>
          </div>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-menu-item' onClick={closeMenu}>
            <Link to='/' className='navlink-title'>
              HOME
            </Link>
          </li>
          <li className='nav-menu-item' onClick={closeMenu}>
            <MenuLink page='portfolio' />
          </li>
          <li className='nav-menu-item' onClick={closeMenu}>
            <MenuLink page='about' />
          </li>
          <li className='nav-menu-item' onClick={closeMenu}>
            <MenuLink page='contact' />
          </li>
          <li className='nav-menu-item' onClick={closeMenu}>
            <MenuLink page='shop' />
          </li>
        </ul>
        {cart.length !== 0 ? (
          <div className='cart-button-wrapper'>
            <button className='cart-button' onClick={() => setIsOpen(true)}>
              <i className='icon-shopping-bag' />({cart.length})
            </button>
          </div>
        ) : (
          <div />
        )}

        {/* mobilmenyn */}

        <div className='mobile-menu' onClick={handleClick}>
          {click ? (
            <button className='m-dots on'>
              <span></span>
            </button>
          ) : (
            <button className='m-dots'>
              <span></span>
            </button>
          )}
        </div>

        {/* varukorgen */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          ref={modalRef}
          className='cart-modal'
          style={{ display: isOpen ? 'block' : 'none' }}
        >
          <Cart setIsOpen={setIsOpen} />
        </motion.div>
      </nav>
    </Fragment>
  );
}
