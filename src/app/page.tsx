"use client";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatsCards from "@/components/dashboard/StatsCards";
import TicketsTable from "@/components/dashboard/TicketsTable";
import SentimentPanel from "@/components/dashboard/SentimentPanel";
import { Download, Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <DashboardSidebar />

      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground">Overview</h2>
              <p className="text-xs text-muted-foreground mt-0.5">
                October 24, 2023 — 10:42 AM
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-xs text-secondary-foreground hover:bg-muted transition-colors">
                <Download className="h-3.5 w-3.5" />
                Export
              </button>
              <button className="flex items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                <Plus className="h-3.5 w-3.5" />
                New Ticket
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-5">
            <StatsCards />
          </div>

          {/* Main content */}
          <div className="mt-5 grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <TicketsTable />
            </div>
            <div className="col-span-1">
              <SentimentPanel />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
