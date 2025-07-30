import { useState } from "react";
import { Link } from "react-router-dom";
import {motion} from 'motion/react'

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Login",
      href: "/login",
    },
  ];

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="py-50">
      <nav className="mx-auto flex max-w-xl items-center justify-between rounded-full bg-gray-100 px-4 py-3">
        {navItems.map((item, idx) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            key={item.title}
            to={item.href}
            className="group relative w-full py-3 text-center text-gray-800"
          >
            {hovered === idx && (
              <motion.div 
              layoutId="hover"
              className="absolute inset-0 h-full w-full rounded-full bg-black"></motion.div>
            )}
            <span className="relative group-hover:text-white">
              {item.title}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
