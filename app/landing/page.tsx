import styles from "./Landing.module.css";
export default function Landing() {
  return (
    <section className="w-full h-[70vh] bg-amber-500">
      <article className="landing-info h-full flex flex-col bg-pink-500 justify-center items-center">
        <div className="hello">Hey Folks,</div>
        <div className="my-name-is">I am</div>
        <div className="durlabh">Durlabh Sharma</div>
        <div className="description">
          Web Developer with over 10 years of experience with Java and related
          tech
        </div>
      </article>
    </section>
  );
}
