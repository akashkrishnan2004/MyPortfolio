import { logo } from "../Data/Data";

function Logo() {
  return (
    <a
      href="#home"
      className="group inline-flex items-center text-xl font-bold tracking-tight"
    >
      <span className="text-white transition-colors duration-300 group-hover:text-zinc-300">
        {logo.title}
      </span>

      <span className="text-red-500">{logo.accent}</span>
    </a>
  );
}

export default Logo;
