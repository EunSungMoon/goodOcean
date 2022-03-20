import React from 'react';
import logo from '../Styles/images/logo.png'

export default function Header() {
  return (
    <header id='header' className='container-fluid'>
      <div className='container'>
        <img src={logo} alt='조은바다 로고' />
      </div>
    </header>
  )
}