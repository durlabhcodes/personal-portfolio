import styles from "./Navbar.module.css";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-around h-[10vh] text-[2rem] /*bg-[#2a84d6]*/ shadow-2xl items-center">
      <div className="flex w-8/12">
        <div className="flex w-4/5">
          <Link className="font-[700] font-Caprasimo text-5xl" href="/">
            <span className="text-blue-400 ">Durlabh</span> Codes
          </Link>
        </div>
        <div className="flex w-1/5 text-center items-center">
          <Link
            className="w-1/2"
            href="https://durlabhsharma.com/"
            target="_blank"
          >
            Blog
          </Link>
          <Link href="/portfolio" className="w-1/2">
            Portfolio
          </Link>
          {/*<Link className="w-1/3" href="/contact">
            Contact
          </Link>*/}
        </div>
      </div>
    </nav>
  );
}
