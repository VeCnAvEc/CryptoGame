import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as WalletActionCreater from "../store/action-creators/wallet"

export const useActions = () => {
    const disptach = useDispatch()
    return bindActionCreators(WalletActionCreater, disptach)
}