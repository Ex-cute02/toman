import { Phone, AlertTriangle, Clock, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: Phone,
    label: "Active Calls",
    value: "124",
    change: "+2% from yesterday",
    iconColor: "text-primary",
    iconBg: "bg-accent",
  },
  {
    icon: AlertTriangle,
    label: "Critical Issues",
    value: "12",
    change: "+1 new alert",
    iconColor: "text-destructive",
    iconBg: "bg-destructive/10",
    alert: true,
  },
  {
    icon: Clock,
    label: "Avg Response",
    value: "18m",
    change: "-2m improvement",
    iconColor: "text-warning",
    iconBg: "bg-warning/10",
  },
  {
    icon: CheckCircle,
    label: "Resolved Today",
    value: "84%",
    change: "+5% target",
    iconColor: "text-success",
    iconBg: "bg-success/10",
  },
];

const StatsCards = () => (
  <div className="grid grid-cols-4 gap-4">
    {stats.map(({ icon: Icon, label, value, change, iconColor, iconBg, alert }) => (
      <div
        key={label}
        className="rounded-lg border border-border bg-card p-4"
      >
        <div className="flex items-center justify-between">
          <div className={`flex h-9 w-9 items-center justify-center rounded-md ${iconBg}`}>
            <Icon className={`h-[18px] w-[18px] ${iconColor}`} />
          </div>
          {alert && (
            <span className="flex h-2 w-2 rounded-full bg-destructive animate-pulse-glow" />
          )}
        </div>
        <p className="mt-3 text-2xl font-bold text-foreground font-mono">{value}</p>
        <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
        <p className="mt-2 text-[11px] text-muted-foreground">{change}</p>
      </div>
    ))}
  </div>
);

export default StatsCards;
