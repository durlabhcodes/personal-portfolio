import "./globals.css";
import { Inter, Martian_Mono, Nunito, Ubuntu } from "next/font/google";
import Navbar from "@/app_bkp/navbar/page";
import { NextFont } from "next/dist/compiled/@next/font";
import Footer from "@/app_bkp/footer/page";

const ubuntu: NextFont = Ubuntu({
  weight: ["700", "400", "300"],
  subsets: ["latin"],
});

const nunito: NextFont = Nunito({
  weight: ["700", "400", "300"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Durlabh Codes - An attempt was made",
  description: "Durlabh Sharma's attempt at appearing cool in coding community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
