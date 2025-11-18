import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { cookieStorage, createStorage } from 'wagmi';
import { bsc, bscTestnet } from 'wagmi/chains';

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID as string | undefined;

if (!projectId) {
  throw new Error('NEXT_PUBLIC_PROJECT_ID is not defined');
}

const metadata = {
  name: 'KRNT App',
  description: 'KRNT DApp using Reown AppKit',
  url: 'https://example.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

const chains = [bsc, bscTestnet] as const;

export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  auth: {
    email: true,
    socials: ['google', 'x', 'github', 'discord', 'apple'],
    showWallets: true,
    walletFeatures: true
  },
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  })
}); 