import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

// ✅ Font optimization
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ✅ Metadata
export const metadata = {
  title: "Riyan Ghouri | Frontend Developer Portfolio",
  description:
    "Hi, I'm Riyan Ghouri, a passionate web developer with expertise in Next.js and React. With years of experience building scalable, high-performance web applications, I specialize in creating responsive and user-friendly interfaces. Whether you're looking to develop a complex app or a dynamic website, I can help bring your vision to life with cutting-edge technologies and best practices.",
  keywords: [
    "Riyan Ghouri",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "ghouri",
    "portfolio",
    "developer",
    "nextjs",
    "riyanghouri",
    "riyan",
  ],
  authors: [{ name: "Riyan Ghouri" }],
  openGraph: {
    title: "Riyan Ghouri | Frontend Developer Portfolio",
    description:
      "Hi, I'm Riyan Ghouri, a passionate web developer with expertise in Next.js and React.",
    url: "https://riyanghouri.vercel.app",
    siteName: "Riyan Ghouri Portfolio",
    images: [
      {
        url: "https://riyanghouri.vercel.app/logo.png", // ✅ full absolute URL!
        width: 1200,
        height: 630,
        alt: "Riyan Ghouri Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riyan Ghouri | Frontend Developer Portfolio",
    description:
      "Hi, I'm Riyan Ghouri, a passionate web developer with expertise in Next.js and React.",
    images: ["https://riyanghouri.vercel.app/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#AD343E" />

        {/* ✅ WhatsApp, Discord, and Facebook Preview Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Riyan Ghouri | Frontend Developer Portfolio" />
        <meta
          property="og:description"
          content="Hi, I'm Riyan Ghouri, a passionate web developer with expertise in Next.js and React."
        />
        <meta property="og:image" content="https://riyanghouri.vercel.app/logo.png" />
        <meta property="og:url" content="https://riyanghouri.vercel.app" />
        <meta property="og:site_name" content="Riyan Ghouri Portfolio" />

        {/* ✅ Twitter Card (used by some preview engines too) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Riyan Ghouri | Frontend Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Hi, I'm Riyan Ghouri, a passionate web developer with expertise in Next.js and React."
        />
        <meta name="twitter:image" content="https://riyanghouri.vercel.app/logo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-[#0f0f0f] text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main role="main">{children}</main>
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </ThemeProvider>

        {/* ✅ Proper Google Analytics setup */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZFZWQM1VJ8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZFZWQM1VJ8');
          `}
        </Script>
      </body>
    </html>
  );
}
