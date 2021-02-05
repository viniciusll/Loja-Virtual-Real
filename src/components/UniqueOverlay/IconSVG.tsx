import React from 'react'

import SamsungLogo from './Samsung-Logo.png';

export const LogoSVG: React.FC = ({ ...props }) => {
  return (
      <img src={SamsungLogo} {...props }/>
  )
}

export const BurgerSVG: React.FC = ({ ...props }) => {
  return (
    <svg viewBox="0 0 45 30" fill="none" {...props}>
      <path fill="#393c41" d="M0 0h45v5H0zM0 25h45v5H0zM0 13h45v5H0z" />
    </svg>
  )
}