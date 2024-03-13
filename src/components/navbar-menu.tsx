import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"

export default function NavbarMenu({ className = "", data}: {className:string, data:object}) {
    const navigationMenuItem = Object.entries(data).map(([key, value]) => (
        <NavigationMenuItem key={key}>
            <a href={`#${key}`}>
                <NavigationMenuLink className="navbar--text text-text group inline-flex h-9 w-max items-center 
                justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium 
                transition-colors focus:outline-none disabled:pointer-events-none 
                disabled:opacity-50 hover:bg-accent hover:text-white max-md:text-xs max-[350px]:text-[9px]">
                    {value}
                </NavigationMenuLink>
            </a>
        </NavigationMenuItem>
    ));

    return (
        <nav>
            <NavigationMenu className={className}>
                <NavigationMenuList className='uppercase w-full md:w-fit'>
                    {navigationMenuItem}
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}

export function NavbarMenuMobile({className = "", data}: {className:string, data: object}){
    return (
        <div className={`${className}`}>
            <NavbarMenu className="" data={data}/>
        </div>
    )
}
{/* <DropdownMenu>
<DropdownMenuTrigger asChild>
    <Button variant="ghost" className='text-text w-fit p-2 bg-transparent border-0 focus:border-0'><Menu /></Button>
</DropdownMenuTrigger>
<DropdownMenuContent className="h-fit bg-header-background text-text z-[3]">
    <NavbarMenu className="" data={data}/>
</DropdownMenuContent>
</DropdownMenu> */}
