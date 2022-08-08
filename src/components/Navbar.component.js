import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      <Link href="/">
        <div id="brand" className="text-3xl cursor-pointer font-pacifico">
          <span className="text-purple-500">Is</span>
          <span className="text-yellow-400">My</span>
          <span className="text-red-500">Idea</span>
          <span className="text-green-500">Good</span>
          <span className="text-gray-700">?</span>
        </div>
      </Link>
      <ul id="navigation" className="flex gap-5">
        <Link href="/how-it-works">
          <li className="cursor-pointer">How does this site work ?</li>
        </Link>
        <Link href="/how-to-find-ideas">
          <li className="cursor-pointer">How to find good ideas ?</li>
        </Link>
      </ul>
    </nav>
  )
}
