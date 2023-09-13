interface WorkProps {
  image: string;
  title: string;
  desc: string;
  type: string;
}
export default function WorkCard(props: WorkProps) {
  return (
    <div
      className="work-card max-w-xl w-[100px]"
      style={{ backgroundImage: `url($props.image)` }}
    >
      ABC
    </div>
  );
}
