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
  title: "Nikhil Umaretiya – Full-Stack Developer",
  description: "Portfolio of Nikhil Umaretiya, a Full-Stack PHP Developer with 7+ years of experience.",
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
