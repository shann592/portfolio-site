function Tag({ tagName = 'JavaScript', bgColor = 'bg-green-50' }) {
  return (
    <span
      className={`text-nowrap dark:border-gray-400 dark:text-black px-2 hover:bg-purple-400 cursor-pointer ease-in-out duration-500 ${bgColor} py-1 border-2 border-gray-700 font-rajdhani rounded-md rajdhani-semibold text-sm mr-1`}
    >
      {tagName}
    </span>
  )
}
export default Tag
