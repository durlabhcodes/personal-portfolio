import "./globals.css";
import { Inter, Ubuntu } from "next/font/google";
import Navbar from "@/app/navbar/page";
import { NextFont } from "next/dist/compiled/@next/font";

const inter = Inter({ subsets: ["latin"] });
const ubuntu: NextFont = Ubuntu({
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
      <body className={ubuntu.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
