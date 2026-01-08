'use client';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    metrics?: string[];
    github?: string;
    demo?: string;
    featured?: boolean;
}

export default function ProjectCard({
    title,
    description,
    tags,
    metrics,
    github,
    demo,
    featured = false,
}: ProjectCardProps) {
    return (
        <div
            className={`group relative h-full border transition-all duration-300 hover:border-cyber-cyan ${featured
                    ? 'border-cyber-cyan/50 bg-cyber-dark/50'
                    : 'border-cyber-cyan/20 bg-cyber-dark/30'
                }`}
        >
            {/* Featured Badge */}
            {featured && (
                <div className="absolute -top-3 left-6 bg-cyber-black px-4 py-1 border border-cyber-cyan">
                    <span className="text-xs font-mono text-cyber-cyan">FEATURED</span>
                </div>
            )}

            <div className="p-6 h-full flex flex-col">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-cyan transition-colors">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {description}
                </p>

                {/* Metrics */}
                {metrics && metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                        {metrics.map((metric, index) => (
                            <div
                                key={index}
                                className="bg-cyber-black/50 border border-cyber-cyan/20 px-3 py-2 text-center"
                            >
                                <span className="text-xs text-cyber-cyan font-mono">
                                    {metric}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-mono text-gray-400 border border-gray-700 px-2 py-1 hover:border-cyber-cyan/50 hover:text-cyber-cyan transition-all"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-cyber-cyan/20">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyber-cyan transition-colors group/link"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            <span className="group-hover/link:underline">Code</span>
                        </a>
                    )}
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyber-cyan transition-colors group/link"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span className="group-hover/link:underline">Demo</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/5 to-cyber-magenta/5"></div>
            </div>
        </div>
    );
}
