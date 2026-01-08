'use client';

export default function Research() {
    const publications = [
        {
            title: 'Adaptive Autonomous Landing Using Multi-Constraint Reinforcement Learning and Explainable AI',
            authors: 'Sivakshan S.',
            venue: 'MSc Research, University of Aberdeen',
            year: '2025',
            status: 'First Class Merit',
            description: 'Investigation of reinforcement learning algorithms (PPO, DQN, A2C) with SHAP-based explainability for safety-critical autonomous landing under 7 real-world constraints.',
            tags: ['Reinforcement Learning', 'Explainable AI', 'Autonomous Systems', 'Safety-Critical'],
            metrics: ['102% Improvement', '59.6% Human Gap', '38.75x Fuel Efficiency'],
        },
    ];

    const researchInterests = [
        {
            title: 'Reinforcement Learning',
            description: 'Deep RL, Multi-Agent RL, Safe RL, Policy Optimization',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
        },
        {
            title: 'Explainable AI',
            description: 'SHAP, LIME, Attention Mechanisms, Interpretability',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            title: 'Autonomous Robotics',
            description: 'Mobile Robots, Manipulation, Path Planning, SLAM',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            title: 'Computer Vision',
            description: 'Object Detection, Image Segmentation, Visual SLAM',
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
            ),
        },
    ];

    return (
        <section id="research" className="relative min-h-screen py-20 px-4 bg-cyber-black">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-cyber-cyan mb-4">
                        <span className="text-gray-500 font-mono text-xl mr-4">03.</span>
                        Research & Publications
                    </h2>
                    <div className="w-24 h-1 bg-cyber-cyan mx-auto mb-8"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Academic research focused on safe, explainable, and adaptive AI systems for real-world robotics applications.
                    </p>
                </div>

                {/* Publications */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-white mb-8">Publications</h3>
                    <div className="space-y-6">
                        {publications.map((pub) => (
                            <div
                                key={pub.title}
                                className="border border-cyber-cyan/30 p-6 hover:border-cyber-cyan transition-all duration-300 bg-cyber-dark/30"
                            >
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <h4 className="text-lg font-semibold text-white flex-grow">
                                        {pub.title}
                                    </h4>
                                    <span className="text-cyber-cyan font-mono text-sm whitespace-nowrap">
                                        {pub.year}
                                    </span>
                                </div>

                                <p className="text-gray-400 text-sm mb-2">
                                    {pub.authors} • <span className="italic">{pub.venue}</span>
                                </p>

                                <div className="inline-block bg-cyber-cyan/10 border border-cyber-cyan px-3 py-1 mb-3">
                                    <span className="text-cyber-cyan text-xs font-semibold">
                                        {pub.status}
                                    </span>
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                    {pub.description}
                                </p>

                                {/* Metrics */}
                                <div className="flex flex-wrap gap-3 mb-4">
                                    {pub.metrics.map((metric) => (
                                        <span
                                            key={metric}
                                            className="bg-cyber-black border border-cyber-cyan/20 px-3 py-1 text-cyber-cyan text-xs font-mono"
                                        >
                                            {metric}
                                        </span>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {pub.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs text-gray-400 border border-gray-700 px-2 py-1"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Research Interests */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8">Research Interests</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        {researchInterests.map((interest) => (
                            <div
                                key={interest.title}
                                className="border border-cyber-cyan/30 p-6 hover:border-cyber-cyan transition-all duration-300 group"
                            >
                                <div className="text-cyber-cyan mb-4 group-hover:scale-110 transition-transform">
                                    {interest.icon}
                                </div>
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    {interest.title}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    {interest.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-12 text-center p-8 border border-cyber-cyan/30 bg-cyber-dark/20">
                    <h4 className="text-xl font-bold text-white mb-3">
                        Interested in Collaboration?
                    </h4>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        I'm open to PhD opportunities, research collaborations, and exciting projects in AI, Robotics, and Autonomous Systems.
                    </p>
                    <a
                        href="#contact"
                        className="inline-block border-2 border-cyber-cyan text-cyber-cyan px-6 py-3 font-mono hover:bg-cyber-cyan hover:text-cyber-black transition-all duration-300"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
