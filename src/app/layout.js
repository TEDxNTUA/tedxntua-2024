import NewNavbar from "@/components/NavBar/NavBar";
import "./globals.css";

export const metadata = {
  title: "TEDxNTUA 2024",
  description: "Generated by TEDxNTUA2024-IT",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "./favicons/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "./favicons/favicon-16x16.png",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <NewNavbar />

        {children}
      </body>
    </html>
  );
}
