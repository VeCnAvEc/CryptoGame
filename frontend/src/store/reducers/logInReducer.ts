import { ActionType, ILoginAction, UsersInformation } from "../../types/type";

export const initialState: UsersInformation = {
    state: [
        {
            id: 0,
            registrationTimestamp: 0,
            referrer: '0x0000000000000000000000000000000000000000',
            referrals: 0,
            referralPayoutSum: 0,
            roundsRewardSum: 0,
            missedReferralPayoutSum: 0,
            maxRound: 0,
            turnover: 0
        }
    ]
}

export const loginReducer = (state = initialState, action: ILoginAction): any => {
    switch (action.type) {
        case ActionType.LOG_IN:
              return {
                  ...state,
                  userInfo: action.payload
              }
        default:
            return state
    }
}