import React from 'react'
import './About.scss';
const About: React.FC = () => {
  return (
    <div className="home_info_about">
      <h3>About Crypto Matrix Game</h3>
      <p>
        First ever smart contract game with passive yields in BNB directly to
        your own wallet.
        <br />
        All players are placed randomly in 16 levels with unlimited cycles.
        <br />
        Rewards are distributed as follows:
        <br />- 74% of level value for each of your level cycle
        <br />- 13%-8%-5% of level value from partners down to 3 in depth when
        they activate levels
      </p>
      <div className="home_info_about_iframe">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OJWeODzH0_w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default About
