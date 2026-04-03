"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import StaggeredMenu from "../mobile menu/menu.js";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "OUR SERVICES", href: "#" },
    { name: "PORTFOLIO", href: "#" },
    { name: "PAGES", href: "#" },
    { name: "CONTACT US", href: "#" },
  ];

  const menuItems = navLinks.map(link => ({
    label: link.name,
    link: link.href,
    ariaLabel: `Navigate to ${link.name}`
  }));

  const socialItems = [
    { label: 'Behance', link: 'https://behance.net' },
    { label: 'Dribbble', link: 'https://dribbble.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

  return (
    <>
      {/* Mobile Staggered Menu */}
      <div className="lg:hidden">
        <StaggeredMenu
          position="right"
          items={menuItems}
          socialItems={socialItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor={isScrolled ? "#ffffff" : "#ffffff"}
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          colors={['#B19EEF', '#5227FF', '#ffffff']}
          logoUrl={null} // We could pass a logo if we had a dedicated one
          accentColor="#E0A7FF"
          isFixed={true}
        />
      </div>

      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12 ${
          isScrolled ? "bg-dark-bg/80 backdrop-blur-md shadow-lg py-3 border-b border-white/5" : "bg-transparent"
        } hidden lg:block`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-purple flex items-center justify-center rounded-sm shadow-[0_0_15px_rgba(224,167,255,0.4)]">
              <span className="text-black font-black text-xl md:text-2xl">*</span>
            </div>
            <span className="font-black text-xl md:text-2xl tracking-tighter text-white">
              AURELIA
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-bold tracking-widest text-white/70 hover:text-primary-purple transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <div className="w-8 h-8 rounded-full bg-primary-purple flex items-center justify-center">
                <Phone size={14} className="text-black" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] leading-none opacity-60 text-white">PHONE NUMBER</span>
                <span className="text-sm font-black text-white">+43 875 5673 9876</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
