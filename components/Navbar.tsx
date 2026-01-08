'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-black/95 backdrop-blur-md border-b border-cyber-cyan/20' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#home" className="text-cyber-cyan font-mono text-xl font-bold hover:text-white transition-colors">
                        &lt;SIVAKSHAN /&gt;
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-cyber-cyan transition-colors font-mono text-sm">
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 hover:text-cyber-cyan transition-colors font-mono text-sm">
                            About
                        </a>
                        <a href="#projects" className="text-gray-300 hover:text-cyber-cyan transition-colors font-mono text-sm">
                            Projects
                        </a>
                        <a href="#research" className="text-gray-300 hover:text-cyber-cyan transition-colors font-mono text-sm">
                            Research
                        </a>
                        <a href="#contact" className="text-gray-300 hover:text-cyber-cyan transition-colors font-mono text-sm">
                            Contact
                        </a>

                        {/* Resume Download Button */}
                        <a
                            href="/Sivakshan S - CV final.pdf"
                            download
                            className="border-2 border-cyber-cyan text-cyber-cyan px-4 py-2 font-mono text-sm hover:bg-cyber-cyan hover:text-cyber-black transition-all duration-300 flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Resume
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-cyber-cyan hover:text-white transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-cyber-black/98 backdrop-blur-lg border-t border-cyber-cyan/20">
                    <div className="px-4 pt-2 pb-4 space-y-3">
                        <a
                            href="#home"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-gray-300 hover:text-cyber-cyan transition-colors font-mono text-sm py-2"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-gray-300 hover:text-cyber-cyan transition-colors font-mono text-sm py-2"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-gray-300 hover:text-cyber-cyan transition-colors font-mono text-sm py-2"
                        >
                            Projects
                        </a>
                        <a
                            href="#research"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-gray-300 hover:text-cyber-cyan transition-colors font-mono text-sm py-2"
                        >
                            Research
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-gray-300 hover:text-cyber-cyan transition-colors font-mono text-sm py-2"
                        >
                            Contact
                        </a>
                        <a
                            href="/Sivakshan S - CV final.pdf"
                            download
                            className="block border-2 border-cyber-cyan text-cyber-cyan px-4 py-3 font-mono text-sm hover:bg-cyber-cyan hover:text-cyber-black transition-all duration-300 text-center"
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
