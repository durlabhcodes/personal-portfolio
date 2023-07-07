import styles from "./Landing.module.css";
export default function Landing() {
  return (
    <section className="h-[80vh] /*bg-amber-500*/">
      <article className="landing-info h-full flex flex-col {/*bg-pink-500*/} justify-center items-center font-Martian">
        <div className="hello text-[36px]">Hey Folks,</div>
        <div className="my-name-is text-[36px]">I am</div>
        <div className="durlabh font-Caprasimo text-[56px]">
          <span className="text-blue-400">Durlabh</span> Sharma
        </div>
        <div className="description">
          Web Developer with over 10 years of experience with Java and related
          tech
        </div>
      </article>
    </section>
  );
}
