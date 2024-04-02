import Footer from '../footer';
import Navbar from '../navbar';
import styles from './page.module.css';

export default function About() {
  return(
    <div className={styles.body}>
      <Navbar/>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            We are a url shortner using the TinyURL api.
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );

};