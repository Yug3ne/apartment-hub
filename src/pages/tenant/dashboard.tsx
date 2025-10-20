import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  Zap,
  Droplets,
  Calendar,
  DollarSign,
  CheckCircle,
} from "lucide-react";

const TenantDashboard = () => {
  // Mock data - in a real app, this would come from an API
  const propertyInfo = {
    buildingName: "Sunset Gardens",
    unitNumber: "Apt 4B",
    address: "123 Sunset Boulevard, Downtown",
    powerAccountNumber: "PWR-2024-7891",
    waterAccountNumber: "WTR-2024-3456",
  };

  const utilities = [
    {
      name: "Electricity",
      provider: "City Power Co.",
      status: "Active",
      icon: Zap,
    },
    {
      name: "Water",
      provider: "Metro Water",
      status: "Active",
      icon: Droplets,
    }]

  const recentPayments = [
    { id: 1, date: "2024-01-01", amount: 1200, type: "Rent", status: "Paid" },
    { id: 2, date: "2023-12-01", amount: 1200, type: "Rent", status: "Paid" },
    { id: 3, date: "2023-11-01", amount: 1200, type: "Rent", status: "Paid" },
    { id: 4, date: "2023-10-01", amount: 1200, type: "Rent", status: "Paid" },
    { id: 5, date: "2023-09-01", amount: 1200, type: "Rent", status: "Paid" },
  ];

  return (
    <div className="space-y-6">
      {/* Property Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="h-5 w-5" />
            Property Information
          </CardTitle>
          <CardDescription>
            Your current residence details and account information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground">
                Building
              </h4>
              <p className="text-lg font-medium">{propertyInfo.buildingName}</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-muted-foreground">
                Unit
              </h4>
              <p className="text-lg font-medium">{propertyInfo.unitNumber}</p>
            </div>
            <div className="md:col-span-2">
              <h4 className="font-semibold text-sm text-muted-foreground">
                Address
              </h4>
              <p className="text-lg font-medium">{propertyInfo.address}</p>
            </div>
          </div>

          <Separator />

          <div>
            <h4 className="font-semibold text-sm text-muted-foreground mb-3">
              Account Numbers
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">Power Account</p>
                <p className="font-mono text-sm">
                  {propertyInfo.powerAccountNumber}
                </p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground">Water Account</p>
                <p className="font-mono text-sm">
                  {propertyInfo.waterAccountNumber}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Utilities Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Utilities Overview
          </CardTitle>
          <CardDescription>
            Current status of all utilities in your unit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {utilities.map((utility) => {
              const IconComponent = utility.icon;
              return (
                <div key={utility.name} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">{utility.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {utility.provider}
                  </p>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">
                      {utility.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Recent Payment History
          </CardTitle>
          <CardDescription>
            Your last 5 rent payments and their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentPayments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{payment.type}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(payment.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ${payment.amount.toLocaleString()}
                  </p>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600 font-medium">
                      {payment.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TenantDashboard;
