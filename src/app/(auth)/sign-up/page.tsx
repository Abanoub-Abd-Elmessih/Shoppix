import { SignupForm } from "@/components/signupForm";


export const metadata = {
  title: "Register",
};

const SignUp = () => {


  return (
    <section className="h-screen flex flex-col justify-center items-center px-4">
      {/* Welcome Text */}
      <div className="text-center mb-3">
        <h2 className="text-3xl lg:text-4xl tracking-wide mb-2">Welcome to Shoppix !</h2>
        <p className="text-gray-400 text-xl lg:text-lg">Create a new account</p>
      </div>

      {/* Form */}
      <SignupForm/>
    </section>
  );
};

export default SignUp;
