import ServiceCard from "@/app/services/service-card/page";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import WorkCard from "@/app/work/work-card/page";

export default function Work() {
  const projects = [
    {
      title: "Web Development",
      desc: "I write pretty amazing websites that you might love",
      type: "Web",
      image: "/project.jpeg",
    },
    {
      title: "Web Development",
      desc: "I write pretty amazing websites that you might love",
      type: "Web",
      image: "/project.jpeg",
    },
    {
      title: "Web Development",
      desc: "I write pretty amazing websites that you might love",
      type: "Web",
      image: "/project.jpeg",
    },
    {
      title: "Web Development",
      desc: "I write pretty amazing websites that you might love",
      type: "Web",
      image: "/project.jpeg",
    },
  ];

  // [repeat(3, minmax(400px, 400px))]
  // grid-cols-[repeat(auto-fit,minmax(400px,500px))]
  return (
    <section className="work-section flex flex-col items-center py-[64px]">
      <div className="py-5">My Work & Portfolio</div>
      <div>
        Obviously I&apos;m a Web Designer. Experienced with all stages of the
        development cycle for dynamic web projects.
      </div>
      <div className="work-grid grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-24 my-5 w-[70vw]">
        {projects.map((project) => (
          <WorkCard
            key={project.title}
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
