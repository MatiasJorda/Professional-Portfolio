import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TuDuy Design | Boston Massachusetts",
  description: "Creative Design Solutions by TuDuy - Elevating Digital Experiences Through Design in Boston, MA",
  keywords: "Boston designer, web design Boston, digital design Massachusetts, TuDuy Design, creative design solutions",
  openGraph: {
    title: "TuDuy Design | Boston Massachusetts",
    description: "Creative Design Solutions by TuDuy - Elevating Digital Experiences Through Design in Boston, MA",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/profile.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
