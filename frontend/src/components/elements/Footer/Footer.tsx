import React from 'react'
import Socials from '../Socials'
import './Footer.scss'
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="bone">
        <div className="footer_net flex__center">
          <div className="footer_left flex__align">
            <div className="footer_cop">
              © 2022 Bnb Matrix. All Rights Reserved
            </div>
            <a className="footer_disclaimer hover__line" href="#">
              Disclaimer
            </a>
          </div>
          <Socials />
        </div>
      </div>
    </div>
  )
}

export default Footer
