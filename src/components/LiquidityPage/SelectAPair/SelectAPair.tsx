import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


const selectAPair:NextPage = () => {
  	return (
    		<div className={styles.right}>
      			<div className={styles.selectAPair}>
        				<div className={styles.bg} />
        				<div className={styles.titleicon}>
          					<Image className={styles.iconiconarrowLeft2} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/selectAPair/icon/arrow-left-2.svg" />
          					<div className={styles.title}>Select A Pair</div>
        				</div>
        				<div className={styles.input}>
          					<div className={styles.label}>Enter the token symbol or address</div>
          					<Image className={styles.iconsearch} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/selectAPair/icon/search.svg" />
        				</div>
        				<div className={styles.listTokens}>
          					<div className={styles.mbListItemBasic}>
            						<div className={styles.mbListItemitemLeft}>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconftr} width={40} height={40} sizes="100vw" alt="" src="liquidityPage/selectAPair/icon/icon-wrapper.svg" />
              							</div>
              							<div className={styles.title1}>FTR</div>
            						</div>
            						<div className={styles.mbListItemitemRight}>
              							<div className={styles.paragraph}>0</div>
            						</div>
          					</div>
          					<div className={styles.mbListItemBasic}>
            						<div className={styles.mbListItemitemLeft}>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconeth} width={40} height={40} sizes="100vw" alt="" src="liquidityPage/selectAPair/icon/icon-wrapperETH.svg" />
              							</div>
              							<div className={styles.title1}>ETH</div>
            						</div>
            						<div className={styles.mbListItemitemRight}>
              							<div className={styles.paragraph}>0</div>
            						</div>
          					</div>
          					<div className={styles.mbListItemBasic}>
            						<div className={styles.mbListItemitemLeft}>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconeth} width={40} height={40} sizes="100vw" alt="" src="liquidityPage/selectAPair/icon/icon-wrapperUSDC.svg" />
              							</div>
              							<div className={styles.title1}>USDC</div>
            						</div>
            						<div className={styles.mbListItemitemRight}>
              							<div className={styles.paragraph}>0</div>
            						</div>
          					</div>
          					<div className={styles.mbListItemBasic}>
            						<div className={styles.mbListItemitemLeft}>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconeth} width={40} height={40} sizes="100vw" alt="" src="liquidityPage/selectAPair/icon/icon-wrapper1INCH.svg" />
              							</div>
              							<div className={styles.title1}>1INCH</div>
            						</div>
            						<div className={styles.mbListItemitemRight}>
              							<div className={styles.paragraph}>0</div>
            						</div>
          					</div>
          					<div className={styles.mbListItemBasic}>
            						<div className={styles.mbListItemitemLeft}>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconeth} width={40} height={40} sizes="100vw" alt="" src="liquidityPage/selectAPair/icon/icon-wrapperAAVE.svg" />
              							</div>
              							<div className={styles.title1}>AAVE</div>
            						</div>
            						<div className={styles.mbListItemitemRight}>
              							<div className={styles.paragraph}>0</div>
            						</div>
          					</div>
          					<div className={styles.mbListItemBasic}>
            						<div className={styles.mbListItemitemLeft}>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconeth} width={40} height={40} sizes="100vw" alt="" src="liquidityPage/selectAPair/icon/icon-wrapperAMPL.svg" />
              							</div>
              							<div className={styles.title1}>AMPL</div>
            						</div>
            						<div className={styles.mbListItemitemRight}>
              							<div className={styles.paragraph}>0</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default selectAPair;