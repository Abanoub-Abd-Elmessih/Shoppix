import { AuthCarousel } from "@/components/shared/auth-carousel";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen flex">
      <div className="w-full lg:w-1/2">{children}</div>
      <div className="hidden lg:block lg:w-1/2">
        <AuthCarousel />
      </div>
    </main>
  );
};

export default Layout;
