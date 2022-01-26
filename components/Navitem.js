export default function NavItem({ href, children }) {
  return (
    <li>
      <a href={href} className="text-white text-lg text-opacity-60 hover:text-opacity-100 transition font-semibold hover:cursor-pointer">
        {children}
      </a>
    </li>
  );
}
