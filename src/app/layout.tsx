import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Metadata for the application
export const metadata: Metadata = {
  title: "Japura JobHub",
  description: "Connecting graduates and employers seamlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300">
        {/* Sticky Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen mx-auto px-4 py-6">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
