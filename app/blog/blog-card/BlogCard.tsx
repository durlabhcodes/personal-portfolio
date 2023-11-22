import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
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
      <div className="blog-post-details p-4">
        <div className="blog-post-title font-bold pb-2">{props.title}</div>
        {/*<div className="blog-post-desc text-[#8493a6]">{props.desc}</div>*/}
        <div className="blog-post-footer flex flex-row justify-between mt-3">
          <div className="blog-post-time text-[#8493a6]">
            <span className="inline-block mr-2">
              <FontAwesomeIcon icon={faCalendar} height="16px" />
            </span>
            {props.timestamp}
          </div>
          <div className="blog-post-read-more text-[#8493a6]">
            Read More &gt;
          </div>
        </div>
      </div>
    </article>
  );
}
