import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";
import Navbar from "@/app/navbar/page";
import { Nunito, Ubuntu } from "next/font/google";
//import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

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
/*const client = new ApolloClient({
  uri: "https://gql.hashnode.com",
  cache: new InMemoryCache(),
});*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={nunito.className}>
        {/*  <ApolloProvider client={client}>*/}
        <Navbar />
        {children}
        {/*</ApolloProvider>*/}
      </body>
    </html>
  );
}
