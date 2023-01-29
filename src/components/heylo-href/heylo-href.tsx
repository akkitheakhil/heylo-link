import Link from 'next/link';
import styles from './heylo-href.module.scss';

export interface HeyloHrefProps {
  text: string;
  href: string;
  fontSize?: string;
  target: React.HTMLAttributeAnchorTarget
}

export function HeyloHref({ text, href, fontSize, target }: HeyloHrefProps) {
  return (
    <Link style={{ fontSize: fontSize }} href={href} className={styles['heylo-href']} target={target}>
      {text}
    </Link>
  );
}

export default HeyloHref;
