"use client";
// components/FAQ/FaqPage.tsx
import { useState } from 'react';
import Head from 'next/head';
import styles from './index.module.css'; // Import CSS Module
import ButtonFaq from '@/components/ButtonElement/ButtonFaq';
import Link from 'next/link';
// --- Data for the FAQ items ---
const faqData = [
    {
      id: 1,
      question: 'What is a Decentralized Exchange (DEX)?',
      answer:'A Decentralized Exchange (DEX) is a peer-to-peer marketplace where cryptocurrency traders make transactions directly with one another. DEXs are non-custodial, meaning a user remains in control of their private keys when transacting on a DEX platform.',
    },
    {
      id: 2,
      question: 'How is this DEX different from a Centralized Exchange (CEX)?',
      answer:
        'Unlike Centralized Exchanges (CEXs) like Binance or Coinbase, our DEX does not hold your funds or personal data. All trades are executed via smart contracts directly from your wallet. This provides greater security, privacy, and control over your assets.',
    },
    {
      id: 3,
      question: 'What wallet can I use to connect?',
      answer:
        'You can connect to our DEX using any Web3-compatible wallet. We recommend popular wallets such as MetaMask, Trust Wallet, or Ledger for the best experience. Simply click the "Connect Wallet" button to get started.',
    },
    {
      id: 4,
      question: 'What are "gas fees" and why do I have to pay them?',
      answer:
        'Gas fees are transaction fees paid to network validators to process and validate your transaction on the blockchain. These fees are not collected by our DEX but are a fundamental part of the underlying blockchain (e.g., BinanceSmartChain). Fee amounts vary based on network congestion.',
    },
    {
      id: 5,
      question: 'Is trading on a DEX secure?',
      answer:
        'Security is our top priority. Our smart contracts have been rigorously audited by third-party security firms. However, the security of your funds also depends on you. Never share your private key or seed phrase with anyone.',
    },
    {
      id: 6,
      question: 'How do I start trading?',
      answer:'1. Connect your Web3 wallet. 2. Make sure you have the native currency of the blockchain (e.g., BNB) in your wallet for gas fees. 3. Select the tokens you wish to swap. 4. Approve the token interaction (if it\'s your first time). 5. Confirm the swap transaction in your wallet.',
    },
];

const FaqPage = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // --- SEO: JSON-LD Structured Data for FAQPage ---
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        // CORRECTED: Using '\\n' to find newlines
      // The new, more robust replacement
text: item.answer.replace(new RegExp('\\n', 'g'), '<br>'),
      },
    })),
  };

  return (
    <>
      <Head>
        <title>FAQ - Our Decentralized Exchange</title>
        <meta name="description" content="Find answers to common questions about our DEX, including security, fees, and how to get started." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>

      <div className={styles.faqContainer}>
        <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
        <div className={styles.faqList}>
          {faqData.map(item => (
            <div key={item.id} className={styles.faqItem}>
              <button className={styles.faqQuestion} onClick={() => toggleFaq(item.id)}>
                <span>{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  // Using template literal to combine classes from CSS module
                  className={`${styles.faqIcon} ${openId === item.id ? styles.open : ''}`}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" />
                </svg>
              </button>
              <div className={`${styles.faqAnswer} ${openId === item.id ? styles.open : ''}`}>
                <div className={styles.faqAnswerContent}>
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
         <div className={styles.buttonfaq}>
          <Link href="/">
      <ButtonFaq
      text="Home"
      />
      </Link>
        </div>
      </div>
    </>
  );
};

export default FaqPage;