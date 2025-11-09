'use client'
import { AnimatePresence } from 'framer-motion';
import styles from './styles.module.css'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const CallMeWidget = () => {
  const [visible, setVisible] = useState(false);
  const phoneNumber = '+48790809686';

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={`tel:+447764380450`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bubble}
          aria-label="Call me"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Phone size={26} />
          <span className={styles.tooltip}>call me</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default CallMeWidget;