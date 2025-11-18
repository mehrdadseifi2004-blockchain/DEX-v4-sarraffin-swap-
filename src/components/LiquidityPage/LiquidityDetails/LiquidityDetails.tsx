import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


const LiquidityDetails:NextPage = () => {
  	return (
    		<div className={styles.liquidityDetails}>
      			<div className={styles.right}>
        				<div className={styles.top}>
          					<div className={styles.bg} />
          					<div className={styles.btn}>
            						<b className={styles.text}>Edit Liquidity</b>
          					</div>
        				</div>
        				<div className={styles.topParent}>
          					<div className={styles.top1}>
            						<div className={styles.mbListItemBasic}>
              							<div className={styles.mbListItemitemLeft}>
                								<div className={styles.text}>0x24ea...d449</div>
              							</div>
              							<div className={styles.mbListItemitemRight}>
                								<div className={styles.iconWrapper}>
                  									<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon-wrapper.svg" />
                								</div>
                								<div className={styles.iconWrapper}>
                  									<Image className={styles.iconcopy} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon-wrapper1.svg" />
                								</div>
              							</div>
            						</div>
            						<div className={styles.tag}>
              							<div className={styles.text1}>Public Pool</div>
            						</div>
          					</div>
          					<div className={styles.analytic}>
            						<div className={styles.row1}>
              							<div className={styles.mbListicon5}>
                								<Image className={styles.iconLeft} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon left.svg" />
                								<div className={styles.list}>
                  									<div className={styles.mbListItemBasic1}>
                    										<div className={styles.mbListItemitemLeft1}>
                      											<div className={styles.title}>46</div>
                    										</div>
                  									</div>
                  									<div className={styles.mbListItemBasic2}>
                    										<div className={styles.mbListItemitemLeft1}>
                      											<div className={styles.text}>Traders (24H)</div>
                    										</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.mbListicon5}>
                								<div className={styles.mbListItemitemLeft}>
                  									<div className={styles.iconWrapper}>
                    										<Image className={styles.iconcopy} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon left2.svg" />
                  									</div>
                								</div>
                								<div className={styles.list}>
                  									<div className={styles.mbListItemBasic1}>
                    										<div className={styles.mbListItemitemLeft1}>
                      											<div className={styles.title}>$1,123.24K</div>
                    										</div>
                  									</div>
                  									<div className={styles.mbListItemBasic2}>
                    										<div className={styles.mbListItemitemLeft1}>
                      											<div className={styles.text}>Total Liquidity</div>
                    										</div>
                  									</div>
                								</div>
              							</div>
            						</div>
            						<div className={styles.row1}>
              							<div className={styles.mbListicon5}>
                								<div className={styles.mbListItemitemLeft}>
                  									<div className={styles.iconWrapper}>
                    										<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon-wrapper3.svg" />
                  									</div>
                								</div>
                								<div className={styles.list}>
                  									<div className={styles.mbListItemBasic1}>
                    										<div className={styles.mbListItemitemLeft1}>
                      											<div className={styles.title}>$30.44K</div>
                    										</div>
                  									</div>
                  									<div className={styles.mbListItemBasic2}>
                    										<div className={styles.mbListItemitemLeft1}>
                      											<div className={styles.text}>Volume (24H)</div>
                    										</div>
                  									</div>
                								</div>
              							</div>
              							<div className={styles.mbListicon5}>
                								<div className={styles.mbListItemitemLeft}>
                  									<div className={styles.iconWrapper}>
                    										<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon left3.svg" />
                  									</div>
                								</div>
                								<div className={styles.list}>
                  									<div className={styles.mbListItemBasic1}>
                    										<div className={styles.mbListItemitemLeft1}>
                      											<div className={styles.title}>$91.27</div>
                    										</div>
                  									</div>
                  									<div className={styles.mbListItemBasic2}>
                    										<div className={styles.mbListItemitemLeft1}>
                      											<div className={styles.text}>Fees (24H)</div>
                    										</div>
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.totalLiquidity}>
            						<div className={styles.text}>Total Liquidity</div>
            						<div className={styles.chart}>
              							<Image className={styles.chartChild} width={48} height={48} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/Frame 56.svg" />
              							<div className={styles.frameParent}>
                								<div className={styles.iconcolorDotParent}>
                  									<div className={styles.iconcolorDot}>
                    										<Image className={styles.vectorIcon} width={6} height={6} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/color-dot.svg" />
                  									</div>
                  									<div className={styles.text}>37,970.428294 ETH (49.74%)</div>
                								</div>
                								<div className={styles.iconcolorDotParent}>
                  									<div className={styles.iconcolorDot}>
                    										<Image className={styles.vectorIcon} width={6} height={6} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/vector.svg" />
                  									</div>
                  									<div className={styles.text}>14,274,115.297198 USDC (50.26%)</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.totalLiquidity}>
            						<div className={styles.text}>My Liquidity</div>
            						<div className={styles.mbListItemBasic9}>
              							<div className={styles.iconcolorDotParent}>
                								<div className={styles.iconWrapper}>
                  									<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon-wrapperETH.svg" />
                								</div>
                								<div className={styles.paragraph}>9,577.514455</div>
              							</div>
              							<div className={styles.mbListItemitemRight1}>
                								<div className={styles.iconWrapper}>
                  									<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon$-wrapper.svg" />
                								</div>
                								<div className={styles.paragraph}>10,831,937.7876</div>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.mbListItemBasic10}>
        				<div className={styles.mbListItemitemLeft}>
          					<div className={styles.text}>Create a pool for free</div>
        				</div>
        				<div className={styles.mbListItemitemRight2}>
          					<div className={styles.text}>/ 0x24ea...d449</div>
        				</div>
      			</div>
      			<div className={styles.menu}>
        				<div className={styles.menu1}>
          					<div className={styles.logoDexfull}>
            						<div className={styles.logoDexfullChild} />
          					</div>
          					<div className={styles.menu2}>
            						<div className={styles.menuItemHorizontalitem}>
              							<div className={styles.paragraph}>Home</div>
            						</div>
            						<div className={styles.menuItemHorizontalitem1}>
              							<div className={styles.paragraph}>Liquidity</div>
            						</div>
            						<div className={styles.menuItemHorizontalitem2}>
              							<div className={styles.paragraph}>Mining</div>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconbase} width={16} height={16} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon-wrapperBase.svg" />
              							</div>
            						</div>
            						<div className={styles.menuItemHorizontalitem2}>
              							<div className={styles.paragraph}>Developer</div>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconbase} width={16} height={16} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon-wrapperBase.svg" />
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.itemRight}>
          					<Image className={styles.logoDexiconnic} width={40} height={40} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/iconnic.svg" />
          					<div className={styles.address}>
            						<div className={styles.mbListItemitemLeft}>
              							<div className={styles.iconcolorDot2}>
                								<Image className={styles.vectorIcon} width={6} height={6} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/color-dotRed.svg" />
              							</div>
              							<div className={styles.text}>BSC</div>
            						</div>
            						<div className={styles.tag1}>
              							<div className={styles.paragraph}>0xBAD7...E116</div>
            						</div>
          					</div>
          					<div className={styles.btn1}>
            						<Image className={styles.iconcopy} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon-wrapperBase.svg" />
          					</div>
        				</div>
      			</div>
      			<div className={styles.top2}>
        				<Image className={styles.iconicon2Coin} width={78} height={48} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/2-coin.svg" />
        				<div className={styles.tableCelladditionalComponen}>
          					<div className={styles.ethUsdcLp}>ETH-USDC LP</div>
        				</div>
      			</div>
      			<div className={styles.texttext}>
        				<div className={styles.text}>1 ETH = 2607.46 USDC</div>
        				<Image className={styles.iconLeft} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/arrow-exchange-swap.svg" />
      			</div>
      			<div className={styles.tabsStyle1}>
        				<div className={styles.dividerhorizontal} />
        				<div className={styles.tabs}>
          					<div className={styles.tab1}>
            						<div className={styles.paragraph}>Depth Chart</div>
          					</div>
          					<div className={styles.tab2}>
            						<div className={styles.paragraph}>Volume</div>
          					</div>
          					<div className={styles.tab2}>
            						<div className={styles.paragraph}>Fee returns</div>
          					</div>
          					<div className={styles.tab2}>
            						<div className={styles.paragraph}>Traders</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.tabsStyle11}>
        				<div className={styles.dividerhorizontal} />
        				<div className={styles.tabs}>
          					<div className={styles.tab1}>
            						<div className={styles.paragraph}>Parameters</div>
          					</div>
          					<div className={styles.tab2}>
            						<div className={styles.paragraph}>Swaps</div>
          					</div>
          					<div className={styles.tab2}>
            						<div className={styles.paragraph}>Liquidity Providers</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.tabsStyle2}>
        				<div className={styles.tabItemstyle2Itemsmall}>
          					<div className={styles.paragraph}>Logarithmic</div>
        				</div>
        				<div className={styles.tabItemstyle2Itemsmall1}>
          					<div className={styles.paragraph}>Linear</div>
        				</div>
      			</div>
      			<div className={styles.chart1}>
        				<Image className={styles.chartIcon} width={830} height={250} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/chart.svg" />
        				<div className={styles.time}>
          					<div className={styles.text}>46.83</div>
          					<div className={styles.text}>117.65</div>
          					<div className={styles.text}>1.17K</div>
          					<div className={styles.text}>2.95K</div>
        				</div>
      			</div>
      			<div className={styles.frameGroup}>
        				<div className={styles.mbListItemBasicParent}>
          					<div className={styles.mbListItemBasic11}>
            						<div className={styles.mbListItemitemLeft1}>
              							<div className={styles.text}>Total swap volume</div>
            						</div>
            						<div className={styles.mbListItemitemRight3}>
              							<div className={styles.paragraph}>$1,032.24</div>
            						</div>
          					</div>
          					<div className={styles.mbListItemBasic12}>
            						<div className={styles.iconcolorDotParent}>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon-wrapperETH.svg" />
              							</div>
              							<div className={styles.paragraph}>1.104008 WETH</div>
            						</div>
            						<div className={styles.mbListItemitemRight1}>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon$-wrapper.svg" />
              							</div>
              							<div className={styles.paragraph}> 2,867 USDC</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.mbListItemBasicParent}>
          					<div className={styles.mbListItemBasic11}>
            						<div className={styles.mbListItemitemLeft1}>
              							<div className={styles.text}>Total swap Fee</div>
            						</div>
            						<div className={styles.mbListItemitemRight3}>
              							<div className={styles.paragraph}>$1,032.24</div>
            						</div>
          					</div>
          					<div className={styles.mbListItemBasic12}>
            						<div className={styles.iconcolorDotParent}>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon-wrapperETH.svg" />
              							</div>
              							<div className={styles.paragraph}>1.24153 WETH</div>
            						</div>
            						<div className={styles.mbListItemitemRight1}>
              							<div className={styles.iconWrapper}>
                								<Image className={styles.iconshare} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/liquidityDetails/icon/icon$-wrapper.svg" />
              							</div>
              							<div className={styles.paragraph}>3,234 USDC</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.mbListItemBasicParent}>
          					<div className={styles.mbListItemBasic11}>
            						<div className={styles.mbListItemitemLeft1}>
              							<div className={styles.text}>Total Number of Traders</div>
            						</div>
            						<div className={styles.mbListItemitemRight3}>
              							<div className={styles.paragraph}>$1,032.24</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.mbListItemBasicContainer}>
        				<div className={styles.mbListItemBasic11}>
          					<div className={styles.mbListItemitemLeft1}>
            						<div className={styles.text}>Creator</div>
          					</div>
          					<div className={styles.mbListItemitemRight3}>
            						<div className={styles.paragraph}>0xBAD7...E116</div>
          					</div>
        				</div>
        				<div className={styles.mbListItemBasic11}>
          					<div className={styles.mbListItemitemLeft1}>
            						<div className={styles.text}>Creation Time</div>
          					</div>
          					<div className={styles.mbListItemitemRight3}>
            						<div className={styles.paragraph}>2021/05/21 16:50:15</div>
          					</div>
        				</div>
        				<div className={styles.mbListItemBasic11}>
          					<div className={styles.mbListItemitemLeft1}>
            						<div className={styles.text}>Fee Rate</div>
          					</div>
          					<div className={styles.mbListItemitemRight3}>
            						<div className={styles.paragraph}>$1,032.24</div>
          					</div>
        				</div>
        				<div className={styles.mbListItemBasic11}>
          					<div className={styles.mbListItemitemLeft1}>
            						<div className={styles.text}>Slippage Coefficient</div>
          					</div>
          					<div className={styles.mbListItemitemRight3}>
            						<div className={styles.paragraph}>1</div>
          					</div>
        				</div>
        				<div className={styles.mbListItemBasic11}>
          					<div className={styles.mbListItemitemLeft1}>
            						<div className={styles.text}>Min Price</div>
          					</div>
          					<div className={styles.mbListItemitemRight3}>
            						<div className={styles.paragraph}>0.000001</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.logo}>
        				<Image className={styles.photo2021110817252} width={66} height={66} sizes="100vw" alt="" src="/logo.png" />
        				<b className={styles.kiba}>KRNT</b>
      			</div>
    		</div>);
};

export default LiquidityDetails;