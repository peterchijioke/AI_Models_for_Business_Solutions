"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import AppImage from "@/app/_components/AppImage";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <header className="bg-primary text-primary-foreground h-24 py-4 px-12 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
          <AppImage alt="Logo" className="w-6 h-6" src="/lo.svg" />
        </div>
      </div>

      <nav className="hidden md:flex space-x-6 ml-36">
        <Link
          href="#"
          className="hover:text-white text-sm transition-colors font-medium"
        >
          Models
        </Link>
        <Link
          href="#"
          className="hover:text-white text-sm transition-colors font-medium"
        >
          Pricing
        </Link>
        <Link
          href="#"
          className="hover:text-white text-sm transition-colors font-medium"
        >
          About Us
        </Link>
        <Link
          href="#"
          className="hover:text-white text-sm transition-colors font-medium"
        >
          Contact Us
        </Link>
        <Link
          href="#"
          className="hover:text-white text-sm transition-colors font-medium"
        >
          Custom Models
        </Link>
      </nav>

      <div className="hidden md:flex space-x-3">
        <Button
          size={"sm"}
          className="text-white bg-primary border border-white hover:bg-primary"
        >
          Login
        </Button>
        <Button
          size={"sm"}
          className="bg-white text-black hover:bg-gray-200 font-semibold"
        >
          Get Started Now
        </Button>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-20 left-0 w-full bg-primary flex flex-col items-start space-y-4 py-4 px-12 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Link
              href="#"
              className="hover:text-white transition-colors font-medium text-sm"
            >
              Models
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors font-medium text-sm"
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors font-medium text-sm"
            >
              About Us
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors font-medium text-sm"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="hover:text-white transition-colors font-medium text-sm"
            >
              Custom Models
            </Link>
            <Button className="text-white bg-primary border border-white hover:bg-primary">
              Login
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200 font-semibold">
              Get Started Now
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
