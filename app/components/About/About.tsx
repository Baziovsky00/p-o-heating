'use client'
import Image from 'next/image';
import styles from './styles.module.css'
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <h2>&mdash; &nbsp; About po heating</h2>
                <h3>Reliable Heating Solutions for Every Home</h3>

                <div className={styles.bottom}>
                    <Image src={'/images/main-about.webp'} width={600} height={600} alt='Plumbing Services across Weston-super-Mare and North Somerset' />
                    <div className={styles.par}>
                        <p>PO Heating provides <span>reliable gas and heating services throughout Weston-super-Mare, Bristol, Bridgwater and North Somerset.</span></p>

                        <p>With years of experience and full Gas Safe certification, we specialise in <span>boiler servicing, repairs, radiator installations, and smart heating controls</span> — always with a focus on safety, efficiency, and customer satisfaction.</p>

                        <p>From annual boiler maintenance to system upgrades and emergency repairs, PO Heating delivers professional service and honest advice you can rely on. We keep homes in Weston-super-Mare warm, safe, and energy-efficient all year round.</p>
                        <ul className={styles.points}>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span><CheckCircle size={24} /></span>Qualified Gas Safe Engineer
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <span><CheckCircle size={24} /></span>Comprehensive Heating Services
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, }}
                                viewport={{ once: true }}
                            >
                                <span><CheckCircle size={24} /></span>Reliable Local Service
                            </motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;