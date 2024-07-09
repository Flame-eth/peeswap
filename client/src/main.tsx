import "boxicons";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { WagmiProvider } from "wagmi";
import { arbitrum, mainnet } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";
import "./globals.css";
import "./index.css";
import { config } from "../config.ts";

// Set up a React Query client.
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</WagmiProvider>
	</BrowserRouter>
);
