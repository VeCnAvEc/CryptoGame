import React from 'react'
import line from '../../../assets/svg/line.svg'
import './TelegramInvitation.scss';
const TelegramInvitation: React.FC = () => {
  return (
    <div className="home_telegram">
      <div className="home_telegram_bg">
        <picture>
          <source srcSet=
          {line} type="image/webp" />
          <img src={line} />
        </picture>
      </div>
      <div className="bone">
        <div className="home_telegram_title">Join BNB Matrix Telegram</div>
        <div className="home_telegram_label">
          Communicate with other members and learn more about Express Game
        </div>
        <a href="/" className="btn btn-blue">
          Join Express Telegram
        </a>
      </div>
    </div>
  )
}

export default TelegramInvitation
