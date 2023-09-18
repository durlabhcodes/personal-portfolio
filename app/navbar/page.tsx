import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <div className="navbar flex mx-[20rem] py-[2rem] text-2xl sticky top-0">
      <span className="grow cursor-pointer">Durlabh Sharma</span>
      <span className={styles["nav-items"]}>Home</span>
      <span className={styles["nav-items"]}>Services</span>
      <span className={styles["nav-items"]}>Blog</span>
      <span className={styles["nav-items"]}>Contact</span>
    </div>
  );
}
