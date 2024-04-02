import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Contact",
    },
  ];

  return (
    <>
    <div className={styles.wave}></div>
    <footer className={styles.footer}>

      <ul className={styles.list}>
        <li>
          <div class="single-cta">
              <i class="fas fa-map-marker-alt"></i>
            <div class="cta-text">
                <h4>Find us</h4>
                <span>Miami FL</span>
            </div>
          </div>
        </li>
        <li>
          <div class="single-cta">
            <i class="fas fa-phone"></i>
            <div class="cta-text">
                <h4>Call us</h4>
                <span>305-555-5555</span>
            </div>
          </div>
        </li>
        <li>
          <div class="single-cta">
            <i class="far fa-envelope-open"></i>
            <div class="cta-text">
                <h4>Mail us</h4>
                <span>mail@info.com</span>
            </div>
          </div>
        </li>

      </ul>

      <div className={styles.footerWidget}>
        <div className={styles.footerWidgetHeading}>
          <h3>Useful Links</h3>
        </div>
        <ul className={styles.useful-links}>
          <li><a href="#">Home</a></li>
          <li><a href="#">about</a></li>
          <li><a href="#">services</a></li>
          <li><a href="#">portfolio</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Expert Team</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Latest News</a></li>
        </ul>
      </div>
      
                        
      <p>&copy;2024 Shortit | All Rights Reserved</p>
    </footer>
    </>
    
  );
}