import styles from './Notofication.module.css';

const Notification = ({ message }) => <p className={styles.message}>{message}</p>;

export default Notification;