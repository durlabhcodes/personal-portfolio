import Image from "next/image";
import Navbar from "@/app/navbar/page";
import Landing from "@/app/landing/page";
import Footer from "@/app/footer/page";

export default function Home() {
  // return <Navbar />;
  return (
    <div className="flex flex-col">
      <Landing />
    </div>
  );
}
