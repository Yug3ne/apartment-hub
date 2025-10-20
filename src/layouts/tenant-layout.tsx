import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellIcon, LogOutIcon } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router";

const sidebarItems: { label: string; to: string }[] = [
  {
    label: "Dashboard",
    to: "/tenant/dashboard",
  },
  {
    label: "Payments",
    to: "/tenant/payments",
  },
  {
    label: "Lease",
    to: "/tenant/lease",
  },
  {
    label: "Maintenance",
    to: "/tenant/maintenance",
  },
];

const TenantLayout = () => {
  return (
    <div className="min-h-dvh flex">
      <aside className="w-60 bg-Background p-4 flex flex-col justify-between overflow-hidden fixed h-full">
        <div>
          <div className="font-bold text-lg mb-4">
            <Link to="/tenant/dashboard" className="text-foreground">
              Apartment Hub
            </Link>
          </div>
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded  ${
                    isActive
                      ? "bg-primary text-white "
                      : "hover:bg-Background text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex w-full items-center gap-2">
          <Button variant="outline" size="icon" className="w-2/3">
            <LogOutIcon />
            Logout
          </Button>
          <ModeToggle />
        </div>
      </aside>
      <div className="flex-1 ml-60">
        <header className="flex flex-row justify-end items-center gap-3 px-4 border-b border-gray-200 bg-white h-14">
          <div className="flex flex-row items-center gap-3">
            <BellIcon color="black" />
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>TN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col text-sm">
                <span className="font-bold text-black">Jane Tenant</span>
                <span className="text-black">Tenant</span>
              </div>
            </div>
          </div>
        </header>
        <main className="p-6 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default TenantLayout;
