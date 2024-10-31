import { createWeb3Modal, defaultConfig } from "@web3modal/ethers";
const projectId = "264bbaae2cc95f43e41e870c98e4c3dc";

const chains = [
  {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  },
];
const ethersConfig = defaultConfig({
  metadata: {
    name: "Web3Modal",
    description: "Web3Modal Laboratory",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
  defaultChainId: 1,
  rpcUrl: "https://cloudflare-eth.com",
});

const modal = createWeb3Modal({
  ethersConfig: { ...ethersConfig, email: true },
  projectId,
  chains,
  themeMode: "dark",
  themeVariables: {
    "--w3m-accent": "#373737",

    "--w3m-color-mix": "#373737",

    "--w3m-color-mix-strength": 20,
  },
});
