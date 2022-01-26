export default function Button({ className, variant, children, pill }) {
  const addClassName = className ? `${className}` : "";
  const varians = {
    "outline-yellow": `border border-yellow-500 text-yellow-500`,
    "solid-yellow": `bg-yellow-500 text-black`,
    "solid-black": `bg-black text-white`,
  };

  const pickedVariant = varians[variant];

  return <a className={`py-2 px-10 font-semibold text-lg inline-block ${pill ? "rounded-full " : ""}${pickedVariant} ${addClassName}`}>{children}</a>;
}
