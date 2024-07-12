import { setAllowed, isConnected, getUserInfo } from "@stellar/freighter-api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const ConnectButton = () => {
	const [isAllowed, setIsAllowed] = useState<boolean>(false)
	const [walletAddress, setWalletAddress] = useState<string>("0x")

	const handleWallet = async() => {
		if(await isConnected()){
			if(isAllowed){
				toast("Already added the app to Freighter's Allow List");
			}else{
				
				if(isAllowed) toast("Successfully added the app to Freighter's Allow List");
				setIsAllowed(await setAllowed())
			}
			
		}else{
			toast("Install a wallet before performing any actions")		
		}
	}
	useEffect(() => {
		async function confirmWalletConnection () {
			setIsAllowed(await setAllowed())
			setWalletAddress((await getUserInfo()).publicKey)
		}
	  confirmWalletConnection()
	}, [])
	
	if(isAllowed){
		return(
			<button
				onClick={handleWallet}
				className="uppercase border border-yellow-500 text-yellow-300 hover:text-white text-xs px-6 py-2 cursor-pointer ml-6 hover:bg-yellow-500 transition-colors rounded-md">
				{`${walletAddress.slice(0,4)}...${walletAddress.slice(-4)}`}
			</button>
		)
	}
  return (

	<button
		onClick={handleWallet}
		className="uppercase border border-yellow-500 text-yellow-300 hover:text-white text-xs px-6 py-2 cursor-pointer ml-6 hover:bg-yellow-500 transition-colors rounded-md">
		Connect Wallet
	</button>
  )
}
