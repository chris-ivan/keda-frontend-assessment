import styles from './Loading.module.scss';

function Loading() {
  return (
    <div className={styles['loading']}>
      <svg width="34" height="12" viewBox="-1 0 33 12">
        <circle className="stardust-spinner" cx="4" cy="6" r="4" />
        <circle className="stardust-spinner" cx="16" cy="6" r="4" />
        <circle className="stardust-spinner" cx="28" cy="6" r="4" />
      </svg>
    </div>
  );
}

export default Loading;
