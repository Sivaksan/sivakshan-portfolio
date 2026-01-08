'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate form submission (replace with actual API later)
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1000);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="relative min-h-screen py-20 px-4 bg-cyber-black">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-cyber-cyan mb-4">
                        <span className="text-gray-500 font-mono text-xl mr-4">04.</span>
                        Get In Touch
                    </h2>
                    <div className="w-24 h-1 bg-cyber-cyan mx-auto mb-8"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I'm currently open to PhD opportunities, research collaborations, and exciting AI/Robotics projects.
                        Let's connect and build something amazing together.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                            <div className="space-y-6">
                                {/* Email */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 border border-cyber-cyan/30 group-hover:border-cyber-cyan transition-all">
                                        <svg className="w-6 h-6 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm mb-1">Email</p>
                                        <a href="mailto:ssivakshan@gmail.com" className="text-white hover:text-cyber-cyan transition-colors">
                                            ssivakshan@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 border border-cyber-cyan/30 group-hover:border-cyber-cyan transition-all">
                                        <svg className="w-6 h-6 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm mb-1">Location</p>
                                        <p className="text-white">Aberdeen, Scotland, UK</p>
                                    </div>
                                </div>

                                {/* Education */}
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 border border-cyber-cyan/30 group-hover:border-cyber-cyan transition-all">
                                        <svg className="w-6 h-6 text-cyber-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-sm mb-1">Education</p>
                                        <p className="text-white">University of Aberdeen</p>
                                        <p className="text-gray-400 text-sm">MSc Robotics & AI</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/Sivaksan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 border border-cyber-cyan/30 hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all group"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-6 h-6 text-cyber-cyan" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/sivakshan-s/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 border border-cyber-cyan/30 hover:border-cyber-cyan hover:bg-cyber-cyan/10 transition-all group"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-6 h-6 text-cyber-cyan" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-cyber-dark border border-cyber-cyan/30 text-white focus:border-cyber-cyan focus:outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-cyber-dark border border-cyber-cyan/30 text-white focus:border-cyber-cyan focus:outline-none transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-cyber-dark border border-cyber-cyan/30 text-white focus:border-cyber-cyan focus:outline-none transition-all resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full group relative inline-flex items-center justify-center overflow-hidden border-2 border-cyber-cyan px-8 py-4 font-mono text-sm font-medium text-cyber-cyan transition-all duration-300 hover:text-cyber-black disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className={`absolute inset-0 h-full w-full bg-cyber-cyan transition-all duration-300 ease-out transform ${status === 'sending' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'} origin-left`}></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    {status === 'sending' ? (
                                        <span>Sending...</span>
                                    ) : status === 'success' ? (
                                        <span>Message Sent!</span>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </span>
                            </button>

                            {status === 'success' && (
                                <p className="text-center text-cyber-cyan text-sm animate-pulse">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
