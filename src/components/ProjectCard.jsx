import Tag from './Tag'

function ProjectCard({
  demoLink,
  projectName,
  projectImg,
  techStackUsed,
  githubLink,
}) {
  return (
    <div className="w-80 min-h-28 border-2 border-black rounded-md overflow-hidden dark:dark-nonmain-bg-color">
      <img
        className="w-full h-52 object-cover object-center"
        src={projectImg}
        alt={`${projectName} image`}
      />
      <div className="p-3 bg-white dark:dark-nonmain-bg-color">
        <h2 className="text-xl font-bold">{projectName}</h2>
        <p className="flex mt-2 gap-1 items-center flex-wrap">
          {techStackUsed.map((s, index) => (
            <Tag tagName={s} key={index} />
          ))}
        </p>
        <p className="mt-2 flex gap-1 items-center flex-wrap">
          <a href={demoLink} target="_blank">
            <Tag tagName="Demo" bgColor="bg-yellow-50" />
          </a>
          <a href={githubLink} target="_blank">
            <Tag tagName="Github" bgColor="bg-yellow-50" />
          </a>
        </p>
      </div>
    </div>
  )
}
export default ProjectCard
