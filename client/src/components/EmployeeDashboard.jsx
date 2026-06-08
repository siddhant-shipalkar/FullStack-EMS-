import { ArrowRightIcon, CalendarIcon, DollarSignIcon, FileTextIcon, } from "lucide-react";
import { Link } from "react-router-dom";

const EmployeeDashboard = ({ data }) => {
  const emp = data.employee;

  const cards = [
    {
      icon: CalendarIcon,
      value: data.currentMonthAttendance,
      title: "Days Present",
      subtitle: "This month",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Pending Leaves",
      subtitle: "Awaiting approval",
    },
    {
      icon: DollarSignIcon,
      value: data.latestPayslip
        ? `$${data.latestPayslip.netSalary?.toLocaleString()}`
        : "N/A",
      title: "Latest Payslip",
      subtitle: "Most recent payout",
    },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          Welcome, {emp?.firstName}!
        </h1>

        <p className="text-slate-500 text-sm">
          {emp?.position} - {emp?.department || "No Department"}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card card-hover p-5 sm:p-6 relative overflow-hidden group flex items-center justify-between"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full bg-slate-300 group-hover:bg-indigo-500 transition" />

            <div>
              <p className="text-sm font-medium text-slate-500">
                {card.title}
              </p>

              <p className="text-2xl font-bold text-slate-900 mt-1">
                {card.value}
              </p>

              <p className="text-xs text-slate-400 mt-1">
                {card.subtitle}
              </p>
            </div>

            <card.icon className="w-10 h-10 p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition" />
          </div>
        ))}
      </div>

        <div className="flex flex-col sm:flex-row gap-3">
                 <Link  to="/attendance"className="btn-primary text-center inline-flex items-center justify-center gap-2">Mark Attendance<ArrowRightIcon className="w-4 h-4" /></Link>
                 <Link to="/leave" className="btn-secondary text-center inline-flex items-center justify-center">Apply for Leave</Link>
         </div>
    </div>
  );
};

export default EmployeeDashboard;