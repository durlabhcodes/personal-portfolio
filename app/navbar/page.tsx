import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    /*<nav className="flex justify-around p-10 text-[2rem]">
      <div className="flex w-8/12">
        <div className="flex w-3/5">
          <a className="font-[700]" href="/">
            D-Code
          </a>
        </div>
        <div className="flex w-2/5 text-center">
          <a className="w-1/3" href="/blog">
            Blog
          </a>
          <a className="w-1/3" href="/about">
            About
          </a>
          <a className="w-1/3" href="/contact">
            About
          </a>
        </div>
      </div>
    </nav>*/
    <nav className="flex flex-col items-end pr-16 pt-16">
      <div className="font-[700] text-[4rem] text-[#544648] pb-[5rem]">
        Durlabh Codes
      </div>
      <div className={styles["nav-items"]}>Skills</div>
      <div className={styles["nav-items"]}>Work</div>
      <div className={styles["nav-items"]}>About</div>
      <div className={styles["nav-items"]}>Contact</div>
    </nav>
  );
}
