import { useState } from "react"
import { useActions } from "../../../hook/useAction";
import { useTypeSelector } from "../../../hook/useTypedSelector";
import { ModalWindow } from "../ModalWindow/ModalWindow";

export const Start = () => {
    const [modalActive, setModalActiove] = useState(false)

    const { wallet } = useTypeSelector(state => state)
    
    const { resetState } = useActions()

        window.ethereum.on('chainChanged', ([newAddress]: string[]) => {		
            if( wallet.userInfo?.paypayload.connect === true ) {
                return resetState(true)
             }
        })
    
        window.ethereum.on('accountsChanged', ([newAddress]: string[]) => {
            if ( newAddress === undefined ) {
                return resetState(true)
            }
    
            return resetState(false, {init: true, newAddress: newAddress})
        })

    return (            
        <div className="btn">
            <span className="icon icon-wallet" onClick={() => setModalActiove(true)}>Fast Registration or log in</span>
            <ModalWindow active={modalActive} setActive={setModalActiove}/>
        </div>
    )
}