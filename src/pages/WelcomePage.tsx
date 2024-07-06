import React from 'react';
//import { Icon } from './../ui';
//
import { Icon } from '@ui';

const WelcomePage = () => {
  console.log(Icon)
  return (
    <div className='h-full flex justify-center items-center'>
      <Icon name='react-logo' />
      <div className='text-accent'>WelcomePage</div>
      </div>
  )
}

export default WelcomePage