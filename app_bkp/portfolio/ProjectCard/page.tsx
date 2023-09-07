interface Project {
  name: string;
  imgUrl: string;
  descThumb: string;
  descDetailed: string;
  tech: string[];
}
export default function ProjectCard(props: Project) {
  /*return (
    <article className="project m-2 border-2 flex flex-col items-center">
      <div className="project-image p-4">
        <img src="/background.jpg" className="h-[200px]" />
      </div>
      <div className="project-label font-bold p-2">{props.name}</div>
      <div className="project-summary p-2">{props.descThumb}</div>
    </article>
  );*/

  return (
    <article className="project m-2 border-2 flex flex-col items-center h-[150px] justify-evenly">
      <div className="project-name font-bold p-2 text-2xl text-[#60a5f9]">
        {props.name}
      </div>
      <div className="project-desc p-2">{props.descThumb}</div>
      <div className="project-stack p-2">
        <span className="project-stack-label font-bold text-[#60a5f9]">
          Tech Stack Used
        </span>{" "}
        :{props.tech ? props.tech.join(", ") : ""}
      </div>
    </article>
  );
}
