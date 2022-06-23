import React, { useEffect, useState } from 'react'
import { useActions } from '../../../hook/useAction';
import { useTypeSelector } from '../../../hook/useTypedSelector';
import HeaderItem from '../../atoms/HeaderItem';
import HeaderItemsWrapper from '../../atoms/HeaderItemWrapper/HeaderItemsWrapper';
import IconWrapper from '../../atoms/IconWrapper';
import Search from '../../atoms/Search';
import Bar from '../Bar';
import './HeaderMenu.scss';
const HeaderMenu: React.FC = () => {
  const [active, setActive] = useState(false);
  const { wallet } = useTypeSelector(state => state)

  const toogle = () => setActive(!active);

  const formatBeginningAddress = wallet.userInfo?.payload.address !== undefined ? wallet.userInfo?.payload.address.slice(0, 4) : '00x0'
  const endBeginningAddress = wallet.userInfo?.payload.address !== undefined ? wallet.userInfo?.payload.address.slice(-3, -1) : '00'
  const formatBalance = wallet?.userInfo?.payload.balanceBUSD !== undefined ? Number(wallet.userInfo.payload.balanceBNB).toFixed(4) : 0.000

  return (
    <div className="header_right flex__center">
      <HeaderItemsWrapper className="header_smart">
        <HeaderItem className="icon-smart">Smart Chain</HeaderItem>
      </HeaderItemsWrapper>
      <HeaderItemsWrapper className="flex__center">
        <HeaderItem className="icon-busd">0.00 BUSD</HeaderItem>
        <HeaderItem className="icon-bnb">{ wallet.userInfo?.payload.balanceBNB !== undefined ? wallet.userInfo.payload.balanceBNB : 0.000} BNB</HeaderItem>
        <HeaderItem onClick={toogle} className="icon-wallet">{formatBeginningAddress + '...' + endBeginningAddress}</HeaderItem>
      </HeaderItemsWrapper>
      <Search />
      <IconWrapper className="header_logout">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.99951 7.81L1.99951 16.19C1.99951 19.83 4.16951 22 7.80951 22L16.1795 22C19.8295 22 21.9995 19.83 21.9995 16.19L21.9995 7.82C21.9995 4.18 19.8295 2.01 16.1895 2.01L7.80951 2.01C4.16951 2 1.99951 4.17 1.99951 7.81ZM10.9795 15.53C10.6895 15.24 10.6895 14.76 10.9795 14.47L12.6995 12.75L6.50951 12.75C6.09951 12.75 5.75951 12.41 5.75951 12C5.75951 11.59 6.09951 11.25 6.50951 11.25L12.6995 11.25L10.9795 9.53C10.6895 9.24 10.6895 8.76 10.9795 8.47C11.2695 8.18 11.7495 8.18 12.0395 8.47L15.0395 11.47C15.1095 11.54 15.1595 11.62 15.1995 11.71C15.2395 11.8 15.2595 11.9 15.2595 12C15.2595 12.1 15.2395 12.19 15.1995 12.29C15.1595 12.38 15.1095 12.46 15.0395 12.53L12.0395 15.53C11.7495 15.82 11.2795 15.82 10.9795 15.53ZM17.2195 5.76C17.8895 7.77 18.2295 9.88 18.2295 12C18.2295 14.12 17.8895 16.23 17.2195 18.24C17.0895 18.63 16.6595 18.84 16.2695 18.71C15.8795 18.58 15.6595 18.16 15.7995 17.76C17.0395 14.04 17.0395 9.95 15.7995 6.23C15.6695 5.84 15.8795 5.41 16.2695 5.28C16.6695 5.16 17.0895 5.37 17.2195 5.76Z"
            fill="#919191"
          />
        </svg>
      </IconWrapper>
      <Bar active={active} />
    </div>
  )
}

export default HeaderMenu
