"use client";

import type { NextPage } from 'next';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { ComponentType } from 'react';
import { Contract, JsonRpcProvider, BrowserProvider, formatUnits, parseUnits, Eip1193Provider } from 'ethers';
import styles from './index.module.css';
import { useAccount } from 'wagmi';
import ButtonFaq from '../ButtonElement/ButtonFaq';
import Link from 'next/link';
// Typed alias for the web component to satisfy TS JSX types
const W3mButton: ComponentType<any> = 'w3m-button' as unknown as ComponentType<any>;

// تعریف نوع برای window.ethereum
declare global {
  interface Window {
    ethereum?: Eip1193Provider;
  }
}


// آدرس‌های PancakeSwap Router
const PANCAKESWAP_ROUTER_ADDRESS = '0x10ED43C718714eb63d5aA57B78B54704E256024E';
const KRNT_ADDRESS = '0xA0dcd9f952842E2e2e5E5441CC50007d169AcE5B';
const WBNB_ADDRESS = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';

// URL RPC BNB Mainnet (نود عمومی)
const BNB_MAINNET_RPC_URL = 'https://bsc-dataseed.binance.org/';

// ABI‌ها
const PANCAKESWAP_ROUTER_ABI = [
  'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
  'function swapTokensForExactTokens(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
  'function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts)'
];
const ERC20_ABI = [
  'function approve(address spender, uint256 amount) public returns (bool)',
  'function balanceOf(address account) public view returns (uint256)',
  'function allowance(address owner, address spender) public view returns (uint256)'
];

// نرخ تبدیل ثابت (بر اساس اطلاعات واقعی استخر)
const SWAP_RATE = 23315.3; // 1 BNB = 23,315.3 KRNT

const HomePage: NextPage = () => {
  const { address, isConnected } = useAccount();
  const [amountIn, setAmountIn] = useState<string>('0');
  const [amountOutMin, setAmountOutMin] = useState<string>('0');
  const [krntBalance, setKrntBalance] = useState<string>('0');
  const [bnbBalance, setBnbBalance] = useState<string>('0');
  const [loading, setLoading] = useState<boolean>(false);
  const [swapDirection, setSwapDirection] = useState<'KRNT_TO_BNB' | 'BNB_TO_KRNT'>('KRNT_TO_BNB');

  // گرفتن موجودی KRNT
  const fetchBalance = async (ownerAddress: string) => {
    const provider = new JsonRpcProvider(BNB_MAINNET_RPC_URL);
    const krntContract = new Contract(KRNT_ADDRESS, ERC20_ABI, provider);
    const balance = await krntContract.balanceOf(ownerAddress);
    setKrntBalance(formatUnits(balance, 18));
  };

  // گرفتن موجودی WBNB
  const fetchBnbBalance = async (ownerAddress: string) => {
    const provider = new JsonRpcProvider(BNB_MAINNET_RPC_URL);
    const wbnbContract = new Contract(WBNB_ADDRESS, ERC20_ABI, provider);
    const balance = await wbnbContract.balanceOf(ownerAddress);
    setBnbBalance(formatUnits(balance, 18));
  };

  // به روزرسانی موجودی‌ها هنگام تغییر آدرس اتصال
  useEffect(() => {
    if (address) {
      fetchBalance(address);
      fetchBnbBalance(address);
    } else {
      setKrntBalance('0');
      setBnbBalance('0');
    }
  }, [address]);

  // بعد از هر swap موجودی‌ها را به‌روزرسانی کن
  const updateBalances = (ownerAddress: string) => {
    fetchBalance(ownerAddress);
    fetchBnbBalance(ownerAddress);
  };

  // مقدار ورودی و خروجی را بر اساس جهت swap محاسبه کن
  const handleAmountInChange = (val: string) => {
    setAmountIn(val);
    if (swapDirection === 'KRNT_TO_BNB') {
      setAmountOutMin(val ? (parseFloat(val) / SWAP_RATE).toFixed(8) : '');
    } else {
      setAmountOutMin(val ? (parseFloat(val) * SWAP_RATE).toFixed(2) : '');
    }
  };

  const handleAmountOutMinChange = (val: string) => {
    setAmountOutMin(val);
    if (swapDirection === 'KRNT_TO_BNB') {
      setAmountIn(val ? (parseFloat(val) * SWAP_RATE).toFixed(2) : '');
    } else {
      setAmountIn(val ? (parseFloat(val) / SWAP_RATE).toFixed(8) : '');
    }
  };

  // انجام سواپ با PancakeSwap Router (فعلاً با injected provider)
  const performSwap = async () => {
    if (!address || !amountIn || !amountOutMin || Number(amountIn) <= 0) {
      alert('Please connect wallet and enter valid amounts.');
      return;
    }

    if (!window.ethereum) {
      alert('Please install MetaMask or use an injected wallet.');
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const web3Provider = new BrowserProvider(window.ethereum);
      const signer = await web3Provider.getSigner();
      const fromToken = swapDirection === 'KRNT_TO_BNB' ? KRNT_ADDRESS : WBNB_ADDRESS;
      const toToken = swapDirection === 'KRNT_TO_BNB' ? WBNB_ADDRESS : KRNT_ADDRESS;
      const fromAmount = parseUnits(amountIn, 18);
      const toAmount = parseUnits(amountOutMin, 18);
      const fromContract = new Contract(fromToken, ERC20_ABI, signer);
      const router = new Contract(PANCAKESWAP_ROUTER_ADDRESS, PANCAKESWAP_ROUTER_ABI, signer);

      const allowance = await fromContract.allowance(address, PANCAKESWAP_ROUTER_ADDRESS);

      if (allowance < fromAmount) {
        const approveTx = await fromContract.approve(PANCAKESWAP_ROUTER_ADDRESS, fromAmount);
        await approveTx.wait();
      }

      const deadline = Math.floor(Date.now() / 1000) + 1800;
      const path = [fromToken, toToken];

      const tx = await router.swapExactTokensForTokens(
        fromAmount,
        toAmount,
        path,
        address,
        deadline,
        {
          gasLimit: 300000,
          maxFeePerGas: parseUnits('3', 'gwei'),
          maxPriorityFeePerGas: parseUnits('1', 'gwei')
        }
      );

      await tx.wait();
      alert('Swap successful! Tx Hash: ' + tx.hash);
      updateBalances(address);
    } catch (error: unknown) {
      console.error('Swap failed:', error);
      let errorMessage = 'Swap failed! ';
      if (error instanceof Error) {
        if ('code' in error && (error as any).code === -32603) {
          errorMessage += 'Transaction failed on network. Please try again with higher gas limit.';
        } else if (error.message) {
          errorMessage += error.message;
        } else {
          errorMessage += 'Unknown error occurred.';
        }
      } else {
        errorMessage += 'Unknown error occurred.';
      }
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.home}>
      <div className={styles.bg} />
      <div className={styles.menu}>
        <div className={styles.logo}>
          <Image className={styles.photo2021110817252} width={55} height={56.2} sizes="100vw" alt="" src="/logo.png" />
          <b className={styles.kiba}>SARRAFF.in</b>
        </div>
        <div className={styles.menu1}>
          <div className={styles.logoDexfull}>
            <div className={styles.logoDexfullChild} />
          </div>
          <div className={styles.menu2}>
            <div className={styles.menuItemHorizontalitem}>
              <div className={styles.title}>Home</div>
            </div>
            <div className={styles.menuItemHorizontalitem1}>
              <div className={styles.title}>Liquidity</div>
            </div>
            <div className={styles.menuItemHorizontalitem2}>
              <div className={styles.title}>Minting</div>
              <div className={styles.iconWrapper}>
                <Image className={styles.iconbase} width={16} height={16} sizes="100vw" alt="" src="homePage/icon/base.svg" />
              </div>
            </div>
            <div className={styles.menuItemHorizontalitem2}>
              <div className={styles.title}>Developer</div>
              <div className={styles.iconWrapper}>
                <Image className={styles.iconbase} width={16} height={16} sizes="100vw" alt="" src="homePage/icon/base.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonFaq}>
        <Link href="/faq">
          <ButtonFaq
          text="FAQ"
          />
        </Link>
        </div>
        <div className={styles.itemRight}>
          <Image className={styles.iconuser} width={40} height={40} sizes="100vw" alt="" src="homePage/icon/user.svg" />
          <div className={styles.address}>
            <div className={styles.eth}>
              <div className={styles.iconcolorDot}>
                <Image className={styles.vectorIcon} width={6} height={6} sizes="100vw" alt="" src="homePage/icon/vector.svg" />
              </div>
              <div className={styles.bsc}>BSC</div>
            </div>
            <div className={styles.tag}>
              {isConnected && address ? (
                <div className={styles.title}>
                  {`${address.slice(0, 6)}...${address.slice(-4)}`}
                </div>
              ) : (
                <div className={styles.title} style={{ display: 'flex', alignItems: 'center' }}>
                  <W3mButton />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.mainContent}>
        <div className={styles.mbListicon6}>
          <Image className={styles.coinIcon} width={52} height={32} sizes="100vw" alt="" src="homePage/icon/coin.svg" />
          <div className={styles.info}>
            <div className={styles.busdusdc}>
              <span className={styles.busd}>KRNT/</span>
              <b className={styles.usdc}>WBNB</b>
            </div>
            <Image className={styles.iconiconarrowExchangeSwap} width={24} height={24} sizes="100vw" alt="" src="homePage/icon/arrow-exchange-swap.svg" />
          </div>
        </div>
        <b className={styles.usdc1}>1 KRNT = 0.00004289 WBNB</b>
        
        <div className={styles.cardExchange}>
          <div className={styles.pay}>
            <div className={styles.note}>
              <div className={styles.bsc}>Pay</div>
              <div className={styles.available0}>
                Available: {swapDirection === 'KRNT_TO_BNB'
                  ? (address ? krntBalance : '0') + ' KRNT'
                  : (address ? bnbBalance : '0') + ' WBNB'}
              </div>
            </div>
            <div className={styles.inputGroupwDropdown}>
              <div className={styles.dropdown}>
                <Image
                  className={styles.iconbase3}
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src={swapDirection === 'KRNT_TO_BNB' ? 'homePage/icon/logo.svg' : 'liquidityPage/icon/ETH.svg'}
                />
                <span className={styles.label}>{swapDirection === 'KRNT_TO_BNB' ? 'KRNT' : 'WBNB'}</span>
              </div>
              <input
                className={styles.input}
                type="number"
                value={amountIn}
                onChange={(e) => handleAmountInChange(e.target.value)}
                placeholder="0"
                max={swapDirection === 'KRNT_TO_BNB' ? krntBalance : undefined}
              />
            </div>
          </div>
          {/* دکمه تغییر جهت swap */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '8px 0' }}>
            <button
              type="button"
              style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
              onClick={() => {
                setSwapDirection(swapDirection === 'KRNT_TO_BNB' ? 'BNB_TO_KRNT' : 'KRNT_TO_BNB');
                setAmountIn('');
                setAmountOutMin('');
              }}
              title="تغییر جهت سواپ"
            >
              <Image className={styles.iconiconarrowDown2} width={32} height={32} sizes="100vw" alt="" src="homePage/icon/arrow-down-2.svg" />
            </button>
          </div>
          <div className={styles.pay}>
            <div className={styles.note}>
              <div className={styles.bsc}>Receive (Estimated)</div>
              <div className={styles.available01}>
                Available: {swapDirection === 'KRNT_TO_BNB'
                  ? (address ? bnbBalance : '0') + ' WBNB'
                  : (address ? krntBalance : '0') + ' KRNT'}
              </div>
            </div>
            <div className={styles.inputGroupwDropdown}>
              <div className={styles.dropdown}>
                <Image
                  className={styles.iconbase3}
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src={swapDirection === 'KRNT_TO_BNB' ? 'liquidityPage/icon/ETH.svg' : 'homePage/icon/logo.svg'}
                />
                <span className={styles.label}>{swapDirection === 'KRNT_TO_BNB' ? 'WBNB' : 'KRNT'}</span>
              </div>
              <input
                className={styles.input}
                type="number"
                value={amountOutMin}
                onChange={(e) => handleAmountOutMinChange(e.target.value)}
                placeholder="0"
              />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.bsc}>
              {swapDirection === 'KRNT_TO_BNB' 
                ? `1 KRNT = ${(1 / SWAP_RATE).toFixed(8)} WBNB`
                : `1 WBNB = ${SWAP_RATE.toLocaleString()} KRNT`}
            </div>
            <Image className={styles.iconiconarrowExchangeSwap} width={24} height={24} sizes="100vw" alt="" src="homePage/icon/arrow-exchange-swap.svg" />
          </div>
          <div className={styles.btn5}>
            <button
              className={styles.btn6}
              onClick={performSwap}
              disabled={loading || !address || !amountIn || !amountOutMin || Number(amountIn) <= 0}
            >
              <b className={styles.bsc}>{loading ? 'Swapping...' : 'Confirm Swap'}</b>
            </button>
            {!address && <div className={styles.enterAnAmount} style={{ color: 'red' }}>First connect your wallet</div>}
            {address && <div className={styles.enterAnAmount}>Enter amounts to swap</div>}
          </div>
        </div>
        <div className={styles.info1}>
          <div className={styles.bsc}>+227.543364 WBNB</div>
          <div className={styles.number1}>Past 24 Hours</div>
        </div>
        <div className={styles.tags}>
          <div className={styles.tag1}>
            <div className={styles.bsc}>24H</div>
          </div>
          <div className={styles.tag2}>
            <div className={styles.bsc}>1W</div>
          </div>
          <div className={styles.tag2}>
            <div className={styles.bsc}>1M</div>
          </div>
        </div>
        <div className={styles.chart}>
          <div className={styles.chart1}>
            <div className={styles.chartChild} />
            <Image className={styles.chartItem} width={841} height={293.5} sizes="100vw" alt="" src="homePage/icon/Vector 17.svg" />
          </div>
          <div className={styles.time}>
            <div className={styles.bsc}>11:30 AM</div>
            <div className={styles.bsc}>7:30 PM</div>
            <div className={styles.bsc}>3:30 AM</div>
            <div className={styles.bsc}>10:35 AM</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;