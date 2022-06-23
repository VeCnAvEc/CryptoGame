import { ethers } from "ethers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LotteryWCA_metadata from '../../../abi/LotteryWCA_metadata.json'
import { useActions } from "../../../hook/useAction";
import { useTypeSelector } from "../../../hook/useTypedSelector";

export const LogIn = () => {
    const navigate = useNavigate();
    const [errorLogin, setErrorLogin] = useState('')
    const { logInAct } = useActions()
    const { logIn } = useTypeSelector(state => state)

    const getAccount = async () => {
        let [address] =  await window.ethereum.request({
            method: 'eth_requestAccounts'
        })

        return address
    }

    const checkExisctingAccount = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const LotteryWCA = new ethers.Contract('0xa180Ab0F86A0ad3440B8D8c0D4a3a1fD7763BE43', LotteryWCA_metadata.abi, signer)
            let accountInfo = await LotteryWCA.users(getAccount()) 

            const collectingInformation = {
                state: [
                    {
                        id: Number(accountInfo.id),
                        registrationTimestamp: Number(accountInfo.registrationTimestamp),
                        referrer: String(accountInfo.referrer),
                        referrals: Number(accountInfo.referrals),
                        referralPayoutSum: Number(accountInfo.referralPayoutSum),
                        roundsRewardSum: Number(accountInfo.roundsRewardSum),
                        missedReferralPayoutSum: Number(accountInfo.missedReferralPayoutSum),
                        maxRound: Number(accountInfo.maxRound),
                        turnover: Number(accountInfo.turnover),
                    }
                ]
            }
            
            if (collectingInformation.state[0].id > 0) {
                logInAct(collectingInformation.state[0])
                setErrorLogin('')
                navigate('/game')
            } else {
                setErrorLogin('The account using your MetaMask key was not registered')
            }
        } catch(e: any) {
            console.log(e);
        }
    }

    return (
        <div className='modal_block4 block'>
            <button className='registration' type='submit' onClick={checkExisctingAccount}>Log in!</button>
            <label className="error">{errorLogin.length > 1 ? errorLogin : null}</label>
        </div>
    ) 
}