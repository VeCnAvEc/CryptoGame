import React from 'react'
import './FloatingMenu.scss';
const FloatingMenu: React.FC = () => {
  return (
    <div className="buttons">
    <div className="btn btn-blue"><span className="icon icon-news">News</span></div>
    <div className="btn btn-blue"><span className="icon icon-lang">Language</span></div>
    <div className="btn btn-yellow"><span className="icon icon-chat">Chat</span></div>
    </div>
  )
}

export default FloatingMenu;