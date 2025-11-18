"use client";

import styles from './index.module.css';

interface ButtonProps {
  text?: string;  // متن باتن (پیش‌فرض: Home)
  customClass?: string;  // کلاس استایل اضافی برای customize در صفحات مختلف
  onClick?: () => void;  // اگر نیاز به handler دارید
}

const ButtonFaq: React.FC<ButtonProps> = ({ text = 'FAQ', customClass = '', onClick }) => {
  return (
    <button 
      className={`${styles.btn} ${styles.cube} ${customClass}`} 
      type="button"
      onClick={onClick}
    >
      <div className={styles.bgTop}>
        <div className={styles.bgInner} />
      </div>
      <div className={styles.bgRight}>
        <div className={styles.bgInner} />
      </div>
      <div className={styles.bg}>
        <div className={styles.bgInner} />
      </div>
      <div className={styles.text}>{text}</div>
    </button>
  );
};

export default ButtonFaq;