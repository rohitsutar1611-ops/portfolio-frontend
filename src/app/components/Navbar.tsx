export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/70 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-wide">
          Rohit.dev
        </h1>

        <div className="space-x-8 text-sm">
          <a href="/" className="hover:text-gray-300 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            About
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}