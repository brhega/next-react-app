import {
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuContent
} from "@/components/ui/navigation-menu";

export default function NavBar() {
    return (
        <div className="border-b">
            <div className="flex justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/" className="text-lg">Home</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/about" className="text-lg">About</NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/documentation" className="text-lg">Documentation</NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
}