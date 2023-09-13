import ServiceCard from "@/app/services/service-card/page";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import WorkCard from "@/app/work/work-card/page";

export default function Work() {
  const projects = [
    {
      title: "Web Development",
      desc: "I write pretty amazing websites that you might love",
      type: "Web",
      image: "/project.jpg",
    },
    {
      title: "Web Development",
      desc: "I write pretty amazing websites that you might love",
      type: "Web",
      image: "/project.jpg",
    },
    {
      title: "Web Development",
      desc: "I write pretty amazing websites that you might love",
      type: "Web",
      image: "/project.jpg",
    },
    {
      title: "Web Development",
      desc: "I write pretty amazing websites that you might love",
      type: "Web",
      image: "/project.jpg",
    },
  ];
  return (
    <section className="work-section flex flex-col items-center py-[64px]">
      <div className="py-5">My Work & Portfolio</div>
      <div>
        Obviously I&apos;m a Web Designer. Experienced with all stages of the
        development cycle for dynamic web projects.
      </div>
      <div className="work-grid grid grid-cols-3 gap-x-24 my-5">
        {projects.map((project) => (
          <WorkCard
            image={project.image}
            desc={project.desc}
            title={project.title}
            type={project.type}
          />
        ))}
      </div>
    </section>
  );
}
