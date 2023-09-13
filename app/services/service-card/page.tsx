import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: IconDefinition;
}
export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div className="service-card max-w-[500px] border border-solid p-5 drop-shadow-lg m-5">
      <div className="icon w-[64px] my-2">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <div className="title my-4">{props.title}</div>
      <div className="detail">{props.desc}</div>
    </div>
  );
}
