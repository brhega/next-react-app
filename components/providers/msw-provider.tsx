'use client'

export default function MSWProvider({ children }: { children: React.ReactNode }) {
    if (typeof window === 'undefined') {
        return <>{children}</>;
    } else {
        const { worker } = require('@/lib/api/mocks/browser');
        worker.start();
        return <>{children}</>;
    }
}