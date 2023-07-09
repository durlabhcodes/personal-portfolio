interface Project {
  name: string;
  imgUrl: string;
  descThumb: string;
  descDetailed: string;
}
export default function ProjectCard(props: Project) {
  return (
    <article className="project m-2 bg-green-400">
      <div className="project-label">{props.name}</div>
      <div className="project-image">{props.imgUrl}</div>
      <summary className="project-summary">{props.descThumb}</summary>
    </article>
  );
}
