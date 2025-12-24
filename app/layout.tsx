import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weeks Calculator",
  description: "Calculate years and weeks between two dates",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

