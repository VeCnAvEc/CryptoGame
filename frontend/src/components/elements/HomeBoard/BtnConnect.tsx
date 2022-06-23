import { useActions  } from "../../../hook/useAction";

export const Connect = () => {
    const { fetchWallet } = useActions()

    const ConnectWallet = () => {
        fetchWallet()
    }

    return (
        <div className="board_btn flex__align">
            <div className="btn">
                <span className="icon icon-wallet" onClick={ConnectWallet}>Connect wallet</span>
            </div>
            <div className="btn btn-active">
                <span className="icon icon-help">Help Me</span>
            </div>
        </div>
    )
}