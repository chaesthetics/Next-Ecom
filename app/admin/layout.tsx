import AdminNav from "@/components/AdminNav";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-full md:flex-row overflow-hidden bg-gray-50">
          <AdminNav />
          <div className="flex h-full w-full overflow-auto flex-col">
            <Breadcrumbs />
            {children}
          </div>
        </div>
    );
  }
