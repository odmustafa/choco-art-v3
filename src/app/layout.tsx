import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkClientProvider } from "@/components/providers/clerk-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js + Convex + Clerk App",
  description: "A modern full-stack application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkClientProvider>
      <html lang="en">
        <body className={inter.className}>
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </body>
      </html>
    </ClerkClientProvider>
  );
}
