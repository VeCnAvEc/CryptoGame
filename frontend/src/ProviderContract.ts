import { ethers } from "ethers"
import LotteryWCA_metadata from './abi/LotteryWCA_metadata.json'

export const getFunctionSignerContract:any = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
        
    return new ethers.Contract('0xa180Ab0F86A0ad3440B8D8c0D4a3a1fD7763BE43', LotteryWCA_metadata.abi, signer)
}