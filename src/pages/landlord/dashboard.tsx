import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ChartNoAxesCombined, CreditCard, Users2 } from "lucide-react";

const barData = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 24 },
  { month: "Mar", value: 28 },
  { month: "Apr", value: 31 },
  { month: "May", value: 40 },
  { month: "Jun", value: 34 },
  { month: "Jul", value: 37 },
  { month: "Aug", value: 18 },
  { month: "Sep", value: 29 },
  { month: "Oct", value: 41 },
  { month: "Nov", value: 36 },
  { month: "Dec", value: 33 },
];

const pieData = [
  { name: "Occupied", value: 60, color: "#60a5fa" },
  { name: "Available", value: 25, color: "#93c5fd" },
  { name: "Maintenance", value: 15, color: "#a78bfa" },
];

const statCards = [
  {
    label: "Tenants",
    value: "325",
    delta: "+4%",
    sub: "rent",
    icon: <Users2 color="white" />,
  },
  {
    label: "Occupancy Rate",
    value: "90%",
    delta: "+1%",
    sub: "last month",
    icon: <ChartNoAxesCombined color="white" />,
  },
  {
    label: "Rent Collection",
    value: "$65,350.00",
    delta: "+6.1%",
    sub: "last month",
    icon: <CreditCard color="white" />,
  },
];

const maintenance = [
  {
    type: "Plumbing",
    id: "Req ID 001",
    property: "721 Meadowview Residences",
    user: { name: "John John", avatar: "https://i.pravatar.cc/48?img=1" },
    description: "Leak in the bathroom sink",
  },
  {
    type: "Electrical",
    id: "Req ID 336",
    property: "469 Pinhurst Suits",
    user: {
      name: "Pierluigi Martino",
      avatar: "https://i.pravatar.cc/48?img=2",
    },
    description: "Outlets not working",
  },
  {
    type: "HVAC",
    id: "Req ID 995",
    property: "578 Willow Brook Lofts",
    user: { name: "Vish Santhanam", avatar: "https://i.pravatar.cc/48?img=3" },
    description: "No heat in the living room",
  },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Top stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="rounded-lg border border-gray-200 bg-white p-4 flex items-start justify-between shadow-sm"
          >
            <div className="flex flex-col">
              <span className="text-sm text-foreground">{card.label}</span>
              <span className="text-2xl font-semibold text-gray-900">
                {card.value}
              </span>
              <span className="text-xs text-gray-500">
                {card.delta} <span className="ml-1">{card.sub}</span>
              </span>
            </div>
            <div className="size-9 rounded-md bg-primary flex items-center justify-center">
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-lg border border-gray-200 bg-white p-4 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-black text-sm font-bold">
                Financial Performance
              </span>
              <div className="text-2xl font-semibold text-gray-900">91.72%</div>
              <div className="text-xs text-gray-500">+2.4% vs last month</div>
            </div>
            <Button variant="outline" size="sm">
              Last Year
            </Button>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} barSize={50}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis hide />
                <RechartsTooltip cursor={{ fill: "#f3f4f6" }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} fill="#60a5fa" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm flex flex-col">
          <div className="font-medium text-gray-900 mb-4">Properties</div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={86}
                  paddingAngle={2}
                >
                  {pieData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {pieData.map((p) => (
              <div key={p.name} className="flex items-center gap-2">
                <span
                  className="inline-block size-2 rounded-full"
                  style={{ background: p.color }}
                />
                <span className="text-gray-600">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Maintenance table */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center justify-between p-4">
          <div className="font-medium text-gray-900">Maintenance Requests</div>
          <Button size="sm">View All →</Button>
        </div>
        <div className="grid grid-cols-12 px-4 py-2 text-xs text-gray-500 border-t border-gray-200">
          <div className="col-span-3">Complaint</div>
          <div className="col-span-4">Property</div>
          <div className="col-span-3">Requested By</div>
          <div className="col-span-2 hidden md:block">Description</div>
        </div>
        <div className="divide-y border-t border-gray-200">
          {maintenance.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-12 items-center px-4 py-3 border-t border-gray-200"
            >
              <div className="col-span-3 flex flex-col">
                <span className="font-medium text-gray-900">{item.type}</span>
                <span className="text-xs text-gray-500">{item.id}</span>
              </div>
              <div className="col-span-4 text-gray-700">{item.property}</div>
              <div className="col-span-3 flex items-center gap-2">
                <Avatar className="size-8">
                  <AvatarImage src={item.user.avatar} />
                  <AvatarFallback>{item.user.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <span className="text-gray-700">{item.user.name}</span>
              </div>
              <div className="col-span-2 text-gray-700 truncate hidden md:block">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
