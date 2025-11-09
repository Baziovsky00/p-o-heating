'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import { CheckCircle, ClipboardCheck, PlugZap, Wrench } from 'lucide-react';
import Link from 'next/link';

const GasAppliancesSteps = () => {

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
                    <h2>&mdash; &nbsp; Our Process</h2>
                    <h3>How our installation process works</h3>
                </div>
                <div className={styles.sectionPar}>
                    We make your cooker or hob installation straightforward and stress-free. Here’s how it works:
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
            </div>
        </div>
    );
}

export default GasAppliancesSteps;

const points = [
    {
        icon: <ClipboardCheck size={28}/>,
        title: 'Initial Check',
        desc: 'We assess your kitchen setup and gas supply to ensure it’s ready for a new appliance.'
    },
    {
        icon: <PlugZap size={28}/>,
        title: 'Safe Disconnection',
        desc: 'If needed, we disconnect your old cooker or hob safely and cleanly.'
    },
    {
        icon: <Wrench size={28}/>,
        title: 'Precise Installation',
        desc: 'We connect your new appliance securely, test for leaks, and check operation.'
    },
    {
        icon: <CheckCircle size={28}/>,
        title: 'Final Testing',
        desc: 'Once everything’s working perfectly, we show you how to use your new cooker safely.'
    }
];