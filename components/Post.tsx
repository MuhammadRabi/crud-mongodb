"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"

type props = {
  title: string
  description: string
  _id: string
}

const Post = ({ title, description, _id }: props) => {
  const router = useRouter()
  const removeHandler = async () => {
    const res = await fetch(`http://localhost:3000/api/posts?id=${_id}`, {
      method: "DELETE",
    })
    if (res.ok) {
      router.refresh()
      toast.error("Your post has been deleted!")
    }
  }

  return (
    <article className="border-2 border-gray-200 shadow-lg p-5 flex rounded-sm items-center justify-between space-x-6 mb-4 w-3/4 max-w-2xl border-l-orange-500">
      <div className="details">
        <h2 className="text-2xl capitalize font-bold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <div className="icons flex space-x-2">
        <Link href={`/editPost/${_id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 text-emerald-600 cursor-pointer hover:text-emerald-500 hover:scale-105 duration-300"
          >
            <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
            <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
          </svg>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-red-600 cursor-pointer hover:text-red-500 hover:scale-105 duration-300"
          onClick={removeHandler}
        >
          <path
            fillRule="evenodd"
            d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </article>
  )
}

export default Post
