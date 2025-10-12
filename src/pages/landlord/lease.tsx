import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Filter,
  ChevronDown,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Lease = () => {
  const leaseData = [
    {
      id: 1,
      property: {
        name: "Sunset Apartments",
        unit: "Unit 101",
      },
      tenant: {
        name: "John Doe",
        role: "HVAC Specialist",
        avatar: "https://i.pravatar.cc/48?img=1",
      },
      startDate: "Jan 1, 2025",
      endDate: "Dec 31, 2025",
      rent: "$1200",
      status: {
        text: "Pending",
        type: "pending",
      },
      rentChange: {
        amount: "5% Increase",
        date: "In June",
      },
    },
    {
      id: 2,
      property: {
        name: "Sunset Apartments",
        unit: "Unit 102",
      },
      tenant: {
        name: "Jane Smith",
        role: "Software Engineer",
        avatar: "https://i.pravatar.cc/48?img=2",
      },
      startDate: "Feb 1, 2025",
      endDate: "Jan 31, 2026",
      rent: "$1350",
      status: {
        text: "Active",
        type: "active",
      },
      rentChange: {
        amount: "3% Increase",
        date: "In August",
      },
    },
    {
      id: 3,
      property: {
        name: "Sunset Apartments",
        unit: "Unit 103",
      },
      tenant: {
        name: "Mike Johnson",
        role: "Teacher",
        avatar: "https://i.pravatar.cc/48?img=3",
      },
      startDate: "Mar 1, 2025",
      endDate: "Feb 28, 2026",
      rent: "$1100",
      status: {
        text: "Expired",
        type: "expired",
      },
      rentChange: {
        amount: "No Change",
        date: "N/A",
      },
    },
    {
      id: 4,
      property: {
        name: "Sunset Apartments",
        unit: "Unit 104",
      },
      tenant: {
        name: "Sarah Wilson",
        role: "Nurse",
        avatar: "https://i.pravatar.cc/48?img=4",
      },
      startDate: "Apr 1, 2025",
      endDate: "Mar 31, 2026",
      rent: "$1250",
      status: {
        text: "Active",
        type: "active",
      },
      rentChange: {
        amount: "2% Increase",
        date: "In September",
      },
    },
    {
      id: 5,
      property: {
        name: "Sunset Apartments",
        unit: "Unit 105",
      },
      tenant: {
        name: "David Brown",
        role: "Accountant",
        avatar: "https://i.pravatar.cc/48?img=5",
      },
      startDate: "May 1, 2025",
      endDate: "Apr 30, 2026",
      rent: "$1400",
      status: {
        text: "Pending",
        type: "pending",
      },
      rentChange: {
        amount: "4% Increase",
        date: "In October",
      },
    },
    {
      id: 6,
      property: {
        name: "Sunset Apartments",
        unit: "Unit 106",
      },
      tenant: {
        name: "Lisa Davis",
        role: "Designer",
        avatar: "https://i.pravatar.cc/48?img=6",
      },
      startDate: "Jun 1, 2025",
      endDate: "May 31, 2026",
      rent: "$1300",
      status: {
        text: "Active",
        type: "active",
      },
      rentChange: {
        amount: "1% Increase",
        date: "In November",
      },
    },
    {
      id: 7,
      property: {
        name: "Sunset Apartments",
        unit: "Unit 107",
      },
      tenant: {
        name: "Tom Miller",
        role: "Manager",
        avatar: "https://i.pravatar.cc/48?img=7",
      },
      startDate: "Jul 1, 2025",
      endDate: "Jun 30, 2026",
      rent: "$1500",
      status: {
        text: "Active",
        type: "active",
      },
      rentChange: {
        amount: "6% Increase",
        date: "In December",
      },
    },
    {
      id: 8,
      property: {
        name: "Sunset Apartments",
        unit: "Unit 108",
      },
      tenant: {
        name: "Emma Taylor",
        role: "Consultant",
        avatar: "https://i.pravatar.cc/48?img=8",
      },
      startDate: "Aug 1, 2025",
      endDate: "Jul 31, 2026",
      rent: "$1150",
      status: {
        text: "Pending",
        type: "pending",
      },
      rentChange: {
        amount: "3% Increase",
        date: "In January",
      },
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-600 bg-yellow-50";
      case "active":
        return "text-green-600 bg-green-50";
      case "expired":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Main Content Card */}
      <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button className="px-6 py-3 text-sm font-medium text-gray-900 bg-gray-50 border-b-2 border-primary">
            Lease
          </button>
          <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900">
            Document
          </button>
          <button className="px-6 py-3 text-sm font-medium text-gray-500 hover:text-gray-900">
            Calendar
          </button>
        </div>

        {/* Lease Lists Section */}
        <div className="flex-1 flex flex-col">
          {/* Section Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Lease Lists</h2>
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
          <div className="flex-1 overflow-auto">
            <div className="min-w-full">
              {/* Table Header */}
              <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-700">
                <div className="col-span-3">Property</div>
                <div className="col-span-3">Tenant</div>
                <div className="col-span-1">Start Date</div>
                <div className="col-span-1">End Date</div>
                <div className="col-span-1">Rent</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-2">Rent Change</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-gray-200">
                {leaseData.map((lease) => (
                  <div
                    key={lease.id}
                    className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50"
                  >
                    {/* Property */}
                    <div className="col-span-3 flex flex-col">
                      <span className="font-semibold text-gray-900">
                        {lease.property.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {lease.property.unit}
                      </span>
                    </div>

                    {/* Tenant */}
                    <div className="col-span-3 flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={lease.tenant.avatar} />
                        <AvatarFallback>
                          {lease.tenant.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-semibold text-gray-900">
                          {lease.tenant.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {lease.tenant.role}
                        </span>
                      </div>
                    </div>

                    {/* Start Date */}
                    <div className="col-span-1 text-gray-700">
                      {lease.startDate}
                    </div>

                    {/* End Date */}
                    <div className="col-span-1 text-gray-700">
                      {lease.endDate}
                    </div>

                    {/* Rent */}
                    <div className="col-span-1 font-semibold text-gray-900">
                      {lease.rent}
                    </div>

                    {/* Status */}
                    <div className="col-span-1">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          lease.status.type
                        )}`}
                      >
                        <Star className="h-3 w-3" />
                        {lease.status.text}
                      </span>
                    </div>

                    {/* Rent Change */}
                    <div className="col-span-2 flex flex-col">
                      <span className="font-semibold text-gray-900">
                        {lease.rentChange.amount}
                      </span>
                      <span className="text-sm text-gray-500">
                        {lease.rentChange.date}
                      </span>
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
            <div className="text-sm text-gray-700">1-25 of 654</div>
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
    </div>
  );
};

export default Lease;
