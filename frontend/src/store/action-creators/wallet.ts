import { ethers } from "ethers"
import { Dispatch } from "react"
import { ActionType, GetUserDate, IConnectErrorAction, ILoginAction, UsersInformation } from "../../types/type"

const HARDHAT_NETWORK_ID = '97'

export const fetchWallet = () => {
    return async (dispatch: Dispatch<any>) => {
        try {
            if(!window.ethereum) {
                dispatch({type: ActionType.CONNECT_ERROR, payload: 'Please install MetaMask'})
                return
            }

            const [sellectedAddress] = await window.ethereum.request({
                method: 'eth_requestAccounts'
            })            

            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const getBalance = await provider.getBalance(sellectedAddress)

            // Исправить номер сети с hardhat на mainnet
            const checkNetwork = () => {
                if(window.ethereum.networkVersion === HARDHAT_NETWORK_ID) { 
                    return true
                }

                dispatch({type: ActionType.CONNECT_ERROR, payload: 'Please connect to localhost:8545'})
                return false
            }

            // Зафиксить под ту сеть где будет использоваться смартконтракт
            if( !checkNetwork() ) return    

            const payload = {
                connect: true,
                address: sellectedAddress,
                balanceBNB: ethers.utils.formatEther(getBalance),
                error: undefined
            }

            dispatch({type: ActionType.CONNECT_WALLET, payload})
        } catch(error: any) {
            if ( error.code === 4001 ){
                const wallet = {
                    address: '0',
                    balance: 0,
                    error: 'Please install MetaMask'
                }
                dispatch({type: ActionType.CONNECT_ERROR, payload: wallet})
            }
        }
    }
}

export const resetState = (reset: boolean = false, init?: {
    init: boolean,
    newAddress?: string | undefined
}) => {
    return async (dispatch: Dispatch<any>) => {
        try {

            let provider: any;

            const [sellectedAddress] = await window.ethereum.request({
                method: 'eth_requestAccounts'
            })

            provider = new ethers.providers.Web3Provider(window.ethereum)

            const newBalance = await provider.getBalance(sellectedAddress)
            
            if( sellectedAddress !== undefined ) {
                dispatch({type: ActionType.CONNECT_SUCCESS, payload: {
                    address: sellectedAddress,
                    balanceBNB: ethers.utils.formatEther(newBalance)
                }})
            }


        } catch(e: any) {
            console.log('Catch: ', e);
        }
    }
}

export const logInAct = (userInformation: GetUserDate) => {
    return (dispatch: Dispatch<ILoginAction>) => {
        try {
            dispatch({type: ActionType.LOG_IN, payload: userInformation})
        } catch (e: any) {

        }
    }
}

export const availableLevels = (infoAboutLevel: {active: boolean[], payouts: number[], maxPayouts: number[], activationTimes: number[], rewardSum: number[], referralPayoutSum: number[]}) => {
    return (disptach: Dispatch<any>) => {
        try {
            disptach({type: ActionType.AVALABLE_LEVELS, payload: infoAboutLevel})
        } catch(e: any) {
            console.log(e);
        }
    }
}