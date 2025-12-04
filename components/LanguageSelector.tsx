'use client';

import * as React from 'react';
import { Globe } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export default function LanguageSelector() {
    const [language, setLanguage] = React.useState('EN');

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:text-teal-100 hover:bg-teal-600">
                    <Globe className="mr-2 h-4 w-4" />
                    {language}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('EN')}>
                    English (EN)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('ES')}>
                    Español (ES)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('AR')}>
                    العربية (AR)
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('FR')}>
                    Français (FR)
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
