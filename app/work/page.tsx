import ServiceCard from "@/app/services/service-card/ServiceCard";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import WorkCard from "@/app/work/work-card/WorkCard";

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

  return (
    <section className="work-section flex flex-col items-center py-[64px] bg-gray-200">
      <div className="py-5 font-bold text-3xl">My Work & Portfolio</div>
      <div className="text-[#8493a6]">
        Obviously I&apos;m a Web Designer. Experienced with all stages of the
        development cycle for dynamic web projects.
      </div>
      <div className="work-grid grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-24 my-5 w-[70vw]">
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

      <div className="see-more-services px-8 py-4 bg-[#4d76d1] text-white rounded-2xl font-bold">
        <span>See More &gt;</span>
      </div>
    </section>
  );
}
