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
  title: "Mohammad Sijan | Web Developer & Cybersecurity Expert",
  description: "Mohammad Sijan is a Bangladeshi web developer, cybersecurity enthusiast, and digital creator specializing in modern AI-powered web applications.",
  keywords: ["Mohammad Sijan", "Sijan Pro", "Web Developer Bangladesh", "Cybersecurity Expert", "AI Developer", "Portfolio", "Spritex"],
  authors: [{ name: "Mohammad Sijan" }],
  creator: "Mohammad Sijan",
  openGraph: {
    type: "website",
    title: "Mohammad Sijan | Digital Creator & Developer",
    description: "Explore the official portfolio and digital encyclopedia of Mohammad Sijan.",
    url: "https://sijan.pro.bd/",
    images: ["/preview.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Sijan | Digital Creator & Developer",
    description: "Explore the official portfolio and digital encyclopedia of Mohammad Sijan.",
    images: ["/preview.png"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://sijan.pro.bd/",
  },
};

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
      </head>
      <body>{children}</body>
    </html>
  );
}
