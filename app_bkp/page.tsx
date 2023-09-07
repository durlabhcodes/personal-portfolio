import Image from "next/image";
import Navbar from "@/app_bkp/navbar/page";
import Landing from "@/app_bkp/landing/page";
import Footer from "@/app_bkp/footer/page";

export default function Home() {
  // return <Navbar />;
  return (
    <div className="flex flex-col">
      <Landing />
    </div>
  );
}
