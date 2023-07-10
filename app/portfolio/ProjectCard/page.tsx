interface Project {
  name: string;
  imgUrl: string;
  descThumb: string;
  descDetailed: string;
}
export default function ProjectCard(props: Project) {
  return (
    <article className="project m-2 border-2 flex flex-col items-center">
      <div className="project-image p-4">
        <img src="/background.jpg" className="h-[200px]" />
      </div>
      <div className="project-label font-bold p-2">{props.name}</div>
      <div className="project-summary p-2">{props.descThumb}</div>
    </article>
  );
}
