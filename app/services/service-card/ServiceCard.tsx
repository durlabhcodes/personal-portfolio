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
    <div className="service-card max-w-[500px] border border-solid p-5 shadow-xl m-5">
      <div className="icon w-[64px] my-2">
        <FontAwesomeIcon icon={props.icon} color="#60a5f8" />
      </div>
      <div className="title my-4 font-bold">{props.title}</div>
      <div className="detail text-[#8493a6]">{props.desc}</div>
    </div>
  );
}
