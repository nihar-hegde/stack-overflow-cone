import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogoutButton } from "./logout-button";
import { auth } from "@/authentication/auth";

export const UserNav = async () => {
  const session = await auth();
  const user = session?.user;
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative size-8 rounded-full">
            <Avatar className="size-8">
              <AvatarImage src={user?.image!} alt={user?.name!} />
              <AvatarFallback>{user?.name![0]}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-56 dark:bg-dark-400"
          align="end"
          forceMount
        >
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none dark:text-light-800">
                {user?.name!}
              </p>
              <p className="text-muted-foreground text-xs leading-none dark:text-light-800">
                {user?.email!}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <LogoutButton>Logout</LogoutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
