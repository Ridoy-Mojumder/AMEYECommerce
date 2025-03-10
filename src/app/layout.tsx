import FooterSection from "@/components/Footer";
import Navbar from "@/components/Header";
import ShopByCategory from "@/components/Header/ShopByCategory/ShopByCategory";
import ReduxStoreProvider from "@/store/ReduxStoreProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Drawer from "@/components/Drawer/Drawer";
import AddToCartDrawer from "@/components/Drawer/DrawerForAddToCart/DrawerForAddToCart";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} antialiased relative`}
      >
        <ReduxStoreProvider>
          <Navbar />
          <ShopByCategory />
          <Toaster position="top-right" reverseOrder={false} />
          <Drawer/>
          <AddToCartDrawer/>

          {children}
          <FooterSection />
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
