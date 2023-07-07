import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className="flex justify-around p-10 text-[2rem] bg-[#2a84d6] h-[10vh]">
      <div className="flex w-8/12">
        <div className="flex w-3/5">
          <a className="font-[700]" href="/">
            Durlabh Codes
          </a>
        </div>
        <div className="flex w-2/5 text-center">
          <a className="w-1/3" href="/blog">
            Blog
          </a>
          <a className="w-1/3" href="/about">
            About
          </a>
          <a className="w-1/3" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
