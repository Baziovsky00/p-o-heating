'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';


const HeatingUpgradesAbout = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; About the Service</h2>
                    <h3>Professional Heating Upgrades for Every Home</h3>
                </div>
                <div className={styles.section2Content}>
                    <Image sizes="(max-width: 768px) 100vw, 1920px" src={'/images/heating-upgrades-about.webp'} width={800} height={800} alt='Installing designer radiators' />
                    <div>
                        <p className={styles.sectionPar}>
                            We fit <span>smart boiler controllers, magnetic filters, and designer radiators</span>. Every component is selected to work seamlessly together, giving you a modern, reliable solution that lasts for years.
                        </p>
                        <p className={styles.sectionPar}>
                            Our upgrades <span>help reduce energy waste, extend your heating system’s lifespan</span>, and ensure consistent warmth throughout every room. We make sure your home stays cozy while lowering your energy bills.
                        </p>
                        <p className={styles.sectionPar}>
                            Serving homes in Weston-super-Mare, Bristol, and Bridgwater, we tailor each installation to the unique layout and requirements of your property.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeatingUpgradesAbout;