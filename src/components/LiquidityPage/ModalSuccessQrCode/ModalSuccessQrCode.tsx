import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';


const ModalSuccessQrCode:NextPage = () => {
  	return (
    		<div className={styles.modalSuccess}>
      			<div className={styles.nav}>
        				<div className={styles.titleicon}>
          					<div className={styles.iconiconarrowLeft2} />
          					<div className={styles.title}>Invite Your Friends!</div>
        				</div>
        				<Image className={styles.iconcloseSmall} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/modalSuccess/icon/close-small.svg" />
      			</div>
      			<Image className={styles.ftribeioQrCodeIcon} width={219} height={219} sizes="100vw" alt="" src="liquidityPage/modalSuccess/icon/ftribe.io-qr-code.svg" />
      			<div className={styles.btnParent}>
        				<div className={styles.btn}>
          					<Image className={styles.iconcopy} width={24} height={24} sizes="100vw" alt="" src="liquidityPage/modalSuccess/icon/copy.svg" />
        				</div>
        				<div className={styles.title1}>Copy Link</div>
      			</div>
    		</div>);
};

export default ModalSuccessQrCode;