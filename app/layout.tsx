import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sivakshan S | Full Stack Web & Mobile developer | Aspiring AI, autonomous systems & Robotics Researcher',
  description: 'AI & Robotics Researcher specializing in Reinforcement Learning, Explainable AI, and Autonomous Systems. MSc Robotics & AI (First Class Merit) from University of Aberdeen.',
  keywords: 'Sivakshan, AI Researcher, Robotics, Machine Learning, Reinforcement Learning, Explainable AI, University of Aberdeen, Full Stack Developer, React, Python, PyTorch',
  authors: [{ name: 'Sivakshan S' }],
  creator: 'Sivakshan S',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://sivakshan.vercel.app',
    siteName: 'Sivakshan S Portfolio',
    title: 'Sivakshan S | Full Stack Web & Mobile developer | Aspiring AI, autonomous systems & Robotics Researcher',
    description: 'AI & Robotics Researcher specializing in Reinforcement Learning, Explainable AI, and Autonomous Systems. MSc Robotics & AI (First Class Merit) from University of Aberdeen.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sivakshan S | Full Stack Web & Mobile developer | Aspiring AI, autonomous systems & Robotics Researcher',
    description: 'AI & Robotics Researcher specializing in Reinforcement Learning, Explainable AI, and Autonomous Systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#00ff9f',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
