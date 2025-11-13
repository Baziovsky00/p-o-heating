'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import { DropletIcon, Smartphone, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HeatingUpgradesPoints = () => {

    const itemVariants = {
        hidden: { opacity: 0, scale: 1, y: 40 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: 'spring' as 'spring',
                stiffness: 260,
                damping: 20,
            },
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.2,
            },
        },
    };


    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.pageHeading}>
                    <h2>&mdash; &nbsp; Energy Savings & Comfort</h2>
                    <h3>More Comfort, Less Energy Waste</h3>
                </div>
                <div className={styles.bottomContent}>
                    <Image sizes="(max-width: 768px) 100vw, 1920px" src={'/images/heating-upgrades-points.webp'} width={800} height={800} alt='Energy save and comfort with heating upgrades' />
                    <motion.div className={styles.points}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}>
                        {
                            points.map((point, i) => (
                                <motion.div className={styles.point} key={i} variants={itemVariants}>
                                    <div className={styles.icon}>{point.icon}</div>
                                    <h4>{point.title}</h4>
                                    <p>{point.desc}</p>
                                </motion.div>
                            ))
                        }
                    </motion.div>
                </div>
                {/* <Link className={styles.cta} href={'/#contact'}>Upgrade Your heating sytem</Link> */}
            </div>
        </div>
    );
}

export default HeatingUpgradesPoints;

const points = [
    {
        icon: <Smartphone size={31}/>,
        title: 'Control Your Heating Anytime',
        desc: 'Take full control of your home’s temperature from your phone. Smart scheduling and remote access mean you only heat rooms when needed, saving energy and money.'
    },
    {
        icon: <DropletIcon size={31}/>,
        title: 'Even Heat Distribution',
        desc: 'Designer radiators and magnetic filters ensure warm, consistent rooms while protecting your boiler from sludge buildup and inefficiencies.'
    },
    {
        icon: <TrendingUp size={31}/>,
        title: 'Save Energy & Stay Cozy',
        desc: 'Optimized heating reduces waste, lowers energy bills, and keeps every corner of your home perfectly comfortable, all year round.'
    }
];