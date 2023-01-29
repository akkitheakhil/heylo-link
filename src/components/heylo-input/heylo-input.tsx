import styles from './heylo-input.module.scss';


export interface HeyloInputProps {
  size?: 'LARGE' | 'SMALL' | 'MEDIUM';
  label?: string;
  input?: object;
}

export function HeyloInput(props: HeyloInputProps) {
  return (
    <div className={styles['input-container']}>
      {props.label ?? <label> {props.label} </label>}
      <input
        className={[styles['input'], styles['large']].join(' ')}
        {...props.input}
      />
    </div>
  );
}

export default HeyloInput;
