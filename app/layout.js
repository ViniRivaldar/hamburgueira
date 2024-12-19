import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
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
      <Head>
        
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400&family=Geist+Mono:wght@400&display=swap"
          as="font"
          type="font/woff2"
          crossorigin="anonymous"
        />
      </Head>
      <body className="vsc-initialized">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
