import Layout from "@/components/layout/layout";
import localFont from "next/font/local";
import "./globals.css";

const iranSans = localFont({
  src: [
    {
      path: "./fonts/IRANSansX-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansX-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansX-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/IRANSansX-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${iranSans.className}   `}>
      <body className={`${iranSans.className} `}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
