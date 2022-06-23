import { ActionType, IConnectAction, IWalletState } from "../../types/type"

export const inittialState: IWalletState = {
    connect: false,
    address: '0x00...00',
    balanceBNB: 0.000,
    balanceBUSD: 0.00,
    networkError: undefined,
    txBeginSent: null,
    transactionError: null
}

export const walletReducer = (state = inittialState, action: IConnectAction): IWalletState => {

    switch (action.type) {
        case ActionType.CONNECT_WALLET:
            return {
                ...state,
                userInfo: action
            }
        case ActionType.CONNECT_SUCCESS: 
             return {address: action.payload.address, balanceBNB: action.payload.balanceBNB, balanceBUSD: 0.00, connect: true}
        case ActionType.CONNECT_ERROR: 
            return {address: '0x00...00', balanceBNB: 0.000, balanceBUSD: 0.00, networkError: action.payload.networkError, connect: false}
        case ActionType.RESET_STATE: 
            return {address: '0x00...00', balanceBNB: 0.000, balanceBUSD: 0.00, networkError: action.payload?.networkError, connect: false}
        default:
            return state
    }    
}