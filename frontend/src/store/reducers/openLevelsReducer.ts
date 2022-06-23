import { ethers } from "ethers";
import { ActionType } from "../../types/type";

export const initialState: any = {
    active: [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
    payouts: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    maxPayouts  : [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    activationTimes: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    rewardSum: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    referralPayoutSum: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
}

export const openLevels = (state = initialState, action: any): any => {
    console.log(action);
    
    switch (action.type) {        
        case ActionType.AVALABLE_LEVELS:
              let rewardSum: string[] = []
              let referralPayoutSum: string[] = []

              action.payload.rewardSum.forEach((mony: any) => {
                rewardSum.push(ethers.utils.formatEther(mony))
              })
              
              action.payload.referralPayoutSum.forEach((mony: any) => {
                referralPayoutSum.push(ethers.utils.formatEther(mony))
              })

              action.payload.rewardSum = []
              action.payload.referralPayoutSum = []

              rewardSum.forEach((mony: any) => {
                action.payload.rewardSum.push(mony)
              })
              
              referralPayoutSum.forEach((mony: any) => {
                action.payload.referralPayoutSum.push(mony)
              })

              return {
                  ...state,
                  userInfo: action.payload
              }
        default:
            return state
    }
}