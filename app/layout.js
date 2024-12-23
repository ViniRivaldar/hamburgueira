import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Provider  from './components/ClientProvider'

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
      <body className={`${geistSans.variable} ${geistMono.variable} vsc-initialized`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
