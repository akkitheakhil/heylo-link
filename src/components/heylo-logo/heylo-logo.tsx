import styles from './heylo-logo.module.scss';


export interface HeyloLogoProps {
  text: string
}

export function HeyloLogo({ text }: HeyloLogoProps) {
  return (
    <div className={styles['heylo-logo']}> { text }</div>
  );
}

export default HeyloLogo;
