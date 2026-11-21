import { Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Intervexa",
    template: "%s · Intervexa",
  },
  description: "Analyse a job, then score a candidate's interview answers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <div className="sticky top-0 z-30">
          <TopBar />
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
