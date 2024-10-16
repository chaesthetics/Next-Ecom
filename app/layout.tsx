import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Navbar from "@/components/Navbar";
import { ThemeModeScript } from "flowbite-react";
import Footer from "@/components/Footer";
import { headers } from 'next/headers';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CHAE SHOP",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get('x-url') || "";

  return (
    <SessionProvider session={session}>
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="bg-white w-full h-screen flex flex-col">
          <Navbar />
          <div className="h-[calc(100vh-74px)] overflow-h-auto">
            {children}
          </div>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
    </SessionProvider>
  );
}
