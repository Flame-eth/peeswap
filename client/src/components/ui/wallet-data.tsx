import React from 'react'
import {useAccount} from '../../hooks/useAccount'
import {useIsMounted} from '../../hooks/useIsMount'

import { ConnectButton } from '../connect-button'
// import styles from './style.module.css'

// TODO: Eliminate flash of unconnected content on loading
export function WalletData() {
  const mounted = useIsMounted()
  const account = useAccount()

  return (
    <>
      {mounted && account ? (
        <div className="uppercase border border-yellow-500 text-yellow-300 hover:text-white text-xs px-6 py-2 cursor-pointer ml-6 hover:bg-yellow-500 transition-colors rounded-md">

          <div className=''>{account.displayName}</div>
        </div>
      ) : (
        <ConnectButton label="Connect Wallet" />
      )}
    </>
  )
}