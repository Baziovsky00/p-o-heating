'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { motion } from 'framer-motion';


const GasAppliancesHero = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.pageHeading}>
                    <h1>&mdash; &nbsp; gas appliances installations</h1>
                    <h2><motion.span
                        initial={{ color: '#303030' }}
                        whileInView={{ color: '#ff6600' }}
                        transition={{ duration: 0.6, type: 'spring', delay: 0.4 }}
                        viewport={{ once: true }}>Gas Appliances Installations</motion.span> in Weston-super-Mare, Bristol & Bridgwater.</h2>
                </div>
                <Image priority sizes="(max-width: 768px) 100vw, 1920px" src={'/images/gas-appliances-hero.jpg'} width={1300} height={1300} alt='Gas Appliances Installations in Weston-super-Mare and nearby towns.' />
            </div>
        </div>
    );
}

export default GasAppliancesHero;