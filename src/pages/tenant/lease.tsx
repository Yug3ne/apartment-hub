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
  FileText,
  Calendar,
  DollarSign,
  Home,
  Download,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

const TenantLease = () => {
  // Mock lease data - in a real app, this would come from an API
  const leaseInfo = {
    leaseId: "LS-2024-001",
    startDate: "2024-01-01",
    endDate: "2024-12-31",
    monthlyRent: 1200,
    securityDeposit: 2400,
    property: {
      buildingName: "Sunset Gardens",
      unitNumber: "Apt 4B",
      address: "123 Sunset Boulevard, Downtown",
    },
    landlord: {
      name: "John Smith",
      email: "john.smith@sunsetgardens.com",
      phone: "(555) 123-4567",
    },
    tenant: {
      name: "Jane Tenant",
      email: "jane.tenant@email.com",
      phone: "(555) 987-6543",
    },
    status: "Active",
    renewalDate: "2024-10-01",
  };

  const leaseTerms = [
    {
      title: "Lease Duration",
      value: "12 months",
      description: "Fixed-term lease agreement",
    },
    {
      title: "Monthly Rent",
      value: `$${leaseInfo.monthlyRent.toLocaleString()}`,
      description: "Due on the 1st of each month",
    },
    {
      title: "Security Deposit",
      value: `$${leaseInfo.securityDeposit.toLocaleString()}`,
      description: "Refundable upon lease termination",
    },
    {
      title: "Late Fee",
      value: "$50",
      description: "Applied after 5-day grace period",
    },
    {
      title: "Pet Policy",
      value: "Allowed",
      description: "Up to 2 pets, $200 pet deposit required",
    },
    {
      title: "Parking",
      value: "1 Space",
      description: "Assigned parking spot #47",
    },
  ];

  const leaseDocuments = [
    {
      name: "Lease Agreement",
      type: "PDF",
      size: "2.4 MB",
      uploadDate: "2024-01-01",
      status: "Signed",
    },
    {
      name: "Property Inspection Report",
      type: "PDF",
      size: "1.8 MB",
      uploadDate: "2024-01-01",
      status: "Completed",
    },
    {
      name: "Move-in Checklist",
      type: "PDF",
      size: "0.9 MB",
      uploadDate: "2024-01-01",
      status: "Completed",
    },
    {
      name: "House Rules & Regulations",
      type: "PDF",
      size: "1.2 MB",
      uploadDate: "2024-01-01",
      status: "Acknowledged",
    },
  ];

  const importantDates = [
    {
      date: "2024-01-01",
      event: "Lease Start Date",
      status: "completed",
      description: "Your lease officially began",
    },
    {
      date: "2024-10-01",
      event: "Renewal Notice Due",
      status: "upcoming",
      description: "60 days before lease expiration",
    },
    {
      date: "2024-12-31",
      event: "Lease End Date",
      status: "upcoming",
      description: "Current lease expires",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "upcoming":
        return <Clock className="h-4 w-4 text-blue-500" />;
      case "overdue":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600";
      case "upcoming":
        return "text-blue-600";
      case "overdue":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">

      {/* Lease Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Lease Overview
          </CardTitle>
          <CardDescription>
            Basic information about your current lease agreement
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">Lease Period</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                {new Date(leaseInfo.startDate).toLocaleDateString()} -{" "}
                {new Date(leaseInfo.endDate).toLocaleDateString()}
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">Monthly Rent</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                ${leaseInfo.monthlyRent.toLocaleString()}
              </p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Home className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">Property</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                {leaseInfo.property.unitNumber}
              </p>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                Landlord Information
              </h4>
              <div className="space-y-1">
                <p className="font-medium">{leaseInfo.landlord.name}</p>
                <p className="text-sm text-muted-foreground">
                  {leaseInfo.landlord.email}
                </p>
                <p className="text-sm text-muted-foreground">
                  {leaseInfo.landlord.phone}
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                Tenant Information
              </h4>
              <div className="space-y-1">
                <p className="font-medium">{leaseInfo.tenant.name}</p>
                <p className="text-sm text-muted-foreground">
                  {leaseInfo.tenant.email}
                </p>
                <p className="text-sm text-muted-foreground">
                  {leaseInfo.tenant.phone}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lease Terms */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Lease Terms & Conditions
          </CardTitle>
          <CardDescription>
            Key terms and conditions of your lease agreement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {leaseTerms.map((term, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-1">{term.title}</h4>
                <p className="text-lg font-bold text-primary mb-1">
                  {term.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {term.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Important Dates */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Important Dates
          </CardTitle>
          <CardDescription>
            Key dates and deadlines related to your lease
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {importantDates.map((date, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 border rounded-lg"
              >
                {getStatusIcon(date.status)}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">{date.event}</h4>
                    <span className="text-sm font-mono">
                      {new Date(date.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {date.description}
                  </p>
                </div>
                <span
                  className={`text-sm font-medium ${getStatusColor(
                    date.status
                  )}`}
                >
                  {date.status.charAt(0).toUpperCase() + date.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Lease Documents */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Lease Documents
          </CardTitle>
          <CardDescription>
            Download and view your lease-related documents
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {leaseDocuments.map((doc, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{doc.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {doc.type} • {doc.size} • Uploaded{" "}
                      {new Date(doc.uploadDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-green-600">
                    {doc.status}
                  </span>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TenantLease;
