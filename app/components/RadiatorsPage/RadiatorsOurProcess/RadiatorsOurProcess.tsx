'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const RadiatorsOurProcess = () => {

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.92, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
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
                    <h3>A Simple, Stress-Free Process — from Quote to Comfort</h3>
                </div>
                <p className={styles.sectionPar}>
                    Our service is designed to be fast, transparent, and hassle-free. Whether you’re in Weston-super-Mare, Bristol, or Bridgwater, we make sure every job runs smoothly from start to finish.
                </p>
                    <motion.div className={styles.points}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.12 }}>
                        {
                            points.map((point, i) => (
                                <motion.div className={styles.point} key={i} variants={itemVariants}>
                                    <div className={styles.icon}>{i + 1}</div>
                                    <h3>{point.title}</h3>
                                    <p>{point.desc}</p>
                                </motion.div>
                            ))
                        }
                    </motion.div>
            </div>
        </div>
    );
}

export default RadiatorsOurProcess;

const points = [
    {
        title: 'Initial Assessment',
        desc: 'We visit your property, assess your heating system, and provide a clear quote.'
    },
    {
        title: 'Repair or Removal',
        desc: 'We safely carry out repairs or remove your old radiator.'
    },
    {
        title: 'Installation & Balancing',
        desc: 'We install or refit your radiator and balance your heating system.'
    },
    {
        title: 'Quality Testing',
        desc: 'Every system is tested for leaks, pressure, and heat consistency before completion.'
    }
];