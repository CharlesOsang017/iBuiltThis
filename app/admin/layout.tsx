import { Loader } from "lucide-react";
import { Suspense } from "react";
import { Toaster } from "sonner";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <Loader className="animate-spin size-8 text-primary" />
          </div>
        }
      >
        {children}
      </Suspense>
      <Toaster />
    </>
  );
}
