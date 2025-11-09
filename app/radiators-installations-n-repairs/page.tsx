import { Metadata } from 'next';
import RadiatorsHero from '../components/RadiatorsPage/Hero/page';
import RadiatorsAbout from '../components/RadiatorsPage/RadiatorsAbout/RadiatorsAbout';
import RadiatorsOurProcess from '../components/RadiatorsPage/RadiatorsOurProcess/RadiatorsOurProcess';
import RadiatorsProblems from '../components/RadiatorsPage/RadiatorsProblems/RadiatorsProblems';
import styles from './styles.module.css'
import RadiatorsCTA from '../components/RadiatorsPage/RadiatorsCTA/RadiatorsCTA';

export const metadata: Metadata = {
  title: "Radiator Installation & Repair in Weston-super-Mare, Bristol & Bridgwater | PO Heating",
  description:
    "Professional radiator installations and repairs in Weston-super-Mare, Bristol, and Bridgwater. P O Heating ensures efficient, reliable heating performance for your home all year round.",
  keywords: [
    "radiator installation Weston-super-Mare",
    "radiator repair Weston-super-Mare",
    "radiator installation Bristol",
    "radiator repair Bristol",
    "radiator repair Bridgwater",
    "heating engineer Weston-super-Mare",
    "radiator leaks repair",
    "radiator replacement North Somerset",
  ],
  openGraph: {
    title: "Radiator Services in Weston-super-Mare, Bristol & Bridgwater | P O Heating",
    description:
      "Reliable radiator repairs and installations across Weston-super-Mare, Bristol, Bridgwater and North Somerset. Trusted heating specialists ensuring comfort and efficiency.",
    siteName: "P O Heating",
    locale: "en_GB",
    type: "article",
    images: [
      {
        url: "/images/poheating-metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Radiator installation Weston-super-Mare, Bristol and Bridgwater",
      },
    ],
  },
  alternates: {
    // canonical: "https://www.yourdomain.co.uk/radiator-installations",
    // languages: {
    //   "en-GB": "https://www.yourdomain.co.uk/radiator-installations",
    //   "pl-PL": "https://www.yourdomain.co.uk/pl/instalacje-grzejniki",
    // },
  },
};

const radiatorNHeatingUpgrades = () => {
    return ( 
        <div className={styles.page}>
            <RadiatorsHero />
            <RadiatorsAbout />
            <RadiatorsProblems />
            <RadiatorsOurProcess />
            {/* <RadiatorsCTA /> */}
        </div>
     );
}
 
export default radiatorNHeatingUpgrades;