import { Urbanist } from "next/font/google";
import "./globals.css";

const primaryFont = Urbanist({ weight: "400", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://swapamnow.com"),
  title: {
    default: "Swapam | Unlock the Future of Payments",
    template: "%s | Unlock the Future of Payments",
  },
  description: "Unlock the Future of Payments",
  url: "https://swapamnow.com",
  icons: {
    icon: "/icon.png",
  },
  category: "finance",
  applicationName: "Swapam",
  other: {
    "facebook-domain-verification": "vbv28a4scqi519abnk99nl9yopckwn",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={primaryFont.className}>{children}</body>
    </html>
  );
}
