import "./globals.css";
import { Leckerli_One, Montserrat_Subrayada, Roboto } from "next/font/google";
import Header from "@/components/Header";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Leckerli = Leckerli_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-leckerli",
});
const montserrat = Montserrat_Subrayada({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-monsterrat",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${Leckerli.variable} ${roboto.variable} ${montserrat.variable} `}
    >
      <body>
        <main className="flex flex-col min-h-screen">
          <Header />
          {children}
          <CTA />
          <Footer />
        </main>
      </body>
    </html>
  );
}
