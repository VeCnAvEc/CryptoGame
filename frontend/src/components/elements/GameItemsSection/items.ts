import { ethers } from 'ethers'
import { IGameActiveOptions } from '../GameItem/components/GameItemActiveContent'
import LotteryWCA_metadata from '../../../abi/LotteryWCA_metadata.json'
import { IGameItemProps } from '../GameItem/GameItem'

const getAccount = async () => {
  let [address] =  await window.ethereum.request({
      method: 'eth_requestAccounts'
  })

  return address
}

let itemsDinamics: any = [];

const GetItem = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()
      
  const LotteryWCA = new ethers.Contract('0xa180Ab0F86A0ad3440B8D8c0D4a3a1fD7763BE43', LotteryWCA_metadata.abi, signer)
  let accountInfo = await LotteryWCA.getUserrounds(getAccount());
  
  const account = {
    active: accountInfo[0],
    payouts: accountInfo[1],
    maxPayouts: accountInfo[2],
    activationTimes: accountInfo[3],
    rewardSum: accountInfo[4],
    referralPayoutSum: accountInfo[5]
  }

  for( let i = 0; i < accountInfo.length; i++ ) {
    for( let j = 0; j  < accountInfo[i].length; j++) {
        if( i === 0 ) {
          itemsDinamics.push({
              type: accountInfo[i][j] ? "activated": "activable"
          });
        }else if( i === 1 ) {
          itemsDinamics[j].level = j;
          itemsDinamics[j].price = j;
        }

        if(itemsDinamics[j].type === "activated") {
          itemsDinamics[j].activeProps = {
            level: itemsDinamics[j].level,
            progress: Number(accountInfo[i][j]),
            fullfield: ethers.utils.formatEther((accountInfo[4][j] + accountInfo[5][j])),
            bonus: ethers.utils.formatEther((accountInfo[4][j])),
            profit: ethers.utils.formatEther((accountInfo[5][j]))
          }
        }
    }
  }
}

GetItem();

const items: (IGameItemProps & Partial<IGameActiveOptions>)[] = itemsDinamics;

export default items


// { level: 1, price: 0.05 , type: 'activable' },
// { level: 2, price: 0.8 , type: 'failed' },
// { level: 3, price: 0.13 , type: 'activated', activeProps: {
//     progress: 20,
//     fullfield: '1.223',
//     bonus: '0.48',
//     profit: '1.244'
// } },
// { level: 4, price: 0.22 , type: 'failed' },
// { level: 5, price: 0.33 , type: 'failed' },
// { level: 6, price: 0.5 , type: 'failed' },
// { level: 7, price: 0.7 , type: 'activable'},
// { level: 8, price: 1.05, type: 'activable' },
// { level: 9, price: 1.45 , type: 'activable' },
// { level: 10, price: 1.95 , type: 'activable' },
// { level: 11, price: 2.4 , type: 'activable' },
// { level: 12, price: 3.5 , type: 'activable' },
// { level: 13, price: 5.2, type: 'activable' },
// { level: 14, price: 7.3, type: 'activable' },
// { level: 15, price: 8, type: 'activable' }

// { level: 7, price: 0.7 , type: 'activated', activeProps: {
//     progress: 20,
//     fullfield: '1.223',
//     bonus: '0.48',
//     profit: '1.244'
// } },

// { level: 8, price: 1.05, type: 'activated', activeProps: {
//     progress: 20,
//     fullfield: '1.223',
//     bonus: '0.48',
//     profit: '1.244'
// } },