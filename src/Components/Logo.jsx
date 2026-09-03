import { logo } from "../Data/Data";

export default function Logo() {
  return (
    <a
      href="#home"
      className="group inline-flex items-center text-xl font-bold tracking-tight"
    >
      <span className="text-white transition-colors duration-300 group-hover:text-zinc-300">
        {logo.title}
        {/* <img src={logo.logo} alt={logo.title} className="h-10 w-10" /> */}
      </span>

      <span className="text-cyan-500">{logo.accent}</span>
    </a>
  );
}
