'use client';

import { useEffect, useRef } from 'react';

export default function HeroSection() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const scale = window.devicePixelRatio;
        canvas.width = canvas.offsetWidth * scale;
        canvas.height = canvas.offsetHeight * scale;
        ctx.scale(scale, scale);

        let w = canvas.offsetWidth;
        let h = canvas.offsetHeight;

        const techLogos = [
            { name: 'React', color: '#61DAFB', x: w * 0.15, y: h * 0.15, vx: 0.3, vy: 0.2 },
            { name: 'Python', color: '#3776AB', x: w * 0.85, y: h * 0.15, vx: -0.2, vy: 0.3 },
            { name: 'PyTorch', color: '#EE4C2C', x: w * 0.15, y: h * 0.85, vx: 0.2, vy: -0.2 },
            { name: 'Node.js', color: '#339933', x: w * 0.85, y: h * 0.85, vx: -0.3, vy: -0.2 },
            { name: 'Next.js', color: '#000000', x: w * 0.1, y: h * 0.5, vx: 0.2, vy: 0.1 },
            { name: 'Docker', color: '#2496ED', x: w * 0.9, y: h * 0.5, vx: -0.2, vy: 0.2 },
            { name: 'MongoDB', color: '#47A248', x: w * 0.3, y: h * 0.2, vx: 0.15, vy: 0.25 },
            { name: 'TensorFlow', color: '#FF6F00', x: w * 0.7, y: h * 0.2, vx: -0.25, vy: 0.15 },
            { name: 'Angular', color: '#DD0031', x: w * 0.25, y: h * 0.7, vx: 0.25, vy: -0.15 },
            { name: 'JavaScript', color: '#F7DF1E', x: w * 0.75, y: h * 0.7, vx: -0.15, vy: -0.25 },
            { name: 'TypeScript', color: '#3178C6', x: w * 0.2, y: h * 0.4, vx: 0.3, vy: 0.15 },
            { name: 'ROS', color: '#22314E', x: w * 0.8, y: h * 0.4, vx: -0.15, vy: 0.3 },
        ];

        let mouseX = w / 2;
        let mouseY = h / 2;

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        });

        function drawReactLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
            ctx.strokeStyle = '#61DAFB';
            ctx.lineWidth = 2;

            for (let i = 0; i < 3; i++) {
                ctx.save();
                ctx.translate(x, y);
                ctx.rotate((i * Math.PI * 2) / 3);
                ctx.beginPath();
                ctx.ellipse(0, 0, size, size / 3, 0, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();
            }

            ctx.fillStyle = '#61DAFB';
            ctx.beginPath();
            ctx.arc(x, y, size / 6, 0, Math.PI * 2);
            ctx.fill();
        }

        function drawPythonLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
            ctx.fillStyle = '#3776AB';
            ctx.beginPath();
            ctx.arc(x - size / 4, y - size / 4, size / 3, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#FFD43B';
            ctx.beginPath();
            ctx.arc(x + size / 4, y + size / 4, size / 3, 0, Math.PI * 2);
            ctx.fill();
        }

        function drawPyTorchLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
            ctx.fillStyle = '#EE4C2C';
            ctx.beginPath();
            ctx.moveTo(x, y - size / 2);
            ctx.quadraticCurveTo(x + size / 3, y - size / 4, x, y + size / 2);
            ctx.quadraticCurveTo(x - size / 3, y - size / 4, x, y - size / 2);
            ctx.fill();
        }

        function drawNodeLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
            ctx.fillStyle = '#339933';
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const px = x + size * Math.cos(angle);
                const py = y + size * Math.sin(angle);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.fill();
        }

        function drawNextJSLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
            ctx.fillStyle = '#000000';
            ctx.strokeStyle = '#FFFFFF';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x, y - size / 2);
            ctx.lineTo(x + size / 2, y + size / 2);
            ctx.lineTo(x - size / 2, y + size / 2);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        function drawDockerLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
            ctx.fillStyle = '#2496ED';
            ctx.fillRect(x - size / 2, y - size / 4, size, size / 2);
            ctx.beginPath();
            ctx.arc(x + size / 3, y - size / 3, size / 4, 0, Math.PI * 2);
            ctx.fill();
        }

        function drawMongoDBLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
            ctx.fillStyle = '#47A248';
            ctx.beginPath();
            ctx.ellipse(x, y, size / 3, size / 2, Math.PI / 4, 0, Math.PI * 2);
            ctx.fill();
        }

        function drawTensorFlowLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
            ctx.fillStyle = '#FF6F00';
            ctx.fillRect(x - size / 3, y - size / 3, size / 2, size / 2);
            ctx.fillStyle = '#FFB300';
            ctx.fillRect(x, y, size / 2, size / 2);
        }

        function drawAngularLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
            ctx.fillStyle = '#DD0031';
            ctx.beginPath();
            ctx.moveTo(x, y - size / 2);
            ctx.lineTo(x + size / 2, y + size / 2);
            ctx.lineTo(x - size / 2, y + size / 2);
            ctx.closePath();
            ctx.fill();

            ctx.fillStyle = '#C3002F';
            ctx.beginPath();
            ctx.moveTo(x, y - size / 2);
            ctx.lineTo(x + size / 2, y + size / 2);
            ctx.lineTo(x, y + size / 4);
            ctx.closePath();
            ctx.fill();
        }

        function drawJavaScriptLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
            ctx.fillStyle = '#F7DF1E';
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
            ctx.fillStyle = '#000000';
            ctx.font = `bold ${size}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('JS', x, y);
        }

        function drawTypeScriptLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
            ctx.fillStyle = '#3178C6';
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
            ctx.fillStyle = '#FFFFFF';
            ctx.font = `bold ${size * 0.8}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('TS', x, y);
        }

        function drawROSLogo(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
            ctx.fillStyle = '#22314E';
            ctx.fillRect(x - size / 2, y - size / 2, size, size);
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(x - size / 4, y - size / 6, size / 8, 0, Math.PI * 2);
            ctx.arc(x + size / 4, y - size / 6, size / 8, 0, Math.PI * 2);
            ctx.fill();
        }

        function drawTechLogo(logo: any) {
            if (!ctx) return;

            const size = 25;

            ctx.save();
            ctx.shadowBlur = 20;
            ctx.shadowColor = logo.color;

            switch (logo.name) {
                case 'React':
                    drawReactLogo(ctx, logo.x, logo.y, size);
                    break;
                case 'Python':
                    drawPythonLogo(ctx, logo.x, logo.y, size);
                    break;
                case 'PyTorch':
                    drawPyTorchLogo(ctx, logo.x, logo.y, size);
                    break;
                case 'Node.js':
                    drawNodeLogo(ctx, logo.x, logo.y, size);
                    break;
                case 'Next.js':
                    drawNextJSLogo(ctx, logo.x, logo.y, size);
                    break;
                case 'Docker':
                    drawDockerLogo(ctx, logo.x, logo.y, size);
                    break;
                case 'MongoDB':
                    drawMongoDBLogo(ctx, logo.x, logo.y, size);
                    break;
                case 'TensorFlow':
                    drawTensorFlowLogo(ctx, logo.x, logo.y, size);
                    break;
                case 'Angular':
                    drawAngularLogo(ctx, logo.x, logo.y, size);
                    break;
                case 'JavaScript':
                    drawJavaScriptLogo(ctx, logo.x, logo.y, size);
                    break;
                case 'TypeScript':
                    drawTypeScriptLogo(ctx, logo.x, logo.y, size);
                    break;
                case 'ROS':
                    drawROSLogo(ctx, logo.x, logo.y, size);
                    break;
            }

            ctx.shadowBlur = 0;
            ctx.restore();

            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 11px monospace';
            ctx.textAlign = 'center';
            ctx.fillText(logo.name, logo.x, logo.y + 40);
        }

        function drawRobot(x: number, y: number, scale: number) {
            if (!ctx) return;

            ctx.save();
            ctx.translate(x, y);
            ctx.scale(scale, scale);

            ctx.fillStyle = '#00ff9f';
            ctx.fillRect(-30, -60, 60, 50);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.strokeRect(-30, -60, 60, 50);

            ctx.fillStyle = '#3b82f6';
            ctx.beginPath();
            ctx.arc(-15, -40, 6, 0, Math.PI * 2);
            ctx.arc(15, -40, 6, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#ff006e';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, -60);
            ctx.lineTo(0, -80);
            ctx.stroke();
            ctx.fillStyle = '#ff006e';
            ctx.beginPath();
            ctx.arc(0, -85, 5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#00ff9f';
            ctx.fillRect(-40, -10, 80, 90);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.strokeRect(-40, -10, 80, 90);

            ctx.fillStyle = '#000000';
            ctx.fillRect(-25, 5, 50, 30);
            ctx.strokeStyle = '#00ff9f';
            ctx.strokeRect(-25, 5, 50, 30);
            ctx.fillStyle = '#00ff9f';
            ctx.font = 'bold 10px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('AI', 0, 16);
            ctx.fillText('ACTIVE', 0, 28);

            ctx.fillStyle = '#8b5cf6';
            ctx.fillRect(-55, 0, 15, 60);
            ctx.fillRect(40, 0, 15, 60);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.strokeRect(-55, 0, 15, 60);
            ctx.strokeRect(40, 0, 15, 60);

            ctx.fillStyle = '#ff006e';
            ctx.beginPath();
            ctx.arc(-47, 65, 8, 0, Math.PI * 2);
            ctx.arc(47, 65, 8, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#00ff9f';
            ctx.fillRect(-30, 80, 20, 50);
            ctx.fillRect(10, 80, 20, 50);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.strokeRect(-30, 80, 20, 50);
            ctx.strokeRect(10, 80, 20, 50);

            ctx.fillStyle = '#8b5cf6';
            ctx.fillRect(-35, 130, 30, 10);
            ctx.fillRect(5, 130, 30, 10);
            ctx.strokeRect(-35, 130, 30, 10);
            ctx.strokeRect(5, 130, 30, 10);

            ctx.restore();
        }

        function drawTinyRobot(x: number, y: number, scale: number, color: string) {
            if (!ctx) return;

            ctx.save();
            ctx.translate(x, y);
            ctx.scale(scale * 0.3, scale * 0.3);

            ctx.fillStyle = color;
            ctx.fillRect(-8, -15, 16, 12);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.strokeRect(-8, -15, 16, 12);

            ctx.fillStyle = '#3b82f6';
            ctx.beginPath();
            ctx.arc(-3, -10, 1.5, 0, Math.PI * 2);
            ctx.arc(3, -10, 1.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#ff006e';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, -15);
            ctx.lineTo(0, -20);
            ctx.stroke();
            ctx.fillStyle = '#ff006e';
            ctx.beginPath();
            ctx.arc(0, -21, 1.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = color;
            ctx.fillRect(-10, -3, 20, 18);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.strokeRect(-10, -3, 20, 18);

            ctx.fillStyle = '#3b82f6';
            ctx.beginPath();
            ctx.arc(0, 5, 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = color === '#00ff9f' ? '#8b5cf6' : '#00ff9f';
            ctx.fillRect(-15, 0, 5, 12);
            ctx.fillRect(10, 0, 5, 12);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.strokeRect(-15, 0, 5, 12);
            ctx.strokeRect(10, 0, 5, 12);

            ctx.fillStyle = '#ff006e';
            ctx.beginPath();
            ctx.arc(-12, 13, 2, 0, Math.PI * 2);
            ctx.arc(12, 13, 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = color;
            ctx.fillRect(-7, 15, 5, 10);
            ctx.fillRect(2, 15, 5, 10);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.strokeRect(-7, 15, 5, 10);
            ctx.strokeRect(2, 15, 5, 10);

            ctx.fillStyle = color === '#00ff9f' ? '#8b5cf6' : '#00ff9f';
            ctx.fillRect(-9, 25, 7, 3);
            ctx.fillRect(0, 25, 7, 3);
            ctx.strokeRect(-9, 25, 7, 3);
            ctx.strokeRect(0, 25, 7, 3);

            ctx.restore();
        }

        function animate() {
            if (!ctx || !canvas) return;

            w = canvas.offsetWidth;
            h = canvas.offsetHeight;
            const isMobile = w < 768;
            const centerX = w / 2;
            const centerY = isMobile ? h * 0.45 : h / 2;

            ctx.clearRect(0, 0, w, h);

            ctx.strokeStyle = 'rgba(0, 255, 159, 0.1)';
            ctx.lineWidth = 1;
            for (let i = 0; i < techLogos.length; i++) {
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(techLogos[i].x, techLogos[i].y);
                ctx.stroke();
            }

            techLogos.forEach((logo) => {
                logo.x += logo.vx;
                logo.y += logo.vy;

                const padding = 60;
                if (logo.x < padding || logo.x > w - padding) logo.vx *= -1;
                if (logo.y < padding || logo.y > h - padding) logo.vy *= -1;

                logo.x = Math.max(padding, Math.min(w - padding, logo.x));
                logo.y = Math.max(padding, Math.min(h - padding, logo.y));

                const dx = mouseX - logo.x;
                const dy = mouseY - logo.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const push = (120 - dist) * 0.02;
                    logo.x -= (dx / dist) * push;
                    logo.y -= (dy / dist) * push;
                }

                drawTechLogo(logo);
            });

            const robotScale = (isMobile ? 0.6 : 0.8) + Math.sin(Date.now() * 0.001) * 0.1;
            drawRobot(centerX, centerY, robotScale);

            const agents = 5;
            const radius = isMobile ? 90 : 120;
            for (let i = 0; i < agents; i++) {
                const angle = (i / agents) * Math.PI * 2 - Math.PI / 2;
                const agentX = centerX + Math.cos(angle + Date.now() * 0.0005) * radius;
                const agentY = centerY + Math.sin(angle + Date.now() * 0.0005) * radius;

                const agentDist = Math.hypot(mouseX - agentX, mouseY - agentY);
                const agentScale = Math.max(0.8, 1 - agentDist / 200);

                const robotColor = i % 2 === 0 ? '#00ff9f' : '#ff006e';

                ctx.shadowBlur = 15;
                ctx.shadowColor = robotColor;

                drawTinyRobot(agentX, agentY, agentScale * 2, robotColor);

                ctx.shadowBlur = 0;

                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 10px monospace';
                ctx.textAlign = 'center';
                ctx.fillText(`Agent ${i + 1}`, agentX, agentY + 35);
            }

            requestAnimationFrame(animate);
        }

        animate();

        const handleResize = () => {
            if (!canvas) return;
            const s = window.devicePixelRatio;
            canvas.width = canvas.offsetWidth * s;
            canvas.height = canvas.offsetHeight * s;
            ctx?.scale(s, s);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="home" className="relative w-full overflow-x-hidden bg-cyber-black pt-16" suppressHydrationWarning>
            <div className="absolute inset-0 grid-bg opacity-30" />

            <div className="relative min-h-screen grid lg:grid-cols-2 items-center gap-8 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-8">
                <div className="relative z-20 space-y-6">
                    <div className="animate-fade-in">
                        <p className="text-cyber-cyan font-mono text-sm mb-3 flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-cyber-cyan animate-pulse rounded-full"></span>
                            Hello World, I'm
                        </p>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
                            SIVAKSHAN
                        </h1>
                        <div className="h-1 w-24 bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-cyber-purple mb-6"></div>
                    </div>

                    <div className="animate-slide-up space-y-4 opacity-0" style={{ animationDelay: '0.2s' }} suppressHydrationWarning>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-200 font-bold">
                            Full Stack Web & Mobile application developer | Aspiring AI, autonomous systems & Robotics Researcher
                        </h2>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
                            Specializing in{' '}
                            <span className="text-cyber-cyan font-semibold">Reinforcement Learning</span>,{' '}
                            <span className="text-cyber-magenta font-semibold">Explainable AI</span>, and{' '}
                            <span className="text-cyber-purple font-semibold">Autonomous Systems</span>
                        </p>
                        <p className="text-sm text-gray-500 font-mono">
                            MSc Robotics & AI | First Class Merit | University of Aberdeen
                        </p>
                    </div>

                    <div className="animate-slide-up flex flex-wrap gap-4 opacity-0 pt-2" style={{ animationDelay: '0.4s' }} suppressHydrationWarning>
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center overflow-hidden border-2 border-cyber-cyan px-6 py-3 font-mono text-sm font-medium text-cyber-cyan transition-all duration-300 hover:text-cyber-black"
                        >
                            <span className="absolute inset-0 h-full w-full bg-cyber-cyan transition-all duration-300 ease-out transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                            <span className="relative z-10">View My Work</span>
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center border-2 border-gray-700 px-6 py-3 font-mono text-sm font-medium text-gray-300 hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-300"
                        >
                            Get In Touch
                        </a>
                    </div>

                    <div className="animate-slide-up opacity-0 grid grid-cols-3 gap-4 pt-6 max-w-md" style={{ animationDelay: '0.5s' }} suppressHydrationWarning>
                        <div className="text-center p-4 border border-cyber-cyan/30 bg-cyber-dark/50 hover:border-cyber-cyan transition-all">
                            <div className="text-2xl font-bold text-cyber-cyan mb-1">20+</div>
                            <div className="text-xs text-gray-400">Projects</div>
                        </div>
                        <div className="text-center p-4 border border-cyber-cyan/30 bg-cyber-dark/50 hover:border-cyber-cyan transition-all">
                            <div className="text-2xl font-bold text-cyber-cyan mb-1">15+</div>
                            <div className="text-xs text-gray-400">Clients</div>
                        </div>
                        <div className="text-center p-4 border border-cyber-cyan/30 bg-cyber-dark/50 hover:border-cyber-cyan transition-all">
                            <div className="text-2xl font-bold text-cyber-cyan mb-1">102%</div>
                            <div className="text-xs text-gray-400">Improved </div>
                        </div>
                    </div>
                </div>

                <div className="relative h-[450px] md:h-[500px] lg:h-[700px] overflow-hidden">
                    <canvas ref={canvasRef} className="w-full h-full cursor-pointer" />
                    <div className="absolute top-4 right-4 bg-cyber-dark/90 border border-cyber-cyan/50 px-4 py-2 backdrop-blur-sm">
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="h-12 w-6 rounded-full border-2 border-cyber-cyan/40 flex items-start justify-center p-2">
                    <div className="h-2 w-1 rounded-full bg-cyber-cyan animate-pulse"></div>
                </div>
            </div>
        </section>
    );
}
