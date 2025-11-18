import type { NextPage } from 'next';
import styles from './index.module.css';


const Modal:NextPage = () => {
  	return (
    		<div className={styles.modal}>
      			<div className={styles.title}>Risk Disclaimer</div>
      			<div className={styles.content}>
        				<div className={styles.input}>
          					<div className={styles.text}>Market making and liquidity provision involve risk of loss and are not suitable for every user. The valuation and prices of token assets may fluctuate substantially, and, as a result, users may see profits that are below expectations, or even sustain losses.</div>
        				</div>
        				<div className={styles.checkbox1}>
          					<div className={styles.checkbox} />
        				</div>
      			</div>
      			<div className={styles.btn}>
        				<b className={styles.text1}>Continue</b>
      			</div>
    		</div>);
};

export default Modal;