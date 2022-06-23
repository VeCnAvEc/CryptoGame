import React from 'react'
import { IGameItemComonProps } from '../GameItem'
import FieldFullfiedl from './FieldFullfiedl'
import ItemButton from './ItemButton'
import ItemLevel from './ItemLevel'
import PartnerBonus from './PartnerBonus'
import ProfitLevel from './ProfitLevel'
import ProgressBar from './ProgressBar'
import TopIcon from './TopIcon'
export interface IGameActiveOptions {
  progress: number
  fullfield: string | number
  bonus: string | number
  profit: string | number
}
interface IGameItemActiveContentProps
  extends IGameItemComonProps,
    IGameActiveOptions {}
const GameItemActiveContent: React.FC<IGameItemActiveContentProps> = ({
  level,
  progress,
  fullfield,
  bonus,
  profit,
}) => {
  
  return (
    <>
      <div className="item_elips">
        <TopIcon />
      </div>
      <ItemLevel level={level} price={8} />
      <div className="item_time icon icon-clock">0</div>
      <ProgressBar progress={progress} />
      <FieldFullfiedl value="40,640" />
      <div className="item_info">
        <PartnerBonus value={bonus} />
        <ProfitLevel value={profit} />
      </div>
    </>
  )
}

export default GameItemActiveContent
