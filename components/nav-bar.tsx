import Link from "next/link";
import {
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
    return (
        <div className="border-b">
            <div className="flex justify-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="text-lg">
                                <Link href="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="text-lg">
                                <Link href="/examples">Examples</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="text-lg">
                                <Link href="/documentation">Documentation</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
}