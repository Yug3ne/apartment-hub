import { Button } from "@/components/ui/button";
import { Filter, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import LeaseTab from "./components/lease-tab";
import DocumentsTab from "./components/documents-tab";

const Lease = () => {
  const [activeTab, setActiveTab] = useState("lease");

  // Sample lease data
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
      rent: "KSH 120,000",
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
      rent: "KSH 135,000",
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
      rent: "KSH 110,000",
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
      rent: "KSH 125,000",
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
      rent: "KSH 140,000",
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
      rent: "KSH 130,000",
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
      rent: "KSH 150,000",
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
      rent: "KSH 115,000",
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

  // Sample document data

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Main Content Card */}
      <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 flex flex-col">
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("lease")}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === "lease"
                ? "text-gray-900 bg-gray-50 border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Lease
          </button>
          <button
            onClick={() => setActiveTab("document")}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === "document"
                ? "text-gray-900 bg-gray-50 border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Document
          </button>
          <button
            onClick={() => setActiveTab("calendar")}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === "calendar"
                ? "text-gray-900 bg-gray-50 border-b-2 border-primary"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Calendar
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col">
          {/* Section Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">
              {activeTab === "lease"
                ? "Lease Lists"
                : activeTab === "document"
                ? "Document Lists"
                : "Calendar"}
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
          <div className="flex-1 overflow-auto">
            <div className="min-w-full">
              {activeTab === "lease" ? (
                <>
                  <LeaseTab leaseData={leaseData} />
                </>
              ) : activeTab === "document" ? (
                <>
                  <DocumentsTab />
                </>
              ) : (
                <div className="flex items-center justify-center h-64 text-gray-500">
                  Calendar view coming soon...
                </div>
              )}
            </div>
          </div>

          {/* Pagination - Only show for lease and document tabs */}
          {activeTab !== "calendar" && (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Lease;
