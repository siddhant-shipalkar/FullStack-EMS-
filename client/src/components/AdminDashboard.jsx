  import { Building2, CalendarIcon, FileTextIcon, UserIcon} from 'lucide-react'

const AdminDashboard = ({ data }) => {
  const stats = [
    {
      icon: UserIcon,
      value: data.totalEmployees,
      label: "Total Employees",
      description: "Active workforce",
    },
    {
      icon: Building2,
      value: data.totalDepartments,
      label: "Departments",
      description: "Organization units",
    },
    {
      icon: CalendarIcon,
      value: data.todayAttendance,
      label: "Today's Attendance",
      description: "Checked in today",
    },
    {
      icon: FileTextIcon   ,
      value: data.pendingLeaves,
      label: "Pending Leaves",
      description: "Awaiting approval",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900">
          Dashboard
        </h1>
        <p className="text-slate-500 text-sm">
          Welcome back, Admin - here's your overview
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="card card-hover p-5 sm:p-6 relative overflow-hidden group flex items-center justify-between"
          >
            {/* Left bar */}
            <div className="absolute left-0 top-0 bottom-0 w-0.75 rounded-r-full bg-slate-300 group-hover:bg-indigo-500 transition" />

            {/* Content */}
            <div>
              <p className="text-sm font-medium text-slate-500">
                {s.label}
              </p>

              <p className="text-2xl font-bold text-slate-900 mt-1">
                {s.value} {/* ✅ FIXED */}
              </p>

              <p className="text-xs text-slate-400 mt-1">
                {s.description}
              </p>
            </div>

            {/* Icon */}
            <s.icon className="w-10 h-10 p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default AdminDashboard; 