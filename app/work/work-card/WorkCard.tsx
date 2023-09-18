interface WorkProps {
  image: string;
  title: string;
  desc: string;
  type: string;
}
export default function WorkCard(props: WorkProps) {
  return (
    <div
      className="work-card min-h-[300px] bg-center bg-cover rounded-lg drop-shadow-2xl cursor-pointer"
      style={{ backgroundImage: `url(${props.image})` }}
    ></div>
  );
}
