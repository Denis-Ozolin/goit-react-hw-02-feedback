import styles from './SectionTitle.module.css'

const Section = ({ title, children }) => (
  <div>
    <h2 className={styles.title}>{ title }</h2>
    {children}
  </div>
);

export default Section;
  
