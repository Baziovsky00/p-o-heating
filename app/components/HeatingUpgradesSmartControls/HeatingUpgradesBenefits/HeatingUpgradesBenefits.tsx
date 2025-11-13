'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeatingUpgradesBenefits = () => {

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.92 },
        visible: {
            opacity: 1,
            scale: 1,
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
                    <h2>&mdash; &nbsp; Key Benefits</h2>
                    <h3>Why Upgrade Your Heating System?</h3>
                </div>
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

                <Link className={styles.cta} href={'/#contact'}>Upgrade Your heating sytem</Link>
            </div>
        </div>
    );
}

export default HeatingUpgradesBenefits;

const points = [
    {
        icon: '📱',
        title: 'Smart Boiler Controls',
        desc: 'Take charge of your heating from your phone, anytime, anywhere. Adjust temperatures, set schedules, and enjoy a smarter, more convenient home.'
    },
    {
        icon: '🧲',
        title: 'Magnetic Filters',
        desc: 'Protect your boiler and radiators from sludge buildup, keeping your system running efficiently and preventing costly repairs.'
    },
    {
        icon: '✨',
        title: 'Designer Radiators',
        desc: 'Combine style and performance with modern radiators that not only heat your home evenly but also look great in any room.'
    }
];