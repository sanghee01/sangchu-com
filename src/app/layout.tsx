import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import "./globals.css";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "상추 커뮤니티",
  description: "상추와 함께 커뮤니티를 해요.",
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body className={styles.container}>
        루트레이아웃
        {children}
      </body>
    </html>
  );
}
