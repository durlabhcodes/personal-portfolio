import styles from "./Portfolio.module.css";
import projects from "./Projects.json";
import ProjectCard from "@/app/portfolio/ProjectCard/page";
export default function Portfolio() {
  return (
    <section className="portfolio data-height flex flex-col mx-6">
      <div className={styles["portfolio-label"]}>
        Glad To See You Interested In
      </div>
      <div className={[styles["portfolio-label"], "text-blue-400"].join(" ")}>
        My Work
      </div>
      <div className={styles["portfolio-projects"]}>
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            name={project.name}
            imgUrl={project.image}
            descThumb={project.desc_thumb}
            descDetailed={project.desc_detailed}
          />
        ))}
      </div>
    </section>
  );
}
