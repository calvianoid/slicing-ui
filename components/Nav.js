import NavItem from "./Navitem";

export default function Nav({ className, dir, scheme }) {
  const dirs = {
    horizontal: "justify-center space-x-10",
    vertical: "flex-col space-y-6",
  };

  const pickedDir = dirs[dir];
  const addClassName = className ? `${className}` : "";
  return (
    <ul className={`flex ${pickedDir} ${addClassName}`}>
      <NavItem scheme={scheme} href="#profile">
        Profile
      </NavItem>
      <NavItem scheme={scheme} href="#skills">
        Skills
      </NavItem>
      <NavItem scheme={scheme} href="#projects">
        Projects
      </NavItem>
      <NavItem scheme={scheme} href="#contact">
        Contact
      </NavItem>
    </ul>
  );
}
