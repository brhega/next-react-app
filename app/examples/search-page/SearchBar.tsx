'use client'

import { Input } from "@/components/ui/input";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';


export default function SearchBar() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
        params.set('query', term);
        } else {
        params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 400);
    
    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-lg px-4">
                <Input
                    placeholder="Search..."
                    className="text-lg py-6 px-6 text-center shadow-lg"
                    onChange={(e) => handleSearch(e.target.value)}
                />
            </div>
        </div>
    );
}