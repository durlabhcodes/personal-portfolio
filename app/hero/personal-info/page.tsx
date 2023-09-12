export default function PersonalInfo() {
  return (
    <section className="personal-info-section flex border border-solid  border-black w-[85%]">
      <div className="personal-details flex flex-col m-4 p-5 rounded bg-amber-100 justify-evenly">
        <div className="font-bold">Personal Details</div>
        <div>
          Email : <span>durlabh@durlabhsharma.com</span>
        </div>
        <div>Languages : Hindi, English</div>
        <div>Nationality : Indian</div>
      </div>
      <div className="work-info flex-col p-10">
        <div className="font-bold text-xl">
          I am a Software Developer+Web Dev+App Dev
        </div>
        <p className="my-2">
          Obviously I&apos;m a Web Designer. Web Developer with over 3 years of
          experience. Experienced with all stages of the development cycle for
          dynamic web projects. The as opposed to using &apos;Content here,
          content here&apos;, making it look like readable English.
        </p>
        <div className="my-4">Durlabh Sharma</div>
      </div>
    </section>
  );
}
