import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: IconDefinition;
}
export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div className="service-card max-w-[100px]">
      <div className="icon">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className="title">{props.title}</div>
      <div className="detail">{props.desc}</div>
    </div>
  );
}
