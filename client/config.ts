import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { http, createConfig } from 'wagmi'
import { arbitrum, base, localhost, mainnet, optimism } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

const projectId = 'd69f9edb23bbe0354a3b186e1bee340c'


const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}
const chains = [mainnet, arbitrum, localhost, base, optimism] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})