import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-12 max-w-7xl mx-auto">
      <div className="text-2xl font-bold tracking-wide">SaulDesign</div>
      <div className="flex gap-8 text-sm font-medium">
        <Link href="#" className="hover:text-accent transition-colors">Home</Link>
        <Link href="#about" className="hover:text-accent transition-colors">About Me</Link>
        <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
      </div>
    </nav>
  );
}
