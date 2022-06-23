import React from 'react'
import './BotsPage.scss'
import Layout from '../../components/elements/Layout'
const BotItem: React.FC<{ link: string; title: string; description: string }> =
  function ({ link, title, description }) {
    return (
      <a className="page_bot flex__align" href={link} target="_blank">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="var(--bg)" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.0492 9.57045L8.41966 14.976C8.32451 15.0134 8.24336 15.0795 8.18748 15.1651C8.1316 15.2507 8.10375 15.3516 8.10781 15.4537C8.11187 15.5559 8.14763 15.6542 8.21013 15.7351C8.27263 15.8161 8.35877 15.8755 8.45658 15.9052L11.8904 16.9686L13.2849 21.28C13.3103 21.3588 13.3552 21.4299 13.4154 21.4867C13.4757 21.5435 13.5492 21.5842 13.6293 21.6051C13.7095 21.626 13.7935 21.6263 13.8738 21.606C13.9541 21.5858 14.028 21.5456 14.0886 21.4892L16.107 19.6148L19.9347 22.4332C20.0003 22.4816 20.0769 22.513 20.1577 22.5245C20.2384 22.5359 20.3207 22.5272 20.3972 22.499C20.4737 22.4708 20.542 22.4241 20.596 22.363C20.65 22.3019 20.6879 22.2283 20.7064 22.1489L23.3723 10.7101C23.4134 10.5349 23.4057 10.3517 23.35 10.1805C23.2943 10.0093 23.1927 9.8566 23.0563 9.7391C22.9199 9.6216 22.7539 9.54374 22.5763 9.51401C22.3988 9.48428 22.2164 9.5038 22.0492 9.57045ZM14.0701 17.8658L13.6443 20.416L12.6597 16.8455L22.2794 10.5686L14.0701 17.8658Z"
            fill="var(--color)"
          />
        </svg>
        <div>
          <p>{title}</p>
          <span>{description}</span>
        </div>
      </a>
    )
  }
const BotsPage: React.FC = () => {
  return (
    <Layout page="bots">
      <div className="page_bots">
        <BotItem
          link="/"
          title="Matrix Game Notifier Bot"
          description="Уведомления о новых партнерах и транзакциях"
        />
        <BotItem
          link="/"
          title="Support Bot"
          description="Помощь в сложных ситуациях"
        />
      </div>
    </Layout>
  )
}

export default BotsPage
