import { ConfettiProvider } from "@/components/providers/confetti-provider";
import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduquic",
  description: "developed by justina",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/eq.ico",
        href: "/eq.ico",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/eqd.ico",
        href: "/eqd.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider>
          <ConvexClientProvider>
            <EdgeStoreProvider>
              <Toaster position="bottom-center" />
              <ModalProvider />
              <ConfettiProvider />
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
              >
                <ThemeContextProvider>
                  <ActiveSectionContextProvider>
                    {children}
                  </ActiveSectionContextProvider>
                </ThemeContextProvider>
              </ThemeProvider>
            </EdgeStoreProvider>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
