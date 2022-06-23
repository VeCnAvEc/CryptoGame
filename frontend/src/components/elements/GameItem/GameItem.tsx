import classNames from 'classnames';
import { ethers } from 'ethers';
import React, { useEffect } from 'react'
import { useActions } from '../../../hook/useAction';
import GameItemActiveContent, { IGameActiveOptions } from './components/GameItemActiveContent';
import GameItemAvailableContent from './components/GameItemAvailableContent';
import GameItemFailedContnet from './components/GameItemFailedContent';
import LotteryWCA_metadata from '../../../abi/LotteryWCA_metadata.json'
import ItemButton, { priceLevel } from './components/ItemButton';
import './GameItem.scss';

export type ButtonType = 'activable' | 'activated' | 'failed';
export interface IGameItemComonProps {
    level: number;
    price: string | number;
    activeProps?: IGameActiveOptions;
}
export interface IGameItemProps extends IGameItemComonProps {
    type: ButtonType;
}

const getAccount = async () => {
  let [address] =  await window.ethereum.request({
      method: 'eth_requestAccounts'
  })

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
      
  const LotteryWCA = new ethers.Contract('0xa180Ab0F86A0ad3440B8D8c0D4a3a1fD7763BE43', LotteryWCA_metadata.abi, signer)
  let accountInfo: any = await LotteryWCA.getUserrounds(address);

  return {
    active: accountInfo[0],
    payouts: accountInfo[1],
    maxPayouts: accountInfo[2],
    activationTimes: accountInfo[3],
    rewardSum: accountInfo[4],
    referralPayoutSum: accountInfo[5]
  }
}

const getCardClassName = (type: ButtonType) => {
    if (type === 'activable') return '';
    if (type === 'activated') return '_active';
    if (type === 'failed') return '_red';
 }
const GameItem: React.FC<IGameItemProps> = ({type, level, price, activeProps}) => {
  const { availableLevels } = useActions()
  const { fetchWallet } = useActions()  

  const newPrive = priceLevel[level]
  
  useEffect(() => {
    (async () => availableLevels(await getAccount()))();
  }, []);

  useEffect(() => {
    fetchWallet()
  }, [])

  return (
    <div className={classNames("item", getCardClassName(type))}>
      {type === 'activated' && activeProps && <GameItemActiveContent level={level} price={newPrive} {...activeProps} />}
      {type === 'activable' && <GameItemAvailableContent level={level} price={newPrive} />}
      {type === 'failed' && <GameItemFailedContnet level={level} price={newPrive} />}
      <ItemButton state={type} level={level}/>
    </div>
  )
}

export default GameItem;