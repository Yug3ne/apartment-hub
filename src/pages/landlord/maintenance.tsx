import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Filter,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Users,
  RefreshCw,
  Sun,
  CheckSquare,
  MoreHorizontal,
  Clock,
} from "lucide-react";

const Maintenance = () => {
  // Sample maintenance request data
  const maintenanceData = [
    {
      id: "#651535",
      property: "Barone LLC.",
      assignedTo: {
        name: "Annette Black",
        role: "HVAC Specialist",
        avatar: "https://i.pravatar.cc/48?img=1",
      },
      status: {
        text: "Pending",
        type: "pending",
      },
      priority: {
        text: "Medium",
        type: "medium",
      },
      dueDate: "1 Feb, 2020",
    },
    {
      id: "#651535",
      property: "Big Kahuna Burger Ltd.",
      assignedTo: {
        name: "Courtney Henry",
        role: "HVAC Specialist",
        avatar: "https://i.pravatar.cc/48?img=2",
      },
      status: {
        text: "In Progress",
        type: "in-progress",
      },
      priority: {
        text: "Low",
        type: "low",
      },
      dueDate: "24 May, 2020",
    },
    {
      id: "#651535",
      property: "Abstergo Ltd.",
      assignedTo: {
        name: "Jacob Jones",
        role: "HVAC Specialist",
        avatar: "https://i.pravatar.cc/48?img=3",
      },
      status: {
        text: "Completed",
        type: "completed",
      },
      priority: {
        text: "High",
        type: "high",
      },
      dueDate: "22 Oct, 2020",
    },
    {
      id: "#651535",
      property: "Acme Co.",
      assignedTo: {
        name: "Ronald Richards",
        role: "HVAC Specialist",
        avatar: "https://i.pravatar.cc/48?img=4",
      },
      status: {
        text: "Pending",
        type: "pending",
      },
      priority: {
        text: "Critical",
        type: "critical",
      },
      dueDate: "8 Sep, 2020",
    },
    {
      id: "#651535",
      property: "Biffco Enterprises Ltd.",
      assignedTo: {
        name: "Albert Flores",
        role: "HVAC Specialist",
        avatar: "https://i.pravatar.cc/48?img=5",
      },
      status: {
        text: "In Progress",
        type: "in-progress",
      },
      priority: {
        text: "Medium",
        type: "medium",
      },
      dueDate: "17 Oct, 2020",
    },
    {
      id: "#651535",
      property: "Binford Ltd.",
      assignedTo: {
        name: "Arlene McCoy",
        role: "HVAC Specialist",
        avatar: "https://i.pravatar.cc/48?img=6",
      },
      status: {
        text: "Completed",
        type: "completed",
      },
      priority: {
        text: "Low",
        type: "low",
      },
      dueDate: "21 Sep, 2020",
    },
    {
      id: "#651535",
      property: "Binford Ltd.",
      assignedTo: {
        name: "Eleanor Pena",
        role: "HVAC Specialist",
        avatar: "https://i.pravatar.cc/48?img=7",
      },
      status: {
        text: "Pending",
        type: "pending",
      },
      priority: {
        text: "High",
        type: "high",
      },
      dueDate: "22 Oct, 2020",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-gray-600 bg-gray-100";
      case "in-progress":
        return "text-blue-600 bg-blue-100";
      case "completed":
        return "text-green-600 bg-green-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "text-green-600 bg-green-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "high":
        return "text-red-600 bg-red-100";
      case "critical":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-3 w-3" />;
      case "in-progress":
        return <Sun className="h-3 w-3" />;
      case "completed":
        return <CheckSquare className="h-3 w-3" />;
      default:
        return <Clock className="h-3 w-3" />;
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Requests Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600">
                  Total Requests
                </h3>
                <p className="text-2xl font-bold text-gray-900">150</p>
                <p className="text-xs text-gray-500">open requests</p>
              </div>
            </div>
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Pending Requests Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <RefreshCw className="h-5 w-5 text-gray-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600">
                  Pending Requests
                </h3>
                <p className="text-2xl font-bold text-gray-900">45</p>
                <p className="text-xs text-gray-500">tasks pending</p>
              </div>
            </div>
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* In Progress Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Sun className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600">
                  In Progress
                </h3>
                <p className="text-2xl font-bold text-gray-900">30</p>
                <p className="text-xs text-gray-500">tasks on going</p>
              </div>
            </div>
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Completed Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckSquare className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-600">Completed</h3>
                <p className="text-2xl font-bold text-gray-900">75</p>
                <p className="text-xs text-gray-500">tasks completed</p>
              </div>
            </div>
            <MoreHorizontal className="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Recent Requests Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        {/* Table Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Requests
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
              <div className="col-span-2">Request ID</div>
              <div className="col-span-2">Property</div>
              <div className="col-span-3">Assigned To</div>
              <div className="col-span-1">Status</div>
              <div className="col-span-2">Priority</div>
              <div className="col-span-2">Due Date</div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-gray-200">
              {maintenanceData.map((request, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50"
                >
                  {/* Request ID */}
                  <div className="col-span-2 text-gray-700 font-medium">
                    {request.id}
                  </div>

                  {/* Property */}
                  <div className="col-span-2 text-gray-700">
                    {request.property}
                  </div>

                  {/* Assigned To */}
                  <div className="col-span-3 flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={request.assignedTo.avatar} />
                      <AvatarFallback>
                        {request.assignedTo.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-semibold text-gray-900">
                        {request.assignedTo.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {request.assignedTo.role}
                      </span>
                    </div>
                  </div>

                  {/* Status */}
                  <div className="col-span-1">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        request.status.type
                      )}`}
                    >
                      {getStatusIcon(request.status.type)}
                      {request.status.text}
                    </span>
                  </div>

                  {/* Priority */}
                  <div className="col-span-2">
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                        request.priority.type
                      )}`}
                    >
                      {request.priority.text}
                    </span>
                  </div>

                  {/* Due Date */}
                  <div className="col-span-2 text-gray-700">
                    {request.dueDate}
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
  );
};

export default Maintenance;
