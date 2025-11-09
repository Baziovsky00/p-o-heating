import Image from 'next/image';
import styles from './styles.module.css'

const RadiatorsAbout = () => {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.sectionHeading}>
                    <h2>&mdash; &nbsp; what we do</h2>
                    <h3>Professional Radiator Services</h3>
                </div>
                <div className={styles.section2Content}>
                    <Image sizes="(max-width: 768px) 100vw, 1920px" src={'/images/radiators-about.jpg'} width={800} height={800} alt='Radiators Installations & Repairs' />
                    <div>
                        <p className={styles.sectionPar}>
                            We specialize in <span>radiator installation, replacement, and repair</span> — helping homeowners throughout Weston-super-Mare, Bristol, and Bridgwater keep their heating systems running smoothly.
                        </p>
                        <div className={styles.sectionPar}>
                            Whether it’s a <span>leaking valve, uneven heating, or a full replacement, we ensures every radiator is installed safely and performs at its best</span>.
                        </div>
                        <p className={styles.sectionPar}>
                            We also offer advice on modern, energy-efficient radiator solutions that complement your home’s design and improve overall comfort.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RadiatorsAbout;