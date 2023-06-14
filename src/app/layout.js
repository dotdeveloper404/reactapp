import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dot Dev",
  description: "This is the Dot Dev Description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {/* auth provider is becuase we cannot add client component in server component 
          so we can made another component for use client and call here */}
          <AuthProvider>  
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
            </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
