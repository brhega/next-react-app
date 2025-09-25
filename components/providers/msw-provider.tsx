'use client'

import { use } from 'react';

// Initialize MSW once at module level
const mswReady = typeof window !== 'undefined'
    ? (async () => {
        const { worker } = await import('@/lib/api/mocks/browser');
        await worker.start({
            onUnhandledRequest: 'bypass',
        });
      })()
    : Promise.resolve();

export default function MSWProvider({ children }: { children: React.ReactNode }) {
    if (typeof window !== 'undefined') {
        use(mswReady);
    }

    return <>{children}</>;
}