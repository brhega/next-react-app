'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,        // Data is immediately stale
        gcTime: 0,           // No garbage collection time (no cache)
      },
    },
  }));

    return (
        <QueryClientProvider client={queryClient}>
            <div>{children}</div>
        </QueryClientProvider>
    );
}
