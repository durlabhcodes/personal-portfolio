import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import React from "react";

interface ServiceCardProps {
  title: string;
  desc: string;
  icon: IconDefinition;
}
export default function ServiceCard(props: ServiceCardProps) {
  return (
    <div className="service-card border border-solid p-5 shadow-xl m-5 max-w-[300px] flex flex-col">
      <div className="icon w-[60px] my-2 self-center">
        <FontAwesomeIcon icon={props.icon} color="#4d76d1" size="2xl" />
      </div>
      <div className="title my-4 font-bold">{props.title}</div>
      <div className="detail text-[#8493a6]">{props.desc}</div>
    </div>
  );
}
