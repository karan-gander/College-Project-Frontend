

export default function TextInput({...props}) {
  return (
    <div className="w-full md:w-1/3 p">
    <input
      className="flex h-10 w-72 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
     {...props}
    ></input>
  </div>
  )
}