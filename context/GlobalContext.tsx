"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./ReactQuery";

export default function GlobalContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
