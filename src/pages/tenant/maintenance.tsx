import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Wrench,
  Plus,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap,
  Droplets,
  Home,
  Wifi,
  Thermometer,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

const TenantMaintenance = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedUtility, setSelectedUtility] = useState("");
  const [requestDescription, setRequestDescription] = useState("");

  // Mock maintenance requests data
  const maintenanceRequests = [
    {
      id: "MR-2024-001",
      utility: "Plumbing",
      description: "Kitchen sink is leaking under the cabinet",
      priority: "High",
      status: "In Progress",
      submittedDate: "2024-01-15",
      assignedTo: "Mike's Plumbing Co.",
      estimatedCompletion: "2024-01-18",
    },
    {
      id: "MR-2024-002",
      utility: "Electrical",
      description: "Bedroom outlet not working",
      priority: "Medium",
      status: "Completed",
      submittedDate: "2024-01-10",
      assignedTo: "City Electric",
      completedDate: "2024-01-12",
    },
    {
      id: "MR-2024-003",
      utility: "HVAC",
      description: "Air conditioning not cooling properly",
      priority: "High",
      status: "Scheduled",
      submittedDate: "2024-01-20",
      assignedTo: "Cool Air Solutions",
      scheduledDate: "2024-01-22",
    },
  ];

  const utilityCategories = [
    {
      name: "Plumbing",
      icon: Droplets,
      description: "Sinks, toilets, pipes, water issues",
      color: "text-blue-500",
    },
    {
      name: "Electrical",
      icon: Zap,
      description: "Outlets, lights, electrical problems",
      color: "text-yellow-500",
    },
    {
      name: "HVAC",
      icon: Thermometer,
      description: "Heating, cooling, ventilation",
      color: "text-red-500",
    },
    {
      name: "Internet",
      icon: Wifi,
      description: "WiFi, internet connectivity issues",
      color: "text-green-500",
    },
    {
      name: "General",
      icon: Home,
      description: "Doors, windows, locks, other issues",
      color: "text-gray-500",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "In Progress":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "Scheduled":
        return <Calendar className="h-4 w-4 text-orange-500" />;
      case "Pending":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-600 bg-green-50";
      case "In Progress":
        return "text-blue-600 bg-blue-50";
      case "Scheduled":
        return "text-orange-600 bg-orange-50";
      case "Pending":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600 bg-red-50";
      case "Medium":
        return "text-yellow-600 bg-yellow-50";
      case "Low":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const handleSubmitRequest = () => {
    // In a real app, this would submit to an API
    console.log("Submitting maintenance request:", {
      utility: selectedUtility,
      description: requestDescription,
    });
    // Reset form
    setSelectedUtility("");
    setRequestDescription("");
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="h-4 w-4 mr-2" />
          New Request
        </Button>
      </div>

      {/* New Request Form */}
      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="h-5 w-5" />
              Submit Maintenance Request
            </CardTitle>
            <CardDescription>
              Describe the issue and select the appropriate utility category
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Select Utility Category
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {utilityCategories.map((utility) => {
                  const IconComponent = utility.icon;
                  return (
                    <button
                      key={utility.name}
                      onClick={() => setSelectedUtility(utility.name)}
                      className={`p-3 border rounded-lg text-left transition-colors ${
                        selectedUtility === utility.name
                          ? "border-primary bg-primary/5"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <IconComponent className={`h-4 w-4 ${utility.color}`} />
                        <span className="font-medium">{utility.name}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {utility.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Describe the Issue
              </label>
              <textarea
                value={requestDescription}
                onChange={(e) => setRequestDescription(e.target.value)}
                placeholder="Please provide a detailed description of the maintenance issue..."
                className="w-full p-3 border rounded-lg resize-none"
                rows={4}
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleSubmitRequest}
                disabled={!selectedUtility || !requestDescription}
              >
                Submit Request
              </Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Utility Categories Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Maintenance Categories
          </CardTitle>
          <CardDescription>
            Common maintenance issues and their categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {utilityCategories.map((utility) => {
              const IconComponent = utility.icon;
              return (
                <div key={utility.name} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className={`h-5 w-5 ${utility.color}`} />
                    <h4 className="font-semibold">{utility.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {utility.description}
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Maintenance Requests History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Your Maintenance Requests
          </CardTitle>
          <CardDescription>
            Track the status of your submitted maintenance requests
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {maintenanceRequests.map((request) => (
              <div key={request.id} className="p-4 border rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{request.id}</h4>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          request.status
                        )}`}
                      >
                        {request.status}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(
                          request.priority
                        )}`}
                      >
                        {request.priority} Priority
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {request.utility} • Submitted{" "}
                      {new Date(request.submittedDate).toLocaleDateString()}
                    </p>
                    <p className="text-sm">{request.description}</p>
                  </div>
                  {getStatusIcon(request.status)}
                </div>

                <Separator className="my-3" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Assigned To:</p>
                    <p className="font-medium">{request.assignedTo}</p>
                  </div>
                  {request.status === "Completed" && request.completedDate && (
                    <div>
                      <p className="text-muted-foreground">Completed:</p>
                      <p className="font-medium">
                        {new Date(request.completedDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                  {request.status === "Scheduled" && request.scheduledDate && (
                    <div>
                      <p className="text-muted-foreground">Scheduled:</p>
                      <p className="font-medium">
                        {new Date(request.scheduledDate).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                  {request.status === "In Progress" &&
                    request.estimatedCompletion && (
                      <div>
                        <p className="text-muted-foreground">
                          Estimated Completion:
                        </p>
                        <p className="font-medium">
                          {new Date(
                            request.estimatedCompletion
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TenantMaintenance;
