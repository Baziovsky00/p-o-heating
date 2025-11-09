import GasAppliancesAbout from '../components/GasAppliancesPage/GasAppliancesAbout/GasAppliancesAbout';
import GasAppliancesSafety from '../components/GasAppliancesPage/GasAppliancesSafety/GasAppliancesSafety';
import GasAppliancesSteps from '../components/GasAppliancesPage/GasAppliancesSteps/GasAppliancesSteps';
import GasAppliancesHero from '../components/GasAppliancesPage/Hero/page';
import styles from './styles.module.css'

const GasAppliancesInstallations = () => {
    return ( 
        <div className={styles.page}>
            <GasAppliancesHero />
            <GasAppliancesAbout />
            <GasAppliancesSafety />
            <GasAppliancesSteps />
        </div>
     );
}
 
export default GasAppliancesInstallations;