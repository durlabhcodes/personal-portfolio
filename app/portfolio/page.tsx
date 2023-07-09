import styles from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <section className="portfolio data-height flex flex-col">
      <div className={styles["portfolio-label"]}>
        Glad To See You Interested In
      </div>
      <div className={[styles["portfolio-label"], "text-blue-400"].join(" ")}>
        My Work
      </div>
      <div className="portfolio-projects"></div>
    </section>
  );
}
