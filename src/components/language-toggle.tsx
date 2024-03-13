import { useContext } from 'react';
import { Globe2 } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LanguageContext } from '@/AppLayout';

export default function LanguageToggle() {
  const {setLanguage} = useContext(LanguageContext);
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild disabled={true}>
      <Button variant="ghost" size="icon" className="text-text bg-transparent">
        <Globe2 className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90" />
        <span className="sr-only">Toggle Language Selector</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="bg-header-background text-text z-[3]">
      <DropdownMenuItem className="hover:bg-primary" onClick={()=> setLanguage("turkish")}>
        Turkish
      </DropdownMenuItem>
      <DropdownMenuItem className="hover:bg-primary" onClick={()=> setLanguage("english")}>
        English
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
  )
}

