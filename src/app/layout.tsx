import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-main",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Mohammad Sijan | AI Specialist & Full-Stack Developer",
  description: "Mohammad Sijan is a Bangladeshi AI Architect and digital creator specializing in building agentic AI platforms like RexiO and futuristic web applications.",
  keywords: ["Mohammad Sijan", "RexiO AI", "AI Specialist", "AI Developer Bangladesh", "AI Architect", "Agentic UIs", "Spritex"],
  authors: [{ name: "Mohammad Sijan" }],
  creator: "Mohammad Sijan",
  openGraph: {
    type: "website",
    title: "Mohammad Sijan | AI Innovation Lead",
    description: "Building the next generation of AI-powered digital companions and agentic workflows.",
    url: "https://sijan.pro.bd/",
    images: ["/preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Sijan | AI Architect",
    description: "Exploring the intersection of AI, agentic UIs, and premium web development.",
    images: ["/preview.png"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://sijan.pro.bd/",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetBrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mohammad Sijan",
              "url": "https://sijan.pro.bd/",
              "image": "https://sijan.pro.bd/preview.png",
              "jobTitle": "AI Specialist & Full-Stack Developer",
              "homeLocation": {
                "@type": "Place",
                "name": "Bangladesh"
              },
              "knowsAbout": [
                "Artificial Intelligence",
                "Agentic Workflows",
                "RexiO AI",
                "Full-Stack Development",
                "Cybersecurity"
              ]
            })
          }}
        />
      </head>
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
