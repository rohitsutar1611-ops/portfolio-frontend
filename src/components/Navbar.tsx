import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/70 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">
          Rohit.dev
        </h1>

        <div className="space-x-8 text-sm">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-gray-300 transition">
            Projects
          </Link>
          <Link href="/admin" className="hover:text-gray-300 transition">
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}