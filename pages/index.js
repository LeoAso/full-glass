import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import css from '../styles/home.module.css';
import bottle from '../public/images/bottle.png';
import cap from '../public/images/cap.png';
import pouring from '../public/images/pouring.jpg';
import splash from '../public/images/splash.png';
import logo from '../public/logo.png';

export default function Home() {
  return (
    <motion.div>
      <Head>
        <title>Full Glass</title>
        <meta name="description" content="All you need is love and wine." />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.header class={css.header}>
        <Link href="/">
          <a className={css.brand}>
            <Image src={logo} alt="Brand logo" width={32} height={32} />
            <h1>Full Glass</h1>
          </a>
        </Link>

        <nav className={css.nav}>
          <div className={css.link}>Home</div>
          <div className={css.link}>About</div>
          <div className={css.link}>Collections</div>
          <div className={css.link}>Places</div>
          <div className={css.link}>Contact</div>
          <div className={css.button}>Shop Now</div>
        </nav>
      </motion.header>

      <motion.main>
        <motion.div className={css.hero}>
          <h2>All you need is Love and Wine</h2>
          <p>Over 150 years</p>
          <div className={css.button}>Shop now</div>
        </motion.div>

        <motion.div className={css.ring} />

        <motion.div>
          <Image src={bottle} alt="Wine bottle" />
        </motion.div>

        <motion.div>
          <Image src={cap} alt="Wine bottle cap" />
        </motion.div>

        <motion.div>
          <Image src={splash} alt="Wine splash" />
        </motion.div>

        <motion.div>
          <Image src={pouring} alt="Wine being poured into glasses" />
        </motion.div>

        <motion.div className={css.checklist}>
          <motion.div>Made with the finest grapes</motion.div>
          <motion.div>Preserved for over 50 years</motion.div>
          <motion.div>0% Alcohol</motion.div>
        </motion.div>
      </motion.main>
    </motion.div>
  );
}
