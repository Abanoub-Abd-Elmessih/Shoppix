import { AuthCarousel } from "@/components/shared/auth-carousel";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex min-h-screen">
      <div className="w-full lg:w-1/2 overflow-y-auto">{children}</div>
      <div className="hidden lg:block lg:w-1/2">
        <AuthCarousel />
      </div>
    </main>
  );
};

export default Layout;
