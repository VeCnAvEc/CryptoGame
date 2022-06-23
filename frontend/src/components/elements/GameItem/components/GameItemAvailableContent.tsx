import React from 'react'
import { IGameItemComonProps } from '../GameItem';
import ItemLevel from './ItemLevel';

const GameItemAvailableContent: React.FC<IGameItemComonProps> = ({level, price}) => {
  return (
    <>
      <ItemLevel level={level} price={price} />
      <div className="item_available">
        Доступен для <br />
        активации
      </div>
    </>
  )
}

export default GameItemAvailableContent;
