import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
  ];

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><h1 className="logo">Shortit</h1></li>
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link href={link === "Home" ? "/" : '/' + link.charAt(0).toLowerCase() + link.slice(1)}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
   

  );
}
