import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BellIcon, LogOutIcon } from "lucide-react";
import { Link, NavLink, Outlet } from "react-router";

const sidebarItems: { label: string; to: string }[] = [
  {
    label: "Dashboard",
    to: "/landlord/dashboard",
  },

  {
    label: "Finance",
    to: "/landlord/finance",
  },
  {
    label: "Lease",
    to: "/landlord/lease",
  },

  {
    label: "Maintenance",
    to: "/landlord/maintenance",
  },
];

const LandlordLayout = () => {
  return (
    <div
      className="min-h-dvh grid"
      style={{ gridTemplateColumns: "240px 1fr", gridTemplateRows: "56px 1fr" }}
    >
      <aside className="row-span-2 bg-Background p-4 flex flex-col justify-between">
        <div>
          <div className="font-bold text-lg mb-4">
            <Link to="/landlord/dashboard" className="text-foreground">Apartment Hub</Link>
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
      <header className=" flex flex-row justify-end items-center  gap-3 px-4 border-b border-gray-200 bg-white">
        <div className="flex flex-row  items-center gap-3">
          <BellIcon color="black" />
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col text-sm">
              <span className="font-bold text-black">John Doe</span>
              <span className="text-black">Admin</span>
            </div>
          </div>
        </div>
      </header>
      <main className="col-start-2 p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default LandlordLayout;
