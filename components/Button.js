export default function Button({ className, variant, children, pill, href }) {
  const addClassName = className ? `${className}` : "";
  const varians = {
    "outline-yellow": `border border-yellow-500 text-yellow-500 hover:text-black hover:bg-yellow-500`,
    "solid-yellow": `bg-yellow-500 hover:bg-yellow-600 text-black`,
    "solid-black": `bg-black hover:bg-opacity-90 text-white`,
  };

  const pickedVariant = varians[variant];

  return (
    <a href={href} className={`transition hover:cursor-pointer py-2 px-10 font-semibold text-lg inline-block ${pill ? "rounded-full " : ""}${pickedVariant} ${addClassName}`}>
      {children}
    </a>
  );
}
