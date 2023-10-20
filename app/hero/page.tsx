import PersonalInfo from "@/app/hero/personal-info/page";

export default function Hero() {
  return (
    <div className="flex flex-col">
      {/*<div className="hero-section bg-[url('/paper-bg.jpg')] bg-cover flex">*/}
      <div className="hero-section bg-gradient-to-r from-[#68a6d8] to-[#2a39c8] flex">
        <div className="hero-content py-[15rem] px-[6rem] w-full">
          <p className="text-[4rem] block text-white">
            Hey all. Great to see you here
          </p>
          <p className="text-white">
            I&apos;m a Web Developer with more than 10 years of experience.
            Let&apos;s build something together
          </p>
          <div className="cta flex flex-row my-5">
            <div className="cta-talk-to-me rounded py-5 px-8 bg-[#f4f4f4] mx-2 text-[#544648]">
              Talk To Me
            </div>
            <div className="cta-resume rounded py-5 px-8 border border-solid border-[#8b5b64] text-white">
              My Resume
            </div>
          </div>
        </div>
        {/*<div className="hero-image mx-auto h-auto max-w-full">
        <img src="/hero-photo.jpg" />
      </div>*/}
      </div>
      {/* <div className="flex justify-center">
        <PersonalInfo />
      </div>*/}
    </div>
  );
}
