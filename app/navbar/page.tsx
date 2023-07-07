import styles from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav className="flex justify-around h-[10vh] text-[2rem] /*bg-[#2a84d6]*/ shadow-2xl items-center">
      <div className="flex w-8/12">
        <div className="flex w-3/5">
          <a className="font-[700]" href="/">
            <span className="text-blue-400">Durlabh</span> Codes
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
