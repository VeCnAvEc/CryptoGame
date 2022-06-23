import React from 'react'
import './Start.scss';
import TopIcon from '../../GameItem/components/TopIcon'

const Start: React.FC = () => {
  return (
    <div className="home_info_start">
      <div className="home_info_start_img">
        <TopIcon />
      </div>
      <div className="home_info_start_title">How to start earning with us?</div>
      <ul>
        <li>Create a MetaMask wallet.</li>
        <li>Connect the extension to the browser you are using.</li>
        <li>
          Log in using the <span>"Fast Registration"</span> button and connect
          your wallet
        </li>
        <li>Top up your wallet from a third-party resource</li>
        <li>
          Complete the purchase of the table and earn with the help of the
          Matrix
        </li>
      </ul>
      <p>
        If you have any questions, you can always contact our technical support
        in{' '}
        <a className="hover__line_active" href="/">
          Telegram
        </a>
      </p>
    </div>
  )
}

export default Start
