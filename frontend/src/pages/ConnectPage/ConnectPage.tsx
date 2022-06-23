import React from 'react'
import FloatingMenu from '../../components/elements/FloatingMenu'
import Footer from '../../components/elements/Footer'
import HomeBoard from '../../components/elements/HomeBoard'
import HomeInfo from '../../components/elements/HomeInfo'
import MultirowTable from '../../components/elements/MultirowTable'
import Shedule from '../../components/elements/Shedule'
import Table from '../../components/elements/Table'
import TelegramInvitation from '../../components/elements/TelegramInvitation'

const ConnectPage: React.FC = () => {
  return (
    <>
      <HomeBoard />
      <MultirowTable
        heading={['Start date', 'Start time', 'Level', 'Level to unfreeze']}
        tableRows={[
          {
            connecting: '15.04.2022',
            elements: [
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
            ],
          },
          {
            connecting: '15.04.2022',
            elements: [
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
            ],
          },
          {
            connecting: '15.04.2022',
            elements: [
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
            ],
          },
          {
            connecting: '15.04.2022',
            elements: [
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
            ],
          },
          {
            connecting: '15.04.2022',
            elements: [
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
            ],
          },
          {
            connecting: '15.04.2022',
            elements: [
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
            ],
          },
          {
            connecting: '15.04.2022',
            elements: [
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
            ],
          },
          {
            connecting: '15.04.2022',
            elements: [
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
              [
                <p className="_mint">Available</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
            ],
          },
          {
            connecting: '15.04.2022',
            elements: [
              [
                <p className="_white">1 Days</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
              [
                <p className="_white">1 Days</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
            ],
          },
          {
            connecting: '15.04.2022',
            elements: [
              [
                <p className="_white">1 Days</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
              [
                <p className="_white">1 Days</p>,
                <>
                  <span>1D</span>(0.075 BNB)
                </>,
                <>
                  <span>1</span>(0.05 BNB)
                </>,
              ],
            ],
          },
        ]}
      />
      <Shedule />
      <HomeInfo />
      <TelegramInvitation />
      <FloatingMenu />
      <Footer />
    </>
  )
}

export default ConnectPage
