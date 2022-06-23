import React from 'react'
import GameItemsSection from '../../components/elements/GameItemsSection';
import Layout from '../../components/elements/Layout';

const GamePage: React.FC = () => {
  return (
    <Layout page="game">
        <>
            <h3>CryptoMatrixGame</h3>
            <GameItemsSection />
        </>
    </Layout>
  )
}

export default GamePage;