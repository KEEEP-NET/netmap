import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";

const inter = IBM_Plex_Sans_KR({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "netmap",
  description: "created by KEEEP.NET",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
