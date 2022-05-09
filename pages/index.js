import { motion, useTransform, useViewportScroll } from 'framer-motion';
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
  const { scrollYProgress: sy } = useViewportScroll();
  const capY = useTransform(sy, [0, 0.5, 1], [0, -200, -100]);

  return (
    <motion.div className={css.container}>
      <Head>
        <title>Full Glass</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

      <motion.section className={css.hero}>
        <h2>All you need is Love and Wine</h2>
        <h3>Over 150 years</h3>
        <div className={css.button}>Shop now</div>
      </motion.section>

      <motion.div
        className={css.ring}
        style={{ width: 400, height: 400, top: 'calc(50% - 200px)', left: 'calc(50% - 200px)' }}
      />

      <motion.div style={{ width: 500, top: '40%', left: 'calc(50% - 250px)' }}>
        <Image src={splash} alt="Wine splash" />
      </motion.div>

      <motion.div style={{ width: 200, top: '40%', left: 'calc(50% - 100px)' }}>
        <Image src={bottle} alt="Wine bottle" />
      </motion.div>

      <motion.div style={{ width: 200, top: '40%', left: 'calc(50% - 100px)', y: capY }}>
        <Image src={cap} alt="Wine bottle cap" />
      </motion.div>

      <motion.div style={{ top: '100%', left: '0%', width: '50%' }}>
        <Image src={pouring} alt="Wine being poured into glasses" />
      </motion.div>

      <motion.ul className={css.checklist} style={{ top: '100%', left: '50%', width: '50%' }}>
        <li>Made with the finest grapes</li>
        <li>Preserved for over 50 years</li>
        <li>0% Alcohol</li>
      </motion.ul>
    </motion.div>
  );
}
