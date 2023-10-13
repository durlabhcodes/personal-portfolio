import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "@/app/services/service-card/ServiceCard";
export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "I write pretty amazing websites that you might love",
      icon: faLaptopCode,
    },
    {
      title: "Web Development",
      desc: "I write pretty amazing websites that you might love",
      icon: faLaptopCode,
    },
    {
      title: "Web Development",
      desc: "I write pretty amazing websites that you might love",
      icon: faLaptopCode,
    },
    {
      title: "Web Development",
      desc: "I write pretty amazing websites that you might love",
      icon: faLaptopCode,
    },
  ];
  return (
    <section className="service-section flex flex-col items-center py-[64px]">
      <div className="py-5 font-bold text-3xl">Awesome Service</div>
      <div className="text-[#8493a6]">
        Obviously I&apos;m a Web Designer. Experienced with all stages of the
        development cycle for dynamic web projects.
      </div>
      <div className="service-grid grid grid-cols-2 gap-x-24 my-5">
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
