// components/ContactForm.js
import React from 'react';
import "./contatoForm.css"
import Link from 'next/link';
import CustomImage from '../customImage/CustomImage';
export default function ContactForm(){
  return (
    <div id='contact' className="contact">
      <h2 className="contact__title">Entre em contato conosco!</h2>
      <p className="contact__description">
      Entre em contato conosco diretamente pelas redes sociais
      </p>
      
      <div className="contact__social">
        <Link target='_blank' href="https://www.instagram.com/cbheavenshair/"><CustomImage src="/icon/instagram.png"/></Link>
        <Link target='_blank' href="https://www.instagram.com/cbheavenshair/"><CustomImage src="/icon/facebook.png"/></Link>
        <Link target='_blank' href="mailto:cbeheavenshair@gmail.com"><CustomImage src="/icon/email.png"/></Link>
      </div>
    </div>
  );
};
