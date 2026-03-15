'use client';
import { useState, useEffect } from 'react';
import './navMenu.css';
import NavMenuItem from '../navMenuItem/NavMenuItem';
import CustomImage from '../../customImage/CustomImage';
import Link from 'next/link';
import NavMenuMobile from './navMenuMobile';

export default function NavMenu() {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleResize();
    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <NavMenuMobile scrolled={scrolled} />
      ) : (
        <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
          <Link href="/" className="logo">
            <CustomImage
              className="logo__img"
              src="/logo.svg"
              alt="Heavens Hair"
              width={103}
              height={103}
            />
          </Link>
          <ul className="header__nav__menu">
            <NavMenuItem className={'header__menu__item'} href="/">
              Início
            </NavMenuItem>
            <NavMenuItem className={'header__menu__item'} href="/#servicos">
              Serviços
            </NavMenuItem>
            <NavMenuItem className={'header__menu__item'} href="/cursos">
              Cursos
            </NavMenuItem>
            <NavMenuItem className={'header__menu__item'} href="#contact">
              Contactos
            </NavMenuItem>
          </ul>
          <Link href="/agendar" className="nav__cta btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z"/>
            </svg>
            Agende Aqui
          </Link>
        </nav>
      )}
    </>
  );
}
