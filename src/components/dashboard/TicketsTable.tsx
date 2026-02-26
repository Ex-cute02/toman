import { Search, SlidersHorizontal, MoreVertical } from "lucide-react";
import { useState } from "react";

type Urgency = "Critical" | "High" | "Medium" | "Low";
type Status = "Open" | "Assigned" | "Investigating" | "Resolved";

interface Ticket {
  id: string;
  initials: string;
  name: string;
  zone: string;
  issue: string;
  urgency: Urgency;
  time: string;
  status: Status;
}

const tickets: Ticket[] = [
  { id: "#4092", initials: "AM", name: "Alice M.", zone: "Ward 1", issue: "Pipe Leak", urgency: "High", time: "10:42 AM", status: "Open" },
  { id: "#4091", initials: "JD", name: "John D.", zone: "Ward 2", issue: "Low Pressure", urgency: "Medium", time: "10:30 AM", status: "Assigned" },
  { id: "#4090", initials: "SL", name: "Sarah L.", zone: "Ward 1", issue: "Water Quality", urgency: "Critical", time: "10:15 AM", status: "Investigating" },
  { id: "#4089", initials: "MR", name: "Mike R.", zone: "Ward 3", issue: "No Service", urgency: "High", time: "09:55 AM", status: "Open" },
  { id: "#4088", initials: "EW", name: "Emma W.", zone: "Ward 4", issue: "Meter Leak", urgency: "Low", time: "09:40 AM", status: "Resolved" },
];

const urgencyStyles: Record<Urgency, string> = {
  Critical: "bg-destructive/15 text-destructive",
  High: "bg-warning/15 text-warning",
  Medium: "bg-primary/15 text-primary",
  Low: "bg-muted text-muted-foreground",
};

const statusStyles: Record<Status, string> = {
  Open: "bg-warning/15 text-warning",
  Assigned: "bg-primary/15 text-primary",
  Investigating: "bg-destructive/15 text-destructive",
  Resolved: "bg-success/15 text-success",
};

const TicketsTable = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="rounded-lg border border-border bg-card">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <h3 className="text-sm font-semibold text-foreground">Active Tickets</h3>
        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted">
            <SlidersHorizontal className="h-4 w-4" />
          </button>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="h-8 w-40 rounded-md border border-border bg-muted pl-8 pr-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border text-muted-foreground">
              <th className="px-4 py-2.5 text-left font-medium">ID</th>
              <th className="px-4 py-2.5 text-left font-medium">Citizen</th>
              <th className="px-4 py-2.5 text-left font-medium">Zone</th>
              <th className="px-4 py-2.5 text-left font-medium">Issue</th>
              <th className="px-4 py-2.5 text-left font-medium">Urgency</th>
              <th className="px-4 py-2.5 text-left font-medium">Time</th>
              <th className="px-4 py-2.5 text-left font-medium">Status</th>
              <th className="w-10 px-4 py-2.5"></th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((t) => (
              <tr key={t.id} className="border-b border-border/50 hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3 font-mono font-medium text-foreground">{t.id}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-[10px] font-semibold text-accent-foreground">
                      {t.initials}
                    </span>
                    <span className="text-foreground">{t.name}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{t.zone}</td>
                <td className="px-4 py-3 text-foreground">{t.issue}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${urgencyStyles[t.urgency]}`}>
                    {t.urgency}
                  </span>
                </td>
                <td className="px-4 py-3 font-mono text-muted-foreground">{t.time}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${statusStyles[t.status]}`}>
                    {t.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-muted-foreground hover:text-foreground">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TicketsTable;
