export default function NavigationBar() {
  return (
    <nav className="w-screen text-white z-10 text-xl md:text-3xl p-5 sticky top-0 backdrop-filter backdrop-blur-lg">
      <ul className="w-screen flex justify-center gap-4 md:gap-10 font-semibold">
        <li className="hover:underline hover:text-white underline-offset-4"><a href="#about" className="hover:text-white">whoami</a></li>
        <li className="hover:underline hover:text-white underline-offset-4"><a href="/" className="hover:text-white">Experiences</a></li>
        <li className="hover:underline hover:text-white underline-offset-4"><a href="/" className="hover:text-white">Projects</a></li>
        <li className="hover:underline hover:text-white underline-offset-4"><a href="/" className="hover:text-white">Contact</a></li>
      </ul>
    </nav>
  )
}