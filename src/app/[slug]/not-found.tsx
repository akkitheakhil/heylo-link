import { HeyloButtonLink } from '@/components';
import Link from 'next/link';
import styles from './not-found.module.scss';

export default function PageNotFound() {
    return <div className={styles['container']}>
      <h1> 404</h1>
      <h2> Sorry, link not found!</h2>
      <h3> Please go back to home page.</h3>
      <HeyloButtonLink color='PRIMARY' width='360px' href='/' text='HOME' />
    </div>
  }
