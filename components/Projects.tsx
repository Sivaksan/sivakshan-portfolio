'use client';

import { useState } from 'react';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'AI/ML', 'Robotics', 'Full-Stack'];

    const projects = [
        {
            title: 'Adaptive Autonomous Landing System',
            description:
                'Multi-constraint reinforcement learning framework for safety-critical autonomous systems. Achieved 102% improvement in survival time using PPO with real-time SHAP-based explainability. Dissertation awarded First Class Merit.',
            tags: ['Reinforcement Learning', 'PPO', 'DQN', 'A2C', 'SHAP', 'XAI', 'Python', 'PyTorch'],
            metrics: ['102% Improvement', '7 Constraints', 'First Class', '50 Training Runs'],
            github: 'https://github.com/Sivaksan',
            featured: true,
            category: 'AI/ML',
        },
        {
            title: 'Multi-Agent Coordination System',
            description:
                'Distributed multi-agent robotics system using BDI architecture. Implemented 5-agent collaborative task execution with real-time communication protocols and collision avoidance algorithms.',
            tags: ['Multi-Agent', 'Jason', 'BDI', 'Robotics', 'Java', 'Coordination'],
            metrics: ['5 Agents', '85% Efficiency', 'Real-Time Comm'],
            github: 'https://github.com/Sivaksan',
            featured: true,
            category: 'Robotics',
        },
        {
            title: 'Robot Arm Kinematics & Control',
            description:
                'Forward and inverse kinematics solver for Magician Lite 4-DOF robot arm. Implemented DH parameters, Jacobian analysis, and pick-and-place operations with singularity detection.',
            tags: ['Kinematics', 'MATLAB', 'Robot Control', 'DH Parameters', 'Jacobian'],
            metrics: ['4-DOF Arm', 'FK/IK Solver', 'Pick & Place'],
            github: 'https://github.com/Sivaksan',
            category: 'Robotics',
        },
        {
            title: 'Autonomous Maze Navigation',
            description:
                'Intelligent maze-solving robot using neural networks for control and computer vision for mapping. Integrated ultrasonic sensors with OpenCV for real-time obstacle detection and path planning.',
            tags: ['Computer Vision', 'OpenCV', 'Neural Networks', 'Python', 'Path Planning'],
            metrics: ['Real-Time CV', 'Neural Control', 'Autonomous Nav'],
            github: 'https://github.com/Sivaksan',
            category: 'Robotics',
        },
        {
            title: 'Deep Learning Image Classification',
            description:
                'Multi-class image classification system comparing CNN, FNN, and transfer learning approaches. Implemented CLIP embeddings for human activity recognition on MSCOCO dataset.',
            tags: ['Deep Learning', 'CNN', 'Transfer Learning', 'CLIP', 'PyTorch', 'Computer Vision'],
            metrics: ['94% Accuracy', 'Transfer Learning', '8 Classes'],
            github: 'https://github.com/Sivaksan',
            category: 'AI/ML',
        },
        {
            title: 'NLP Dialogue Analysis System',
            description:
                'Data mining and clustering analysis of spoken dialogues using NLP techniques. Implemented age pattern classification with visualization dashboards and statistical validation.',
            tags: ['NLP', 'Data Mining', 'Clustering', 'Classification', 'Python', 'Visualization'],
            metrics: ['Text Analysis', 'Clustering', 'Classification'],
            github: 'https://github.com/Sivaksan',
            category: 'AI/ML',
        },
        {
            title: 'Full-Stack Travel Application',
            description:
                'Cross-platform travel SaaS with React Native frontend and Node.js backend. Features include user authentication, booking system, payment gateway integration, and real-time notifications.',
            tags: ['React Native', 'Node.js', 'MongoDB', 'REST API', 'Payment Gateway', 'Full-Stack'],
            metrics: ['5000+ Users', 'Payment System', '99.9% Uptime'],
            github: 'https://github.com/Sivaksan',
            category: 'Full-Stack',
        },
        {
            title: 'E-Commerce Platform with Admin Dashboard',
            description:
                'Complete e-commerce solution with React frontend, Node.js backend, and MongoDB. Features include product management, cart system, Stripe payment integration, order tracking, and real-time admin analytics dashboard.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Redux', 'JWT', 'REST API'],
            metrics: ['Real-Time Analytics', 'Payment Gateway', 'Admin Panel'],
            github: 'https://github.com/Sivaksan',
            category: 'Full-Stack',
        },
        {
            title: 'Social Media Mobile App',
            description:
                'Cross-platform social networking mobile application built with React Native. Features real-time messaging, post feeds, image uploads, user profiles, push notifications, and Firebase authentication.',
            tags: ['React Native', 'Firebase', 'Redux', 'Socket.io', 'Push Notifications', 'Expo'],
            metrics: ['Cross-Platform', 'Real-Time Chat', 'Cloud Storage'],
            github: 'https://github.com/Sivaksan',
            category: 'Full-Stack',
        },
        {
            title: 'Task Management SaaS Platform',
            description:
                'Enterprise-grade project management tool with Next.js frontend and microservices backend. Includes team collaboration, Kanban boards, time tracking, file sharing, and role-based access control.',
            tags: ['Next.js', 'Microservices', 'PostgreSQL', 'Docker', 'AWS', 'TypeScript', 'GraphQL'],
            metrics: ['Multi-Tenant', 'Microservices', 'Cloud Deploy'],
            github: 'https://github.com/Sivaksan',
            category: 'Full-Stack',
        },

        {
            title: 'Federated Learning Framework',
            description:
                'Distributed machine learning system with privacy-preserving training. Implemented XGBoost and LightGBM models with SHAP explainability for healthcare predictions.',
            tags: ['Federated Learning', 'XGBoost', 'LightGBM', 'SHAP', 'Privacy-Preserving'],
            metrics: ['Distributed ML', 'SHAP XAI', 'Healthcare App'],
            github: 'https://github.com/Sivaksan',
            category: 'AI/ML',
        },
    ];

    const filteredProjects =
        filter === 'All'
            ? projects
            : projects.filter((project) => project.category === filter);

    return (
        <section id="projects" className="relative min-h-screen py-20 px-4 bg-cyber-dark">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-cyber-cyan mb-4">
                        <span className="text-gray-500 font-mono text-xl mr-4">02.</span>
                        Featured Projects
                    </h2>
                    <div className="w-24 h-1 bg-cyber-cyan mx-auto mb-8"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A collection of research projects and practical applications spanning AI, robotics, and software engineering.
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 font-mono text-sm transition-all duration-300 ${filter === category
                                ? 'bg-cyber-cyan text-cyber-black border-cyber-cyan'
                                : 'bg-transparent text-cyber-cyan border-cyber-cyan/30 hover:border-cyber-cyan'
                                } border`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-12">
                    <a
                        href="https://github.com/Sivaksan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyber-cyan hover:text-white border border-cyber-cyan px-6 py-3 font-mono text-sm transition-all hover:bg-cyber-cyan hover:text-cyber-black"
                    >
                        <span>View All Projects on GitHub</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
