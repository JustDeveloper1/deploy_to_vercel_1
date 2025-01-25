import type { Metadata } from "next";
import localFont from "next/font/local";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

import { RootProvider } from "fumadocs-ui/provider";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import Script from 'next/script';
import { HeadInnerHTML } from "@/head";
import { Banner } from 'fumadocs-ui/components/banner';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const grotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-grotesque",
});
const Rubik = localFont({
  src: "./fonts/Rubik.woff2",
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CodeShare",
    template: "%s | CodeShare",
  },
  description: "CodeShare is the best tool for storing and sharing codes and text, aka paste tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadInnerHTML />
      </head>
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} ${grotesque.variable} ${Rubik.variable}`,
          "font-geist antialiased",
        )}
        suppressHydrationWarning
      >
        <Banner variant="rainbow" changeLayout={false}><span id="bannerText">This service is W.I.P.</span></Banner>
        <div id="notifications"></div>
        <RootProvider>
          <div id="content">
            <ThemeProvider>{children}</ThemeProvider>
          </div>
          <Script src="/js/system.js" />
        </RootProvider>
      </body>
    </html>
  );
}
