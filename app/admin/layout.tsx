import AdminNav from "@/components/AdminNav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex-grow">
        <div className="flex h-full md:flex-row md:overflow-hidden">
          <AdminNav />
          {children}
        </div>
      </div>
    );
  }
