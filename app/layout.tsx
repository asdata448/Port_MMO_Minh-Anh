import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Võ Thị Minh Anh - HR Executive Portfolio",
  description: "Portfolio của Võ Thị Minh Anh - HR Executive chuyên nghiệp với kinh nghiệm trong tuyển dụng, quản lý nhân sự và phát triển nguồn nhân lực.",
  keywords: ["HR Executive", "Nhân sự", "Tuyển dụng", "Human Resources", "Võ Thị Minh Anh", "Portfolio"],
  authors: [{ name: "Võ Thị Minh Anh" }],
  openGraph: {
    title: "Võ Thị Minh Anh - HR Executive Portfolio",
    description: "Portfolio của Võ Thị Minh Anh - HR Executive chuyên nghiệp với kinh nghiệm trong tuyển dụng, quản lý nhân sự và phát triển nguồn nhân lực.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Võ Thị Minh Anh - HR Executive Portfolio",
    description: "Portfolio của Võ Thị Minh Anh - HR Executive chuyên nghiệp với kinh nghiệm trong tuyển dụng, quản lý nhân sự và phát triển nguồn nhân lực.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
