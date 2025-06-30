import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SearchBox from "../post/SearchBox";

export default function PublicHeader() {
  return (
    <div>
      <header className="border-b bg-blue-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="font-bold text-xl">
                    Blog
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-4">
            <SearchBox />
            <Button variant={"outline"} asChild>
              <Link href="/login">ログイン</Link>
            </Button>
            <Button variant={"default"} asChild>
              <Link href="/register">登録</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
