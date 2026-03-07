import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import SmoothScrollReveal from "./components/SmoothScrollReveal";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nikhilumaretiya.github.io"),
  title: "Nikhil Umaretiya – Full-Stack PHP Developer | WordPress, Laravel, Shopify",
  description: "Portfolio of Nikhil Umaretiya, a Full-Stack PHP Developer with 7+ years of experience in WordPress (Sage 10 + Bedrock), Laravel, and Shopify development.",
  keywords: "PHP Developer, WordPress Developer, Laravel Developer, Shopify Expert, Full Stack Developer India, Sage 10, Bedrock, GitHub Portfolio",
  authors: [{ name: "Nikhil Umaretiya" }],
  alternates: {
    canonical: "https://nikhilumaretiya.github.io",
  },
  verification: {
    google: "oI1p7W7zHhmh4RvvHppDpa-ftUrBVsSExioCw9MVFUM",
  },
  openGraph: {
    title: "Nikhil Umaretiya – Full-Stack PHP Developer",
    description: "Explore my portfolio built with WordPress, Laravel, and Shopify.",
    url: "https://nikhilumaretiya.github.io",
    siteName: "Nikhil Umaretiya Portfolio",
    images: [
      {
        url: "/assets/images/logo.ico",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Umaretiya – Full-Stack PHP Developer",
    description: "Explore my portfolio built with WordPress, Laravel, and Shopify.",
    images: ["/assets/images/avatar-1.png"],
  },
  icons: {
    icon: "/assets/images/logo.ico",
    shortcut: "/assets/images/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <main>
          <Sidebar />
          <div className="main-content">
            <Navbar />
            <SmoothScrollReveal>
              {children}
            </SmoothScrollReveal>
          </div>
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
