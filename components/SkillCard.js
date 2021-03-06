export default function SkillCard({ name, level, image, imageClassName }) {
  const addImageClassName = imageClassName ? `${imageClassName}` : "";
  return (
    <div className="bg-white shadow-skill rounded-lg p-6 flex items-center">
      <img src={image} className={`lg:mr-6 md:mr-3 mr-6 ${addImageClassName}`}></img>
      <div>
        <h4 className="text-lg font-semibold">{name}</h4>
        <p className="text-sm font-semibold text-gray-400 mt-1">{level}</p>
      </div>
    </div>
  );
}
