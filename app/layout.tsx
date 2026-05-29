import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./shared/component/header";
import Footer from "./shared/component/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muji-cover",
  description: "Muji frontend ecommerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full min-w-full flex flex-col text-sm md:text-lg">
        <Header />
        <main className=" flex-grow px-2 py-2">
          <div className="container max-w-7xl mx-auto">{children}</div>
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
