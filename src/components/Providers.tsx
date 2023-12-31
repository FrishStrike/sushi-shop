"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import store from "@/store";
import { Provider } from "react-redux";
import { SkeletonTheme } from "react-loading-skeleton";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  },
});

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <SkeletonTheme>
          <Provider store={store}>{children}</Provider>;
        </SkeletonTheme>
      </QueryClientProvider>
    </SessionProvider>
  );
};
