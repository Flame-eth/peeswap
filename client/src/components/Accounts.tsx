import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export function Account() {
	const { address } = useAccount();
	const { disconnect } = useDisconnect();
	const { data: ensName } = useEnsName({ address });
	const { data: ensAvatar } = useEnsAvatar({ name: ensName! });
	return (
		<div>
			{ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
			{address && (
				<div>
					{ensName
						? `${ensName} (${address.slice(-4)})})`
						: `${address.slice(0, 4)}...${address.slice(-4)}`}
				</div>
			)}
			{/* <button onClick={() => disconnect()}>Disconnect</button> */}
		</div>
	);
}
