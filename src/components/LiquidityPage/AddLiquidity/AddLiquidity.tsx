import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


const AddLiquidity:NextPage = () => {
  	return (
    		<div className={styles.right}>
      			<div className={styles.cardaddLiquid}>
        				<div className={styles.bottom}>
          					{/* <Image className={styles.bgIcon} width={403} height={154} sizes="100vw" alt="" src="BG.svg" /> */}
          					<div className={styles.content}>By adding liquidity, you will earn fees proportional to your share of the pool on all trades for this pair. Fees are added to the pool, accrue in real time, and can be claimed when you withdraw your liquidity.</div>
        				</div>
        				<div className={styles.top}>
          					<div className={styles.bg} />
          					<div className={styles.btn}>
            						<b className={styles.text}>Add Liquidity</b>
          					</div>
          					<div className={styles.title}>Select a pair</div>
          					<div className={styles.title1}>Select a pool</div>
          					<div className={styles.inputGroup}>
            						<div className={styles.inputBigIcondefault}>
              							<div className={styles.left}>
                								<div className={styles.iconWrapper}>
                  									<Image className={styles.iconbase} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addLiquidity/icon/base.svg" />
                								</div>
                								<div className={styles.label}>ETH</div>
              							</div>
              							<Image className={styles.iconbase1} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addLiquidity/icon/base.svg" />
            						</div>
            						<Image className={styles.iconbase1} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addLiquidity/icon/plus-3.svg" />
            						<div className={styles.inputBigIcondefault1}>
              							<div className={styles.left}>
                								<div className={styles.iconWrapper}>
                  									<Image className={styles.iconbase} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addLiquidity/icon/base.svg" />
                								</div>
                								<div className={styles.label}>USDC</div>
              							</div>
              							<Image className={styles.iconbase1} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addLiquidity/icon/base.svg" />
            						</div>
          					</div>
          					<div className={styles.btn1}>
            						<b className={styles.text1}>Create a pool</b>
          					</div>
          					<div className={styles.input}>
            						<div className={styles.text2}>0x75c2...ff34</div>
            						<Image className={styles.iconbase4} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addLiquidity/icon/base.svg" />
          					</div>
          					<div className={styles.mbListbasic7}>
            						<div className={styles.list}>
              							<div className={styles.mbListItemBasic}>
                								<div className={styles.mbListItemitemLeft}>
                  									<div className={styles.text}>Total Liquidity</div>
                								</div>
                								<div className={styles.mbListItemitemRight}>
                  									<div className={styles.label}>9,577.514455</div>
                  									<div className={styles.iconWrapper}>
                    										<Image className={styles.iconbase} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addLiquidity/icon/base.svg" />
                  									</div>
                								</div>
              							</div>
              							<div className={styles.mbListItemBasic1}>
                								<div className={styles.mbListItemitemRight1}>
                  									<div className={styles.label}>10,831,937.7876</div>
                  									<div className={styles.iconWrapper}>
                    										<Image className={styles.iconbase} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addLiquidity/icon/base.svg" />
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default AddLiquidity;