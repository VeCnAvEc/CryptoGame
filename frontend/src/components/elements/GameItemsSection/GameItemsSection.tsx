import { useActions } from '../../../hook/useAction';
import GameItem from '../GameItem/GameItem';
import './GameItemsSection.scss';
import items from './items'
import { useTypeSelector } from '../../../hook/useTypedSelector';
import LotteryWCA_metadata from '../../../abi/LotteryWCA_metadata.json'
import { ethers } from 'ethers';
import { useEffect } from 'react';

const GameItemsSection: React.FC = () => {
  const { openLevels } = useTypeSelector(state => state)

  const level = openLevels.userInfo

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

  let card: any = []

    for(let arr in level) {    
      for(let i = 0; i < level[arr].length; i++) {
        if (arr === 'active') {
          card.push({
            type: level[arr][i] ? "activated": "activable"
          })
        } else if(arr === 'payouts') {
          card[i].level = i;
          card[i].price = i;
        }
        
        if( card[i].type === 'activated' ) {
          card[i].activeProps = {
            level: card[i].level,
            progress: card[i].payouts,
            fullfield: String(+level[arr][i] + +level['rewardSum'][i]),
            bonus: level['rewardSum'][i],
            profit: level[arr][i]
          }
        }
      }
    }   
    console.log('useEffect');

  console.log('cardcardcard: ', card);
  console.log('itemsitems: ', items);
  

  // const formatEther = Number(card[1].activeProps.fullfield).toFixed(4)
  
  const { availableLevels } = useActions()

  useEffect(() => {
    (async () => availableLevels(await getAccount()))();
    console.log('openLevels');
  }, []);

  return (
    <div className="items grid">
        {card.map((item: any, i: any) => (
            <GameItem {...item} key={'item_' + i} />
        ))}
    </div>
  )
}

export default GameItemsSection