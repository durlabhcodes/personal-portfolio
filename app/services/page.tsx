import {
  faLaptopCode,
  faTerminal,
  faMobileAlt,
  faCode,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "@/app/services/service-card/ServiceCard";
export default function Services() {
  const services = [
    {
      title: "Backend Development",
      desc: "I write scalable and robust backend services for all needs and systems",
      icon: faCode,
    },
    {
      title: "Mobile App Development",
      desc: "You need a mobile app developed, you got it.",
      icon: faMobileAlt,
    },
    /*{
      title: "Web Development",
      desc: "Let me create web apps tailored for your businesses",
      icon: faLaptopCode,
    },*/
    {
      title: "Command Line Tools",
      desc: "Wanna automate your tasks via command line. Let me handle it for you",
      icon: faTerminal,
    },
    {
      title: "Technical Writing",
      desc: "Want an article written on a new tool but no time to work on it? Let me write one for you",
      icon: faPencil,
    },
  ];
  return (
    <section className="service-section flex flex-col items-center py-[64px]">
      <div className="py-5 font-bold text-3xl">Awesome Service</div>
      <div className="text-[#8493a6]  px-2">
        I&apos;m a software developer experienced with all stages of the
        development cycle for dynamic web and mobile projects.
      </div>
      <div className="service-grid grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-x-1 my-5 w-[70vw]">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            desc={service.desc}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
//8b5b64
