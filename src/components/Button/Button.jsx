import styles from './Button.module.css';

export const LoadMoreBtn = ({ loadMore }) => (
  <button type="button" onClick={loadMore} className={styles.Button}>
    Load more
  </button>
);
