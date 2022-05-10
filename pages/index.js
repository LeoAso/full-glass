import { motion, useMotionTemplate, useTransform, useViewportScroll } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import css from '../styles/home.module.css';
import bottle from '../public/images/bottle.png';
import cap from '../public/images/cap.png';
import pouring from '../public/images/pouring.jpg';
import splash from '../public/images/splash.png';
import logo from '../public/logo.png';

/** @see https://easings.net/#easeInOutCubic */
function ease(x) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

export default function Home() {
  const { scrollYProgress: sy } = useViewportScroll();

  // I set all dimensions and distances in vh since that is the easiest way
  // to keep them consistent across different screen sizes

  const headerY = useTransform(sy, [0.5, 1], ['0vh', '-100vh'], { ease });

  const capY = useTransform(sy, [0, 0.5, 1], ['35vh', '13vh', '0vh'], { ease });
  const bottleY = useTransform(sy, [0, 0.5, 1], ['35vh', '68vh', '0vh'], { ease });
  const bottleScale = useTransform(sy, [0.5, 1], [1, 0.8], { ease });
  const bottleShadowAlpha = useTransform(sy, [0.5, 1], [0, 0.5]);
  const bottleShadow = useMotionTemplate`drop-shadow(0px 0px 8px rgba(0, 0, 0, ${bottleShadowAlpha}))`;

  const ringSize = useTransform(sy, [0, 0.5], ['60vh', '80vh'], { ease });

  const splashY = useTransform(sy, [0, 0.5, 1], ['2vh', '2vh', '-96vh'], { ease });
  const splashScale = useTransform(sy, [0, 0.4], [0.2, 1], { ease });

  const heroY = useTransform(sy, [0.1, 0.4, 0.5, 1], ['10vh', '0vh', '0vh', '-100vh'], { ease });
  const heroAlpha = useTransform(sy, [0.1, 0.4], [0, 1], { ease });

  const pouringY = useTransform(sy, [0.5, 1], ['110vh', '0vh'], { ease });
  const checklistY = useTransform(sy, [0.5, 1], ['150vh', '0vh'], { ease });
  const checklistBg = useTransform(sy, [0.7, 0.9], ['#e19701', '#ffffff'], { ease });

  return (
    <motion.div className={css.container}>
      <Head>
        <title>Full Glass</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="All you need is love and wine." />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.header class={css.header} style={{ y: headerY }}>
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

      <motion.div className={css.centered}>
        <motion.div
          className={css.ring}
          style={{ width: ringSize, height: ringSize, y: headerY }}
        />
      </motion.div>

      <motion.div className={css.centered}>
        <motion.div
          style={{
            width: '50vh',
            x: -3,
            y: splashY,
            scale: splashScale,
            opacity: splashScale,
            originX: 0.5,
            originY: 1,
          }}
        >
          <Image src={splash} alt="Wine splash" />
        </motion.div>
      </motion.div>

      <motion.div className={css.centered}>
        <motion.section className={css.hero} style={{ y: heroY, opacity: heroAlpha }}>
          <h2>All you need is Love and Wine</h2>
          <h3>Over 150 years</h3>
          <div className={css.button}>Shop now</div>
        </motion.section>
      </motion.div>

      <motion.div style={{ left: '0%', width: '50%', height: '100vh', y: pouringY }}>
        <Image src={pouring} alt="Wine being poured into glasses" objectFit="cover" layout="fill" />
      </motion.div>

      <motion.ul
        className={css.checklist}
        style={{
          left: '50%',
          width: '50%',
          height: '100vh',
          y: checklistY,
          backgroundColor: checklistBg,
        }}
      >
        <li>Made with the finest grapes</li>
        <li>Preserved for over 50 years</li>
        <li>0% Alcohol</li>
      </motion.ul>

      <motion.div class={css.centered}>
        <motion.div style={{ width: '26vh', scale: bottleScale }}>
          <motion.div style={{ y: bottleY, filter: bottleShadow }}>
            <Image src={bottle} alt="Wine bottle" />
          </motion.div>

          <motion.div style={{ position: 'absolute', top: 0, y: capY }}>
            <Image src={cap} alt="Wine bottle cap" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
