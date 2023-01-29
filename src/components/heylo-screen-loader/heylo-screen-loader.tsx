import HeyloLoader from '../heylo-loader/heylo-loader';
import styles from './heylo-screen-loader.module.scss';

export function HeyloScreenLoader() {
  return (
    <div className={styles['container']}>
      <HeyloLoader />
    </div>
  );
}

export default HeyloScreenLoader;
