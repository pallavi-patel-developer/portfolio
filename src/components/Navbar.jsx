import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-12 max-w-7xl mx-auto">
      <div className="text-2xl font-bold tracking-wide flex">
        <img src="logo-symbol.png" className="w-17 h-11 "></img>
        <span className="flex mt-1">PALLAVI PATEL</span>
      </div>
      <div className="flex gap-8 text-sm font-medium">
        <Link href="#" className="hover:text-accent transition-colors">Home</Link>
        <Link href="#about" className="hover:text-accent transition-colors">About Me</Link>
        <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
        <Link href="#experience" className="hover:text-accent transition-colors">Experience</Link>
        <Link href="#skills" className="hover:text-accent transition-colors">Skills</Link>
        <Link href="#projects" className="hover:text-accent transition-colors">Projects</Link>
      </div>
    </nav>
  );
}
