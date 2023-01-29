
import Link from 'next/link';
import styles from './heylo-button-link.module.scss';

export interface HeyloButtonLinkProps {
  text: string;
  href: string;
  target?: React.HTMLAttributeAnchorTarget
  width?: string;
  color: 'PRIMARY' | 'SECONDARY';
}

export function HeyloButtonLink({ text, href, target, width, color }: HeyloButtonLinkProps) {
  return (
    <Link style={{ width }} href={href} className={[styles['heylo-button-link'], styles[color.toLocaleLowerCase()],].join(' ')} target={target}>
      {text}
    </Link>
  );
}

export default HeyloButtonLink;
