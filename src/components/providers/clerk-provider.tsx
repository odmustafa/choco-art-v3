"use client";

import { ClerkProvider } from "@clerk/nextjs";

export function ClerkClientProvider({ children }: { children: React.ReactNode }) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
