import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import ServiceCard from "@/app/services/service-card/page";
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
    <section className="service-section flex flex-col">
      <div>Awesome Service</div>
      <div>
        Obviously I&apos;m a Web Designer. Experienced with all stages of the
        development cycle for dynamic web projects.
      </div>
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          desc={service.desc}
          icon={service.icon}
        />
      ))}
    </section>
  );
}
