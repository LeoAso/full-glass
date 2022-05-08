import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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

      <motion.header>
        <Link href="/">
          <a>
            <Image src={logo} alt="Brand logo" width={40} height={40} />
            <h1>Full Glass</h1>
          </a>
        </Link>

        <nav>
          <div>Home</div>
          <div>About</div>
          <div>Collections</div>
          <div>Places</div>
          <div>Contact</div>
          <div>Shop Now</div>
        </nav>
      </motion.header>

      <motion.main>
        <motion.div>
          <motion.div>All you need is Love and Wine</motion.div>
          <motion.div>Over 150 years</motion.div>
          <motion.div>Shop now</motion.div>
        </motion.div>

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

        <motion.div>
          <motion.div>Made with the finest grapes</motion.div>
          <motion.div>Preserved for over 50 years</motion.div>
          <motion.div>0% Alcohol</motion.div>
        </motion.div>
      </motion.main>
    </motion.div>
  );
}
