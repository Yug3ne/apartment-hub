import { Navigate, Route, Routes } from "react-router";
import Login from "@/pages/login";
import Landing from "@/pages/landing";
import CaretakerLayout from "@/layouts/caretaker-layout";
import TenantLayout from "@/layouts/tenant-layout";
import LandlordLayout from "@/layouts/landlord-layout";

function PublicRoutes({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function ProtectedRoute({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles?: string[];
}) {
  const { user, isAuthenticated } = { user: { role: "landlord" }, isAuthenticated: true };

  if (!user || !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    switch (user.role) {
      case "caretaker":
        return <Navigate to="/caretaker/" replace />;
      case "landlord":
        return <Navigate to="/landlord/" replace />;
      case "tenant":
        return <Navigate to="/tenant/" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  return <>{children}</>;
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoutes>
            <Landing />
          </PublicRoutes>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>
        }
      />

      <Route
        path="/caretaker"
        element={
          <ProtectedRoute allowedRoles={["caretaker"]}>
            <CaretakerLayout />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/tenant"
        element={
          <ProtectedRoute allowedRoles={["tenant"]}>
            <TenantLayout />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="/landlord"
        element={
          <ProtectedRoute allowedRoles={["landlord"]}>
            <LandlordLayout />
          </ProtectedRoute>
        }
      ></Route>
    </Routes>
  );
}

const App = () => {
  return (
    <>
      <AppRoutes />
    </>
  );
};

export default App;
