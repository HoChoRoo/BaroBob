import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BaroBob - 바로 밥",
  description: "스파로스 6기 점심 지킴이",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
