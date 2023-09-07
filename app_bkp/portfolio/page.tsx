import styles from "./Portfolio.module.css";
import projects from "./Projects.json";
import ProjectCard from "@/app_bkp/portfolio/ProjectCard/page";
export default function Portfolio() {
  return (
    <section className="portfolio data-height flex flex-col mx-6 py-20 overflow-y-auto">
      {/* <div className={styles["portfolio-label"]}>
        Glad To See You Interested In
      </div>*/}
      <div className={[styles["portfolio-label"], "text-[#303940]"].join(" ")}>
        Here&apos;s Some of My Work
      </div>
      <div className={styles["portfolio-projects"]}>
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            name={project.name}
            imgUrl={project.image}
            descThumb={project.desc_thumb}
            descDetailed={project.desc_detailed}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}
