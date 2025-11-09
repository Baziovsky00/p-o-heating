'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Link from 'next/link';

const RadiatorsProblems = () => {

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
                    <h2>&mdash; &nbsp; Fixed Fast</h2>
                    <h3>Common Radiator Issues We Fix</h3>
                </div>
                <p className={styles.sectionPar}>
                    Homeowners in Weston-super-Mare, Bristol, and Bridgwater often face similar radiator issues — and our experts have solutions for all of them:
                </p>
                <motion.div className={styles.points}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}>
                    {
                        points.map((point, i) => (
                            <motion.div className={styles.point} key={i} variants={itemVariants}>
                                <div className={styles.icon}>{point.icon}</div>
                                <h3>{point.title}</h3>
                                <p>{point.desc}</p>
                            </motion.div>
                        ))
                    }
                </motion.div>

                <Link className={styles.cta} href={'/#contact'}>Request Emergency Repair</Link>
            </div>
        </div>
    );
}

export default RadiatorsProblems;

const points = [
    {
        icon: '💧',
        title: 'Leaking valves or joints',
        desc: 'We quickly find and fix leaks to prevent water damage and inefficiency'
    },
    {
        icon: '🌡️',
        title: 'Cold spots or uneven heating',
        desc: 'We bleed and balance your system to ensure even warmth'
    },
    {
        icon: '🔊',
        title: 'Noisy or gurgling radiators',
        desc: 'We remove trapped air and restore silent, efficient operation'
    },
        {
        icon: '⚙️',
        title: 'Low heat output',
        desc: 'We diagnose and resolve blockages or valve problems for full performance'
    }
];