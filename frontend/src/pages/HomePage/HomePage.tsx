import FloatingMenu from '../../components/elements/FloatingMenu';
import Footer from '../../components/elements/Footer';
import HomeBoard from '../../components/elements/HomeBoard'
import HomeInfo from '../../components/elements/HomeInfo';
import Shedule from '../../components/elements/Shedule';
import TelegramInvitation from '../../components/elements/TelegramInvitation';
import './HomePage.scss';
const HomePage: React.FC = () => {
  return (
    <>
      <HomeBoard />
      <Shedule />
      <HomeInfo />
      <TelegramInvitation />
      <FloatingMenu />
      <Footer />
    </>
  )
}

export default HomePage;
