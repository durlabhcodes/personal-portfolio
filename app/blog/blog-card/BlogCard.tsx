interface BlogCardProps {
  image: string;
  title: string;
  desc: string;
  timestamp: string;
}
export default function BlogCard(props: BlogCardProps) {
  return (
    <article className="blog-post border border-solid border-black rounded-lg drop-shadow-2xl cursor-pointer">
      <div
        className="blog-post-image min-h-[300px] bg-center bg-cover"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="blog-post-title">{props.title}</div>
      <div className="blog-post-desc">{props.desc}</div>
      <div className="blog-post-footer flex flex-row justify-between">
        <div className="blog-post-time">{props.timestamp}</div>
        <div className="blog-post-read-more">Read More &gt;</div>
      </div>
    </article>
  );
}
