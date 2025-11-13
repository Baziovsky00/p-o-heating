'use client'
import styles from './styles.module.css'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const GasAppliancesBoliers = () => {

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
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; boliers installations</h2>
                    <h3>Boilers Installed Safely, Efficiently, and Hassle-Free</h3>
                </div>
                <div className={styles.section2Content}>
                    <Image sizes="(max-width: 768px) 100vw, 1920px" src={'/images/gas-appliances-boilers.webp'} width={800} height={800} alt='Boliers Installations & Repairs' />
                    <div>
                        <h4>Comprehensive Boiler Installation Services</h4>
                        <p className={styles.sectionPar}>
                            We aslo provide professional boiler installation services for homes and businesses. Whether you need a new gas boiler for your property or an upgrade to a more energy-efficient system, we handle every installation with precision and care.
                        </p>
                        <h4>Safe, Compliant, and Reliable</h4>
                        <div className={styles.sectionPar}>
                            All installations are carried out in full compliance with Gas Safe regulations, ensuring your boiler operates safely and efficiently. We carefully checks all pipework, connections, and settings before completing the job, giving you peace of mind and reliable heating throughout the year.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GasAppliancesBoliers;