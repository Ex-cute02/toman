import { useState } from "react";
import { Droplet, LayoutDashboard, Ticket, Map, FileText, Settings } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Ticket, label: "Tickets" },
  { icon: Map, label: "Map" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

const wards = ["Ward 1", "Ward 2", "Ward 3", "Ward 4", "Ward 5"];

const DashboardSidebar = () => {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const [selectedWards, setSelectedWards] = useState<string[]>(["Ward 1"]);

  const toggleWard = (ward: string) => {
    setSelectedWards((prev) =>
      prev.includes(ward) ? prev.filter((w) => w !== ward) : [...prev, ward]
    );
  };

  return (
    <aside className="flex h-screen w-60 flex-col bg-sidebar border-r border-sidebar-border">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5">
        <Droplet className="h-6 w-6 text-primary" />
        <div>
          <h1 className="text-sm font-bold text-sidebar-accent-foreground">Municipal Ops</h1>
          <p className="text-[11px] text-sidebar-foreground">Water & Sanitation</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-2 flex-1 px-3">
        {navItems.map(({ icon: Icon, label, active }) => (
          <button
            key={label}
            onClick={() => setActiveNav(label)}
            className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors mb-0.5 ${
              activeNav === label
                ? "bg-sidebar-accent text-sidebar-accent-foreground"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
            }`}
          >
            <Icon className="h-[18px] w-[18px]" />
            {label}
          </button>
        ))}

        {/* Zone Filter */}
        <div className="mt-6 px-1">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            Zone Filter
          </p>
          <div className="space-y-1">
            {wards.map((ward) => (
              <button
                key={ward}
                onClick={() => toggleWard(ward)}
                className={`flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-xs transition-colors ${
                  selectedWards.includes(ward)
                    ? "bg-accent text-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    selectedWards.includes(ward) ? "bg-primary" : "bg-muted-foreground/40"
                  }`}
                />
                {ward}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* User */}
      <div className="border-t border-sidebar-border px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
            AM
          </div>
          <div>
            <p className="text-sm font-medium text-sidebar-accent-foreground">Alex Morgan</p>
            <p className="text-[11px] text-sidebar-foreground">Dispatcher</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
