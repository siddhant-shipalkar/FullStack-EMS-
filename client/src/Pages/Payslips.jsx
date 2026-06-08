import { useCallback, useEffect, useState } from "react";
import { dummyPayslipData, dummyEmployeeData } from "../assets/assets";

import Loading from "../components/Loading";
import PaySlipList from "../components/Payshlip/PaySlipList";
import GeneratePayslipForm from "../components/Payshlip/GeneratePayslipForm";

const Payslips = () => {
  const [payslips, setPayslips] = useState([]);
  const [loading, setLoading] = useState(true);

  const isAdmin = true; // Change this to false to test user view

  // Employees data
  const employees = dummyEmployeeData;

  const fetchPayslip = useCallback(async () => {
    setPayslips(dummyPayslipData);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchPayslip();
  }, [fetchPayslip]);

  if (loading) return <Loading />;

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="page-title">Payslips</h1>

          <p className="page-subtitle">
            {isAdmin
              ? "Generate and manage employee payslips"
              : "Your payslip history"}
          </p>
        </div>

        {isAdmin && (
          <GeneratePayslipForm
            employees={employees}
            onSuccess={fetchPayslip}
          />
        )}
      </div>

      <PaySlipList payslips={payslips} isAdmin={isAdmin} />
    </div>
  );
};

export default Payslips;