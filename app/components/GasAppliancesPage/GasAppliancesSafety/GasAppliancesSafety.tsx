'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Link from 'next/link';

const GasAppliancesSafety = () => {

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
                    <h2>&mdash; &nbsp; Safety & Experience</h2>
                    <h3>Your safety and satisfaction come first</h3>
                </div>
                <div className={styles.sectionPar}>
                    We know how important it is to have gas work done safely and properly. That’s why we always take the time to check all connections, fittings, and gas lines before completing any installation. With years of experience serving Weston-super-Mare, Bristol, and Bridgwater, you can trust us to get the job done right — the first time.
                </div>
                <motion.div className={styles.points}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}>
                    {
                        points.map((point, i) => (
                            <motion.div className={styles.point} key={i} variants={itemVariants}>
                                <div className={styles.icon}>{point.icon}</div>
                                <h4>{point.title}</h4>
                            </motion.div>
                        ))
                    }
                </motion.div>

                <Link className={styles.cta} href={'/#contact'}>Book Your gas appliance installation</Link>
            </div>
        </div>
    );
}

export default GasAppliancesSafety;

const points = [
    {
        icon: '🛠️',
        title: 'Careful inspection of your existing gas line',
    },
    {
        icon: '✅',
        title: 'Fully compliant with current safety regulations',
    },
    {
        icon: '👨‍🔧',
        title: 'Friendly, tidy, and professional service',
    }
];