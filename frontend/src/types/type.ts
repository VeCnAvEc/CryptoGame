export interface IWalletState {
    connect: boolean,
    address: string | undefined,
    balanceBNB: number | string | undefined,
    balanceBUSD: number | null | undefined,
    txBeginSent?: null | string
    transactionError?: null | number
    networkError?: any
    userInfo?: any
}

export enum ActionType {
    CONNECT_WALLET = 'CONNECT_WALLET',
    CONNECT_ERROR = 'CONNECT_ERROR',
    CONNECT_SUCCESS = 'CONNECT_SUCCESS',

    LOG_IN = 'LOG_IN',
    
    AVALABLE_LEVELS = 'AVALABLE_LEVELS',

    RESET_STATE = 'RESET_STATE'
}

export interface IConnectWalletAction {
    type: ActionType.CONNECT_WALLET;
}

export interface IConnectErrorAction {
    type: ActionType.CONNECT_ERROR
    payload: string
}

export interface IConnectAction {
    type: string,
    payload: {
        connect?: boolean,
        balanceBUSD?: number | null | undefined,
        txBeginSent?: null | string,
        address: string,
        balanceBNB: string | number,
        transactionError: null | number,
        networkError?: undefined | string,
    }
}

export interface ILoginAction {
    type: string,
    payload: GetUserDate
}

export interface UsersInformation {
    state: [
        {
            id: number,
            registrationTimestamp: number,
            referrer: string,
            referrals: number,
            referralPayoutSum: number,
            roundsRewardSum: number,
            missedReferralPayoutSum: number,
            maxRound: number,
            turnover: number
        }
    ]
}

export interface GetUserDate {
    id: number,
    registrationTimestamp: number,
    referrer: string,
    referrals: number,
    referralPayoutSum: number,
    roundsRewardSum: number,
    missedReferralPayoutSum: number,
    maxRound: number,
    turnover: number
}

export type ConnectAction = IConnectWalletAction | IConnectErrorAction