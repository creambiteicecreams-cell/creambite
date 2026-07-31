import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import LocalBusinessSchema from "./components/seo/LocalBusinessSchema";

import "./globals.css";

import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://creambite.in"),
  manifest: "/manifest.webmanifest",
  icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/favicon.ico",
},

  title: {
    default:
      "Cream Bite | Premium Ice Cream, Belgian Waffles & Sugar-Free Desserts in Bangalore",
    template: "%s | Cream Bite",
  },

  description:
    "Cream Bite is a premium ice cream parlour in Bangalore serving handcrafted ice creams, Belgian waffles, signature sundaes, chocolate bowls, thick shakes, and delicious sugar-free desserts. Delight in Every Bite.",

  keywords: [
    "Cream Bite",
    "Dbc",
    "Waffles",
    "triple chocolate waffle",
    "crucnhy chocolate waffle",
    "gudbud ice cream",
    "chocolate bowl",
    "dryfruits ice cream",
    "Best Ice Cream in Hebbal",
    "best ice cream in thanisandra",
    "best ice cream in coffeeboard",
    "Dbc sundae",
    "ice cream near Hebbal",
    "ice cream near coffeeboard",
    "ice cream near thanisandra",
    "Ice Cream Bangalore",
    "Premium Ice Cream near kempapura",
    "tasty ice cream",
    "Ice Cream Parlour Bangalore",
    "Belgian Waffles Bangalore",
    "Chocolate Bowl",
    "Signature Sundaes",
    "Sugar Free Desserts",
    "Sugar Free Ice Cream",
    "Sugar Free Waffles",
    "Vegan Desserts",
    "Premium Ice Cream",
    "Desserts Near Me",
    "Ice Cream Near Me",
    "Waffles Near Me",
    "Best Ice Cream Bangalore",
  ],

  alternates: {
    canonical: "https://creambite.in",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title:
      "Cream Bite | Premium Ice Cream, Belgian Waffles & Sugar-Free Desserts",

    description:
      "Experience handcrafted ice creams, Belgian waffles, signature sundaes, chocolate bowls, shakes and sugar-free desserts at Cream Bite.",

    url: "https://creambite.in",
    siteName: "Cream Bite",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "/images/hero.png", // Change if your hero image has a different filename
        width: 1200,
        height: 630,
        alt: "Cream Bite Premium Desserts",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cream Bite | Premium Ice Cream & Belgian Waffles",

    description:
      "Premium ice creams, Belgian waffles, chocolate bowls, sundaes and sugar-free desserts.",

    images: ["/images/hero.png"], // Change if needed
  },

  category: "Restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-white">
        <LocalBusinessSchema />
        <WishlistProvider>
          <CartProvider>
            {children}

            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                duration: 3000,
                style: {
                  borderRadius: "12px",
                  background: "#222",
                  color: "#fff",
                },
                success: {
                  style: {
                    background: "#16a34a",
                    color: "#fff",
                  },
                },
                error: {
                  style: {
                    background: "#dc2626",
                    color: "#fff",
                  },
                },
              }}
            />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}