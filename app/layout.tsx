import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web Hosting Services | SA Telecoms",
  description: "Professional web hosting services with integrated email hosting, custom website design, and 24/7 support. Subscription-based fully designed websites starting at R299/month.",
  keywords: "web hosting, email hosting, website design, SA Telecoms, managed hosting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
