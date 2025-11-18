import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


const AddAmount:NextPage = () => {
  	return (
    		<div className={styles.right}>
      			<div className={styles.card}>
        				<div className={styles.bg} />
        				<div className={styles.btn}>
          					<b className={styles.text}>Enter An Amount</b>
        				</div>
        				<div className={styles.form}>
          					<div className={styles.pay}>
            						<div className={styles.title}>
              							<div className={styles.available500}>Available: 500</div>
            						</div>
            						<div className={styles.inputGroupwDropdown}>
              							<div className={styles.dropdown}>
                								<Image className={styles.iconiconarrowDown} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addAmount/icon/arrow-down.svg" />
                								<div className={styles.label}>FTR</div>
                								<Image className={styles.iconftr} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addAmount/icon/ftr.svg" />
              							</div>
              							<div className={styles.input}>
                								<b className={styles.text1}>400</b>
              							</div>
            						</div>
          					</div>
          					<Image className={styles.iconplus3} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addAmount/icon/Group.svg" />
          					<div className={styles.receive}>
            						<div className={styles.title}>
              							<div className={styles.available500}>Available: 1,200</div>
            						</div>
            						<div className={styles.inputGroupwDropdown}>
              							<div className={styles.dropdown}>
                								<Image className={styles.iconiconarrowDown} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addAmount/icon/arrow-down.svg" />
                								<div className={styles.label}>BUSD</div>
                								<Image className={styles.iconbusd} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addAmount/icon/BUSD.svg" />
              							</div>
              							<div className={styles.input1}>
                								<div className={styles.tab}> 129,16706043</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.tabsStyle2}>
          					<div className={styles.tabItemstyle2Itemlarge}>
            						<div className={styles.tab}>Add</div>
          					</div>
          					<div className={styles.tabItemstyle2Itemlarge1}>
            						<div className={styles.tab}>Remove</div>
          					</div>
        				</div>
        				<div className={styles.titleicon}>
          					<Image className={styles.iconiconarrowLeft2} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addAmount/icon/vector.svg" />
          					<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addAmount/icon/Group1.svg" />
        				</div>
        				<div className={styles.content}>
          					<div className={styles.mbListItemBasic}>
            						<div className={styles.mbListItemitemLeft}>
              							<div className={styles.text}>Support single-token supply</div>
            						</div>
            						<div className={styles.mbListItemitemRight}>
              							<div className={styles.text}>More</div>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconiconarrowTop} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/addAmount/icon/arrow-left-2.svg" />
              							</div>
            						</div>
          					</div>
          					<div className={styles.list}>
            						<div className={styles.mbListItemBasic1}>
              							<div className={styles.mbListItemitemLeft}>
                								<div className={styles.text}>My Liquidity (share 2.45%)</div>
              							</div>
            						</div>
            						<div className={styles.mbListItemBasic2}>
              							<div className={styles.mbListItemitemLeft}>
                								<div className={styles.title2}>100 FTR /  129,16706043 BUSD</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default AddAmount;