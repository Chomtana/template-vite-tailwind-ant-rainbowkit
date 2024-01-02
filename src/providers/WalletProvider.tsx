import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { coinbaseWallet, injectedWallet, metaMaskWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { ReactNode } from 'react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  optimism,
  optimismSepolia,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const WALLETCONNECT_PROJECT_ID = '...'

const { chains, publicClient } = configureChains(
  [optimismSepolia],
  [
    publicProvider()
  ]
);

// const bitski = new Bitski(
//   '...',
//   window.location.origin + '/callback.html',
// );

const connectors = connectorsForWallets([
  // {
  //   groupName: 'Recommended',
  //   wallets: [
  //     bitskiWallet({ bitski, chains }),
  //   ],
  // },
  {
    groupName: 'Wallets',
    wallets: [
      injectedWallet({ chains }),
      walletConnectWallet({ chains, projectId: WALLETCONNECT_PROJECT_ID }),
      metaMaskWallet({ chains, projectId: WALLETCONNECT_PROJECT_ID }),
      coinbaseWallet({ appName: 'Template', chains }),
    ],
  },
])

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export default function WalletProvider({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
