import Link from "next/link";
import { ReactNode } from "react";
import {
  LayoutDashboard,
  IceCream,
  Cake,
  Milk,
  Star,
  Package,
  Settings,
  LogOut,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white shadow-lg border-r">
        <div className="p-6 border-b">
          <h1 className="text-3xl font-bold text-pink-600">
            Cream Bite
          </h1>

          <p className="text-sm text-gray-500">
            Admin Panel
          </p>
        </div>

        <nav className="p-4 space-y-2">
          <MenuItem href="/admin/dashboard" icon={<LayoutDashboard size={20} />}>
            Dashboard
          </MenuItem>

          <MenuItem href="/admin/products" icon={<IceCream size={20} />}>
            Products
          </MenuItem>

          <MenuItem href="/admin/waffles" icon={<Cake size={20} />}>
            Waffles
          </MenuItem>

          <MenuItem href="/admin/shakes" icon={<Milk size={20} />}>
            Thick Shakes
          </MenuItem>

          <MenuItem href="/admin/reviews" icon={<Star size={20} />}>
            Reviews
          </MenuItem>

          <MenuItem href="/admin/orders" icon={<Package size={20} />}>
            Orders
          </MenuItem>

          <MenuItem href="/admin/settings" icon={<Settings size={20} />}>
            Settings
          </MenuItem>

          <MenuItem href="/admin/logout" icon={<LogOut size={20} />}>
            Logout
          </MenuItem>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1">
        <header className="bg-white shadow-sm px-8 py-5">
          <h2 className="text-2xl font-bold text-gray-800">
            Cream Bite Admin Dashboard
          </h2>
        </header>

        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}

function MenuItem({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-pink-50 hover:text-pink-600 transition"
    >
      {icon}
      <span className="font-medium">{children}</span>
    </Link>
  );
}