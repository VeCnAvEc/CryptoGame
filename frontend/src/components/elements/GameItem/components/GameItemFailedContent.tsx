import React from 'react'
import { IGameItemComonProps } from '../GameItem';
import ItemLevel from './ItemLevel'

const GameItemFailedContnet: React.FC<IGameItemComonProps> = ({level, price}) => {
  return (
    <>
      <ItemLevel level={level} price={price} />
      <div className="item_available">
        Доступен для <br />
        активации
      </div>
      <div className="item_missing">Пропущенный 4.176 BNB</div>
    </>
  )
}

export default GameItemFailedContnet;
