import React from 'react'
import { setAllowed } from '@stellar/freighter-api'


export interface ConnectButtonProps {
  label: string
  isHigher?: boolean
}

export function ConnectButton({ label, isHigher }: ConnectButtonProps) {
  return (
    <button
	    className="uppercase border border-yellow-500 text-yellow-300 hover:text-white text-xs px-6 py-2 cursor-pointer ml-6 hover:bg-yellow-500 transition-colors rounded-md"
      style={{ height: isHigher ? 50 : 38 }}
      onClick={setAllowed}
    >
      {label}
    </button>
  )
}