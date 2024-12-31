import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <nav className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Dynamic Product Hub</h1>
        <ul className="flex flex-wrap space-x-4 mt-2 md:mt-0">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/todo" className="hover:underline">
              Todo
            </Link>
          </li>
          <li>
            <Link href="/products/1" className="hover:underline">
              Product 1
            </Link>
          </li>
          <li>
            <Link href="/form" className="hover:underline">
              Submit Product
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
