import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";

import LoginLanding from "./Pages/LoginLanding";
import Layout from "./Pages/Layout";
import Dashboard from "./Pages/Dashboard";
import Employees from "./Pages/Employees";
import Attendance from "./Pages/Attendance";
import Leave from "./Pages/Leave";
import Payslips from "./Pages/Payslips";
import Setting from "./Pages/Setting";
import PrintPayslip from "./Pages/PrintPayslip";

import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <>
      <Toaster />

      <Routes>
        {/* Login Routes */}
        <Route path="/login" element={<LoginLanding />} />

        <Route
          path="/login/admin"
          element={
            <LoginForm
              role="admin"
              title="Admin Portal"
              subtitle="Sign in to manage the organization"
            />
          }
        />

        <Route
          path="/login/employee"
          element={
            <LoginForm
              role="employee"
              title="Employee Portal"
              subtitle="Sign in to access your account"
            />
          }
        />

        {/* Protected Layout Routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/setting" element={<Setting />} />
        </Route>

        {/* Print Payslip */}
        <Route path="/print/payslips/:id" element={<PrintPayslip />} />

        {/* Default Route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
};

export default App;