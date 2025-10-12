import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  TrendingUp,
  TrendingDown,
  CreditCard,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
} from "lucide-react";
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

const Finance = () => {
  // Sample financial data
  const transactionData = [
    {
      id: "#TXN001",
      tenant: {
        name: "John Smith",
        property: "Sunset Apartments - Unit 101",
        avatar: "https://i.pravatar.cc/48?img=1",
      },
      type: "Rent Payment",
      amount: "KSH 120,000",
      status: {
        text: "Paid",
        type: "paid",
      },
      date: "Jan 15, 2025",
      method: "Bank Transfer",
    },
    {
      id: "#TXN002",
      tenant: {
        name: "Sarah Johnson",
        property: "Sunset Apartments - Unit 102",
        avatar: "https://i.pravatar.cc/48?img=2",
      },
      type: "Rent Payment",
      amount: "KSH 135,000",
      status: {
        text: "Paid",
        type: "paid",
      },
      date: "Jan 15, 2025",
      method: "Credit Card",
    },
    {
      id: "#TXN003",
      tenant: {
        name: "Mike Davis",
        property: "Sunset Apartments - Unit 103",
        avatar: "https://i.pravatar.cc/48?img=3",
      },
      type: "Late Fee",
      amount: "KSH 5,000",
      status: {
        text: "Pending",
        type: "pending",
      },
      date: "Jan 16, 2025",
      method: "Check",
    },
    {
      id: "#TXN004",
      tenant: {
        name: "Emily Wilson",
        property: "Sunset Apartments - Unit 104",
        avatar: "https://i.pravatar.cc/48?img=4",
      },
      type: "Rent Payment",
      amount: "KSH 125,000",
      status: {
        text: "Paid",
        type: "paid",
      },
      date: "Jan 14, 2025",
      method: "Bank Transfer",
    },
    {
      id: "#TXN005",
      tenant: {
        name: "David Brown",
        property: "Sunset Apartments - Unit 105",
        avatar: "https://i.pravatar.cc/48?img=5",
      },
      type: "Maintenance Fee",
      amount: "KSH 7,500",
      status: {
        text: "Paid",
        type: "paid",
      },
      date: "Jan 13, 2025",
      method: "Cash",
    },
    {
      id: "#TXN006",
      tenant: {
        name: "Lisa Garcia",
        property: "Sunset Apartments - Unit 106",
        avatar: "https://i.pravatar.cc/48?img=6",
      },
      type: "Rent Payment",
      amount: "KSH 130,000",
      status: {
        text: "Overdue",
        type: "overdue",
      },
      date: "Jan 10, 2025",
      method: "Bank Transfer",
    },
    {
      id: "#TXN007",
      tenant: {
        name: "Tom Miller",
        property: "Sunset Apartments - Unit 107",
        avatar: "https://i.pravatar.cc/48?img=7",
      },
      type: "Rent Payment",
      amount: "KSH 150,000",
      status: {
        text: "Paid",
        type: "paid",
      },
      date: "Jan 12, 2025",
      method: "Credit Card",
    },
  ];

  // Chart data
  const revenueData = [
    { month: "Jan", revenue: 45000, expenses: 12000 },
    { month: "Feb", revenue: 52000, expenses: 15000 },
    { month: "Mar", revenue: 48000, expenses: 13000 },
    { month: "Apr", revenue: 55000, expenses: 14000 },
    { month: "May", revenue: 60000, expenses: 16000 },
    { month: "Jun", revenue: 58000, expenses: 15000 },
  ];

  const expenseData = [
    { name: "Maintenance", value: 35, color: "#ef4444" },
    { name: "Utilities", value: 25, color: "#f59e0b" },
    { name: "Insurance", value: 20, color: "#3b82f6" },
    { name: "Property Tax", value: 20, color: "#10b981" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "text-green-600 bg-green-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      case "overdue":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Revenue Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600">
                  Total Revenue
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  KSH 4,520,000
                </p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3" />
                  +12.5% from last month
                </p>
              </div>
            </div>
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Total Expenses Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <TrendingDown className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600">
                  Total Expenses
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  KSH 1,280,000
                </p>
                <p className="text-xs text-red-600 flex items-center gap-1">
                  <ArrowDownRight className="h-3 w-3" />
                  +8.2% from last month
                </p>
              </div>
            </div>
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Net Income Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600">
                  Net Income
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  KSH 3,240,000
                </p>
                <p className="text-xs text-green-600 flex items-center gap-1">
                  <ArrowUpRight className="h-3 w-3" />
                  +15.3% from last month
                </p>
              </div>
            </div>
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Outstanding Payments Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <CreditCard className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600">
                  Outstanding
                </h3>
                <p className="text-2xl font-bold text-gray-900">KSH 280,000</p>
                <p className="text-xs text-yellow-600 flex items-center gap-1">
                  <Calendar className="h-3 w-3" />3 pending payments
                </p>
              </div>
            </div>
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Revenue vs Expenses Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Revenue vs Expenses
              </h3>
              <p className="text-sm text-gray-500">Last 6 months</p>
            </div>
            <Button variant="outline" size="sm">
              View Details
            </Button>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData} barSize={30}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis hide />
                <RechartsTooltip cursor={{ fill: "#f3f4f6" }} />
                <Bar dataKey="revenue" radius={[4, 4, 0, 0]} fill="#10b981" />
                <Bar dataKey="expenses" radius={[4, 4, 0, 0]} fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Breakdown Chart */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Expense Breakdown
            </h3>
            <p className="text-sm text-gray-500">This month</p>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expenseData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={86}
                  paddingAngle={2}
                >
                  {expenseData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            {expenseData.map((expense) => (
              <div key={expense.name} className="flex items-center gap-2">
                <span
                  className="inline-block size-2 rounded-full"
                  style={{ background: expense.color }}
                />
                <span className="text-gray-600">{expense.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        {/* Table Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Transactions
          </h2>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filter
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-auto">
          <div className="min-w-full">
            {/* Table Header Row */}
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
              <div className="col-span-2">Transaction ID</div>
              <div className="col-span-3">Tenant</div>
              <div className="col-span-2">Type</div>
              <div className="col-span-1">Amount</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-1">Method</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-200">
              {transactionData.map((transaction, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50"
                >
                  {/* Transaction ID */}
                  <div className="col-span-2 text-gray-700 font-medium">
                    {transaction.id}
                  </div>

                  {/* Tenant */}
                  <div className="col-span-3 flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={transaction.tenant.avatar} />
                      <AvatarFallback>
                        {transaction.tenant.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900">
                        {transaction.tenant.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {transaction.tenant.property}
                      </span>
                    </div>
                  </div>

                  {/* Type */}
                  <div className="col-span-2 text-gray-700">
                    {transaction.type}
                  </div>

                  {/* Amount */}
                  <div className="col-span-1 font-semibold text-gray-900">
                    {transaction.amount}
                  </div>

                  {/* Status */}
                  <div className="col-span-1">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        transaction.status.type
                      )}`}
                    >
                      {transaction.status.text}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="col-span-2 text-gray-700">
                    {transaction.date}
                  </div>

                  {/* Method */}
                  <div className="col-span-1 text-gray-700">
                    {transaction.method}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700">25 per page</span>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          <div className="text-sm text-gray-700">1-25 of 156</div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
