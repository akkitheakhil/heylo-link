'use client'

import { useEffect } from 'react';
import styles from './heylo-snackbar.module.scss';

export interface HeyloSnackbarProps {
  message: string;
  isOpen: boolean;
  onClose: () => void;
  duration: number;
}

export function HeyloSnackbar({
  message,
  isOpen,
  onClose,
  duration
}: HeyloSnackbarProps) {
  useEffect(() => {
    if (isOpen) {
      const timeoutId = setTimeout(onClose, duration);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, onClose, duration]);

  return (
    <div className={[styles[`snackbar`], styles[`${isOpen ? 'snackbar-open' : 'snackbar-closed'}`]].join(' ')}>
      <div className={styles['snackbar-content']}>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default HeyloSnackbar;
