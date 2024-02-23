import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorkoutControl API",
  description: "Admin API Manager for WorkoutControl",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center gap-4 p-4 bg-gray-800 text-white">
          <Link href={"/"} className="flex items-center gap-4">
            <Image
              src="/logo.png"
              alt="WorkoutControl Logo"
              width={64}
              height={64}
            />
            <h1>Dashboard</h1>
          </Link>
          <Link href={"/schema"}>
            <p>Schema</p>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
