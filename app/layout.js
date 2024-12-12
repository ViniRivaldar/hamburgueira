import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hamburgueria",
  description: "codeburguer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="PT-br">
      <body className="vsc-initialized">
        {children}
      </body>
    </html>
  );
}
