import classNames from 'classnames'
import { ethers } from 'ethers'
import React, { useState } from 'react'
import { ButtonType } from '../GameItem'
import LotteryWCA_metadata from '../../../../abi/LotteryWCA_metadata.json'
import { useTypeSelector } from '../../../../hook/useTypedSelector'

interface IItemButtonProps extends React.HTMLProps<HTMLButtonElement> {
  state: ButtonType,
  level: number
}

// const priceLevel = {
//   0: '0' ,    
//   1: '0.05' ,
//   2: '0.08', 
//   3: '0.13',  
//   4: '0.22', 
//   5: '0.33',  
//   6: '0.5', 
//   7: '0.7',  
//   8: '1.05',
//   9: '1.45', 
//   10: '1.95', 
//   11: '2.4', 
//   12: '3.5', 
//   13: '5.2', 
//   14: '7.3', 
//   15: '10'
// }

export const priceLevel = [
  '0', '0.05', '0.08', '0.13', '0.22', '0.33', '0.5',
  '0.7', '1.05', '1.45', '1.95', '2.4', '3.5', '5.2',
  '7.3', '10'
]

let errorBuy: string | undefined;

const buyRound = async(roundNumbe: number) => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
    
  const LotteryWCA = new ethers.Contract(
        '0xa180Ab0F86A0ad3440B8D8c0D4a3a1fD7763BE43',
         LotteryWCA_metadata.abi,
         signer
      )

    const options = {value: ethers.utils.parseEther(priceLevel[roundNumbe])}
    // const options = {value: '1'}
    
    try {
      switch (roundNumbe) {
        case 0:
            return
        case 1:
          await LotteryWCA.buyround(1, options)
          break;
        case 2:
          await LotteryWCA.buyround(2, options)
          break;
        case 3:
          await LotteryWCA.buyround(3, options)
          break;
        case 4:
          await LotteryWCA.buyround(4, options)
          break;
        case 5:
          await LotteryWCA.buyround(5, options)
          break;
        case 6:
          await LotteryWCA.buyround(6, options)
          break;
        case 7:
          await LotteryWCA.buyround(7, options)
          break;
        case 8:
          await LotteryWCA.buyround(8, options)
          break;
        case 9:
          await LotteryWCA.buyround(9, options)
          break;
        case 10:
          await LotteryWCA.buyround(10, options)
          break;
        case 11:
          await LotteryWCA.buyround(11, options)
          break;
        case 12:
          await LotteryWCA.buyround(12, options) 
          break;
        case 13:
          await LotteryWCA.buyround(13, options)
          break;
        case 14:
          await LotteryWCA.buyround(14, options)
          break;
        case 15:
          await LotteryWCA.buyround(15, options)
          break;
        default:
          errorBuy = undefined;          
          return
    }    
    } catch (e: any) {
      errorBuy = 'Not enough bnb';
      console.log(e);
    }
}

const ItemButton: React.FC<IItemButtonProps> = ({
  state,
  level,
  className,
  style,
  type,
  children,
  ...otherProps
}) => {
  const [error, setError] = useState('')
  const { wallet } = useTypeSelector(state => state)

  if (errorBuy !== undefined) {
    setError(errorBuy)
  }

  const buttonContent: { [key in ButtonType]: JSX.Element } = {
    activable: <div className="btn btn-yellow">{error !== '' ? error : 'Активировать'}</div>,
    activated: (
      <div className="btn btn-yellow">
        <span className="icon icon-checked">Активировать</span>
      </div>
    ),
    failed: <div className="btn btn-red">Посмотреть детали</div>,
  }
  return (
    <button style={{...style}} className={classNames("item_btn", className)} {...otherProps} onClick={() => state === 'activable' ? buyRound(level) : null}>{buttonContent[state]}</button> 
  )
}

export default ItemButton
