import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";
import Web3ModalProvider from "@/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SARRAFF.in",
  description: "sarraffin",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieHeader = (await headers()).get("cookie");
  const initialState = cookieToInitialState(config, cookieHeader ?? undefined);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Web3ModalProvider initialState={initialState}>{children}</Web3ModalProvider>
      </body>
    </html>
  );
}
