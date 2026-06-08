import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";
import {
  CalendarIcon,
  ChevronRightIcon,
  DollarSignIcon,
  FileTextIcon,
  LayoutGridIcon,
  LogOutIcon,
  MenuIcon,
  SettingsIcon,
  UserIcon,
  XIcon,
} from "lucide-react";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [userName, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setUserName(
      dummyProfileData.firstName + " " + dummyProfileData.lastName
    );
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // ✅ FIXED ROLE
  const role = " "; // change to "ADMIN" to test

  // ✅ FIXED NAV ITEMS
  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutGridIcon },

    ...(role === "ADMIN"
      ? [{ name: "Employees", href: "/employees", icon: UserIcon }]
      : [{ name: "Attendance", href: "/attendance", icon: CalendarIcon }]),

    { name: "Leave", href: "/leave", icon: FileTextIcon },
    { name: "Payslips", href: "/payslips", icon: DollarSignIcon },
    { name: "Setting", href: "/setting", icon: SettingsIcon },
  ];

  const handleLogout = () => {
    window.location.href = "/login";
  };

  const sidebarContent = (
    <div className="flex flex-col h-full">
      
      {/* Header */}
      <div className="px-5 pt-6 pb-5 border-b border-white/10">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <UserIcon className="text-white w-7 h-7" />
            <div>
              <p className="font-semibold text-[13px] text-white tracking-wide">
                Employee MS
              </p>
              <p className="text-[11px] text-slate-500 font-medium">
                Management System
              </p>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden text-slate-400 hover:text-white p-1"
          >
            <XIcon size={20} />
          </button>

        </div>
      </div>

      {/* Profile */}
      {userName && (
        <div className="px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            
            <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center ring-1 ring-white/10">
              <span className="text-slate-400 text-xs font-semibold">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>

            <div className="min-w-0">
              <p className="text-[13px] font-medium text-slate-200 truncate">
                {userName}
              </p>
              <p className="text-[11px] text-slate-500">
                {role === "ADMIN" ? "Administrator" : "Employee"}
              </p>
            </div>

          </div>
        </div>
      )}

      {/* Section Label */}
      <div className="px-5 pt-5 pb-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12] text-slate-500">
          Navigation
        </p>
      </div>

      {/* Nav + Scroll */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        <div className="flex-1 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                to={item.href}
                className="relative flex items-center gap-3 px-3 py-2 rounded-lg group"
              >
                {isActive && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-indigo-500 rounded-r-full"></div>
                )}

                <item.icon
                  className={`w-4 h-4 ${
                    isActive
                      ? "text-indigo-300"
                      : "text-slate-400 group-hover:text-slate-300"
                  }`}
                />

                <span className="flex-1 text-sm">{item.name}</span>

                {isActive && (
                  <ChevronRightIcon className="w-3.5 h-3.5 text-indigo-500/50" />
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Logout (Fixed Bottom) */}
      <div className="p-3 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full py-2.5 rounded-md text-[13px] font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition"
        >
          <LogOutIcon className="w-4 h-4" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10"
      >
        <MenuIcon size={20} />
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col h-full w-65 bg-linear-to-b from-slate-900 via-slate-900 to-slate-900 text-white border-r border-white/10">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white z-50 flex flex-col transform transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;