import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


const SelectAPool:NextPage = () => {
  	return (
    		<div className={styles.right}>
      			<div className={styles.card}>
        				<div className={styles.bg} />
        				<div className={styles.cartLiquidity}>
          					<div className={styles.bg1} />
          					<div className={styles.title}>
            						<div className={styles.x75c2ff34}>0x75c2...ff34</div>
            						<Image className={styles.iconcheckSelect} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/selectAPool/icon/check-select.svg" />
          					</div>
          					<div className={styles.chart}>
            						<Image className={styles.chartIcon} width={82} height={82} sizes="100vw" alt="" src="liquidityPage/selectAPool/icon/chart.svg" />
            						<div className={styles.note}>
              							<div className={styles.texttext}>
                								<div className={styles.iconWrapper}>
                  									<div className={styles.iconcolorDot}>
                    										<Image className={styles.vectorIcon} width={6} height={6} sizes="100vw" alt="" src="liquidityPage/selectAPool/icon/vector1.svg" />
                  									</div>
                								</div>
                								<div className={styles.text}>9,577.514455 ETH (68.65%)</div>
              							</div>
              							<div className={styles.texttext}>
                								<div className={styles.iconWrapper}>
                  									<div className={styles.iconcolorDot}>
                    										<Image className={styles.vectorIcon} width={6} height={6} sizes="100vw" alt="" src="liquidityPage/selectAPool/icon/vector2.svg" />
                  									</div>
                								</div>
                								<div className={styles.text}>10,831,937.7876 USDC (13.35%)</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.dividerhorizontal} />
          					<div className={styles.content}>
            						<div className={styles.mbListItemBasic}>
              							<div className={styles.mbListItemitemLeft}>
                								<div className={styles.iconWrapper2}>
                  									<Image className={styles.iconiconarrowTop} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/selectAPool/icon/2.svg" />
                								</div>
                								<div className={styles.text}>Single</div>
              							</div>
              							<div className={styles.mbListItemitemRight}>
                								<div className={styles.text}>More</div>
                								<div className={styles.iconWrapper2}>
                  									<Image className={styles.iconiconarrowTop} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/selectAPool/icon/icon-wrapper.svg" />
                								</div>
              							</div>
            						</div>
            						<div className={styles.list}>
              							<div className={styles.mbListItemBasic1}>
                								<div className={styles.mbListItemitemLeft1}>
                  									<div className={styles.text}>Single token market making</div>
                								</div>
              							</div>
              							<div className={styles.mbListItemBasic1}>
                								<div className={styles.mbListItemitemLeft1}>
                  									<div className={styles.text}>Fee Rate = 0%</div>
                								</div>
              							</div>
              							<div className={styles.mbListItemBasic1}>
                								<div className={styles.mbListItemitemLeft1}>
                  									<div className={styles.text}>Slippage Coefficient = 0.8</div>
                								</div>
              							</div>
              							<div className={styles.mbListItemBasic}>
                								<div className={styles.mbListItemitemLeft1}>
                  									<div className={styles.text}>Created by 0x95c4...1cb0</div>
                								</div>
                								<div className={styles.mbListItemitemRight1}>
                  									<div className={styles.text}>2020/8/7</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.input}>
          					<div className={styles.label}>Enter pool address</div>
          					<Image className={styles.iconsearch} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/selectAPool/icon/search.svg" />
        				</div>
        				<div className={styles.titleicon}>
          					<Image className={styles.iconWrapper} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/selectAPool/icon/arrow-left-2.svg" />
          					<div className={styles.title1}>Select A Pool</div>
        				</div>
        				<div className={styles.pLink}>
          					<span>{`If the pool is not suitable, you can `}</span>
          					<span className={styles.create}>create</span>
          					<span> one</span>
        				</div>
      			</div>
    		</div>);
};

export default SelectAPool;