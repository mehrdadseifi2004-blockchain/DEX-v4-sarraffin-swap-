import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


const LiquidityEmpty:NextPage = () => {
  	return (
    		<div className={styles.liquidityEmpty}>
      			<div className={styles.right}>
        				<div className={styles.cardaddLiquid}>
          					<div className={styles.bottom}>
            						{/* <Image className={styles.bgIcon} width={403} height={154} sizes="100vw" alt="" src="liquidityPage/icon/BUSD.svg" /> */}
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
                    										<Image className={styles.iconbase} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/logo.svg" />
                  									</div>
                  									<div className={styles.label}>KRNT</div>
                								</div>
                								<Image className={styles.iconbase1} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/base.svg" />
              							</div>
              							<Image className={styles.iconbase1} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/plus-3.svg" />
              							<div className={styles.inputBigIcondefault1}>
                								<div className={styles.left}>
                  									<div className={styles.iconWrapper}>
                    										<Image className={styles.iconbase} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/BUSD.svg" />
                  									</div>
                  									<div className={styles.label}>WBNB</div>
                								</div>
                								<Image className={styles.iconbase1} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/base.svg" />
              							</div>
            						</div>
            						<div className={styles.btn1}>
              							<b className={styles.text1}>Create a pool</b>
            						</div>
            						<div className={styles.input}>
              							<div className={styles.text2}>0x75c2...ff34</div>
              							<Image className={styles.iconbase4} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/base.svg" />
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
                      											<Image className={styles.iconbase} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/base.svg" />
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.mbListItemBasic1}>
                  									<div className={styles.mbListItemitemRight1}>
                    										<div className={styles.label}>10,831,937.7876</div>
                    										<div className={styles.iconWrapper}>
                      											<Image className={styles.iconbase} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/base.svg" />
                    										</div>
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.menu}>
        				<div className={styles.menu1}>
          					<div className={styles.logoDexfull}>
            						<div className={styles.logoDexfullChild} />
          					</div>
          					<div className={styles.menu2}>
            						<div className={styles.menuItemHorizontalitem}>
              							<div className={styles.label}>Home</div>
            						</div>
            						<div className={styles.menuItemHorizontalitem1}>
              							<div className={styles.label}>Liquidity</div>
            						</div>
            						<div className={styles.menuItemHorizontalitem2}>
              							<div className={styles.label}>Minting</div>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconbase7} width={16} height={16} sizes="100vw" alt="" src="liquidityPage/icon/base.svg" />
              							</div>
            						</div>
            						<div className={styles.menuItemHorizontalitem2}>
              							<div className={styles.label}>Developer</div>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconbase7} width={16} height={16} sizes="100vw" alt="" src="liquidityPage/icon/base.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.itemRight}>
          					<Image className={styles.logoDexiconnic} width={40} height={40} sizes="100vw" alt="" src="liquidityPage/icon/iconnic.svg" />
          					<div className={styles.address}>
            						<div className={styles.eth}>
              							<div className={styles.iconcolorDot}>
                								<Image className={styles.vectorIcon} width={6} height={6} sizes="100vw" alt="" src="vector.svg" />
              							</div>
              							<div className={styles.text}>BSC</div>
            						</div>
            						<div className={styles.tag}>
              							<div className={styles.label}>0xBAD7...E116</div>
            						</div>
          					</div>
          					<div className={styles.btn2}>
            						<Image className={styles.iconbase} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/base.svg" />
          					</div>
        				</div>
      			</div>
      			<div className={styles.myLiquidity}>My Liquidity</div>
      			<div className={styles.table}>
        				<div className={styles.list1}>
          					<div className={styles.div}>
            						<div className={styles.tableCelladditionalComponen}>
              							<div className={styles.left2}>
                								<Image className={styles.avatarIcon} width={60} height={40} sizes="100vw" alt="" src="liquidityPage/icon/logo.svg" />
                								<Image className={styles.avatarIcon} width={60} height={40} sizes="100vw" alt="" src="liquidityPage/icon/BUSD.svg" />
												<div className={styles.label}>0x75f5...1666</div>
              							</div>
              							<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/share.svg" />
            						</div>
            						<div className={styles.tableCellheader}>
              							<div className={styles.header}>1.104008 KRNT / 2,888.28 WBNB</div>
            						</div>
            						<div className={styles.tableCelladditionalComponen1}>
              							<div className={styles.btn3}>
                								<div className={styles.btn4}>
                  									<b className={styles.text}>Manager</b>
                								</div>
                								<div className={styles.btn4}>
                  									<b className={styles.text}>Details</b>
                								</div>
              							</div>
            						</div>
          					</div>
          					{/* <div className={styles.div}>
            						<div className={styles.tableCelladditionalComponen}>
              							<div className={styles.left2}>
                								<Image className={styles.avatarIcon} width={60} height={40} sizes="100vw" alt="" src="liquidityPage/icon/DAI.svg" />
                								<Image className={styles.avatarIcon} width={60} height={40} sizes="100vw" alt="" src="liquidityPage/icon/USDC.svg" />
                								<div className={styles.label}>0x3đ1...077b</div>
              							</div>
              							<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/share.svg" />
            						</div>
            						<div className={styles.tableCellheader}>
              							<div className={styles.header}>300 DAIDAI / 300 USDC</div>
            						</div>
            						<div className={styles.tableCelladditionalComponen1}>
              							<div className={styles.btn3}>
                								<div className={styles.btn4}>
                  									<b className={styles.text}>Manager</b>
                								</div>
                								<div className={styles.btn4}>
                  									<b className={styles.text}>Details</b>
                								</div>
              							</div>
            						</div>
          					</div> */}
          					{/* <div className={styles.div}>
            						<div className={styles.tableCelladditionalComponen}>
              							<div className={styles.left2}>
                								<Image className={styles.avatarIcon} width={60} height={40} sizes="100vw" alt="" src="liquidityPage/icon/BUSD.svg" />
                								<Image className={styles.avatarIcon} width={60} height={40} sizes="100vw" alt="" src="liquidityPage/icon/USDT.svg" />
                								<div className={styles.label}>0x3đ1...077b</div>
              							</div>
              							<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/share.svg" />
            						</div>
            						<div className={styles.tableCellheader}>
              							<div className={styles.header}>500 BUSD / 500 USDT</div>
            						</div>
            						<div className={styles.tableCelladditionalComponen1}>
              							<div className={styles.btn3}>
                								<div className={styles.btn4}>
                  									<b className={styles.text}>Manager</b>
                								</div>
                								<div className={styles.btn4}>
                  									<b className={styles.text}>Details</b>
                								</div>
              							</div>
            						</div>
          					</div> */}
          					{/* <div className={styles.div}>
            						<div className={styles.tableCelladditionalComponen}>
              							<div className={styles.left2}>
                								<Image className={styles.avatarIcon} width={60} height={40} sizes="100vw" alt="" src="liquidityPage/icon/ETH.svg" />
                								<Image className={styles.avatarIcon} width={60} height={40} sizes="100vw" alt="" src="liquidityPage/icon/1inch.svg" />
                								<div className={styles.label}>0x75f5...1666</div>
              							</div>
              							<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/share.svg" />
            						</div>
            						<div className={styles.tableCellheader}>
              							<div className={styles.header}>0.624822 WETH / 339,97585406 1INCH</div>
            						</div>
            						<div className={styles.tableCelladditionalComponen1}>
              							<div className={styles.btn3}>
                								<div className={styles.btn4}>
                  									<b className={styles.text}>Manager</b>
                								</div>
                								<div className={styles.btn4}>
                  									<b className={styles.text}>Details</b>
                								</div>
              							</div>
            						</div>
          					</div> */}
          					{/* <div className={styles.div}>
            						<div className={styles.tableCelladditionalComponen}>
              							<div className={styles.left2}>
                								<Image className={styles.avatarIcon} width={60} height={40} sizes="100vw" alt="" src="liquidityPage/icon/DAI.svg" />
                								<Image className={styles.avatarIcon} width={60} height={40} sizes="100vw" alt="" src="liquidityPage/icon/ETH.svg" />
                								<div className={styles.label}>0x3đ1...077b</div>
              							</div>
              							<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/icon/share.svg" />
            						</div>
            						<div className={styles.tableCellheader}>
              							<div className={styles.header}>100 DAIDAI / 0,03837881 WETH</div>
            						</div>
            						<div className={styles.tableCelladditionalComponen1}>
              							<div className={styles.btn3}>
                								<div className={styles.btn4}>
                  									<b className={styles.text}>Manager</b>
                								</div>
                								<div className={styles.btn4}>
                  									<b className={styles.text}>Details</b>
                								</div>
              							</div>
            						</div>
          					</div> */}
        				</div>
        				<div className={styles.tableCell}>
          					<div className={styles.tableCelltext}>
            						<div className={styles.text19}>Pool</div>
          					</div>
          					<div className={styles.tableCelltext1}>
            						<div className={styles.text19}>My Liquidity</div>
          					</div>
          					<div className={styles.tableCelltext2}>
            						<div className={styles.text19}>Action</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.logo}>
        				<Image className={styles.photo2021110817252} width={66} height={66} sizes="100vw" alt="krntLogo" src="/logo.png" />
        				<b className={styles.kiba}>KRNT</b>
      			</div>
    		</div>);
};

export default LiquidityEmpty;