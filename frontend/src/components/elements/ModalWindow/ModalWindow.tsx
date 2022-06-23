import { ethers } from 'ethers'
import './ModalWindow.scss'
import LotteryWCA_metadata from '../../../abi/LotteryWCA_metadata.json'
import { useState } from 'react'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import { LogIn } from './LogIn';
import { useTypeSelector } from '../../../hook/useTypedSelector';

export const ModalWindow = (props: {active: boolean, setActive: any}) => {

    const navigate = useNavigate();
    const { openLevels } = useTypeSelector(state => state)

    const [selectedValue, setSelectedValue] = useState('0');

    const [referrer, setReferrer] = useState('')
    const [statusRegister, setStatusRegister] = useState(false)
    const [error, setError] = useState('')
    const [buyError, setBuyError] = useState('')

    const getAccount = async () => {
        let [address] =  await window.ethereum.request({
            method: 'eth_requestAccounts'
        })

        return address
    }


    const handleChange = (e: any) => {
        setSelectedValue(e.target.value);
    }

    const referrerExisting = (e: any) => {
        setReferrer(e.target.value)
    }

    const registerAndBuyLvl = async (e: any) => {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner(0)
        console.log( await signer.getAddress() );
        const errorRevert = 'call revert exception [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] '
    
        const LotteryWCA = new ethers.Contract('0xa180Ab0F86A0ad3440B8D8c0D4a3a1fD7763BE43', LotteryWCA_metadata.abi, signer)

        try {
            console.log( LotteryWCA );

            let accountInfo = await LotteryWCA.users(getAccount()) 

            console.log(accountInfo);
            

            if (referrer === '') {
                setError('')
                if (Number(accountInfo.id) === 0) {
                    await LotteryWCA.register()
                    setStatusRegister(true)
                }
            } else if (referrer.length >= 30){
                setError('')
                if (Number(accountInfo.id) === 0) {
                    await LotteryWCA.registerWithReferrer(referrer)
                    setStatusRegister(true)
                }
            } else {
                setError('Invaild referrer!')
            }

            let buyRound;
            const options = {value: ethers.utils.parseEther(selectedValue)}


            switch (selectedValue) {
                case '0':
                    if(await LotteryWCA.users(await getAccount()).id !== 0 ) {
                        navigate('/game')
                    }
                    return
                case '0.05':
                  buyRound = await LotteryWCA.buyround(1, options)
                  setStatusRegister(true)
                  break;
                case '0.08':
                  buyRound = await LotteryWCA.buyround(2, options)
                  setStatusRegister(true)
                  break;
                case '0.13':
                  buyRound = await LotteryWCA.buyround(3, options)
                  setStatusRegister(true)
                  break;
                case '0.22':
                  buyRound = await LotteryWCA.buyround(4, options)
                  setStatusRegister(true)
                  break;
                case '0.33':
                  buyRound = await LotteryWCA.buyround(5, options)
                  setStatusRegister(true)
                  break;
                case '0.5':
                  buyRound = await LotteryWCA.buyround(6, options)
                  setStatusRegister(true)
                  break;
                case '0.7':
                  buyRound = await LotteryWCA.buyround(7, options)
                  setStatusRegister(true)
                  break;
                case '1.05':
                  buyRound = await LotteryWCA.buyround(8, options)
                  setStatusRegister(true)
                  break;
                case '1.45':
                  buyRound = await LotteryWCA.buyround(9, options)
                  setStatusRegister(true)
                  break;
                case '1.95':
                  buyRound = await LotteryWCA.buyround(10, options)
                  setStatusRegister(true)
                  break;
                case '2.4':
                  buyRound = await LotteryWCA.buyround(11, options)
                  setStatusRegister(true)
                  break;
                case '3.5':
                  buyRound = await LotteryWCA.buyround(12, options) 
                  setStatusRegister(true)
                  break;
                case '5.2':
                  buyRound = await LotteryWCA.buyround(13, options)
                  setStatusRegister(true)
                  break;
                case '7.3':
                  buyRound = await LotteryWCA.buyround(14, options)
                  setStatusRegister(true)
                  break;
                case '10':
                  buyRound = await LotteryWCA.buyround(15, options)
                  setStatusRegister(true)
                  break;
                default:
                  setBuyError('Try again or a little later')
                  setStatusRegister(false)
                  return
            }            
            
        if(statusRegister) {
            navigate('/game')
        }

        if(await LotteryWCA.users(await getAccount()).id !== 0 ) {
            navigate('/game')
        } 
        
        } catch(e: any) {
            if (e.code === 4001) {
                console.log('error code 4001');
                return
            }
            
            if (e.code === 'UNPREDICTABLE_GAS_LIMIT') {
                setBuyError('User is not registered')
                setStatusRegister(false)
            } else if (e.code === -32603) {
                console.log( e.message);
            } else {
                let error = e.message
                let errorType = error.split('')
                let err = []

                for (let i = 0; i < 81; i++) {
                    err.push(errorType[i]);
                    if(i === 80) {
                        if( err.join('') ===  errorRevert) {
                            if ( referrer === '' ) {
                                await LotteryWCA.register()
                            } else if (referrer.length >= 30){
                                setError('')
                                await LotteryWCA.registerWithReferrer(referrer)
                                setStatusRegister(true)
                            } 
                        }
                    }
                }
                console.log(error);
            }

        } finally {
            console.log('finally');
        }
    }

    if ( props.active ) {
        return (
            <div className="modalWindow" onClick={() => props.setActive(false)}>
                <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                    <div className='modal_block1 block'>
                        <p className='text'>{buyError !== '' ? buyError : 'Registration'}</p>
                    </div>
                    <div className='modal_block2 block'>
                    <form name="recipient">
                    <motion.select onChange={e => {
                        handleChange(e)
                    }} className="input">
                        <label className='error'>{buyError}</label>
                            <option className='drop' value="0">0 level 0 BNB</option>
                            <option className='drop' value="0.05">1 level 0.05 BNB</option>
                            <option className='drop' value="0.08">2 level 0.08 BNB</option>
                            <option className='drop' value="0.13">3 level 0.13 BNB</option>
                            <option className='drop' value="0.22">4 level 0.22 BNB</option>
                            <option className='drop' value="0.33">5 level 0.33 BNB</option>
                            <option className='drop' value="0.5">6 level 0.5 BNB</option>
                            <option className='drop' value="0.7">7 level 0.7 BNB</option>
                            <option className='drop' value="1.05">8 level 1.05 BNB</option>
                            <option className='drop' value="1.45">9 level 1.45 BNB</option>
                            <option className='drop' value="1.95">10 level 1.95 BNB</option>
                            <option className='drop' value="2.4">11 level 2.4 BNB</option>
                            <option className='drop' value="3.5">12 level 3.5 BNB</option>
                            <option className='drop' value="5.2">13 level 5.2 BNB</option>
                            <option className='drop' value="7.3">14 level 7.3 BNB</option>
                            <option className='drop' value="10">15 level 10 BNB</option>
                        </motion.select>
                    </form>
                    </div>
                    <div className='modal_block3 block'>
                        <label className='error'> {error.length > 1 ? error : null}
                            <input onChange={referrerExisting} type="text" placeholder='Write id referrer' className='discription'/>
                        </label>
                    </div>
                    <div className='modal_block4 block'>
                        <button className='registration' type='submit' onClick={registerAndBuyLvl}>Register!</button>
                    </div>
                    <div className="modal_block4 block">
                        <LogIn />
                    </div>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}