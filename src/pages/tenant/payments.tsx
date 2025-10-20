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
  CreditCard,
  DollarSign,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Home,
  Droplets,
  Zap,
  Wifi,
  Plus,
  Receipt,
} from "lucide-react";
import { useState } from "react";

const TenantPayments = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [selectedPaymentType, setSelectedPaymentType] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");

  // Mock payment data
  const currentBalance = {
    rent: 1200,
    water: 45,
    electricity: 78,
    internet: 65,
    total: 1388,
  };

  const upcomingPayments = [
    {
      id: "UP-001",
      type: "Rent",
      amount: 1200,
      dueDate: "2024-02-01",
      status: "Due Soon",
      description: "Monthly rent payment",
      icon: Home,
    },
    {
      id: "UP-002",
      type: "Water Bill",
      amount: 45,
      dueDate: "2024-02-15",
      status: "Due Soon",
      description: "Water utility bill",
      icon: Droplets,
    },
    {
      id: "UP-003",
      type: "Electricity",
      amount: 78,
      dueDate: "2024-02-20",
      status: "Due Soon",
      description: "Electric utility bill",
      icon: Zap,
    },
  ];

  const paymentHistory = [
    {
      id: "PAY-2024-001",
      type: "Rent",
      amount: 1200,
      date: "2024-01-01",
      status: "Paid",
      method: "Bank Transfer",
      reference: "TXN-789123",
    },
    {
      id: "PAY-2024-002",
      type: "Water Bill",
      amount: 42,
      date: "2024-01-15",
      status: "Paid",
      method: "Credit Card",
      reference: "TXN-789124",
    },
    {
      id: "PAY-2024-003",
      type: "Electricity",
      amount: 85,
      date: "2024-01-20",
      status: "Paid",
      method: "Bank Transfer",
      reference: "TXN-789125",
    },
    {
      id: "PAY-2024-004",
      type: "Internet",
      amount: 65,
      date: "2024-01-25",
      status: "Paid",
      method: "Credit Card",
      reference: "TXN-789126",
    },
  ];

  const paymentMethods = [
    {
      name: "Bank Transfer",
      icon: CreditCard,
      description: "Direct bank transfer",
      processingTime: "1-2 business days",
    },
    {
      name: "Credit Card",
      icon: CreditCard,
      description: "Visa, Mastercard, American Express",
      processingTime: "Instant",
    },
    {
      name: "Debit Card",
      icon: CreditCard,
      description: "Direct debit from your account",
      processingTime: "Instant",
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Paid":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "Due Soon":
        return <Clock className="h-4 w-4 text-orange-500" />;
      case "Overdue":
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "text-green-600 bg-green-50";
      case "Due Soon":
        return "text-orange-600 bg-orange-50";
      case "Overdue":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const handleMakePayment = () => {
    // In a real app, this would process the payment
    console.log("Processing payment:", {
      type: selectedPaymentType,
      amount: paymentAmount,
    });
    // Reset form
    setSelectedPaymentType("");
    setPaymentAmount("");
    setShowPaymentForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Payments</h1>
          <p className="text-muted-foreground">
            View payment history and make rent and utility payments.
          </p>
        </div>
        <Button onClick={() => setShowPaymentForm(!showPaymentForm)}>
          <Plus className="h-4 w-4 mr-2" />
          Make Payment
        </Button>
      </div>

      {/* Current Balance Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Current Balance Overview
          </CardTitle>
          <CardDescription>
            Your current outstanding balances and upcoming payments
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Home className="h-4 w-4 text-primary" />
                <h4 className="font-semibold">Rent</h4>
              </div>
              <p className="text-2xl font-bold text-primary">
                ${currentBalance.rent.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">Due Feb 1st</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="h-4 w-4 text-blue-500" />
                <h4 className="font-semibold">Water</h4>
              </div>
              <p className="text-2xl font-bold text-blue-500">
                ${currentBalance.water.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">Due Feb 15th</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="h-4 w-4 text-yellow-500" />
                <h4 className="font-semibold">Electricity</h4>
              </div>
              <p className="text-2xl font-bold text-yellow-500">
                ${currentBalance.electricity.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">Due Feb 20th</p>
            </div>
            <div className="p-4 border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Wifi className="h-4 w-4 text-green-500" />
                <h4 className="font-semibold">Internet</h4>
              </div>
              <p className="text-2xl font-bold text-green-500">
                ${currentBalance.internet.toLocaleString()}
              </p>
              <p className="text-sm text-muted-foreground">Due Feb 25th</p>
            </div>
          </div>

          <Separator />

          <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
            <div>
              <h4 className="font-semibold">Total Outstanding Balance</h4>
              <p className="text-sm text-muted-foreground">
                All pending payments combined
              </p>
            </div>
            <p className="text-3xl font-bold text-primary">
              ${currentBalance.total.toLocaleString()}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Make Payment Form */}
      {showPaymentForm && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              Make a Payment
            </CardTitle>
            <CardDescription>
              Select the payment type and amount to pay
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Select Payment Type
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {upcomingPayments.map((payment) => {
                  const IconComponent = payment.icon;
                  return (
                    <button
                      key={payment.id}
                      onClick={() => {
                        setSelectedPaymentType(payment.type);
                        setPaymentAmount(payment.amount.toString());
                      }}
                      className={`p-3 border rounded-lg text-left transition-colors ${
                        selectedPaymentType === payment.type
                          ? "border-primary bg-primary/5"
                          : "hover:bg-muted"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <IconComponent className="h-4 w-4 text-primary" />
                        <span className="font-medium">{payment.type}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        ${payment.amount} • Due{" "}
                        {new Date(payment.dueDate).toLocaleDateString()}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Payment Amount
              </label>
              <input
                type="number"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                placeholder="Enter amount to pay"
                className="w-full p-3 border rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Payment Method
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {paymentMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <div key={method.name} className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <IconComponent className="h-4 w-4 text-primary" />
                        <span className="font-medium">{method.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {method.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {method.processingTime}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={handleMakePayment}
                disabled={!selectedPaymentType || !paymentAmount}
              >
                Process Payment
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowPaymentForm(false)}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Upcoming Payments */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Payments
          </CardTitle>
          <CardDescription>Payments due in the next 30 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingPayments.map((payment) => {
              const IconComponent = payment.icon;
              return (
                <div
                  key={payment.id}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{payment.type}</p>
                      <p className="text-sm text-muted-foreground">
                        Due {new Date(payment.dueDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      ${payment.amount.toLocaleString()}
                    </p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                        payment.status
                      )}`}
                    >
                      {payment.status}
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
            <Receipt className="h-5 w-5" />
            Payment History
          </CardTitle>
          <CardDescription>
            Your recent payment transactions and receipts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {paymentHistory.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  {getStatusIcon(payment.status)}
                  <div>
                    <p className="font-medium">{payment.type}</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(payment.date).toLocaleDateString()} •{" "}
                      {payment.method}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Ref: {payment.reference}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ${payment.amount.toLocaleString()}
                  </p>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      payment.status
                    )}`}
                  >
                    {payment.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TenantPayments;
