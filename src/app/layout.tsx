import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "@/styles/pages/globals.scss";
import MainContainer from "@/components/layout/MainContainer";

const notoSans = Noto_Sans({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Frame",
  description: "Frame is a fictional site about a photography team.",
  keywords: "frame, photo, photograph, camera, flash",
  authors: [
    {
      name: "André Siboli",
      url: "https://portfolio-three-gold-93.vercel.app/",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.className}`}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
