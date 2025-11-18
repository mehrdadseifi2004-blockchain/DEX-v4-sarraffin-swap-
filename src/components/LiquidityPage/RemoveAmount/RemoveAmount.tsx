import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


const RemoveAmount:NextPage = () => {
  	return (
    		<div className={styles.right}>
      			<div className={styles.bottom}>
        				{/* <Image className={styles.bgIcon} width={403} height={104} sizes="100vw" alt="" src="BG.svg" /> */}
        				<div className={styles.content}>Tokens can be redeemed by removing liquidity. The number of redeemed tokens may change due to price fluctuations.</div>
      			</div>
      			<div className={styles.card}>
        				<div className={styles.bg} />
        				<div className={styles.btn}>
          					<b className={styles.text}>Enter An Amount</b>
        				</div>
        				<div className={styles.content1}>
          					<div className={styles.pool}>
            						<div className={styles.mbListItemBasic}>
              							<div className={styles.mbListItemitemLeft}>
                								<div className={styles.text}>Pool</div>
              							</div>
            						</div>
            						<div className={styles.mbListItemBasic1}>
              							<div className={styles.mbListItemitemLeft1}>
                								<div className={styles.title}>0x75c2...ff34</div>
              							</div>
              							<div className={styles.mbListItemitemRight}>
                								<div className={styles.iconWrapper}>
                  									<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/removeAmount/icon/share.svg" />
                								</div>
                								<div className={styles.iconWrapper}>
                  									<Image className={styles.iconcopy} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/removeAmount/icon/copy.svg" />
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.pool}>
            						<div className={styles.mbListItemBasic}>
              							<div className={styles.mbListItemitemLeft}>
                								<div className={styles.text}>Total Liquidity</div>
              							</div>
            						</div>
            						<div className={styles.mbListItemBasic3}>
              							<div className={styles.mbListItemitemLeft}>
                								<div className={styles.title1}>9,601.09004 ETH / 10,773,969.7918 USDC</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.pay}>
          					<div className={styles.title2}>
            						<div className={styles.available0}>Available: 500</div>
          					</div>
          					<div className={styles.inputGroupwDropdown}>
            						<div className={styles.dropdown}>
              							<Image className={styles.iconiconarrowDown} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/removeAmount/icon/arrow-down.svg" />
              							<div className={styles.label}>ETH</div>
              							<Image className={styles.iconeth} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/removeAmount/icon/ETH.svg" />
            						</div>
            						<div className={styles.input}>
              							<b className={styles.label1}>0</b>
            						</div>
          					</div>
        				</div>
        				<div className={styles.tabsStyle2}>
          					<div className={styles.tabItemstyle2Itemlarge}>
            						<div className={styles.title}>Add</div>
          					</div>
          					<div className={styles.tabItemstyle2Itemlarge1}>
            						<div className={styles.title}>Remove</div>
          					</div>
        				</div>
        				<div className={styles.titleicon}>
          					<Image className={styles.iconiconarrowLeft2} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/removeAmount/icon/vector.svg" />
          					<Image className={styles.iconshare1} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/removeAmount/icon/share.svg" />
        				</div>
      			</div>
    		</div>);
};

export default RemoveAmount;