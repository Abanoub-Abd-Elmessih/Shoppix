import { SigninForm } from "@/components/shared/auth/signinForm";

export const metadata = {
  title: "Login",
};

const SignIn = () => {
  return (
    <section className="h-full flex flex-col justify-center items-center py-10">
      {/* Welcome Text */}
      <div className="text-center mb-3">
        <h2 className="text-3xl lg:text-4xl tracking-wide mb-2">
          Welcome Back to Shoppix.
        </h2>
        <p className="text-gray-400 text-xl lg:text-lg">
          Please log in or sign up to continue using our app.
        </p>
      </div>

      {/* Form */}
      <SigninForm />
    </section>
  );
};
export default SignIn;
